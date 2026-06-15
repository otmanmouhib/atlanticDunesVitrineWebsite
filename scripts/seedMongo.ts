import fs from "fs";
import path from "path";
import clientPromise from "../lib/mongodb";
import { storeImageBuffer } from "../lib/db";
import { newsArticles } from "../data/news";
import { boutiqueItems } from "../data/boutique";
import { products } from "../data/products";
import { services } from "../data/services";
import { newsCategories } from "../data/newsCategories";
import { poles } from "../data/poles";

function loadEnvFile(envPath: string) {
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

function normalizeDocument<T extends { slug?: string; id?: string; createdAt?: string; updatedAt?: string }>(doc: T, idKey: "slug" | "id") {
  const id = idKey === "slug" ? doc.slug : doc.id;
  return {
    ...doc,
    _id: id,
    createdAt: doc.createdAt ?? new Date().toISOString(),
    updatedAt: doc.updatedAt ?? doc.createdAt ?? new Date().toISOString(),
  };
}

function normalizeImageId(imagePath: string) {
  const relative = imagePath.replace(/^\//, "").replace(/\.[^.]+$/, "");
  return relative.replace(/[\/\\]/g, "-");
}

function findPublicImageFilePath(imagePath: string) {
  const root = path.join(process.cwd(), "public");
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

function findFileRecursive(directory: string, fileName: string): string | null {
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

async function uploadImageIfNeeded(imagePath: string) {
  const filePath = findPublicImageFilePath(imagePath);
  if (!filePath) {
    console.warn(`Image not found at ${imagePath}. Skipping upload.`);
    return undefined;
  }

  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = ext === ".png"
    ? "image/png"
    : ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : ext === ".webp"
        ? "image/webp"
        : ext === ".svg"
          ? "image/svg+xml"
          : "application/octet-stream";

  const imageId = normalizeImageId(imagePath);
  await storeImageBuffer(imageId, buffer, contentType);
  return imageId;
}

async function normalizeImages<T extends { image?: string; imageGallery?: string[] }>(items: T[]) {
  const imageUploads = new Map<string, Promise<string | undefined>>();
  for (const item of items) {
    const target = item as T & { imageId?: string; galleryImageIds?: string[] };
    if (target.image) {
      if (!imageUploads.has(target.image)) {
        imageUploads.set(target.image, uploadImageIfNeeded(target.image));
      }
      const imageId = await imageUploads.get(target.image)!;
      if (imageId) {
        target.imageId = imageId;
      }
      delete target.image;
    }
    if (target.imageGallery) {
      target.galleryImageIds = [];
      for (const galleryImage of target.imageGallery) {
        if (!imageUploads.has(galleryImage)) {
          imageUploads.set(galleryImage, uploadImageIfNeeded(galleryImage));
        }
        const galleryImageId = await imageUploads.get(galleryImage)!;
        if (galleryImageId) {
          target.galleryImageIds.push(galleryImageId);
        }
      }
      delete target.imageGallery;
    }
  }
}

async function seedCollection<T extends { slug?: string; id?: string; createdAt?: string; updatedAt?: string }>(
  db: any,
  name: string,
  items: T[],
  idKey: "slug" | "id" = "slug",
  reset = false
) {
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
  const client = await clientPromise;
  const db = client.db(dbName);

  console.log(`Seeding MongoDB database: ${dbName}`);
  if (reset) {
    console.log("Reset mode enabled: existing documents will be replaced.");
  }

  await Promise.all([
    normalizeImages(newsArticles),
    normalizeImages(products),
    normalizeImages(services),
    normalizeImages(boutiqueItems),
  ]);

  await seedCollection(db, "news", newsArticles, "slug", reset);
  await seedCollection(db, "products", products, "slug", reset);
  await seedCollection(db, "services", services, "slug", reset);
  await seedCollection(db, "boutique", boutiqueItems, "slug", reset);
  await seedCollection(db, "poles", poles, "slug", reset);
  await seedCollection(db, "newsCategories", newsCategories, "id", reset);

  console.log("MongoDB seeding complete.");
  await client.close();
}

main().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
