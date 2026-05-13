export type Reference = {
  title: string;
  client: string;
  description: string;
  result: string;
  category: string;
};

export const references: Reference[] = [
  {
    title: "Modernisation d’une station de traitement urbain",
    client: "Collectivité portuaire Nord",
    description:
      "Étude de faisabilité pour la refonte complète d’une installation de traitement des eaux usées sur site industriel.",
    result: "Réduction des consommations de 20 % et amélioration de la qualité de rejet conforme aux valeurs cibles.",
    category: "water"
  },
  {
    title: "Installation de dépoussiéreur ATEX pour production métal",
    client: "Usine métallurgique Atlas",
    description:
      "Conception et mise en service d’un système de dépoussiérage et ventilation ATEX pour un atelier de fonderie.",
    result: "Sécurité renforcée, conformité réglementaire assurée et baisse significative des émissions particulaires.",
    category: "air"
  },
  {
    title: "Déploiement d’une centrale de tri modulaire",
    client: "Grand site industriel logistique",
    description:
      "Mise en place d’une ligne de tri de déchets compacts et valorisation des matières en interne.",
    result: "Diminution des coûts de traitement de 30 % et hausse de 45 % du taux de recyclage des déchets.",
    category: "waste"
  }
];
