export type NewsCategory = {
  id: string;
  label: string;
  description: string;
};

export const newsCategories: NewsCategory[] = [
  {
    id: "formation",
    label: "Formation",
    description: "Articles sur les formations, ateliers et sessions pédagogiques.",
  },
  {
    id: "annonce",
    label: "Annonce",
    description: "Communiqués, lancements de services et actualités produits.",
  },
];

export const newsCategoryMap = Object.fromEntries(newsCategories.map((item) => [item.id, item]));

export const getNewsCategoryLabel = (id: string) => newsCategoryMap[id]?.label ?? id;
