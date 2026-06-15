require("ts-node/register");

const fs = require("fs");
const path = require("path");
const { MongoClient, Binary } = require("mongodb");
const { newsArticles } = require("../data/news.ts");
const { boutiqueItems } = require("../data/boutique.ts");
const { boutiqueCategories } = require("../data/boutiqueCategories.ts");
const { products } = require("../data/products.ts");
const { services } = require("../data/services.ts");
const { newsCategories } = require("../data/newsCategories.ts");
const { poles } = require("../data/poles.ts");

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = line.split("=");
    const value = rest.join("=").trim();
    if (key && value && !process.env[key]) {
      process.env[key] = value.replace(/^"|"$/g, "");
    }
  }
}

function ensureEnv() {
  const root = path.resolve(__dirname, "..");
  loadEnvFile(path.join(root, ".env.local"));
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  if (!uri || !dbName) {
    throw new Error("Missing MONGODB_URI or MONGODB_DB in .env.local or environment variables.");
  }
  return { uri, dbName };
}

function normalizeDocument(doc, idKey) {
  const id = idKey === "slug" ? doc.slug : doc.id;
  return {
    ...doc,
    _id: id,
    createdAt: doc.createdAt || new Date().toISOString(),
    updatedAt: doc.updatedAt || doc.createdAt || new Date().toISOString(),
  };
}

function normalizeImageId(imagePath) {
  const relative = imagePath.replace(/^\//, "").replace(/\.[^.]+$/, "");
  return relative.replace(/[\/\\]/g, "-");
}

function getBoutiqueCategoryForItem(item) {
  const mapping = {
    water: { categoryId: "water-solutions", subcategoryId: "filters" },
    air: { categoryId: "water-solutions", subcategoryId: "air-treatment" },
    "solar-pv": { categoryId: "energy-systems", subcategoryId: "pv" },
    power: { categoryId: "energy-systems", subcategoryId: "power-electronics" },
    storage: { categoryId: "energy-systems", subcategoryId: "storage" },
    gas: { categoryId: "safety-equipment", subcategoryId: "gas-detection" },
    cctv: { categoryId: "safety-equipment", subcategoryId: "cctv" },
    detection: { categoryId: "safety-equipment", subcategoryId: "radiation" },
    dosimetry: { categoryId: "safety-equipment", subcategoryId: "radiation" },
    radioprotection: { categoryId: "safety-equipment", subcategoryId: "radiation" },
    iot: { categoryId: "digital-automation", subcategoryId: "iot" },
    scada: { categoryId: "digital-automation", subcategoryId: "scada" },
    simulation: { categoryId: "digital-automation", subcategoryId: "simulation" },
    coaching: { categoryId: "training-solutions", subcategoryId: "hse" },
    elearning: { categoryId: "training-solutions", subcategoryId: "elearning" },
    nuclear: { categoryId: "training-solutions", subcategoryId: "simulation" },
  };
  if (item.domainId && mapping[item.domainId]) {
    return mapping[item.domainId];
  }
  if (item.poleId === "training") {
    return { categoryId: "training-solutions", subcategoryId: "hse" };
  }
  return undefined;
}

function assignBoutiqueCategoryFields(item) {
  const mapped = getBoutiqueCategoryForItem(item);
  if (!mapped) return item;
  return {
    ...item,
    boutiqueCategoryId: item.boutiqueCategoryId || mapped.categoryId,
    boutiqueSubcategoryId: item.boutiqueSubcategoryId || mapped.subcategoryId,
  };
}

function findPublicImageFilePath(imagePath) {
  const root = path.resolve(__dirname, "..", "public");
  if (!fs.existsSync(root)) {
    return null;
  }

  const normalized = imagePath.replace(/^\//, "");
  const direct = path.join(root, normalized);
  if (fs.existsSync(direct)) {
    return direct;
  }

  const basename = path.basename(normalized);
  const basenameCandidate = path.join(root, basename);
  if (fs.existsSync(basenameCandidate)) {
    return basenameCandidate;
  }

  return findFileRecursive(root, basename);
}

function findFileRecursive(directory, fileName) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isFile() && entry.name === fileName) {
      return entryPath;
    }
    if (entry.isDirectory()) {
      const found = findFileRecursive(entryPath, fileName);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

async function saveImage(db, imagePath) {
  const filePath = findPublicImageFilePath(imagePath);
  if (!filePath) {
    console.warn(`Image not found in public/: ${imagePath}`);
    return undefined;
  }

  const buffer = fs.readFileSync(filePath);
  const imageId = normalizeImageId(imagePath);
  const contentType = getContentType(filePath);

  await db.collection("images").replaceOne(
    { _id: imageId },
    {
      _id: imageId,
      filename: imagePath,
      contentType,
      data: new Binary(buffer),
      createdAt: new Date(),
    },
    { upsert: true }
  );

  return imageId;
}

async function normalizeImages(items, db) {
  const imageUploads = new Map();

  return Promise.all(
    items.map(async (item) => {
      const normalizedItem = { ...item };

      if (normalizedItem.image && typeof normalizedItem.image === "string") {
        if (!imageUploads.has(normalizedItem.image)) {
          imageUploads.set(normalizedItem.image, saveImage(db, normalizedItem.image));
        }
        const imageId = await imageUploads.get(normalizedItem.image);
        if (imageId) {
          normalizedItem.imageId = imageId;
        }
      }

      if (Array.isArray(normalizedItem.imageGallery)) {
        normalizedItem.galleryImageIds = [];
        for (const galleryImage of normalizedItem.imageGallery) {
          if (typeof galleryImage === "string") {
            if (!imageUploads.has(galleryImage)) {
              imageUploads.set(galleryImage, saveImage(db, galleryImage));
            }
            const galleryImageId = await imageUploads.get(galleryImage);
            if (galleryImageId) {
              normalizedItem.galleryImageIds.push(galleryImageId);
            }
          }
        }
      }

      return normalizedItem;
    })
  );
}

async function seedCollection(db, name, items, idKey = "slug", reset = false) {
  const collection = db.collection(name);
  if (reset) {
    await collection.deleteMany({});
    console.log(`Cleared collection ${name}`);
  }

  if (!items.length) {
    console.log(`No documents to seed for ${name}`);
    return;
  }

  const operations = items.map((item) => {
    const document = normalizeDocument(item, idKey);
    return {
      replaceOne: {
        filter: { _id: document._id },
        replacement: document,
        upsert: true,
      },
    };
  });

  await collection.bulkWrite(operations, { ordered: false });
  console.log(`Seeded ${items.length} documents into ${name}`);
}

async function main() {
  const { uri, dbName } = ensureEnv();
  const reset = process.argv.includes("--reset");
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  console.log(`Seeding MongoDB database: ${dbName}`);
  if (reset) {
    console.log("Reset mode enabled: existing documents will be replaced.");
    await Promise.all([
      db.collection("news").deleteMany({}),
      db.collection("products").deleteMany({}),
      db.collection("services").deleteMany({}),
      db.collection("boutique").deleteMany({}),
      db.collection("poles").deleteMany({}),
      db.collection("newsCategories").deleteMany({}),
      db.collection("images").deleteMany({}),
      db.collection("entrepriseInfo").deleteMany({}),
    ]);
  }

  const normalizedNews = await normalizeImages(newsArticles, db);
  const normalizedProducts = await normalizeImages(products, db);
  const normalizedServices = await normalizeImages(services, db);
  const normalizedBoutique = await normalizeImages(boutiqueItems, db);
  const normalizedBoutiqueWithCategory = normalizedBoutique.map(assignBoutiqueCategoryFields);

  await seedCollection(db, "news", normalizedNews, "slug", reset);
  await seedCollection(db, "products", normalizedProducts, "slug", reset);
  await seedCollection(db, "services", normalizedServices, "slug", reset);
  await seedCollection(db, "boutique", normalizedBoutiqueWithCategory, "slug", reset);
  await seedCollection(db, "boutiqueCategories", boutiqueCategories, "slug", reset);
  await seedCollection(db, "poles", poles, "slug", reset);
  await seedCollection(db, "newsCategories", newsCategories, "id", reset);

  const entrepriseInfo = {
    id: "main",
    email: "contact@atlantic-dunes.ma",
    phones: ["+212 6 00 64 43 60", "+212 661 258 388"],
    fax: "+212 539 311875",
    addressLines: ["45 Rue Ahmed Chaouki appt n°1", "Centre-Ville Tanger, Maroc"],
  };

  await seedCollection(db, "entrepriseInfo", [entrepriseInfo], "id", reset);

  console.log("MongoDB seeding complete.");
  await client.close();
}

main().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
