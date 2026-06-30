# Atlantic Dunes Website - Technical Architecture & Implementation Report

**Version:** 1.0.0  
**Client:** Atlantic Dunes — Bureau d'Étude & Expertise & Installations Industrielles Clé en Main  
**Document Date:** June 2026  
**Audience:** Technical Leadership, Client Stakeholders, Development Team  
**Status:** Production Ready (Core Features Alpha v0.1.0+)

---

## Executive Summary

### For Atlantic Dunes (Client)

The Atlantic Dunes website is a modern, scalable digital presence platform designed specifically for industrial engineering and services companies. It showcases your expertise across multiple business poles (Environmental Treatment, Energy, Safety, Electrical, Digital, Nuclear, and Training) while providing real-time lead capture and interactive catalog browsing.

**Key Capabilities:**
- **Service & Product Catalogs** - Dynamic discovery organized by business specialization
- **Boutique Sales** - Industrial equipment inventory with pricing and availability
- **News & Updates** - Corporate announcements and industry insights
- **Lead Capture** - Persistent contact form submissions for business development
- **Multi-Language Ready** - French-primary UX with structured data for English support
- **Image-Rich Content** - Full media support for services, products, and brand storytelling

### For Technical Leadership

This is a **Next.js 14 full-stack application** combining modern frontend architecture with a MongoDB-backed persistence layer. The system implements a separation of concerns through a static content model (TypeScript data files) that syncs to MongoDB via seed scripts, while the runtime application provides dynamic filtering, media serving via GridFS, and lead persistence.

**Technical Highlights:**
- Server-side rendering (SSR) with Next.js App Router
- Type-safe data model (TypeScript + MongoDB)
- GridFS-based image storage for scalable media handling
- Stateless API routes for extensibility
- Seed-driven data governance for repeatability
- Production-ready error handling and fallback strategies

---

## 1. Platform Overview

### 1.1 What is Atlantic Dunes?

Atlantic Dunes is an industrial engineering firm specializing in:

| Pole | Focus Areas |
|------|------------|
| **Environment & Industrial Treatment** | Water systems, air quality, waste management, maintenance solutions |
| **Energy & Sustainable Development** | Audit & carbon, solar PV, solar thermal, energy storage |
| **Safety & Compliance** | Access control, CCTV, fire safety, gas detection, risk management |
| **Electrical Engineering** | Power distribution, automation, IoT, SCADA systems |
| **Digital & AI** | Industrial supervision, digital transformation |
| **Nuclear & Radioprotection** | Specialized nuclear sector expertise |
| **Training & Coaching** | Team development and certifications |

### 1.2 Website Purpose

This website serves as the digital storefront and lead-generation engine for Atlantic Dunes, enabling:

- **Inbound Marketing** - Discovery of services and products by industry domain
- **Lead Qualification** - Contact form captures and stores prospect inquiries
- **Brand Authority** - Certifications, references, news, and expertise demonstration
- **Catalog Browsing** - Dynamic filtering by business pole and domain specialization
- **Institutional Information** - Company overview, contact, certifications

---

## 2. Technology Stack

### 2.1 Core Framework & Runtime

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Next.js | 14.2.5 | Server-side rendering, App Router, API routes, middleware |
| **Runtime** | Node.js | 18+ | Application runtime environment |
| **UI Library** | React | 18.3.1 | Component-based UI, hooks, server components |
| **Language** | TypeScript | 5.6.0 | Type safety across frontend and backend |
| **Styling** | Tailwind CSS | 3.4.4 | Utility-first CSS framework |
| **Build Tool** | Webpack | (Next.js built-in) | Code bundling and optimization |

### 2.2 Backend & Data

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Primary Database** | MongoDB | 5.9.0+ | Document storage for content, leads, media metadata |
| **Media Storage** | GridFS (MongoDB) | Native | Binary image and file storage within MongoDB |
| **Database Driver** | mongodb npm package | 5.9.0 | Official Node.js MongoDB driver |

### 2.3 Development Tools

| Tool | Purpose |
|------|---------|
| **ts-node** | Execute TypeScript files directly for seed scripts |
| **ESLint** | Code quality linting |
| **Autoprefixer** | CSS vendor prefixing |
| **PostCSS** | CSS processing pipeline |

### 2.4 Deployment Platform

- **Recommended:** Vercel (automatic Next.js optimization, serverless functions, edge network)
- **Alternative:** Any Node.js-compatible hosting (AWS Lambda, Google Cloud Run, DigitalOcean App Platform, etc.)

---

## 3. Architecture Overview

### 3.1 Layered Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser                           │
│        (React Components, Tailwind CSS Styling)             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    Next.js App Router                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Page Components (app/)    API Routes (app/api/)     │   │
│  │ - /services               - POST /api/contact       │   │
│  │ - /products               - GET /api/images/[id]    │   │
│  │ - /boutique               - GET /api/manage-poles   │   │
│  │ - /news                   - (Extensible)            │   │
│  │ - /contact                                          │   │
│  └──────────────────────────────────────────────────────┘   │
│                   Server-Side Rendering (SSR)              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│           Business Logic & Data Access Layer                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ MongoDB Client (lib/mongodb.ts)                      │   │
│  │ - Connection pooling                                 │   │
│  │ - Query helpers                                      │   │
│  │ - GridFS image streaming                            │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                   MongoDB Database                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Collections:                                         │   │
│  │ - poles               - news                         │   │
│  │ - services            - newsCategories              │   │
│  │ - products            - contacts                    │   │
│  │ - boutique            - entrepriseInfo             │   │
│  │ - boutiqueCategories                               │   │
│  │                                                      │   │
│  │ GridFS Buckets:                                     │   │
│  │ - images (for all content media)                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Data Flow

#### Content Population (Development/Deployment)

```
TypeScript Data Files (data/*.ts)
        ↓
   Seed Script (scripts/seedMongo.ts)
        ↓
Image Normalization & GridFS Upload
        ↓
MongoDB Collections & GridFS Bucket
```

#### Runtime (User Interaction)

```
Browser Request (HTTP/HTTPS)
        ↓
Next.js Route Handler
        ↓
MongoDB Query/GridFS Stream
        ↓
Server-Side Rendering (JSX → HTML)
        ↓
HTTP Response (HTML/JSON/Binary)
        ↓
Browser Rendering/Display
```

### 3.3 Separation of Concerns

| Concern | Location | Responsibility |
|---------|----------|-----------------|
| **UI Rendering** | `app/` pages, `components/` | Display logic, user interaction, Tailwind styling |
| **Data Modeling** | `data/contentSchema.ts`, MongoDB collections | Schema definition, validation rules, relationships |
| **Content Storage** | MongoDB | Persistent storage, backup, indexing |
| **Business Logic** | `lib/db.ts` | Query helpers, image serving, filtering |
| **API Gateway** | `app/api/` routes | Request validation, response formatting, error handling |
| **Data Integration** | `scripts/seedMongo.ts` | ETL from static files to database |

---

## 4. Database Architecture

### 4.1 MongoDB Connection Model

**Environment Variables Required:**

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=atlanticdunes_prod
```

**Connection Strategy:**

- **Development:** In-memory singleton client promise (global variable `cachedClient`)
- **Production:** Connection pooling via MongoDB connection string URI parameters
- **Timeout:** 10 seconds (configurable)

**Connection Helpers (`lib/mongodb.ts`):**

```typescript
// Global client cache (development) or pooled connection (production)
let cachedClient: MongoClient = null;
let cachedDb: Db = null;

async function connectToDatabase(): Promise<Db>
// Returns connected database instance with retry logic
```

### 4.2 Collections Schema & Design

#### **Collection: `poles`**

Defines the primary business taxonomy. Used in navigation menus and content tagging.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String (unique) | URL-friendly name (e.g., "env", "energy") |
| `label` | String | Display name (e.g., "Environment & Industrial Treatment") |
| `shortDescription` | String | Summary for menu display |
| `domains` | Array<String> | Service domain tags (e.g., ["water", "air", "waste"]) |
| `productDomains` | Array<String> | Product domain tags (e.g., ["water-systems", "treatment"]) |
| `serviceDomains` | Array<String> | Service domain tags |

**Example Document:**

```json
{
  "_id": ObjectId("..."),
  "slug": "env",
  "label": "Environment & Industrial Treatment",
  "shortDescription": "Comprehensive water, air, waste, and maintenance solutions",
  "domains": ["water", "air", "waste", "maintenance"],
  "productDomains": ["water-systems", "air-quality", "waste-mgmt"],
  "serviceDomains": ["water-treatment", "air-purification"]
}
```

#### **Collection: `services`**

Catalog of service offerings. Each service belongs to a pole and targets specific domains.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String (unique) | URL slug (e.g., "water-audit") |
| `title` | String | Service name |
| `shortDescription` | String | Teaser for catalog view |
| `description` | String | Full description |
| `methodology` | String | How the service is delivered |
| `deliverable` | String | What the client receives |
| `poleId` | String | Reference to `poles.slug` |
| `domainId` | String | Specific domain within pole |
| `status` | String | "published" or "draft" |
| `featured` | Boolean | Highlight in UI |
| `tags` | Array<String> | Search/filter keywords |
| `imageId` | String | Reference to GridFS image |

#### **Collection: `products`**

Technical and commercial product listings with specifications and pricing.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String (unique) | URL slug |
| `title` | String | Product name |
| `shortDescription` | String | Summary for catalog |
| `description` | String | Full product description |
| `specs` | String | Technical specifications |
| `performance` | String | Performance metrics/certifications |
| `poleId` | String | Business pole reference |
| `domainId` | String | Domain specialization |
| `pdfLink` | String | Optional datasheet URL |
| `imageId` | String | Primary GridFS image |
| `galleryImageIds` | Array<String> | Additional GridFS images |
| `unitPrice` | Number | Price per unit |
| `currency` | String | "EUR", "USD", etc. |

#### **Collection: `boutique`**

Industrial equipment and accessories available for direct purchase/supply.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String (unique) | URL slug |
| `title` | String | Item name |
| `shortDescription` | String | One-liner |
| `description` | String | Full description |
| `details` | String | Additional details |
| `specs` | String | Technical specs |
| `price` | Number | Unit price |
| `currency` | String | "EUR", "USD", etc. |
| `availability` | String | "In Stock", "Order on Request", etc. |
| `inStock` | Boolean | Stock status |
| `inventoryCount` | Number | Quantity available |
| `sku` | String | Stock-keeping unit |
| `featured` | Boolean | Promotion flag |
| `status` | String | "published" or "draft" |
| `tags` | Array<String> | Keywords |
| `imageId` | String | Primary GridFS image |
| `galleryImageIds` | Array<String> | Gallery images |
| `boutiqueCategoryId` | String | Category reference |
| `boutiqueSubcategoryId` | String | Subcategory reference |
| `poleId` | String | Pole reference (if applicable) |
| `domainId` | String | Domain reference (if applicable) |

#### **Collection: `news`**

Blog and announcement articles with publish/update timestamps.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String (unique) | URL slug |
| `title` | String | Article title |
| `date` | Date | Publication date |
| `publishedAt` | Date | Timestamp when published |
| `updatedAt` | Date | Last modification |
| `categoryId` | String | News category reference |
| `subcategoryId` | String | Subcategory reference |
| `summary` | String | Brief summary |
| `excerpt` | String | Lead paragraph |
| `author` | String | Author name |
| `tags` | Array<String> | Article keywords |
| `status` | String | "published" or "draft" |
| `content` | String | Full article HTML/Markdown |
| `imageId` | String | Featured image (GridFS) |

#### **Collection: `newsCategories`**

Taxonomy for news organization.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `id` | String | Slug identifier |
| `label` | String | Display name |
| `description` | String | Category description |
| `subcategories` | Array<Object> | Sub-category array with `id`, `label`, `description` |

#### **Collection: `boutiqueCategories`**

Taxonomy for boutique product organization.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `slug` | String | URL-friendly identifier |
| `label` | String | Display name |
| `description` | String | Category description |
| `subcategories` | Array<Object> | Nested categories |

#### **Collection: `entrepriseInfo`**

Singleton document containing company contact and operational information.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | String | Set to "main" |
| `email` | String | Corporate email address |
| `phones` | Array<String> | Phone numbers (e.g., ["+33 1 ...", "+33 4 ..."]) |
| `fax` | String | Fax number |
| `addressLines` | Array<String> | Mailing address |

#### **Collection: `contacts`**

Persistent storage of contact form submissions for CRM integration.

| Field | Type | Purpose |
|-------|------|---------|
| `_id` | ObjectId | Unique identifier |
| `name` | String | Submitter name |
| `email` | String | Contact email |
| `phone` | String | Contact phone |
| `message` | String | Inquiry message |
| `status` | String | "new", "read", "responded" |
| `createdAt` | Date | Submission timestamp |

### 4.3 GridFS Media Storage

Images are not stored as files on disk but as **binary documents in MongoDB GridFS**. This provides:

- **Scalability:** Images stored in the same database as content, no separate file server needed
- **Backup Integration:** Image backups are part of database backups
- **CDN Compatibility:** Images can be served with caching headers for edge distribution

**GridFS Structure:**

```
Bucket: "images"
├── images.files        (metadata: _id, filename, contentType, uploadDate, length)
└── images.chunks       (binary chunks, associates to parent via files_id)
```

**Image Upload Process (Seed Script):**

```typescript
async function storeImageBuffer(
  bucket: GridFSBucket,
  imageId: string,
  buffer: Buffer,
  contentType: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(imageId, {
      metadata: { contentType }
    });
    uploadStream.on('finish', resolve);
    uploadStream.on('error', reject);
    uploadStream.write(buffer);
    uploadStream.end();
  });
}
```

**Image Retrieval (Runtime):**

```typescript
// GET /api/images/[id]
const bucket = new GridFSBucket(db);
const downloadStream = bucket.openDownloadStreamByName(imageId);
downloadStream.pipe(res);
```

### 4.4 Data Integrity & Constraints

**Unique Indexes (Recommended):**

```javascript
db.services.createIndex({ "slug": 1 }, { unique: true });
db.products.createIndex({ "slug": 1 }, { unique: true });
db.boutique.createIndex({ "slug": 1 }, { unique: true });
db.boutique.createIndex({ "sku": 1 }, { unique: true });
db.news.createIndex({ "slug": 1 }, { unique: true });
db.poles.createIndex({ "slug": 1 }, { unique: true });
```

**Search Indexes (Optional, for text search):**

```javascript
db.services.createIndex({ "title": "text", "description": "text" });
db.products.createIndex({ "title": "text", "specs": "text" });
db.boutique.createIndex({ "title": "text", "description": "text" });
```

---

## 5. Application Structure & Routing

### 5.1 Next.js App Router Structure

```
app/
├── layout.tsx                  # Root layout (header, footer, metadata)
├── page.tsx                    # Homepage
├── globals.css                 # Global Tailwind imports
├── about/
│   └── page.tsx                # About Atlantic Dunes page
├── services/
│   ├── page.tsx                # Services catalog with filtering
│   └── [slug]/
│       └── page.tsx            # Service detail page
├── products/
│   ├── page.tsx                # Products catalog
│   └── [slug]/
│       └── page.tsx            # Product detail page
├── boutique/
│   ├── page.tsx                # Boutique catalog
│   └── [slug]/
│       └── page.tsx            # Boutique item detail page
├── news/
│   ├── page.tsx                # News list
│   └── [slug]/
│       └── page.tsx            # News article detail page
├── contact/
│   └── page.tsx                # Contact form page
├── references/
│   └── page.tsx                # References/portfolio page
├── certifications/
│   └── page.tsx                # Certifications page
└── api/
    ├── contact/
    │   └── route.ts            # POST contact form submissions
    ├── images/
    │   └── [id]/
    │       └── route.ts        # GET image stream from GridFS
    └── manage-poles/
        └── (extensible)        # Additional API endpoints
```

### 5.2 Global Layout

The root layout provides header, footer, metadata, and dynamic navigation menu loading from MongoDB.

### 5.3 Catalog Pages with Filtering

Services & Products pages support dynamic filtering via query parameters (`?pole=env&domain=water`).

### 5.4 Dynamic Detail Pages

Each catalog section has detail pages that fetch content by slug and display full information with related items.

---

## 6. Backend API Routes

### 6.1 Contact Form Submission API

**Endpoint:** `POST /api/contact`

**Request Body:**

```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "phone": "+33 1 23 45 67 89",
  "message": "I'm interested in your water treatment services..."
}
```

**Response (Success - HTTP 200):**

```json
{
  "success": true,
  "insertedId": "507f1f77bcf86cd799439011"
}
```

### 6.2 Image Serving API

**Endpoint:** `GET /api/images/[id]`

Returns binary image data from GridFS with caching headers set for 1 year (immutable content).

---

## 7. Content Management & Data Seeding

### 7.1 Static Content Model

Content is defined in TypeScript files in `data/` directory:

```
data/
├── poles.ts
├── services.ts
├── products.ts
├── boutique.ts
├── boutiqueCategories.ts
├── news.ts
├── newsCategories.ts
├── contentSchema.ts
└── domains.ts
```

### 7.2 Seed Script Workflow

**Execution:**

```bash
npm run seed:db                  # Normal seed (preserves existing data)
npm run seed:db:reset            # Reset seed (clears and rebuilds)
```

**Process:**

1. Connect to MongoDB
2. Normalize static file paths to GridFS image IDs
3. Upload images to GridFS bucket
4. Insert documents into MongoDB collections
5. Verify and report results

---

## 8. Frontend Architecture

### 8.1 Component Structure

Reusable components in `components/`:
- `Header.tsx` - Navigation with dropdown menus
- `Footer.tsx` - Footer with links
- `FilterChips.tsx` - Filter UI
- `PoleTabs.tsx` - Tab navigation
- `ContactForm.tsx` - Lead capture form
- `QuoteButton.tsx` - Call-to-action button

### 8.2 Styling & Design System

Tailwind CSS utility-first framework with mobile-first responsive design.

### 8.3 Server vs Client Components

- **Server Components (Default):** Pages that fetch MongoDB and render HTML
- **Client Components:** Interactive components marked with `'use client'`

---

## 9. Performance & Optimization

### 9.1 Image Optimization

- GridFS delivery with Content-Type headers
- Cache-Control headers set for 1 year
- Compatible with CDN caching (Vercel, CloudFlare)

### 9.2 Database Query Optimization

Unique indexes on slugs for fast lookups, recommended indexes for filtered queries.

### 9.3 Server-Side Rendering Benefits

- SEO-friendly full HTML content
- Faster initial load time
- No client-side render delay

---

## 10. Security Considerations

### 10.1 Input Validation

Contact form validates required fields, email format, and prevents NoSQL injection.

### 10.2 MongoDB Security

- Environment variables protected (MONGODB_URI never in client code)
- MongoDB Atlas network restrictions (IP whitelisting)
- Database users with minimal permissions

### 10.3 API Security

- Rate limiting recommended for /api/contact
- CORS headers for external client support
- Content Security Policy (CSP) headers

---

## 11. Deployment & Operations

### 11.1 Development Setup

```bash
git clone <repository-url>
cd atlanticDunesVitrineWebsite
npm install

# Create .env.local
echo "MONGODB_URI=..." >> .env.local
echo "MONGODB_DB=atlanticdunes_dev" >> .env.local

npm run dev
```

### 11.2 Production Build

```bash
npm run build
npm run start
```

### 11.3 Database Seeding

```bash
npm run seed:db              # Initial population
npm run seed:db:reset        # Clear and rebuild
```

### 11.4 Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables (MONGODB_URI, MONGODB_DB)
4. Deploy (automatic on push to main)
5. Seed database if first deployment

### 11.5 Monitoring

**Recommended Tools:**
- Vercel Analytics for performance metrics
- Sentry for error tracking
- DataDog for full-stack observability
- ELK Stack for log aggregation

---

## 12. Content Governance & Editorial Process

### 12.1 Current State (Alpha)

- **Source of Truth:** TypeScript files in `data/`
- **No CMS:** Content changes require code modification
- **Version Control:** All changes tracked in Git

### 12.2 Workflow

1. **Author:** Edit data files, add/update images
2. **Test:** `npm run seed:db:reset && npm run dev`
3. **Review:** Create pull request on GitHub
4. **Testing:** Deploy to staging (Vercel preview)
5. **Production:** Merge to main, automatic build & deploy

### 12.3 Future: Admin CMS Interface

Recommended tools: Payload CMS, Strapi, Contentful, or custom Next.js admin panel for non-technical content management.

---

## 13. Testing & Quality Assurance

### 13.1 Development Commands

```bash
npm run lint                 # Code quality check
npm test                     # Unit tests (when configured)
npm run test:e2e             # End-to-end tests (when configured)
```

### 13.2 Performance Targets

- First Contentful Paint (FCP): < 1.5 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- Cumulative Layout Shift (CLS): < 0.1

---

## 14. Troubleshooting & Common Issues

### 14.1 MongoDB Connection Issues

```bash
# Verify environment variables
echo $MONGODB_URI

# Check network access (MongoDB Atlas)
# Go to Atlas → Network Access → Add current IP

# Test connection with MongoDB Compass
```

### 14.2 Image Not Found

```bash
# Re-seed with images
npm run seed:db:reset

# Check GridFS bucket exists
# MongoDB Compass → Images → Collections
```

### 14.3 Contact Form Not Submitting

```bash
# Check API logs (Vercel dashboard)
# Verify contacts collection exists in MongoDB
# Test API directly:
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{...}'
```

### 14.4 Build Failures

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

---

## 15. Roadmap & Future Enhancements

### Phase 1: Current (v1.0.0 - Production Ready)

✅ Multi-pole service/product catalog with dynamic filtering  
✅ Boutique inventory with pricing and availability  
✅ News section  
✅ Contact form with MongoDB persistence  
✅ GridFS-based image management  
✅ SEO-ready SSR  
✅ Mobile-responsive design  

### Phase 2: Content Management (Q3 2026)

- Admin dashboard for content editors
- WYSIWYG editor for descriptions
- Image upload and crop
- Draft/publish workflow
- Content scheduling
- Bulk import (CSV/JSON)

### Phase 3: Marketing & Analytics (Q4 2026)

- Google Analytics 4 integration
- Lead scoring and CRM integration
- Email notifications on submissions
- A/B testing framework
- Custom landing pages

### Phase 4: E-Commerce (2027)

- Shopping cart for boutique
- Payment gateway (Stripe, PayPal)
- Order management system
- Customer accounts
- Order tracking

### Phase 5: Advanced Features (2027+)

- Multi-language support
- Testimonials and case studies
- Video hosting
- Live chat / chatbot
- Document management
- API marketplace for partners

---

## 16. Quick Reference - Common Commands

```bash
# Development
npm install                          # Install dependencies
npm run dev                          # Start dev server
npm run seed:db                      # Populate MongoDB
npm run seed:db:reset                # Clear and rebuild database

# Build & Deployment
npm run build                        # Production build
npm run start                        # Start production server
npm run lint                         # Code quality check

# Database (Use MongoDB Compass or Atlas Web UI)
```

---

## 17. Glossary & Technical Terms

| Term | Definition |
|------|-----------|
| **App Router** | Next.js routing system using file-based routes in `app/` |
| **GridFS** | MongoDB spec for storing files in binary format |
| **Server Component** | React component that renders on server (default in Next.js 14) |
| **Client Component** | React component with `'use client'` directive |
| **SSR** | Server-Side Rendering - HTML generated on server |
| **Slug** | URL-friendly identifier (e.g., "water-treatment-services") |
| **Pole** | Business category (e.g., "Environment") |
| **Domain** | Sub-category within a pole (e.g., "Water") |

---

## 18. Support & Contact

### For Development Support

- **GitHub Issues:** Report bugs and feature requests
- **Pull Requests:** Submit code contributions
- **Documentation:** See `docs/` folder for technical details

### For Technical Leadership

- **Architecture Review:** Quarterly meetings
- **Performance Audit:** Monthly monitoring
- **Security Updates:** Quarterly vulnerability scans
- **Backup Verification:** Monthly verification

---

**Document Version:** 1.0.0  
**Last Updated:** June 2026  
**Next Review:** December 2026
