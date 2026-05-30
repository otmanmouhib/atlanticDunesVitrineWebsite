export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  performance: string;
  pole: string;
  poleId: string;
  domain: string;
  domainId: string;
  pdfLink: string;
  image?: string;
  sku?: string;
  unitPrice?: number;
  currency?: string;
  inventory?: {
    quantity: number;
    availabilityLabel: string;
    backorder?: boolean;
  };
  tags?: string[];
  featured?: boolean;
  status?: "draft" | "published" | "archived";
  imageGallery?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export const products: Product[] = [

  // ── POLE: env ─────────────────────────────────────────────────────────
  {
    slug: "station-traitement-eaux-usees",
    title: "Station de traitement des eaux usées clé en main",
    shortDescription: "Solution complète pour l'épuration et la réutilisation des eaux industrielles.",
    description:
      "Station modulaire conçue pour traiter les eaux usées industrielles avec des performances élevées et une exploitation simplifiée.",
    specs: [
      { label: "Capacité", value: "10 à 500 m³/j" },
      { label: "Technologie", value: "Biologique SBR / MBBR" },
      { label: "Rendement", value: "> 95 % DCO" },
      { label: "Empreinte au sol", value: "Compacte, prêt à installer" },
    ],
    performance: "Conçue pour maintenir une qualité de rejet stable tout en réduisant l'empreinte énergétique du traitement.",
    pole: "env",
    poleId: "env",
    domain: "water",
    domainId: "water",
    pdfLink: "#",
    image: "/station-traitement-eaux-usees.png",
    sku: "AD-ENV-WTR-ST01",
    unitPrice: 145000,
    currency: "EUR",
    inventory: {
      quantity: 4,
      availabilityLabel: "Sur demande",
      backorder: true,
    },
    tags: ["station", "eaux usées", "traitement"],
    featured: true,
    status: "published",
    imageGallery: ["/station-traitement-eaux-usees.png", "/station-traitement-eaux-usees-detail.png"],
    createdAt: "2026-02-05",
    updatedAt: "2026-05-01",
  },
  {
    slug: "unite-traitement-air-depoussierage",
    title: "Unité de traitement de l'air / dépoussiéreur",
    shortDescription: "Système de captation et filtration des poussières pour atmosphères industrielles.",
    description:
      "Unité sur mesure pour capturer, filtrer et évacuer les particules et polluants générés par des process industriels.",
    specs: [
      { label: "Débit d'air", value: "1 000 à 50 000 m³/h" },
      { label: "Filtration", value: "Cartouche, manches ou cyclones" },
      { label: "Conformité", value: "ATEX / normes locales" },
      { label: "Maintenance", value: "Accès facile et changement rapide" },
    ],
    performance: "Optimise la qualité de l'air et réduit les émissions de poussières tout en assurant la sécurité ATEX.",
    pole: "env",
    poleId: "env",
    domain: "air",
    domainId: "air",
    pdfLink: "#",
    image: "/unite-traitement-air-depoussierage.png",
  },
  {
    slug: "filtre-presse-convoyeur",
    title: "Installation de filtre presse + convoyeur",
    shortDescription: "Chaîne de valorisation des boues par déshydratation et transport automatique.",
    description:
      "Solution complète pour la déshydratation, le compactage et l'évacuation des boues industrielles avec faible maintenance.",
    specs: [
      { label: "Débit de boues", value: "2 à 30 m³/h" },
      { label: "Teneur finale", value: "30 à 40 % de matière sèche" },
      { label: "Convoyeur", value: "Bande ou chaîne selon application" },
      { label: "Automatisation", value: "Pilotage PLC intégré" },
    ],
    performance: "Réduit le volume de boues et facilite la valorisation ou le transport avec un système entièrement intégré.",
    pole: "env",
    poleId: "env",
    domain: "waste",
    domainId: "waste",
    pdfLink: "#",
    image: "/filtre-presse-convoyeur.png",
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
      { label: "Sorties", value: "Recyclage, compost, valorisation énergétique" },
    ],
    performance: "Maximise la récupération de matières et améliore les taux de recyclage des déchets industriels.",
    pole: "env",
    poleId: "env",
    domain: "waste",
    domainId: "waste",
    pdfLink: "#",
    image: "/centrale-tri-dechets.png",
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
      { label: "Pilotage", value: "Interface opérateur tactile" },
    ],
    performance: "Diminue les coûts logistiques et améliore la gestion des déchets par une valorisation plus simple.",
    pole: "env",
    poleId: "env",
    domain: "waste",
    domainId: "waste",
    pdfLink: "#",
    image: "/ligne-compactage-briquettage-dechets.png",
  },

  // ── POLE: energy ──────────────────────────────────────────────────────
  {
    slug: "installation-photovoltaique-industrielle",
    title: "Installation photovoltaïque industrielle",
    shortDescription: "Production d'électricité solaire pour sites industriels, toitures et ombrières.",
    description:
      "Installation solaire photovoltaïque complète conçue pour les sites industriels : étude d'implantation, fourniture des panneaux et onduleurs, raccordement réseau et mise en service clé en main.",
    specs: [
      { label: "Puissance", value: "20 à 2 000 kWc" },
      { label: "Applications", value: "Toiture, ombrière, sol" },
      { label: "Rendement PV", value: "> 21 % (monocristallin)" },
      { label: "Suivi", value: "Monitoring à distance inclus" },
    ],
    performance: "Réduit la facture électrique jusqu'à 60 % et génère des revenus complémentaires via la revente du surplus.",
    pole: "energy",
    poleId: "energy",
    domain: "solar-pv",
    domainId: "solar-pv",
    pdfLink: "#",
    image: "/installation-photovoltaique-industrielle.png",
  },
  {
    slug: "systeme-solaire-thermique-process",
    title: "Système solaire thermique process",
    shortDescription: "Production de chaleur solaire pour process industriels et eau chaude sanitaire.",
    description:
      "Système solaire thermique haute performance pour la production d'eau chaude sanitaire ou de chaleur procédé dans les industries agroalimentaires, chimiques et hospitalières.",
    specs: [
      { label: "Surface capteurs", value: "20 à 500 m²" },
      { label: "Température", value: "Jusqu'à 90 °C process" },
      { label: "Technologie", value: "Capteurs plans ou tubes sous vide" },
      { label: "Stockage", value: "Ballon tampon inox intégré" },
    ],
    performance: "Couvre jusqu'à 70 % des besoins en chaleur process et réduit significativement les émissions de CO₂.",
    pole: "energy",
    poleId: "energy",
    domain: "solar-thermal",
    domainId: "solar-thermal",
    pdfLink: "#",
    image: "/systeme-solaire-thermique-process.png",
  },
  {
    slug: "installation-hybride-solaire-reseau",
    title: "Installation hybride solaire + réseau",
    shortDescription: "Système intelligent combinant énergie solaire, stockage et réseau électrique.",
    description:
      "Solution hybride intégrant panneaux PV, onduleur hybride et gestion intelligente de l'énergie pour maximiser l'autoconsommation et assurer la continuité d'alimentation.",
    specs: [
      { label: "Puissance PV", value: "10 à 500 kWc" },
      { label: "Onduleur", value: "Hybride avec gestion prioritaire PV" },
      { label: "Stockage optionnel", value: "BESS couplable" },
      { label: "Gestion", value: "EMS intelligent avec API" },
    ],
    performance: "Optimise l'autoconsommation en temps réel et garantit l'alimentation même en cas de coupure réseau.",
    pole: "energy",
    poleId: "energy",
    domain: "solar-pv",
    domainId: "solar-pv",
    pdfLink: "#",
    image: "/installation-hybride-solaire-reseau.png",
  },
  {
    slug: "systeme-stockage-batteries-bess",
    title: "Système de stockage par batteries (BESS)",
    shortDescription: "Stockage d'énergie industriel pour lissage de puissance et autonomie énergétique.",
    description:
      "Système BESS (Battery Energy Storage System) conçu pour le stockage de l'énergie solaire ou réseau, le lissage de puissance et la réduction des pointes de consommation.",
    specs: [
      { label: "Capacité", value: "50 kWh à 5 MWh" },
      { label: "Technologie", value: "Li-Ion LFP (sécurité maximale)" },
      { label: "Cycles de vie", value: "> 6 000 cycles (80 % capacité)" },
      { label: "BMS", value: "Gestion batterie intégrée" },
    ],
    performance: "Réduit les pointes tarifaires, améliore l'autoconsommation solaire et sécurise l'alimentation des process critiques.",
    pole: "energy",
    poleId: "energy",
    domain: "storage",
    domainId: "storage",
    pdfLink: "#",
    image: "/systeme-stockage-batteries-bess.png",
  },
  {
    slug: "unite-methanisation",
    title: "Unité de méthanisation (petite ou moyenne puissance)",
    shortDescription: "Valorisation des déchets organiques en biogaz et chaleur renouvelable.",
    description:
      "Unité de méthanisation industrielle capable de traiter des résidus organiques et de produire de l'énergie verte sur site.",
    specs: [
      { label: "Puissance électrique", value: "50 à 500 kW" },
      { label: "Capacité de digestion", value: "20 à 500 tonnes/an" },
      { label: "Sortie", value: "Biogaz, chaleur, digestat" },
      { label: "Contrôle", value: "Supervision et sécurité complète" },
    ],
    performance: "Transforme les déchets organiques en énergie renouvelable et réduit les émissions de gaz à effet de serre.",
    pole: "energy",
    poleId: "energy",
    domain: "biogas",
    domainId: "biogas",
    pdfLink: "#",
    image: "/unite-methanisation.png",
  },

  // ── POLE: safety ──────────────────────────────────────────────────────
  {
    slug: "systeme-detection-incendie-industriel",
    title: "Système de détection incendie industriel",
    shortDescription: "Protection incendie complète pour sites industriels et tertiaires.",
    description:
      "Système de détection incendie certifié conforme aux normes EN 54, intégrant centrale adressable, détecteurs optiques/thermiques, déclencheurs manuels et signalisation d'évacuation.",
    specs: [
      { label: "Centrale", value: "Adressable, jusqu'à 2 048 points" },
      { label: "Détecteurs", value: "Optique, thermique, flamme, linéaire" },
      { label: "Conformité", value: "EN 54 / normes locales" },
      { label: "Communication", value: "Liaison pompiers et GTB" },
    ],
    performance: "Détecte tout début d'incendie en moins de 30 secondes et déclenche automatiquement les procédures d'évacuation.",
    pole: "safety",
    poleId: "safety",
    domain: "fire",
    domainId: "fire",
    pdfLink: "#",
    image: "/systeme-detection-incendie-industriel.png",
  },
  {
    slug: "systeme-detection-gaz",
    title: "Système de détection gaz (fixe ou portable)",
    shortDescription: "Surveillance continue des atmosphères dangereuses en zones ATEX.",
    description:
      "Système de détection gaz fixe ou portable pour la mesure continue des concentrations en gaz toxiques (H₂S, CO, NH₃) et explosifs (LEL) dans les environnements industriels.",
    specs: [
      { label: "Gaz détectés", value: "H₂S, CO, LEL, O₂, NH₃, VOC" },
      { label: "Certification", value: "ATEX zone 1/2 et 21/22" },
      { label: "Alarmes", value: "Visuelle, sonore et relais" },
      { label: "Transmission", value: "4-20 mA / Modbus / sans fil" },
    ],
    performance: "Assure la sécurité du personnel avec des seuils d'alarme configurables et une réponse inférieure à 20 secondes.",
    pole: "safety",
    poleId: "safety",
    domain: "gas",
    domainId: "gas",
    pdfLink: "#",
    image: "/systeme-detection-gaz.png",
  },
  {
    slug: "systeme-controle-acces-industriel",
    title: "Système de contrôle d'accès industriel",
    shortDescription: "Sécurisez les accès à vos zones sensibles avec une solution robuste et traçable.",
    description:
      "Solution de contrôle d'accès industriel intégrant lecteurs de badges, biométrie, sas sécurisés et gestion centralisée des droits d'accès pour sites industriels exigeants.",
    specs: [
      { label: "Technologies", value: "Badge RFID, biométrie, code PIN" },
      { label: "Capacité", value: "Jusqu'à 10 000 badges" },
      { label: "Journal", value: "Historique complet des accès" },
      { label: "Intégration", value: "Liaison vidéosurveillance et alarme" },
    ],
    performance: "Trace et contrôle tous les mouvements sur site, réduit les risques d'intrusion et facilite les audits de sécurité.",
    pole: "safety",
    poleId: "safety",
    domain: "access",
    domainId: "access",
    pdfLink: "#",
    image: "/systeme-controle-acces-industriel.png",
  },
  {
    slug: "videosurveillance-industrielle-cctv",
    title: "Vidéosurveillance industrielle (CCTV / IP)",
    shortDescription: "Surveillance temps réel de vos installations avec caméras IP haute résolution.",
    description:
      "Système de vidéosurveillance IP robuste pour environnements industriels, intégrant caméras haute définition, enregistreur NVR, analytics vidéo et supervision à distance sécurisée.",
    specs: [
      { label: "Résolution", value: "4K / 2K selon application" },
      { label: "Caméras", value: "Dôme, PTZ, thermiques, ATEX" },
      { label: "Stockage", value: "NVR redondant jusqu'à 90 jours" },
      { label: "Accès distant", value: "Application mobile sécurisée" },
    ],
    performance: "Couvre l'intégralité du périmètre avec détection d'intrusion intelligente et alertes en temps réel.",
    pole: "safety",
    poleId: "safety",
    domain: "cctv",
    domainId: "cctv",
    pdfLink: "#",
    image: "/videosurveillance-industrielle-cctv.png",
  },
  {
    slug: "systeme-arret-urgence-esd-sil",
    title: "Système d'arrêt d'urgence (ESD / SIL)",
    shortDescription: "Sécurité fonctionnelle certifiée SIL pour process industriels critiques.",
    description:
      "Système d'arrêt d'urgence (ESD) conçu selon les normes IEC 61508/61511, intégrant automate de sécurité, boucles SIL 1/2 et interfaces opérateurs pour process pétro-chimiques et industriels.",
    specs: [
      { label: "Niveau SIL", value: "SIL 1 et SIL 2" },
      { label: "Normes", value: "IEC 61508 / IEC 61511" },
      { label: "Automate", value: "Safety PLC redondant" },
      { label: "Temps de réponse", value: "< 100 ms" },
    ],
    performance: "Garantit l'arrêt sécurisé du process en cas d'événement critique et protège les équipements et le personnel.",
    pole: "safety",
    poleId: "safety",
    domain: "esd",
    domainId: "esd",
    pdfLink: "#",
    image: "/systeme-arret-urgence-esd-sil.png",
  },

  // ── POLE: elec ────────────────────────────────────────────────────────
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
      { label: "Contrôle", value: "Variateur de vitesse intelligent" },
    ],
    performance: "Assure un renouvellement d'air efficace, la maîtrise des poussières et la sécurité des installations sensibles.",
    pole: "elec",
    poleId: "elec",
    domain: "atex",
    domainId: "atex",
    pdfLink: "#",
    image: "/installation-ventilation-industrielle-atex.png",
  },
  {
    slug: "armoire-electrique-industrielle-tgbt",
    title: "Armoire électrique industrielle (TGBT / commande moteur)",
    shortDescription: "Distribution électrique et commande moteur sur mesure pour sites industriels.",
    description:
      "Conception et fabrication d'armoires électriques industrielles : tableaux généraux basse tension (TGBT), armoires de commande moteur (MCC) et coffrets de distribution sur mesure.",
    specs: [
      { label: "Tension", value: "230 V à 690 V" },
      { label: "Courant", value: "Jusqu'à 4 000 A" },
      { label: "Indice protection", value: "IP54 à IP65" },
      { label: "Normes", value: "IEC 61439 / NF C 15-100" },
    ],
    performance: "Garantit une distribution électrique fiable, sécurisée et conforme aux normes avec une maintenance simplifiée.",
    pole: "elec",
    poleId: "elec",
    domain: "distribution",
    domainId: "distribution",
    pdfLink: "#",
    image: "/armoire-electrique-industrielle-tgbt.png",
  },
  {
    slug: "systeme-automatisme-plc",
    title: "Système d'automatisme PLC / automate programmable",
    shortDescription: "Automatisation de vos process industriels avec automates de dernière génération.",
    description:
      "Intégration complète de systèmes d'automatisme industriel : programmation PLC/API, développement IHM, câblage armoire et mise en service pour tous secteurs industriels.",
    specs: [
      { label: "Plateformes", value: "Siemens, Schneider, Allen-Bradley" },
      { label: "Langages", value: "Ladder, FBD, ST, SFC (IEC 61131-3)" },
      { label: "IHM", value: "Écrans tactiles et supervision locale" },
      { label: "Communication", value: "Profibus, Profinet, Modbus, EtherNet/IP" },
    ],
    performance: "Améliore la productivité, réduit les erreurs humaines et permet le diagnostic à distance des process automatisés.",
    pole: "elec",
    poleId: "elec",
    domain: "automation",
    domainId: "automation",
    pdfLink: "#",
    image: "/systeme-automatisme-plc.png",
  },
  {
    slug: "ups-onduleur-industriel",
    title: "UPS / onduleur industriel (continuité d'alimentation)",
    shortDescription: "Continuité d'alimentation garantie pour process et équipements critiques.",
    description:
      "Installation d'onduleurs industriels (UPS) pour la protection des équipements sensibles contre les coupures, surtensions et micro-coupures, avec autonomie adaptée au besoin.",
    specs: [
      { label: "Puissance", value: "1 kVA à 800 kVA" },
      { label: "Technologie", value: "Double conversion online (VFI)" },
      { label: "Autonomie", value: "10 min à plusieurs heures" },
      { label: "Batteries", value: "Plomb étanche ou Li-Ion" },
    ],
    performance: "Protège les équipements critiques et les données contre toute perturbation réseau avec un transfert nul.",
    pole: "elec",
    poleId: "elec",
    domain: "power",
    domainId: "power",
    pdfLink: "#",
    image: "/ups-onduleur-industriel.png",
  },

  // ── POLE: digital ─────────────────────────────────────────────────────
  {
    slug: "plateforme-iot-monitoring-environnemental",
    title: "Plateforme IoT de monitoring environnemental",
    shortDescription: "Surveillance temps réel des paramètres environnementaux de vos installations.",
    description:
      "Plateforme IoT industrielle pour la collecte, la visualisation et l'analyse en temps réel des données environnementales : qualité de l'air, consommations énergétiques, niveaux de bruit et émissions.",
    specs: [
      { label: "Capteurs", value: "Qualité air, eau, énergie, vibrations" },
      { label: "Connectivité", value: "LoRaWAN, 4G, Wi-Fi, filaire" },
      { label: "Dashboard", value: "Temps réel, alertes configurables" },
      { label: "Intégration", value: "API REST, export CSV/JSON" },
    ],
    performance: "Centralise toutes les données environnementales sur un seul tableau de bord et réduit les coûts de conformité réglementaire.",
    pole: "digital",
    poleId: "digital",
    domain: "iot",
    domainId: "iot",
    pdfLink: "#",
    image: "/plateforme-iot-monitoring.png",
  },
  {
    slug: "systeme-scada-industriel",
    title: "Système SCADA industriel (supervision & télégestion)",
    shortDescription: "Supervision centralisée et télégestion de vos installations industrielles.",
    description:
      "Déploiement de systèmes SCADA pour la supervision en temps réel, la télécommande et l'historisation des données de process industriels.",
    specs: [
      { label: "Logiciels", value: "Wonderware, Ignition, WinCC, AVEVA" },
      { label: "Architecture", value: "Client-serveur ou cloud hybride" },
      { label: "Redondance", value: "Serveur redondant hot-standby" },
      { label: "Cybersécurité", value: "Conformité IEC 62443" },
    ],
    performance: "Réduit les temps d'arrêt, améliore la réactivité opérationnelle et fournit un historique complet pour l'optimisation.",
    pole: "digital",
    poleId: "digital",
    domain: "scada",
    domainId: "scada",
    pdfLink: "#",
    image: "/systeme-scada-industriel.png",
  },
  {
    slug: "jumeau-numerique-installation-industrielle",
    title: "Jumeau numérique d'installation industrielle",
    shortDescription: "Simulation et optimisation de vos process grâce à la modélisation numérique.",
    description:
      "Création d'un jumeau numérique fidèle de votre installation industrielle permettant la simulation de scénarios d'exploitation, la détection d'anomalies et l'optimisation des performances sans risque.",
    specs: [
      { label: "Modélisation", value: "3D temps réel synchronisé process" },
      { label: "Données", value: "Intégration flux IoT et SCADA" },
      { label: "Simulation", value: "Scénarios d'optimisation et de pannes" },
      { label: "IA", value: "Apprentissage automatique intégré" },
    ],
    performance: "Réduit les coûts de maintenance préventive de 25 % et permet d'anticiper les pannes avant qu'elles surviennent.",
    pole: "digital",
    poleId: "digital",
    domain: "simulation",
    domainId: "simulation",
    pdfLink: "#",
    image: "/jumeau-numerique-installation-industrielle.png",
  },

  // ── POLE: nuclear ─────────────────────────────────────────────────────
  {
    slug: "detecteur-radioactivite",
    title: "Détecteur de radioactivité (fixe ou portable)",
    shortDescription: "Mesure et surveillance des rayonnements ionisants pour sites industriels et médicaux.",
    description:
      "Détecteurs de radioactivité certifiés pour la mesure des rayonnements alpha, bêta, gamma et X dans les installations industrielles nucléaires, médicales et de recherche.",
    specs: [
      { label: "Rayonnements", value: "Alpha, bêta, gamma, X" },
      { label: "Gamme", value: "0,01 µSv/h à 10 Sv/h" },
      { label: "Certification", value: "Conforme AIEA et réglementations locales" },
      { label: "Format", value: "Fixe mural ou portable terrain" },
    ],
    performance: "Assure une surveillance continue des zones à risque radiologique avec déclenchement d'alarme dès le dépassement du seuil réglementaire.",
    pole: "nuclear",
    poleId: "nuclear",
    domain: "detection",
    domainId: "detection",
    pdfLink: "#",
    image: "/detecteur-radioactivite.png",
  },
  {
    slug: "systeme-dosimetrie",
    title: "Système de dosimétrie (individuelle et collective)",
    shortDescription: "Suivi dosimétrique certifié pour la protection des travailleurs exposés aux rayonnements.",
    description:
      "Système complet de dosimétrie individuelle et collective pour le suivi de l'exposition aux rayonnements ionisants du personnel travaillant en zones contrôlées, conforme aux exigences AIEA.",
    specs: [
      { label: "Type dosimètre", value: "TLD, OSL ou électronique actif" },
      { label: "Rayonnements", value: "Gamma, X, bêta (selon modèle)" },
      { label: "Lecture", value: "Mensuelle ou temps réel (actif)" },
      { label: "Rapport", value: "Fiches d'exposition individuelles certifiées" },
    ],
    performance: "Garantit la conformité réglementaire et la traçabilité complète de l'exposition individuelle de chaque travailleur.",
    pole: "nuclear",
    poleId: "nuclear",
    domain: "dosimetry",
    domainId: "dosimetry",
    pdfLink: "#",
    image: "/systeme-dosimetrie.png",
  },

  // ── POLE: training ────────────────────────────────────────────────────
  {
    slug: "kit-formation-elearning-lms",
    title: "Kit de formation e-learning (accès plateforme LMS)",
    shortDescription: "Accès à une plateforme de formation en ligne couvrant tous les domaines Atlantic Dunes.",
    description:
      "Plateforme LMS hébergeant des modules de formation interactifs sur les thématiques eau, air, déchets, énergie, sécurité, électricité, digital et nucléaire.",
    specs: [
      { label: "Modules", value: "HSE, énergie, digital, nucléaire" },
      { label: "Formats", value: "Vidéo, quiz, simulateurs, PDF" },
      { label: "Accès", value: "Multi-appareils, 24h/24" },
      { label: "Suivi", value: "Tableau de bord progression et certificats" },
    ],
    performance: "Permet la montée en compétences autonome et à distance avec suivi certifié des acquis pour chaque apprenant.",
    pole: "training",
    poleId: "training",
    domain: "elearning",
    domainId: "elearning",
    pdfLink: "#",
    image: "/kit-formation-elearning-lms.png",
  },
  {
    slug: "simulateur-process-industriel",
    title: "Simulateur de process industriel (outil pédagogique)",
    shortDescription: "Outil de simulation interactif pour la formation pratique aux process industriels.",
    description:
      "Simulateur logiciel reproduisant fidèlement le comportement de process industriels (station d'épuration, SCADA, installation solaire) pour la formation pratique sans risque.",
    specs: [
      { label: "Process simulés", value: "STEP, SCADA, solaire, ESD" },
      { label: "Interface", value: "HMI réaliste avec scénarios de panne" },
      { label: "Déploiement", value: "Web, desktop ou tablette" },
      { label: "Personnalisation", value: "Scénarios adaptables à votre site" },
    ],
    performance: "Réduit le temps d'apprentissage de 40 % et prépare les opérateurs à gérer des situations d'urgence en toute sécurité.",
    pole: "training",
    poleId: "training",
    domain: "simulation",
    domainId: "simulation",
    pdfLink: "#",
    image: "/simulateur-process-industriel.png",
  },
];
