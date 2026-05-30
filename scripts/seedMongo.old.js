const fs = require("fs");
const path = require("path");
let clientPromise;
const { newsArticles } = require("../data/news.ts");
const { boutiqueItems } = require("../data/boutique.ts");
const { products } = require("../data/products.ts");
const { services } = require("../data/services.ts");
const { newsCategories } = require("../data/newsCategories.ts");
const { poles } = require("../data/poles.ts");
const { domainTags } = require("../data/domains.ts");
const { MongoClient, GridFSBucket } = require("mongodb");

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
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
    throw new Error(
      "Missing MONGODB_URI or MONGODB_DB. Set these in .env.local or as environment variables."
    );
  }
  return { dbName };
}

function getClientPromise() {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

function getContentTypeFromExtension(fileName) {
  const ext = path.extname(fileName).toLowerCase();
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

function findPublicImageFilePath(imagePath) {
  const root = path.resolve(__dirname, "..", "public");
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

async function uploadImageFile(imagePath, db) {
  const filePath = findPublicImageFilePath(imagePath);
  if (!filePath) {
    console.warn(`Image not found in public/ for ${imagePath}. Skipping upload.`);
    return undefined;
  }

  const imageBuffer = fs.readFileSync(filePath);
  const contentType = getContentTypeFromExtension(filePath);
  const bucket = new GridFSBucket(db, { bucketName: "images" });
  const imageId = path.basename(imagePath, path.extname(imagePath));

  const existing = await db.collection("images.files").findOne({ filename: imageId });
  if (existing) {
    await bucket.delete(existing._id);
  }

  const uploadStream = bucket.openUploadStream(imageId, {
    metadata: { contentType },
  });
  uploadStream.end(imageBuffer);

  await new Promise((resolve, reject) => {
    uploadStream.on("finish", resolve);
    uploadStream.on("error", reject);
  });

  return imageId;
}

async function normalizeImages(items, db) {
  return Promise.all(
    items.map(async (item) => {
      const normalizedItem = { ...item };
      if (normalizedItem.image && typeof normalizedItem.image === "string" && normalizedItem.image.startsWith("/")) {
        const imageId = await uploadImageFile(normalizedItem.image, db);
        if (imageId) {
          normalizedItem.imageId = imageId;
          delete normalizedItem.image;
        }
      }
      if (Array.isArray(normalizedItem.imageGallery)) {
        normalizedItem.galleryImageIds = [];
        for (const galleryImage of normalizedItem.imageGallery) {
          if (typeof galleryImage === "string" && galleryImage.startsWith("/")) {
            const galleryImageId = await uploadImageFile(galleryImage, db);
            if (galleryImageId) {
              normalizedItem.galleryImageIds.push(galleryImageId);
            }
          }
        }
        delete normalizedItem.imageGallery;
      }
      return normalizedItem;
    })
  );
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

async function seedCollection(db, name, items, idKey = "slug", reset = false) {
  const collection = db.collection(name);
  if (reset) {
    try {
      await collection.deleteMany({});
      console.log(`Cleared collection ${name}`);
    } catch (error) {
      console.warn(`Could not clear collection ${name}:`, error);
    }
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
  const { dbName } = ensureEnv();
  const reset = process.argv.includes("--reset");
  const client = await getClientPromise();
  const db = client.db(dbName);

  console.log(`Seeding MongoDB database: ${dbName}`);
  if (reset) {
    console.log("Reset mode enabled: existing documents will be replaced.");
  }

  const normalizedNews = await normalizeImages(newsArticles, db);
  const normalizedProducts = await normalizeImages(products, db);
  const normalizedServices = await normalizeImages(services, db);
  const normalizedBoutique = await normalizeImages(boutiqueItems, db);

  await seedCollection(db, "news", normalizedNews, "slug", reset);
  await seedCollection(db, "products", normalizedProducts, "slug", reset);
  await seedCollection(db, "services", normalizedServices, "slug", reset);
  await seedCollection(db, "boutique", normalizedBoutique, "slug", reset);
  await seedCollection(db, "poles", poles, "slug", reset);
  await seedCollection(db, "domains", domainTags, "slug", reset);
  await seedCollection(db, "newsCategories", newsCategories, "id", reset);

  console.log("MongoDB seeding complete.");
  await client.close();
}

main().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
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
    throw new Error(
      "Missing MONGODB_URI or MONGODB_DB. Set these in .env.local or as environment variables."
    );
  }
  return { dbName };
}

function getClientPromise() {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

function getContentTypeFromExtension(fileName) {
  const ext = path.extname(fileName).toLowerCase();
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

function findPublicImageFilePath(imagePath) {
  const root = path.resolve(__dirname, "..", "public");
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

  const found = findFileRecursive(root, basename);
  if (found) {
    return found;
  }

  return null;
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

async function uploadImageFile(imagePath, db) {
  const filePath = findPublicImageFilePath(imagePath);
  if (!filePath) {
    console.warn(`Image not found in public/ for ${imagePath}. Skipping upload.`);
    return undefined;
  }

  const imageBuffer = fs.readFileSync(filePath);
  const contentType = getContentTypeFromExtension(filePath);
  const bucket = new GridFSBucket(db, { bucketName: "images" });
  const imageId = path.basename(imagePath, path.extname(imagePath));

  const existing = await db.collection("images.files").findOne({ filename: imageId });
  if (existing) {
    await bucket.delete(existing._id);
  }

  const uploadStream = bucket.openUploadStream(imageId, {
    metadata: { contentType },
  });
  uploadStream.end(imageBuffer);

  await new Promise((resolve, reject) => {
    uploadStream.on("finish", resolve);
    uploadStream.on("error", reject);
  });

  return imageId;
}

async function normalizeImages(items, db) {
  return Promise.all(
    items.map(async (item) => {
      const normalizedItem = { ...item };

      if (normalizedItem.image && typeof normalizedItem.image === "string" && normalizedItem.image.startsWith("/")) {
        const imageId = await uploadImageFile(normalizedItem.image, db);
        if (imageId) {
          normalizedItem.imageId = imageId;
          delete normalizedItem.image;
        }
      }

      if (Array.isArray(normalizedItem.imageGallery)) {
        normalizedItem.galleryImageIds = [];
        for (const galleryImage of normalizedItem.imageGallery) {
          if (typeof galleryImage === "string" && galleryImage.startsWith("/")) {
            const galleryImageId = await uploadImageFile(galleryImage, db);
            if (galleryImageId) {
              normalizedItem.galleryImageIds.push(galleryImageId);
            }
          }
        }
        delete normalizedItem.imageGallery;
      }

      return normalizedItem;
    })
  );
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

async function seedCollection(db, name, items, idKey = "slug", reset = false) {
  const collection = db.collection(name);
  if (reset) {
    try {
      await collection.deleteMany({});
      console.log(`Cleared collection ${name}`);
    } catch (error) {
      console.warn(`Could not clear collection ${name}:`, error);
    }
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
  const { dbName } = ensureEnv();
  const reset = process.argv.includes("--reset");
  const client = await getClientPromise();
  const db = client.db(dbName);

  console.log(`Seeding MongoDB database: ${dbName}`);
  if (reset) {
    console.log("Reset mode enabled: existing documents will be replaced.");
  }

  const normalizedNews = await normalizeImages(newsArticles, db);
  const normalizedProducts = await normalizeImages(products, db);
  const normalizedServices = await normalizeImages(services, db);
  const normalizedBoutique = await normalizeImages(boutiqueItems, db);

  await seedCollection(db, "news", normalizedNews, "slug", reset);
  await seedCollection(db, "products", normalizedProducts, "slug", reset);
  await seedCollection(db, "services", normalizedServices, "slug", reset);
  await seedCollection(db, "boutique", normalizedBoutique, "slug", reset);
  await seedCollection(db, "poles", poles, "slug", reset);
  await seedCollection(db, "domains", domainTags, "slug", reset);
  await seedCollection(db, "newsCategories", newsCategories, "id", reset);

  console.log("MongoDB seeding complete.");
  await client.close();
}

main().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
