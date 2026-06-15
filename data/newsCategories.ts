export type NewsCategory = {
  id: string;
  label: string;
  description: string;
  subcategories: Array<{
    slug: string;
    label: string;
    description?: string;
  }>;
};

export const newsCategories: NewsCategory[] = [
  {
    id: "formation",
    label: "Formation",
    description: "Articles sur les formations, ateliers et sessions pédagogiques.",
    subcategories: [
      {
        slug: "bilan-carbone",
        label: "Bilan carbone",
        description: "Retours d'expérience et bonnes pratiques en bilan carbone.",
      },
      {
        slug: "hse",
        label: "HSE",
        description: "Actualités et formations santé, sécurité et environnement.",
      },
      {
        slug: "competences-numeriques",
        label: "Compétences numériques",
        description: "Sessions axées sur les outils digitaux et l’e-learning.",
      },
    ],
  },
  {
    id: "annonce",
    label: "Annonce",
    description: "Communiqués, lancements de services et actualités produits.",
    subcategories: [
      {
        slug: "produits",
        label: "Produits",
        description: "Nouveautés produit, innovations et offres business.",
      },
      {
        slug: "evenements",
        label: "Événements",
        description: "Conférences, salons et événements clients.",
      },
      {
        slug: "partenariats",
        label: "Partenariats",
        description: "Annonces sur les collaborations et nouveaux clients.",
      },
    ],
  },
];

export const newsCategoryMap = Object.fromEntries(newsCategories.map((item) => [item.id, item]));

export const getNewsCategoryLabel = (id: string) => newsCategoryMap[id]?.label ?? id;
