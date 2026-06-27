require("ts-node/register");

const path = require("path");
const { MongoClient, GridFSBucket } = require("mongodb");

function loadEnvFile(envPath) {
  const fs = require("fs");
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

function toBuffer(data) {
  if (!data) return null;
  if (Buffer.isBuffer(data)) return data;
  if (data.buffer) return Buffer.from(data.buffer);
  if (Array.isArray(data)) return Buffer.from(data);
  return null;
}

function getContentType(doc) {
  if (doc.contentType) return doc.contentType;
  if (doc.metadata?.contentType) return doc.metadata.contentType;
  return "application/octet-stream";
}

async function migrateImagesToGridFS() {
  const { uri, dbName } = ensureEnv();
  const client = new MongoClient(uri);
  await client.connect();

  try {
    const db = client.db(dbName);
    const legacyImages = await db.collection("images").find({}).toArray();
    const bucket = new GridFSBucket(db, { bucketName: "images" });
    let migrated = 0;
    let skipped = 0;

    for (const doc of legacyImages) {
      const imageId = String(doc._id);
      const existing = await db.collection("images.files").findOne({
        $or: [{ filename: imageId }, { "metadata.legacyId": imageId }],
      });
      if (existing) {
        await bucket.delete(existing._id);
      }

      const buffer = toBuffer(doc.data);
      if (!buffer) {
        skipped += 1;
        continue;
      }

      const uploadStream = bucket.openUploadStream(imageId, {
        metadata: {
          contentType: getContentType(doc),
          source: doc.filename || doc.label || imageId,
          legacyId: String(doc._id),
        },
      });

      await new Promise((resolve, reject) => {
        uploadStream.end(buffer);
        uploadStream.on("finish", resolve);
        uploadStream.on("error", reject);
      });

      migrated += 1;
    }

    console.log(JSON.stringify({ legacyCount: legacyImages.length, migrated, skipped }, null, 2));
  } finally {
    await client.close();
  }
}

migrateImagesToGridFS().catch((error) => {
  console.error(error);
  process.exit(1);
});