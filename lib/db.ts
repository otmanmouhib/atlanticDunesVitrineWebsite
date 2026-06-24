import clientPromise from "./mongodb";
import { GridFSBucket } from "mongodb";
import type { Document } from "mongodb";
import { poles as staticPoles } from "../data/poles";
import { products as staticProducts } from "../data/products";
import { services as staticServices } from "../data/services";
import { boutiqueCategories as staticBoutiqueCategories } from "../data/boutiqueCategories";

export type DomainTag = {
  slug: string;
  label: string;
  description: string;
};

export type Pole = {
  slug: string;
  label: string;
  shortDescription: string;
  domains?: DomainTag[];
  productDomains?: DomainTag[];
  serviceDomains?: DomainTag[];
};

export type NewsCategory = {
  id: string;
  label: string;
  description: string;
  subcategories: Array<{ slug: string; label: string; description?: string }>;
};

export type BoutiqueCategory = {
  slug: string;
  label: string;
  description: string;
  subcategories: Array<{ slug: string; label: string; description?: string }>;
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
  price: number;
  currency: string;
  availability: string;
  inStock: boolean;
  inventoryCount?: number;
  sku?: string;
  featured?: boolean;
  status?: string;
  tags?: string[];
  image?: string;
  gallery?: string[];
  boutiqueCategoryId?: string;
  boutiqueSubcategoryId?: string;
  poleId?: string;
  domainId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  categoryId: string;
  subcategoryId?: string;
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

type MongoDocument = {
  _id?: unknown;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

function cleanDocument<T extends MongoDocument>(doc: T): Omit<T, "_id"> {
  const { _id, ...rest } = doc;
  return {
    ...rest,
    createdAt: rest.createdAt instanceof Date ? rest.createdAt.toISOString() : rest.createdAt,
    updatedAt: rest.updatedAt instanceof Date ? rest.updatedAt.toISOString() : rest.updatedAt,
  } as Omit<T, "_id">;
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

export function getNewsSubcategoryLabel(subcategoryId: string, categories: NewsCategory[]) {
  for (const category of categories) {
    const subcategory = category.subcategories.find((item) => item.slug === subcategoryId);
    if (subcategory) return subcategory.label;
  }
  return subcategoryId;
}

export async function getPoles() {
  const db = await getDb();
  const rawPoles = await db.collection<Pole & MongoDocument>("poles").find().toArray();
  return rawPoles.map((pole) => cleanDocument(pole) as Pole);
}

function getPoleDomains(pole: Pole, kind: "all" | "product" | "service" = "all") {
  const domains: DomainTag[] = [];
  const push = (items?: DomainTag[]) => {
    for (const item of items ?? []) {
      if (!domains.some((domain) => domain.slug === item.slug)) {
        domains.push(item);
      }
    }
  };

  if (kind === "product") {
    push(pole.productDomains ?? pole.domains);
  } else if (kind === "service") {
    push(pole.serviceDomains ?? pole.domains);
  } else {
    push(pole.domains);
    push(pole.productDomains);
    push(pole.serviceDomains);
  }

  return domains;
}

function getDomainsFromPoles(poles: Pole[], kind: "all" | "product" | "service" = "all") {
  const domainMap = new Map<string, DomainTag>();
  for (const pole of poles) {
    for (const domain of getPoleDomains(pole, kind)) {
      if (!domainMap.has(domain.slug)) {
        domainMap.set(domain.slug, domain);
      }
    }
  }
  return Array.from(domainMap.values());
}

export async function getDomains(kind: "all" | "product" | "service" = "all") {
  const poles = await getPoles();
  return getDomainsFromPoles(poles, kind);
}

export async function getNewsCategories() {
  const db = await getDb();
  const rawCategories = await db.collection<NewsCategory & MongoDocument>("newsCategories").find().toArray();
  return rawCategories.map((category) => cleanDocument(category) as NewsCategory);
}

export async function getServices(pole?: string, domain?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (pole) filter.poleId = pole;
  if (domain) filter.domainId = domain;
  const rawServices = await db.collection<Service & MongoDocument>("services").find(filter).toArray();
  return rawServices.map((service) => cleanDocument(service) as Service);
}

export async function getServiceBySlug(slug: string) {
  const db = await getDb();
  const service = await db.collection<Service & MongoDocument>("services").findOne({ slug });
  return service ? (cleanDocument(service) as Service) : null;
}

export async function getProducts(pole?: string, domain?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (pole) filter.poleId = pole;
  if (domain) filter.domainId = domain;
  const rawProducts = await db.collection<Product & MongoDocument>("products").find(filter).toArray();
  return rawProducts.map((product) => cleanDocument(product) as Product);
}

export async function getProductBySlug(slug: string) {
  const db = await getDb();
  const product = await db.collection<Product & MongoDocument>("products").findOne({ slug });
  return product ? (cleanDocument(product) as Product) : null;
}

export async function getBoutiqueItems(category?: string, subcategory?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (category) filter.boutiqueCategoryId = category;
  if (subcategory) filter.boutiqueSubcategoryId = subcategory;
  return db.collection<BoutiqueItem>("boutique").find(filter).toArray();
}

export async function getBoutiqueItemBySlug(slug: string) {
  const db = await getDb();
  const item = await db.collection<BoutiqueItem & MongoDocument>("boutique").findOne({ slug });
  return item ? (cleanDocument(item) as BoutiqueItem) : null;
}

export async function getBoutiqueCategories() {
  const db = await getDb();
  const rawCategories = await db.collection<BoutiqueCategory & MongoDocument>("boutiqueCategories").find().toArray();
  return rawCategories.map((category) => cleanDocument(category) as BoutiqueCategory);
}

export function getBoutiqueCategoryLabel(categoryId: string, categories: BoutiqueCategory[]) {
  return categories.find((item) => item.slug === categoryId)?.label ?? categoryId;
}

export function getBoutiqueSubcategoryLabel(subcategoryId: string, categories: BoutiqueCategory[]) {
  for (const category of categories) {
    const subcategory = category.subcategories.find((item) => item.slug === subcategoryId);
    if (subcategory) return subcategory.label;
  }
  return subcategoryId;
}

export async function getNewsArticles(category?: string, subcategory?: string) {
  const db = await getDb();
  const filter: Document = {};
  if (category) filter.categoryId = category;
  if (subcategory) filter.subcategoryId = subcategory;
  const rawArticles = await db.collection<NewsArticle & MongoDocument>("news").find(filter).sort({ publishedAt: -1 }).toArray();
  return rawArticles.map((article) => cleanDocument(article) as NewsArticle);
}

export async function getNewsArticleBySlug(slug: string) {
  const db = await getDb();
  const article = await db.collection<NewsArticle & MongoDocument>("news").findOne({ slug });
  return article ? (cleanDocument(article) as NewsArticle) : null;
}

export async function getEnterpriseInfo() {
  const db = await getDb();
  const info = await db.collection<EnterpriseInfo & MongoDocument>("entrepriseInfo").findOne({ _id: "main" } as any);
  return info ? (cleanDocument(info) as EnterpriseInfo) : null;
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
  let services = null;
  let products = null;
  let boutiqueCategories = null;
  let poles = null;

  try {
    [services, products, boutiqueCategories, poles] = await Promise.all([
      getServices(),
      getProducts(),
      getBoutiqueCategories(),
      getPoles(),
    ]);

    if (!services?.length || !products?.length || !boutiqueCategories?.length || !poles?.length) {
      throw new Error('MongoDB menu collections are empty or incomplete.');
    }
  } catch (error) {
    console.warn("Failed to load menu data from MongoDB. Falling back to static content.", error);
    services = staticServices;
    products = staticProducts;
    boutiqueCategories = staticBoutiqueCategories;
    poles = staticPoles;
  }

  const domains = getDomainsFromPoles(poles, "all");

  const build = (domainKind: "product" | "service") => {
    return poles
      .map((pole) => {
        const domains = getPoleDomains(pole, domainKind);
        if (!domains.length) return null;
        return {
          pole: { slug: pole.slug, label: pole.label },
          domains: domains.map((domain) => ({ slug: domain.slug, label: domain.label })),
        };
      })
      .filter((entry): entry is MenuCategory => entry !== null);
  };

  return {
    serviceCategories: build("service"),
    productCategories: build("product"),
    boutiqueCategories,
    poles,
    domains,
  };
}
