export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  methodology: string[];
  deliverable: string;
  domain: string;
};

export const services: Service[] = [
  {
    slug: "calcul-bilan-carbone",
    title: "Calcul bilan carbone (scope 1,2,3)",
    shortDescription: "Mesurez l’empreinte climatique complète de votre activité industrielle.",
    description:
      "Nous évaluons les émissions directes et indirectes conformes aux standards GHG pour identifier les leviers de réduction les plus efficaces.",
    methodology: [
      "Collecte de données énergie, transport et chaîne d’approvisionnement",
      "Analyse des émissions Scope 1, 2 et 3",
      "Comparaison avec les obligations réglementaires et objectifs internes",
      "Plan d’action priorisé avec étapes de décarbonation"
    ],
    deliverable: "Rapport bilan carbone complet, synthèse des postes prioritaires et feuille de route de réduction.",
    domain: "energy"
  },
  {
    slug: "etude-impact-environnemental",
    title: "Étude d’impact environnemental",
    shortDescription: "Évaluez les risques et impacts environnementaux avant un projet industriel.",
    description:
      "Notre équipe réalise l’analyse technique, réglementaire et écologique nécessaire pour garantir la conformité environnementale dès la phase de conception.",
    methodology: [
      "Inventaire des enjeux locaux eau, air, sol et biodiversité",
      "Analyse des scénarios d’exploitation et d’impact",
      "Évaluation des risques et des mesures de réduction",
      "Rédaction du dossier et accompagnement administratif"
    ],
    deliverable: "Dossier d’étude d’impact détaillé avec recommandations de mitigation et synthèse décisionnelle.",
    domain: "eco"
  },
  {
    slug: "audit-energetique",
    title: "Audit énergétique (réglementaire ou volontaire)",
    shortDescription: "Optimisez les performances énergétiques de vos installations industrielles.",
    description:
      "Qu’il s’agisse d’un audit réglementaire ou d’une démarche volontaire, nous identifions les pertes, améliorations et solutions techniques les plus pertinentes.",
    methodology: [
      "Analyse des consommations et des systèmes énergétiques",
      "Visites terrain et relevés instrumentation",
      "Benchmark par secteur et obligations réglementaires",
      "Recommandations ROI et plan de réduction des consommations"
    ],
    deliverable: "Rapport d’audit énergétique structuré avec priorités, budgets estimés et planning de mise en œuvre.",
    domain: "energy"
  },
  {
    slug: "etude-faisabilite-eau-air-dechets",
    title: "Étude de faisabilité (eau, air, déchets)",
    shortDescription: "Validez techniquement et économiquement votre projet de traitement industriel.",
    description:
      "Nous réalisons l’étude de faisabilité pour les enjeux eau, air et déchets afin de garantir une solution adaptée, rentable et conforme aux exigences locales.",
    methodology: [
      "Diagnostic des flux entrants et sortants",
      "Étude technico-économique des options de traitement",
      "Dimensionnement préliminaire des systèmes",
      "Évaluation des coûts d’exploitation et investissements"
    ],
    deliverable: "Rapport de faisabilité avec schéma de principe, budget estimatif et analyse des risques.",
    domain: "water"
  },
  {
    slug: "dossier-conformite-icpe",
    title: "Dossier de conformité (ICPE, autorisation environnementale)",
    shortDescription: "Préparez votre dossier administratif pour le régime ICPE et l’autorisation environnementale.",
    description:
      "Nos experts rédigent et structurent les dossiers de conformité réglementaire pour sécuriser vos démarches d’exploitation industrielle.",
    methodology: [
      "Collecte des données procédés et installations",
      "Rédaction des notices ICPE et analyses réglementaires",
      "Simulation des rejets atmosphériques et des pollutions",
      "Suivi des échanges avec les autorités compétentes"
    ],
    deliverable: "Dossier de conformité prêt à dépôt avec annexes techniques, études d’impact et formulaires réglementaires.",
    domain: "safety"
  },
  {
    slug: "analyse-cycle-de-vie-acv",
    title: "Analyse du cycle de vie (ACV)",
    shortDescription: "Mesurez l’impact environnemental de vos produits ou installations sur tout leur cycle.",
    description:
      "Nous appliquons une méthode ACV précise pour calculer les impacts sur le climat, l’eau, les déchets et l’épuisement des ressources.",
    methodology: [
      "Cartographie des flux matières et énergie",
      "Inventaire des données de cycle de vie",
      "Calcul des impacts environnementaux selon ISO 14040/44",
      "Synthèse des indicateurs et recommandations d’optimisation"
    ],
    deliverable: "Étude ACV complète avec indicateurs environnementaux et pistes d’écoconception.",
    domain: "eco"
  },
  {
    slug: "mission-amo-environnementale",
    title: "Mission AMO environnementale",
    shortDescription: "Accompagnement maître d’ouvrage pour piloter vos projets industriels.",
    description:
      "Nous assistons le maître d’ouvrage sur les aspects environnementaux, réglementaires et techniques jusqu’à la réception du projet.",
    methodology: [
      "Analyse des besoins et rédaction du cahier des charges",
      "Suivi de l’ingénierie et des appels d’offres",
      "Coordination technique et environnementale",
      "Assistance à la mise en service et aux forfaits de conformité"
    ],
    deliverable: "Rapport de mission AMO avec jalons, recommandations techniques et tableau de suivi de conformité.",
    domain: "waste"
  },
  {
    slug: "etude-danger-risque-industriel",
    title: "Étude de danger / risque industriel",
    shortDescription: "Analysez et maîtrisez les risques liés à vos installations et procédés.",
    description:
      "Nos études évaluent les scénarios d’accidents, les effets de surpression, l’incendie et l’exposition pour protéger vos équipes et vos installations.",
    methodology: [
      "Identification des aléas et scénarios critiques",
      "Étude des conséquences et des distances de sécurité",
      "Analyse des dispositifs de prévention existants",
      "Recommandations d’amélioration et de protection"
    ],
    deliverable: "Étude de danger structurée avec cartographie des risques, mesures correctives et plan d’action.",
    domain: "safety"
  },
  {
    slug: "diagnostic-dechets",
    title: "Diagnostic déchets (valorisation, traitement)",
    shortDescription: "Optimisez vos filières déchets avec un diagnostic de valorisation adapté.",
    description:
      "Nous analysons vos déchets industriels, identifions les voies de valorisation et proposons des solutions de traitement performantes et durables.",
    methodology: [
      "Audit des flux déchets et profils matières",
      "Évaluation des options de valorisation et recyclage",
      "Étude de circuits logistiques et stockage",
      "Plan d’action for disposal, valorisation and regulatory compliance"
    ],
    deliverable: "Diagnostic déchets avec scénarios de valorisation, coûts et schéma de filière.",
    domain: "waste"
  },
  {
    slug: "modelisation-dispersion-atmospherique",
    title: "Modélisation dispersion atmosphérique",
    shortDescription: "Prédisez l’impact des rejets atmosphériques sur votre environnement local.",
    description:
      "Avec des outils de modélisation avancés, nous estimons les concentrations atmosphériques et les zones d’exposition pour garantir la conformité et la sécurité.",
    methodology: [
      "Collecte des données d’émissions et paramètres météorologiques",
      "Simulation de dispersion selon la topographie locale",
      "Analyse des concentrations et des zones impactées",
      "Rapport de conformité et recommandations de réduction"
    ],
    deliverable: "Étude de dispersion atmosphérique complète avec cartes d’exposition et mesures préconisées.",
    domain: "air"
  }
];
