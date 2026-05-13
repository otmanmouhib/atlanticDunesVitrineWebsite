export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  performance: string;
  domain: string;
  pdfLink: string;
};

export const products: Product[] = [
  {
    slug: "station-traitement-eaux-usees",
    title: "Station de traitement des eaux usées clé en main",
    shortDescription: "Solution complète pour l’épuration et la réutilisation des eaux industrielles.",
    description:
      "Station modulaire conçue pour traiter les eaux usées industrielles avec des performances élevées et une exploitation simplifiée.",
    specs: [
      { label: "Capacité", value: "10 à 500 m³/j" },
      { label: "Technologie", value: "Biologique SBR / MBBR" },
      { label: "Rendement", value: "> 95 % DCO" },
      { label: "Empreinte au sol", value: "Compacte, prêt à installer" }
    ],
    performance: "Conçue pour maintenir une qualité de rejet stable tout en réduisant l’empreinte énergétique du traitement.",
    domain: "water",
    pdfLink: "#"
  },
  {
    slug: "unite-traitement-air-depoussierage",
    title: "Unité de traitement de l'air / dépoussiéreur",
    shortDescription: "Système de captation et filtration des poussières pour atmosphères industrielles.",
    description:
      "Unité sur mesure pour capturer, filtrer et évacuer les particules et polluants générés par des process industriels.",
    specs: [
      { label: "Débit d’air", value: "1 000 à 50 000 m³/h" },
      { label: "Filtration", value: "Cartouche, manches ou cyclones" },
      { label: "Conformité", value: "ATEX / normes locales" },
      { label: "Maintenance", value: "Accès facile et changement rapide" }
    ],
    performance: "Optimise la qualité de l’air et réduit les émissions de poussières tout en assurant la sécurité ATEX.",
    domain: "air",
    pdfLink: "#"
  },
  {
    slug: "filtre-presse-convoyeur",
    title: "Installation de filtre presse + convoyeur",
    shortDescription: "Chaîne de valorisation des boues par déshydratation et transport automatique.",
    description:
      "Solution complète pour la déshydratation, le compactage et l’évacuation des boues industrielles avec faible maintenance.",
    specs: [
      { label: "Débit de boues", value: "2 à 30 m³/h" },
      { label: "Teneur finale", value: "30 à 40 % de matière sèche" },
      { label: "Convoyeur", value: "Bande ou chaîne selon application" },
      { label: "Automatisation", value: "Pilotage PLC intégré" }
    ],
    performance: "Réduit le volume de boues et facilite la valorisation ou le transport avec un système entièrement intégré.",
    domain: "waste",
    pdfLink: "#"
  },
  {
    slug: "centrale-tri-dechets",
    title: "Centrale de tri de déchets compacte ou modulaire",
    shortDescription: "Plateforme de pré-traitement des déchets industriels pour recyclage et valorisation.",
    description:
      "Centrale de tri clé en main conçue pour optimiser la valorisation des flux déchets et réduire les coûts de stockage.",
    specs: [
      { label: "Capacité", value: "5 à 50 tonnes/j" },
      { label: "Modules", value: "Tri manuel, tamisage, densification" },
      { label: "Flexibilité", value: "Compacte ou modulaire" },
      { label: "Sorties", value: "Recyclage, compost, valorisation énergétique" }
    ],
    performance: "Maximise la récupération de matières et améliore les taux de recyclage des déchets industriels.",
    domain: "waste",
    pdfLink: "#"
  },
  {
    slug: "systeme-solaire-thermique-photovoltaique",
    title: "Système solaire thermique / photovoltaïque",
    shortDescription: "Production d’énergie renouvelable pour sites industriels et bâtiments techniques.",
    description:
      "Installation solaire adaptée pour réduire la facture énergétique et améliorer l’autonomie énergétique de vos infrastructures.",
    specs: [
      { label: "Puissance", value: "20 à 500 kWc" },
      { label: "Solutions", value: "Thermique, PV ou mixte" },
      { label: "Rendement", value: "> 18 % pour PV / haute performance thermique" },
      { label: "Maintenance", value: "Suivi à distance et service clé en main" }
    ],
    performance: "Diminue les émissions carbone et génère de l’électricité ou de la chaleur propre pour vos opérations.",
    domain: "energy",
    pdfLink: "#"
  },
  {
    slug: "unite-methanisation",
    title: "Unité de méthanisation (petite ou moyenne puissance)",
    shortDescription: "Valorisation des déchets organiques en biogaz et chaleur renouvelable.",
    description:
      "Unité de méthanisation industrielle capable de traiter des résidus organiques et de produire de l’énergie verte sur site.",
    specs: [
      { label: "Puissance électrique", value: "50 à 500 kW" },
      { label: "Capacité de digestion", value: "20 à 500 tonnes/an" },
      { label: "Sortie", value: "Biogaz, chaleur, digestat" },
      { label: "Contrôle", value: "Supervision et sécurité complète" }
    ],
    performance: "Transforme les déchets organiques en énergie renouvelable et réduit les émissions de gaz à effet de serre.",
    domain: "energy",
    pdfLink: "#"
  },
  {
    slug: "installation-ventilation-industrielle-atex",
    title: "Installation de ventilation industrielle (ATEX)",
    shortDescription: "Systèmes sûrs pour atmosphères explosives et conditions industrielles exigeantes.",
    description:
      "Installation ATEX de ventilation conçue pour protéger les opérateurs et garantir le fonctionnement continu en milieux explosifs.",
    specs: [
      { label: "Débit", value: "2 000 à 80 000 m³/h" },
      { label: "Certification", value: "ATEX zone 1/2" },
      { label: "Matériaux", value: "Acier inox ou galvanisé" },
      { label: "Contrôle", value: "Variateur de vitesse intelligent" }
    ],
    performance: "Assure un renouvellement d’air efficace, la maîtrise des poussières et la sécurité des installations sensibles.",
    domain: "air",
    pdfLink: "#"
  },
  {
    slug: "ligne-compactage-briquettage-dechets",
    title: "Ligne de compactage / briquettage de déchets",
    shortDescription: "Réduisez le volume des déchets et facilitez leur transport ou valorisation.",
    description:
      "Ligne intégrée de compactage et briquettage conçue pour transformer les déchets en blocs denses et transportables.",
    specs: [
      { label: "Capacité", value: "1 à 20 tonnes/j" },
      { label: "Technologie", value: "Compacteurs, presses et convoyeurs" },
      { label: "Résultat", value: "Briques densifiées prêtes à valoriser" },
      { label: "Pilotage", value: "Interface opérateur tactile" }
    ],
    performance: "Diminue les coûts logistiques et améliore la gestion des déchets par une valorisation plus simple.",
    domain: "waste",
    pdfLink: "#"
  }
];
