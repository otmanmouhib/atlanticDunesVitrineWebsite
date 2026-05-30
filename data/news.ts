export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  categoryId: string;
  category?: string;
  image: string;
  summary: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  status?: "draft" | "published" | "archived";
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "formation-bilan-carbone-ccistta",
    title: "Formation bilan carbone à la Chambre de commerce, d'industrie et de services de Tanger-Tétouan-Al Hoceima",
    date: "2026-05-24",
    publishedAt: "2026-05-24",
    updatedAt: "2026-05-24",
    categoryId: "formation",
    category: "Formation",
    image: "/formation-bilan-carbone.png",
    summary:
      "Atlantic Dunes a animé une formation dédiée au bilan carbone à la CCISTTA, afin d'accompagner les entreprises régionales vers une transition plus durable.",
    excerpt:
      "Une formation pratique sur le bilan carbone animée par Atlantic Dunes à la CCISTTA, pour accélérer la transition durable des entreprises locales.",
    author: "Equipe Atlantic Dunes",
    tags: ["formation", "bilan carbone", "transition"],
    status: "published",
    content: [
      "Le 24 mai 2026, Atlantic Dunes était présente à la Chambre de commerce, d'industrie et de services de Tanger-Tétouan-Al Hoceima (CCISTTA) pour une session de formation intensive sur le bilan carbone.",
      "L'objectif principal était de sensibiliser les acteurs économiques locaux aux enjeux du calcul des émissions de gaz à effet de serre et de fournir des outils concrets pour établir des bilans carbone fiables.",
      "La formation a couvert l'identification des sources d'émissions, la collecte de données, la méthode de calcul adaptée aux entreprises industrielles et les premières actions de réduction.",
      "Cette initiative s'inscrit dans l'engagement d'Atlantic Dunes d'accompagner les entreprises marocaines vers des pratiques plus responsables, en favorisant l'innovation verte et la performance environnementale.",
    ],
  },
  {
    slug: "lancement-nouvelle-offre-supervision-iot",
    title: "Lancement de notre offre de supervision IoT pour les sites industriels",
    date: "2026-04-10",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    categoryId: "annonce",
    category: "Annonce",
    image: "/systeme-scada-industriel.png",
    summary:
      "Atlantic Dunes déploie une nouvelle offre de supervision IoT pour optimiser la maintenance et la performance des installations industrielles.",
    excerpt:
      "Une offre IoT enrichie pour superviser les flux industriels et anticiper les interventions critiques.",
    author: "Equipe Atlantic Dunes",
    tags: ["IoT", "SCADA", "maintenance"],
    status: "published",
    content: [
      "Nous sommes heureux d'annoncer le lancement d'une solution de supervision IoT sur mesure, pensée pour les sites industriels, les stations de traitement et les infrastructures critiques.",
      "Cette solution combine capteurs connectés, tableau de bord SCADA et intelligence embarquée pour anticiper les pannes et fiabiliser les opérations.",
      "Les premières expérimentations montrent une réduction significative des interventions non planifiées et une meilleure visibilité sur la consommation énergétique.",
      "Atlantic Dunes continue d'investir dans les solutions numériques qui renforcent l'efficacité opérationnelle tout en réduisant l'empreinte environnementale.",
    ],
  },
];
