# Atlantic Dunes Website Template

Production-ready Next.js template for **Atlantic Dunes** — bureau d’étude & expertise et installations industrielles clé en main.

Versioned technical documentation: [docs/technical-documentation-v0.1.0-alpha.md](docs/technical-documentation-v0.1.0-alpha.md)

## Caractéristiques

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
