import clientPromise from "./mongodb";
import { GridFSBucket } from "mongodb";
import type { Document } from "mongodb";

export type Pole = {
  slug: string;
  label: string;
  shortDescription: string;
};

export type DomainTag = {
  slug: string;
  label: string;
  description: string;
};

export type NewsCategory = {
  id: string;
  label: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  methodology: string[];
  deliverable: string;
  poleId: string;
  domainId: string;
  status?: string;
  featured?: boolean;
  tags?: string[];
  imageId?: string;
};

export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  performance: string;
  poleId: string;
  domainId: string;
  pdfLink: string;
  imageId?: string;
  galleryImageIds?: string[];
  unitPrice?: number;
  currency?: string;
};

export type BoutiqueItem = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  details: string[];
  specs: { label: string; value: string }[];
  price: string;
  availability: string;
  inStock: boolean;
  poleId: string;
  domainId: string;
  imageId?: string;
  galleryImageIds?: string[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  categoryId: string;
  category?: string;
  imageId?: string;
  summary: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  status?: string;
  content: string[];
};

export type EnterpriseInfo = {
  id: string;
  email: string;
  phones: string[];
  fax?: string;
  addressLines: string[];
};

type MenuCategory = {
  pole: { slug: string; label: string };
  domains: Array<{ slug: string; label: string }>;
};

async function getDb() {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("MONGODB_DB is not defined");
  }
  return client.db(dbName);
}

function getLabelFromList(slug: string, items: Array<{ slug: string; label: string }>, fallback?: string) {
  return items.find((item) => item.slug === slug)?.label ?? fallback ?? slug;
}

export function getPoleLabel(poleId: string, poles: Pole[]) {
  return getLabelFromList(poleId, poles, poleId);
}

export function getDomainLabel(domainId: string, domainTags: DomainTag[]) {
  return getLabelFromList(domainId, domainTags, domainId);
}

export function getNewsCategoryLabel(categoryId: string, categories: NewsCategory[]) {
  const category = categories.find((item) => item.id === categoryId);
  return category?.label ?? categoryId;
}

export async function getPoles() {
  const db = await getDb();
  return db.collection<Pole>("poles").find().toArray();
}

export async function getDomains() {
  const db = await getDb();
  return db.collection<DomainTag>("domains").find().toArray();
}

export async function getNewsCategories() {
  const db = await getDb();
  return db.collection<NewsCategory>("newsCategories").find().toArray();
}

export async function getServices(pole?: string, domain?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (pole) filter.poleId = pole;
  if (domain) filter.domainId = domain;
  return db.collection<Service>("services").find(filter).toArray();
}

export async function getServiceBySlug(slug: string) {
  const db = await getDb();
  return db.collection<Service>("services").findOne({ slug });
}

export async function getProducts(pole?: string, domain?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (pole) filter.poleId = pole;
  if (domain) filter.domainId = domain;
  return db.collection<Product>("products").find(filter).toArray();
}

export async function getProductBySlug(slug: string) {
  const db = await getDb();
  return db.collection<Product>("products").findOne({ slug });
}

export async function getBoutiqueItems(pole?: string, domain?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (pole) filter.poleId = pole;
  if (domain) filter.domainId = domain;
  return db.collection<BoutiqueItem>("boutique").find(filter).toArray();
}

export async function getBoutiqueItemBySlug(slug: string) {
  const db = await getDb();
  return db.collection<BoutiqueItem>("boutique").findOne({ slug });
}

export async function getNewsArticles() {
  const db = await getDb();
  return db.collection<NewsArticle>("news").find().sort({ publishedAt: -1 }).toArray();
}

export async function getNewsArticleBySlug(slug: string) {
  const db = await getDb();
  return db.collection<NewsArticle>("news").findOne({ slug });
}

export async function getEnterpriseInfo() {
  const db = await getDb();
  return db.collection<EnterpriseInfo & { _id: string } & { _id: string }>("entrepriseInfo").findOne({ _id: "main" });
}

export async function getImageById(imageId: string) {
  const db = await getDb();
  return db.collection<{ _id: string; filename: string; contentType?: string; data: Buffer }>("images").findOne({ _id: imageId });
}

async function getGridFSBucket() {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("MONGODB_DB is not defined");
  }
  const db = client.db(dbName);
  return new GridFSBucket(db, { bucketName: "images" });
}

export async function getImageStreamById(imageId: string) {
  const bucket = await getGridFSBucket();
  return bucket.openDownloadStreamByName(imageId);
}

export async function getImageMeta(imageId: string) {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("MONGODB_DB is not defined");
  }
  const db = client.db(dbName);
  return db.collection("images.files").findOne({ filename: imageId });
}

export async function storeImageBuffer(imageId: string, buffer: Buffer, contentType: string) {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("MONGODB_DB is not defined");
  }
  const db = client.db(dbName);
  const bucket = new GridFSBucket(db, { bucketName: "images" });
  const existing = await db.collection("images.files").findOne({ filename: imageId });
  if (existing) {
    await bucket.delete(existing._id);
  }
  const uploadStream = bucket.openUploadStream(imageId, {
    metadata: { contentType },
  });
  uploadStream.end(buffer);
  await new Promise<void>((resolve, reject) => {
    uploadStream.on("finish", () => resolve());
    uploadStream.on("error", (error) => reject(error));
  });
  return imageId;
}

export async function getMenuCategories() {
  const [services, products, boutique, poles, domains] = await Promise.all([
    getServices(),
    getProducts(),
    getBoutiqueItems(),
    getPoles(),
    getDomains(),
  ]);

  const build = (items: Array<{ poleId: string; domainId: string }>) => {
    return poles
      .map((pole) => {
        const domainIds = Array.from(new Set(items.filter((item) => item.poleId === pole.slug).map((item) => item.domainId)));
        if (!domainIds.length) return null;
        return {
          pole: { slug: pole.slug, label: pole.label },
          domains: domainIds.map((domainId) => ({ slug: domainId, label: getDomainLabel(domainId, domains) })),
        };
      })
      .filter((entry): entry is MenuCategory => entry !== null);
  };

  return {
    serviceCategories: build(services),
    productCategories: build(products),
    boutiqueCategories: build(boutique),
    poles,
    domains,
  };
}
