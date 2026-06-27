# Atlantic Dunes Website Technical Documentation

**Version:** 0.1.0-alpha  
**Project:** Atlantic Dunes Website  
**Audience:** Technical leadership, client stakeholders, developers, operators  
**Language:** English and French terminology are both used in the product; the user-facing website is primarily in French.

## 1. Purpose

This document describes the Atlantic Dunes website as delivered in version 0.1.0-alpha. It covers the website structure, routing, content model, database structure, media handling, API behavior, and operational setup so both technical decision-makers and the client can understand what exists in this release and how it works.

## 2. Product Overview

Atlantic Dunes is a corporate brochure website for an engineering and industrial services company focused on:

- Environmental and industrial treatment solutions
- Energy and sustainability services
- Industrial safety and compliance
- Electrical engineering
- Digital and industrial supervision
- Nuclear and radioprotection topics
- Training and coaching

The site combines static marketing pages with dynamic catalog pages backed by MongoDB. It supports a contact form, image delivery via GridFS, dynamic catalog filtering, and structured content collections for services, products, boutique items, news, and taxonomy.

## 3. Release Scope: 0.1.0-alpha

This alpha release includes:

- Home page and core institutional pages
- Dynamic services, products, boutique, and news sections
- Contact form with MongoDB persistence
- MongoDB-backed content retrieval with static fallback for menu data
- Image serving via MongoDB GridFS
- Seed scripts to populate the database from local content files

This release does not yet present a finalized CMS or editorial admin interface. Some public sections such as references and certifications are present as informational pages but are still marked as in preparation.

## 4. Website Structure

### 4.1 Application Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- MongoDB for persistent data

### 4.2 Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with value proposition and calls to action |
| `/about` | Company overview |
| `/services` | Services catalog with filtering by pole and domain |
| `/services/[slug]` | Service detail page |
| `/products` | Products catalog with filtering by pole and domain |
| `/products/[slug]` | Product detail page |
| `/boutique` | Boutique catalog |
| `/boutique/[slug]` | Boutique item detail page |
| `/news` | News and announcements list |
| `/news/[slug]` | News article detail page |
| `/contact` | Contact page and form |
| `/references` | References placeholder page |
| `/certifications` | Certifications placeholder page |

### 4.3 Global Layout

The root layout renders:

- A sticky header with nested navigation menus
- A main content area
- A footer with contact details and domain links

The layout loads global metadata and fetches menu categories, enterprise contact information, and news categories at runtime.

### 4.4 Navigation Model

The header groups content by business category and taxonomy:

- Services by pole and domain
- Products by pole and domain
- Boutique by category and subcategory
- News by category and subcategory
- Institutional links for references, certifications, and company information

Breadcrumb-style context is derived from the current pathname and query parameters for catalog pages.

## 5. Frontend Content Model

The website content is organized around a taxonomy of poles and domains.

### 5.1 Poles

The current pole structure includes:

- `env` - Environment & Industrial Treatment
- `energy` - Energy & Sustainable Development
- `safety` - Safety & Compliance
- `elec` - Electrical Engineering
- `digital` - Digital & AI
- `nuclear` - Nuclear & Radioprotection
- `training` - Training & Coaching

### 5.2 Domain Tags

Domains are nested under poles and are used to filter catalogs and build menus. Examples include:

- Water, air, waste, maintenance
- Audit, carbon, solar PV, solar thermal, storage
- Access, CCTV, fire, gas, regulatory, risk
- Automation, distribution, power, IoT, SCADA

### 5.3 Content Types

The platform manages the following structured content types:

- Services
- Products
- Boutique items
- News articles
- News categories and subcategories
- Boutique categories and subcategories
- Enterprise contact information
- Pole taxonomy

## 6. Page Behavior

### 6.1 Homepage

The homepage presents the brand, key strengths, and the main service/product entry points. It is designed as a high-level business landing page with direct access to service and product sections.

### 6.2 Services and Products

These sections support dynamic filtering by query string:

- `pole`
- `domain`

The pages fetch catalog items from MongoDB and render cards with image support, taxonomy labels, and links to detailed pages.

### 6.3 Boutique

The boutique section behaves as a catalog of industrial equipment and accessories. It displays:

- Title
- Short description
- Price
- Availability
- Stock state
- Optional taxonomy labels

### 6.4 News

The news section is sorted in reverse chronological order. It supports category and subcategory filtering and links to article detail pages.

### 6.5 Contact

The contact page uses enterprise contact data from MongoDB when available, with static fallback values if the collection is empty or unavailable. The contact form posts to a backend route and stores incoming messages in the database.

## 7. Database Architecture

MongoDB is the persistent store for the dynamic site content and operational data.

### 7.1 Connection Model

The app uses a shared MongoDB client helper. The database name is read from `MONGODB_DB` and the connection string from `MONGODB_URI`.

Development reuses the same client promise through a global singleton to avoid repeated connections.

### 7.2 Collections

The current collections are:

- `poles`
- `services`
- `products`
- `boutique`
- `boutiqueCategories`
- `news`
- `newsCategories`
- `entrepriseInfo`
- `contacts`
- GridFS bucket `images` with `images.files` and `images.chunks`

### 7.3 Collection Summary

#### `poles`

Stores the global business taxonomy.

Fields typically used:

- `slug`
- `label`
- `shortDescription`
- `domains`
- `productDomains`
- `serviceDomains`

#### `services`

Stores service offerings.

Main fields:

- `slug`
- `title`
- `shortDescription`
- `description`
- `methodology`
- `deliverable`
- `poleId`
- `domainId`
- `status`
- `featured`
- `tags`
- `imageId`

#### `products`

Stores catalog products.

Main fields:

- `slug`
- `title`
- `shortDescription`
- `description`
- `specs`
- `performance`
- `poleId`
- `domainId`
- `pdfLink`
- `imageId`
- `galleryImageIds`
- `unitPrice`
- `currency`

#### `boutique`

Stores boutique inventory items.

Main fields:

- `slug`
- `title`
- `shortDescription`
- `description`
- `details`
- `specs`
- `price`
- `currency`
- `availability`
- `inStock`
- `inventoryCount`
- `sku`
- `featured`
- `status`
- `tags`
- `imageId`
- `galleryImageIds`
- `boutiqueCategoryId`
- `boutiqueSubcategoryId`
- `poleId`
- `domainId`

#### `boutiqueCategories`

Stores boutique taxonomy.

Main fields:

- `slug`
- `label`
- `description`
- `subcategories`

#### `news`

Stores articles and announcements.

Main fields:

- `slug`
- `title`
- `date`
- `publishedAt`
- `updatedAt`
- `categoryId`
- `subcategoryId`
- `summary`
- `excerpt`
- `author`
- `tags`
- `status`
- `content`
- `imageId`

#### `newsCategories`

Stores news taxonomy.

Main fields:

- `id`
- `label`
- `description`
- `subcategories`

#### `entrepriseInfo`

Stores official contact and company information.

Main fields:

- `_id` set to `main`
- `email`
- `phones`
- `fax`
- `addressLines`

#### `contacts`

Stores submitted contact form messages.

Main fields:

- `name`
- `email`
- `phone`
- `message`
- `status`
- `createdAt`

### 7.4 GridFS Media Storage

Images are stored in MongoDB GridFS using the `images` bucket.

Important implementation notes:

- Files are uploaded with `GridFSBucket.openUploadStream(imageId, { metadata: { contentType } })`
- Files are read back through `images.files` metadata and the GridFS stream API
- Image URLs are exposed through the API route `/api/images/[id]`

This means images are not stored as plain file paths in the database. The application resolves a logical image ID to the underlying GridFS object.

## 8. Data Seeding

The repository includes a seed script that populates MongoDB from the local data files.

### 8.1 Seed Inputs

- `data/news.ts`
- `data/boutique.ts`
- `data/products.ts`
- `data/services.ts`
- `data/newsCategories.ts`
- `data/poles.ts`

### 8.2 Seed Behavior

The seed process:

1. Loads environment variables from `.env.local` when present
2. Resolves the MongoDB connection
3. Normalizes static image paths into GridFS image IDs
4. Uploads images into the GridFS bucket
5. Inserts or replaces documents in the target collections

### 8.3 Reset Mode

Running the seed script with `--reset` clears existing documents in the seeded collections before re-inserting them.

## 9. Backend API

### 9.1 Contact API

`POST /api/contact`

Purpose:

- Accepts a JSON payload with `name`, `email`, `phone`, and `message`
- Validates required fields and email format
- Inserts the submission into the `contacts` collection

Behavior:

- Returns HTTP 400 for invalid JSON or missing required fields
- Returns HTTP 200 with an inserted ID when successful

### 9.2 Image API

`GET /api/images/[id]`

Purpose:

- Streams an image from MongoDB GridFS
- Sets long-lived caching headers

Behavior:

- Returns HTTP 400 if the image ID is missing
- Returns HTTP 404 if the image does not exist
- Returns the binary image with its stored content type when found

## 10. Configuration and Environment

### 10.1 Required Environment Variables

- `MONGODB_URI`
- `MONGODB_DB`

### 10.2 Application Metadata

The root layout defines the site metadata and base URL as part of the Next.js application configuration.

## 11. Build, Run, and Operations

### 11.1 Development

```bash
npm install
npm run dev
```

### 11.2 Production Build

```bash
npm run build
npm run start
```

### 11.3 Seeding MongoDB

```bash
npm run seed:db
```

To replace seeded data:

```bash
npm run seed:db:reset
```

### 11.4 Deployment

The project is compatible with Vercel deployment. The expected operational flow is:

1. Configure environment variables in the deployment platform
2. Deploy the Next.js application
3. Ensure MongoDB network access and database readiness
4. Seed the database before content-dependent routes are used in production

## 12. Functional Notes For Stakeholders

### 12.1 For the Client

- The site is built to present Atlantic Dunes as a structured industrial expertise company
- The user experience focuses on clear service discovery and fast access to catalog pages
- Content is organized by business poles so visitors can navigate by theme, not just by page name
- The contact form creates a persistent lead record in MongoDB

### 12.2 For Technical Leadership

- The website is not purely static; it depends on MongoDB for dynamic content, lead capture, and image delivery
- GridFS is the chosen image mechanism, so media governance must include database backups and bucket integrity
- The seed scripts are currently the operational source for initial data population
- Several collections are consumed as read models, so schema drift will affect menu generation and page rendering

## 13. Current Limitations And Alpha Notes

This is an alpha release. The following constraints are expected:

- No editorial admin panel is present
- Some pages are informational placeholders rather than full production case-study sections
- Content governance is script-driven rather than CMS-driven
- Quality and data completeness depend on seeded content and MongoDB availability

## 14. Recommended Next Steps

For the next milestone, the most useful additions would be:

- A lightweight admin interface for content management
- Validation and monitoring for MongoDB documents
- A formal schema contract for each collection
- Backup and restore procedures for GridFS media
- SEO and analytics hardening for production launch

## 15. Reference Files

- [README overview](../README.md)
- [Root layout](../app/layout.tsx)
- [MongoDB helpers](../lib/db.ts)
- [MongoDB connection](../lib/mongodb.ts)
- [Seed script](../scripts/seedMongo.ts)
- [Content schema](../data/contentSchema.ts)
