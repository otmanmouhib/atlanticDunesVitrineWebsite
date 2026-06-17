export type ContentStatus = "draft" | "published" | "archived";

export type SeoMetadata = {
  title?: string;
  description?: string;
};

export type TaxonomyItem = {
  id: string;
  label: string;
  description: string;
  group?: string;
};

export type AuditFields = {
  createdAt?: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
  status?: ContentStatus;
};

export type CatalogEntity = {
  slug: string;
  title: string;
  shortDescription: string;
  poleId: string;
  domainId: string;
  status?: ContentStatus;
  tags?: string[];
  seo?: SeoMetadata;
  meta?: {
    featured?: boolean;
    priority?: number;
  };
};

export type CollectionSchema = {
  name: string;
  description: string;
  entityType: string;
  fields: Array<{ name: string; type: string; required: boolean; description?: string }>;
};

export const collectionSchemas: CollectionSchema[] = [
  {
    name: "services",
    description: "Service offerings with structured delivery, methodology and category references.",
    entityType: "Service",
    fields: [
      { name: "slug", type: "string", required: true },
      { name: "title", type: "string", required: true },
      { name: "poleId", type: "string", required: true },
      { name: "domainId", type: "string", required: true },
      { name: "methodology", type: "string[]", required: false },
      { name: "deliverable", type: "string", required: false },
      { name: "status", type: "string", required: false },
      { name: "tags", type: "string[]", required: false },
    ],
  },
  {
    name: "products",
    description: "Product catalog items with SKU, pricing, availability and taxonomy.",
    entityType: "Product",
    fields: [
      { name: "slug", type: "string", required: true },
      { name: "title", type: "string", required: true },
      { name: "sku", type: "string", required: false },
      { name: "unitPrice", type: "number", required: false },
      { name: "currency", type: "string", required: false },
      { name: "poleId", type: "string", required: true },
      { name: "domainId", type: "string", required: true },
    ],
  },
  {
    name: "boutique",
    description: "Boutique inventory with product details, stock metadata and gallery assets.",
    entityType: "BoutiqueItem",
    fields: [
      { name: "slug", type: "string", required: true },
      { name: "title", type: "string", required: true },
      { name: "shortDescription", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "details", type: "string[]", required: true },
      { name: "specs", type: "object[]", required: true },
      { name: "price", type: "number", required: true },
      { name: "currency", type: "string", required: true },
      { name: "availability", type: "string", required: true },
      { name: "inStock", type: "boolean", required: true },
      { name: "inventoryCount", type: "number", required: false },
      { name: "sku", type: "string", required: false },
      { name: "featured", type: "boolean", required: false },
      { name: "status", type: "string", required: false },
      { name: "tags", type: "string[]", required: false },
      { name: "image", type: "string", required: false },
      { name: "gallery", type: "string[]", required: false },
      { name: "boutiqueCategoryId", type: "string", required: false },
      { name: "boutiqueSubcategoryId", type: "string", required: false },
      { name: "poleId", type: "string", required: false },
      { name: "domainId", type: "string", required: false },
    ],
  },
  {
    name: "news",
    description: "News and journal entries with author, categoryId taxonomy references and publication metadata.",
    entityType: "NewsArticle",
    fields: [
      { name: "slug", type: "string", required: true },
      { name: "title", type: "string", required: true },
      { name: "publishedAt", type: "string", required: true },
      { name: "categoryId", type: "string", required: true },
      { name: "category", type: "string", required: false },
      { name: "author", type: "string", required: false },
      { name: "tags", type: "string[]", required: false },
    ],
  },
];
