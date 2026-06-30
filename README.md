# Atlantic Dunes Website

Production-ready Next.js 14 full-stack application for **Atlantic Dunes** — Bureau d'Étude & Expertise & Installations Industrielles Clé en Main.

## 📋 Overview

This platform showcases Atlantic Dunes' expertise across multiple industrial engineering specializations:

- **Environment & Industrial Treatment** - Water systems, air quality, waste management
- **Energy & Sustainable Development** - Solar, energy storage, audits
- **Safety & Compliance** - Fire safety, gas detection, risk management
- **Electrical Engineering** - Power distribution, automation, IoT, SCADA
- **Digital & AI** - Industrial supervision, digital transformation
- **Nuclear & Radioprotection** - Specialized nuclear expertise
- **Training & Coaching** - Professional development

## 🚀 Core Features

✅ **Dynamic Service & Product Catalogs** - Browse by business pole and domain  
✅ **Boutique Inventory** - Equipment pricing, availability, stock status  
✅ **News & Updates** - Corporate announcements and industry insights  
✅ **Lead Capture** - Contact form with MongoDB persistence  
✅ **Image Management** - GridFS-based media storage with CDN caching  
✅ **SEO Optimized** - Server-side rendering for search engine indexing  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **Production Ready** - Vercel-optimized, scalable architecture  

## 🛠 Technology Stack

| Layer | Technology |
|-------|----------|
| **Framework** | Next.js 14.2.5 |
| **Language** | TypeScript 5.6.0 |
| **UI Library** | React 18.3.1 |
| **Styling** | Tailwind CSS 3.4.4 |
| **Database** | MongoDB 5.9.0+ |
| **Media Storage** | MongoDB GridFS |
| **Deployment** | Vercel (recommended) |

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages & layouts
│   ├── api/                      # API routes (contact, images, etc.)
│   ├── services/                 # Services catalog & detail pages
│   ├── products/                 # Products catalog & detail pages
│   ├── boutique/                 # Boutique inventory pages
│   ├── news/                     # News & articles
│   ├── contact/                  # Contact form page
│   └── layout.tsx                # Root layout (header, footer)
├── components/                   # Reusable React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer with contact info
│   ├── FilterChips.tsx           # Pole/domain filter UI
│   └── ContactForm.tsx           # Lead capture form
├── data/                         # Content definitions (TypeScript)
│   ├── poles.ts                  # Business pole taxonomy
│   ├── services.ts               # Service catalog
│   ├── products.ts               # Product catalog
│   ├── boutique.ts               # Boutique items
│   ├── news.ts                   # News articles
│   └── newsCategories.ts         # News taxonomy
├── lib/                          # Backend logic
│   ├── mongodb.ts                # MongoDB connection
│   └── db.ts                     # Query helpers
├── scripts/                      # Data seeding & utilities
│   └── seedMongo.ts              # Populate MongoDB from data files
└── docs/                         # Technical documentation
    └── technical-documentation-v0.1.0-alpha.md
```

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org/))
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd atlanticDunesVitrineWebsite

# Install dependencies
npm install

# Create environment configuration
echo "MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/" > .env.local
echo "MONGODB_DB=atlanticdunes_dev" >> .env.local
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Populate MongoDB with content
npm run seed:db

# Run linter
npm run lint
```

### Production Build

```bash
# Build optimized application
npm run build

# Start production server
npm run start
```

## 🗄 Database Setup

### MongoDB Collections

The application uses the following collections:

- **`poles`** - Business taxonomy (Environment, Energy, Safety, etc.)
- **`services`** - Service offerings with descriptions, pricing
- **`products`** - Product catalog with specs and pricing
- **`boutique`** - Equipment inventory with SKU and stock
- **`news`** - Articles and announcements
- **`newsCategories`** - News taxonomy
- **`boutiqueCategories`** - Equipment categories
- **`entrepriseInfo`** - Company contact information
- **`contacts`** - Contact form submissions (leads)
- **GridFS `images`** - All media (images, logos, photos)

### Seeding Content

```bash
# Initial seed (preserves existing data)
npm run seed:db

# Reset seed (clears collections and rebuilds)
npm run seed:db:reset
```

## 🔌 API Routes

### Contact Form Submission

**POST** `/api/contact`

```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "phone": "+33 1 23 45 67 89",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "insertedId": "507f1f77bcf86cd799439011"
}
```

### Image Serving

**GET** `/api/images/[id]`

Returns binary image data from MongoDB GridFS with caching headers.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository at [vercel.com](https://vercel.com)
3. Configure environment variables:
   - `MONGODB_URI`
   - `MONGODB_DB`
4. Deploy (automatic on push to main branch)
5. Seed database: `npm run seed:db`

### Other Platforms

- **AWS EC2/Elastic Beanstalk** - Node.js runtime support
- **Google Cloud Run** - Containerized deployment
- **DigitalOcean App Platform** - Managed Node.js hosting
- **Docker** - Build custom Docker images

## 📝 Content Management

### Current Workflow (v1.0.0)

1. **Edit Content** - Modify TypeScript files in `data/`
2. **Add Images** - Place image files in project
3. **Test Locally** - `npm run seed:db:reset && npm run dev`
4. **Review & Merge** - Pull request review and merge
5. **Deploy** - Automatic deployment via Vercel
6. **Seed Production** - Run `npm run seed:db` in production

### Future: Admin CMS

A content management interface is planned for Phase 2, allowing non-technical editors to manage content without code changes.

## 🔐 Security

### Best Practices Implemented

- ✅ Input validation on contact form
- ✅ MongoDB environment variables protected
- ✅ Network-restricted database access
- ✅ SQL/NoSQL injection prevention
- ✅ Content Security Policy headers
- ✅ Secure image serving with caching

### Recommended Additions

- Rate limiting on API routes
- CORS headers for external clients
- Regular security audits
- Automated dependency updates

## 📊 Performance Optimization

- **Server-Side Rendering** - HTML generated on server for faster initial load
- **Image Caching** - GridFS images cached for 1 year (immutable)
- **Database Indexing** - Unique indexes on slugs for fast lookups
- **Edge Caching** - Vercel edge network caching of static content
- **Code Splitting** - Next.js automatic code splitting per route

**Target Metrics:**
- First Contentful Paint (FCP): < 1.5 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- Cumulative Layout Shift (CLS): < 0.1

## 🧪 Testing

```bash
# Run linter
npm run lint

# Unit tests (configure jest first)
npm test

# E2E tests (configure playwright first)
npm run test:e2e
```

## 🐛 Troubleshooting

### MongoDB Connection Error

```bash
# Verify environment variables
echo $MONGODB_URI

# Check network access in MongoDB Atlas
# Atlas → Network Access → Add current IP or 0.0.0.0/0

# Test connection with MongoDB Compass
```

### Images Not Displaying

```bash
# Rebuild image cache
npm run seed:db:reset

# Verify images.files collection in MongoDB
# MongoDB Compass → atlanticdunes_prod → images.files
```

### Contact Form Not Working

```bash
# Check API logs
# Vercel Dashboard → Logs → Functions

# Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"123","message":"Test"}'
```

## 📚 Documentation

- **Comprehensive Technical Report:** [README_COMPREHENSIVE.md](README_COMPREHENSIVE.md) - Detailed architecture, database schemas, API documentation, deployment guide
- **Technical Alpha Documentation:** [docs/technical-documentation-v0.1.0-alpha.md](docs/technical-documentation-v0.1.0-alpha.md) - Original alpha documentation

## 🗺 Roadmap

### Phase 1 ✅ (Current)
- Service & product catalogs with filtering
- Contact form with lead capture
- News section
- Boutique inventory
- GridFS image management

### Phase 2 (Q3 2026)
- Admin CMS for content editors
- WYSIWYG editor for descriptions
- Draft/publish workflow
- Content scheduling
- Bulk content import

### Phase 3 (Q4 2026)
- Google Analytics integration
- Lead scoring and CRM integration
- A/B testing framework
- Email notifications

### Phase 4 (2027)
- E-commerce with shopping cart
- Payment gateway integration (Stripe, PayPal)
- Order management
- Customer accounts

### Phase 5 (2027+)
- Multi-language support
- Testimonials & case studies
- Live chat / chatbot
- Video hosting
- API marketplace

## 💼 Support

### Development Support
- **Issues:** Report bugs and feature requests on GitHub
- **Pull Requests:** Submit contributions with code reviews
- **Documentation:** Technical docs in `docs/` folder

### For Atlantic Dunes Client
- **Website Updates:** Submit content changes via support email
- **Questions:** Contact technical team for assistance

### For Technical Leadership
- **Architecture Reviews:** Quarterly review meetings
- **Performance Monitoring:** Monthly metrics review
- **Security Updates:** Quarterly vulnerability scans
- **Database Backups:** Monthly verification

## 📄 License

This project is proprietary to Atlantic Dunes. All rights reserved.

---

**Version:** 1.0.0  
**Status:** Production Ready  
**Last Updated:** June 2026  
**Framework:** Next.js 14 + MongoDB  
**Deployment:** Vercel-optimized, Node.js-compatible hosting

For detailed technical specifications, architecture diagrams, database schemas, and deployment procedures, see [README_COMPREHENSIVE.md](README_COMPREHENSIVE.md).

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Sites statiques et pages dynamiques pour services / produits
- Client-side filtering par domaine
- Contact form en React sans backend

## Structure

- `app/` : pages et mises en page
- `components/` : composants réutilisables
- `data/` : contenu statique pour services, produits et références
- `public/` : ressources statiques

## Installation

```bash
npm install
```

## Exécution en local

```bash
npm run dev
```

Puis ouvrez `http://localhost:3000`.

## Build et production

```bash
npm run build
npm run start
```

## Déploiement sur Vercel

1. Poussez le projet sur GitHub.
2. Connectez le dépôt sur https://vercel.com.
3. Vercel détecte automatiquement Next.js et déploie.

> Note: this repository now includes a MongoDB-backed backend for content, media, and contact submissions. Some menu and content data still fall back to static sources when the database is unavailable.
