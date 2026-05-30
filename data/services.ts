export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  methodology: string[];
  deliverable: string;
  pole: string;
  poleId: string;
  domain: string;
  domainId: string;
  status?: "draft" | "published" | "archived";
  featured?: boolean;
  tags?: string[];
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const services: Service[] = [

  // ── POLE: env ─────────────────────────────────────────────────────────
  {
    slug: "etude-faisabilite-eau-air-dechets",
    title: "Étude de faisabilité (eau, air, déchets)",
    shortDescription: "Validez techniquement et économiquement votre projet de traitement industriel.",
    description:
      "Nous réalisons l'étude de faisabilité pour les enjeux eau, air et déchets afin de garantir une solution adaptée, rentable et conforme aux exigences locales.",
    methodology: [
      "Diagnostic des flux entrants et sortants",
      "Étude technico-économique des options de traitement",
      "Dimensionnement préliminaire des systèmes",
      "Évaluation des coûts d'exploitation et investissements",
    ],
    deliverable:
      "Rapport de faisabilité avec schéma de principe, budget estimatif et analyse des risques.",
    pole: "env",
    poleId: "env",
    domain: "water",
    domainId: "water",
    status: "published",
    featured: true,
    tags: ["faisabilité", "eau", "air", "déchets"],
    image: "/services/etude-faisabilite-eau-air-dechets.png",
    createdAt: "2026-01-10",
    updatedAt: "2026-04-01",
    seoTitle: "Étude de faisabilité eau-air-déchets | Atlantic Dunes",
    seoDescription: "Étude complète pour valider les projets de traitement industriel eau, air et déchets.",
  },
  {
    slug: "modelisation-dispersion-atmospherique",
    title: "Modélisation dispersion atmosphérique",
    shortDescription: "Prédisez l'impact des rejets atmosphériques sur votre environnement local.",
    description:
      "Avec des outils de modélisation avancés, nous estimons les concentrations atmosphériques et les zones d'exposition pour garantir la conformité et la sécurité.",
    methodology: [
      "Collecte des données d'émissions et paramètres météorologiques",
      "Simulation de dispersion selon la topographie locale",
      "Analyse des concentrations et des zones impactées",
      "Rapport de conformité et recommandations de réduction",
    ],
    deliverable:
      "Étude de dispersion atmosphérique complète avec cartes d'exposition et mesures préconisées.",
    pole: "env",
    poleId: "env",
    domain: "air",
    domainId: "air",
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
      "Plan d'action valorisation, traitement et conformité réglementaire",
    ],
    deliverable:
      "Diagnostic déchets avec scénarios de valorisation, coûts et schéma de filière.",
    pole: "env",
    poleId: "env",
    domain: "waste",
    domainId: "waste",
  },
  {
    slug: "mission-amo-environnementale",
    title: "Mission AMO environnementale",
    shortDescription: "Accompagnement maître d'ouvrage pour piloter vos projets industriels.",
    description:
      "Nous assistons le maître d'ouvrage sur les aspects environnementaux, réglementaires et techniques jusqu'à la réception du projet.",
    methodology: [
      "Analyse des besoins et rédaction du cahier des charges",
      "Suivi de l'ingénierie et des appels d'offres",
      "Coordination technique et environnementale",
      "Assistance à la mise en service et aux forfaits de conformité",
    ],
    deliverable:
      "Rapport de mission AMO avec jalons, recommandations techniques et tableau de suivi de conformité.",
    pole: "env",
    poleId: "env",
    domain: "waste",
    domainId: "waste",
  },
  {
    slug: "maintenance-station-traitement-eaux",
    title: "Contrat de maintenance station de traitement des eaux",
    shortDescription: "Garantissez la continuité et les performances de votre STEP avec un contrat annuel.",
    description:
      "Contrat de maintenance préventive et curative pour stations de traitement des eaux usées industrielles : contrôles périodiques, remplacement de pièces d'usure, calibration des capteurs et reporting de performance.",
    methodology: [
      "Visites préventives trimestrielles (inspection pompes, filtres, sondes)",
      "Calibration et étalonnage des capteurs de mesure",
      "Remplacement des consommables et pièces d'usure",
      "Rapport de performance trimestriel et recommandations",
    ],
    deliverable:
      "Contrat de maintenance annuel avec planning d'interventions, rapport trimestriel et hotline technique.",
    pole: "env",
    poleId: "env",
    domain: "maintenance",
    domainId: "maintenance",
  },
  {
    slug: "maintenance-unite-depoussierage-air",
    title: "Contrat de maintenance unité dépoussiérage & air",
    shortDescription: "Maintenez l'efficacité de vos unités de filtration et dépoussiérage.",
    description:
      "Contrat de maintenance pour unités de traitement de l'air et dépoussiéreurs industriels : remplacement des médias filtrants, contrôle des émissions et vérification des conformités ATEX.",
    methodology: [
      "Contrôle périodique des pressions différentielles et débits",
      "Remplacement programmé des cartouches, manches et filtres",
      "Vérification de la conformité ATEX et des liaisons équipotentielles",
      "Test d'efficacité par mesure des émissions à l'émissaire",
    ],
    deliverable:
      "Contrat annuel avec programme de remplacement filtrant, certificats de conformité ATEX et rapports d'émissions.",
    pole: "env",
    poleId: "env",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: energy ──────────────────────────────────────────────────────
  {
    slug: "calcul-bilan-carbone",
    title: "Calcul bilan carbone (scope 1, 2, 3)",
    shortDescription: "Mesurez l'empreinte climatique complète de votre activité industrielle.",
    description:
      "Nous évaluons les émissions directes et indirectes conformes aux standards GHG pour identifier les leviers de réduction les plus efficaces.",
    methodology: [
      "Collecte de données énergie, transport et chaîne d'approvisionnement",
      "Analyse des émissions Scope 1, 2 et 3",
      "Comparaison avec les obligations réglementaires et objectifs internes",
      "Plan d'action priorisé avec étapes de décarbonation",
    ],
    deliverable:
      "Rapport bilan carbone complet, synthèse des postes prioritaires et feuille de route de réduction.",
    pole: "energy",
    poleId: "energy",
    domain: "carbon",
    domainId: "carbon",
  },
  {
    slug: "audit-energetique",
    title: "Audit énergétique (réglementaire ou volontaire)",
    shortDescription: "Optimisez les performances énergétiques de vos installations industrielles.",
    description:
      "Qu'il s'agisse d'un audit réglementaire ou d'une démarche volontaire, nous identifions les pertes, améliorations et solutions techniques les plus pertinentes.",
    methodology: [
      "Analyse des consommations et des systèmes énergétiques",
      "Visites terrain et relevés instrumentation",
      "Benchmark par secteur et obligations réglementaires",
      "Recommandations ROI et plan de réduction des consommations",
    ],
    deliverable:
      "Rapport d'audit énergétique structuré avec priorités, budgets estimés et planning de mise en œuvre.",
    pole: "energy",
    poleId: "energy",
    domain: "audit",
    domainId: "audit",
  },
  {
    slug: "etude-dimensionnement-solaire-pv",
    title: "Étude de dimensionnement solaire PV",
    shortDescription: "Simulez et dimensionnez votre installation solaire avant tout investissement.",
    description:
      "Étude technique complète pour le dimensionnement d'une installation photovoltaïque : analyse de l'irradiation, étude des ombrages, simulation de production annuelle et calcul du retour sur investissement.",
    methodology: [
      "Analyse des données d'irradiation solaire et météorologiques locales",
      "Étude des masques et ombrages (bâtiments, végétation, équipements)",
      "Simulation de production avec logiciels PVsyst ou similaires",
      "Calcul du ROI, temps de retour et analyse de sensibilité tarifaire",
    ],
    deliverable:
      "Rapport de dimensionnement avec schéma d'implantation, simulation de production et business plan solaire.",
    pole: "energy",
    poleId: "energy",
    domain: "solar-pv",
    domainId: "solar-pv",
  },
  {
    slug: "audit-autoconsommation-rentabilite",
    title: "Audit d'autoconsommation & rentabilité",
    shortDescription: "Évaluez la rentabilité réelle de votre installation solaire en service.",
    description:
      "Audit de performance d'une installation photovoltaïque existante : analyse des courbes de consommation, optimisation du taux d'autoconsommation et recommandations pour améliorer le retour sur investissement.",
    methodology: [
      "Collecte et analyse des courbes de charge et de production PV",
      "Calcul du taux d'autoconsommation et d'autoproduction réels",
      "Identification des potentiels d'optimisation (stockage, effacement)",
      "Scénarios d'amélioration avec projection financière",
    ],
    deliverable:
      "Rapport d'audit avec indicateurs de performance, analyse financière et plan d'optimisation chiffré.",
    pole: "energy",
    poleId: "energy",
    domain: "solar-pv",
    domainId: "solar-pv",
  },
  {
    slug: "contrat-om-solaire-pv-bess",
    title: "Contrat O&M solaire PV & BESS",
    shortDescription: "Garantissez la performance et la durabilité de vos installations solaires et de stockage.",
    description:
      "Contrat d'exploitation et maintenance (O&M) pour installations photovoltaïques et systèmes de stockage BESS : nettoyage des panneaux, diagnostic onduleur, vérification des batteries et reporting de production.",
    methodology: [
      "Nettoyage semestriel des panneaux et inspection visuelle",
      "Diagnostic et thermographie infrarouge des strings PV",
      "Vérification du BMS et état de santé des batteries (BESS)",
      "Rapport mensuel de production avec KPIs et alertes de sous-performance",
    ],
    deliverable:
      "Contrat O&M annuel avec SLA de disponibilité, rapports mensuels de production et accès au portail de monitoring.",
    pole: "energy",
    poleId: "energy",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: safety ──────────────────────────────────────────────────────
  {
    slug: "etude-impact-environnemental",
    title: "Étude d'impact environnemental",
    shortDescription: "Évaluez les risques et impacts environnementaux avant un projet industriel.",
    description:
      "Notre équipe réalise l'analyse technique, réglementaire et écologique nécessaire pour garantir la conformité environnementale dès la phase de conception.",
    methodology: [
      "Inventaire des enjeux locaux eau, air, sol et biodiversité",
      "Analyse des scénarios d'exploitation et d'impact",
      "Évaluation des risques et des mesures de réduction",
      "Rédaction du dossier et accompagnement administratif",
    ],
    deliverable:
      "Dossier d'étude d'impact détaillé avec recommandations de mitigation et synthèse décisionnelle.",
    pole: "safety",
    poleId: "safety",
    domain: "eco",
    domainId: "eco",
  },
  {
    slug: "analyse-cycle-de-vie-acv",
    title: "Analyse du cycle de vie (ACV)",
    shortDescription: "Mesurez l'impact environnemental de vos produits ou installations sur tout leur cycle.",
    description:
      "Nous appliquons une méthode ACV précise pour calculer les impacts sur le climat, l'eau, les déchets et l'épuisement des ressources.",
    methodology: [
      "Cartographie des flux matières et énergie",
      "Inventaire des données de cycle de vie",
      "Calcul des impacts environnementaux selon ISO 14040/44",
      "Synthèse des indicateurs et recommandations d'optimisation",
    ],
    deliverable:
      "Étude ACV complète avec indicateurs environnementaux et pistes d'écoconception.",
    pole: "safety",
    poleId: "safety",
    domain: "eco",
    domainId: "eco",
  },
  {
    slug: "dossier-conformite-icpe",
    title: "Dossier de conformité (ICPE, autorisation environnementale)",
    shortDescription: "Préparez votre dossier administratif pour le régime ICPE et l'autorisation environnementale.",
    description:
      "Nos experts rédigent et structurent les dossiers de conformité réglementaire pour sécuriser vos démarches d'exploitation industrielle.",
    methodology: [
      "Collecte des données procédés et installations",
      "Rédaction des notices ICPE et analyses réglementaires",
      "Simulation des rejets atmosphériques et des pollutions",
      "Suivi des échanges avec les autorités compétentes",
    ],
    deliverable:
      "Dossier de conformité prêt à dépôt avec annexes techniques, études d'impact et formulaires réglementaires.",
    pole: "safety",
    poleId: "safety",
    domain: "regulatory",
    domainId: "regulatory",
  },
  {
    slug: "etude-danger-risque-industriel",
    title: "Étude de danger / risque industriel",
    shortDescription: "Analysez et maîtrisez les risques liés à vos installations et procédés.",
    description:
      "Nos études évaluent les scénarios d'accidents, les effets de surpression, l'incendie et l'exposition pour protéger vos équipes et vos installations.",
    methodology: [
      "Identification des aléas et scénarios critiques",
      "Étude des conséquences et des distances de sécurité",
      "Analyse des dispositifs de prévention existants",
      "Recommandations d'amélioration et de protection",
    ],
    deliverable:
      "Étude de danger structurée avec cartographie des risques, mesures correctives et plan d'action.",
    pole: "safety",
    poleId: "safety",
    domain: "risk",
    domainId: "risk",
  },
  {
    slug: "verification-etalonnage-detecteurs-gaz-incendie",
    title: "Contrat de vérification & étalonnage détecteurs gaz / incendie",
    shortDescription: "Maintenez la fiabilité de vos systèmes de détection avec des vérifications périodiques certifiées.",
    description:
      "Contrat de vérification et d'étalonnage périodique des détecteurs de gaz et des systèmes de détection incendie, conforme aux obligations réglementaires pour les installations classées.",
    methodology: [
      "Test fonctionnel de chaque détecteur et déclencheur",
      "Étalonnage des capteurs gaz avec gaz étalons certifiés",
      "Vérification de la centrale incendie et des liaisons de transmission",
      "Remise du certificat de vérification réglementaire",
    ],
    deliverable:
      "Certificat annuel de vérification avec rapport détaillé par équipement et fiche de non-conformités éventuelles.",
    pole: "safety",
    poleId: "safety",
    domain: "maintenance",
    domainId: "maintenance",
  },
  {
    slug: "maintenance-esd-acces-cctv",
    title: "Contrat de maintenance systèmes ESD / contrôle d'accès / CCTV",
    shortDescription: "Assurez la disponibilité continue de vos systèmes de sécurité critiques.",
    description:
      "Contrat de maintenance préventive et curative pour systèmes d'arrêt d'urgence (ESD), contrôle d'accès et vidéosurveillance industrielle, avec garantie de temps d'intervention.",
    methodology: [
      "Test périodique des boucles ESD et relais de sécurité",
      "Vérification des lecteurs d'accès, caméras et enregistreurs",
      "Mise à jour des firmwares et licences logicielles",
      "Intervention curative sous 4h en cas de défaillance critique",
    ],
    deliverable:
      "Contrat de maintenance avec SLA défini, rapport semestriel de bon fonctionnement et accès au support technique.",
    pole: "safety",
    poleId: "safety",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: elec ────────────────────────────────────────────────────────
  {
    slug: "audit-installations-electriques",
    title: "Audit des installations électriques",
    shortDescription: "Vérifiez la conformité et la performance de vos installations électriques industrielles.",
    description:
      "Audit complet des installations électriques industrielles : conformité NF C 15-100, bilan de puissance, analyse des protections, qualité du réseau et recommandations de mise en conformité.",
    methodology: [
      "Inventaire et contrôle visuel des tableaux et équipements",
      "Mesures thermographiques infrarouge des armoires et connexions",
      "Analyse de la qualité du réseau (harmoniques, déséquilibres)",
      "Vérification des protections différentielles et liaisons équipotentielles",
    ],
    deliverable:
      "Rapport d'audit électrique avec niveaux de priorité, estimations de travaux et planning de mise en conformité.",
    pole: "elec",
    poleId: "elec",
    domain: "distribution",
    domainId: "distribution",
  },
  {
    slug: "etude-automatisation-instrumentation",
    title: "Étude d'automatisation & instrumentation (I&E)",
    shortDescription: "Concevez vos architectures d'automatisme et d'instrumentation industrielle.",
    description:
      "Étude complète d'automatisation et d'instrumentation industrielle : définition de l'architecture PLC/SCADA, rédaction des spécifications fonctionnelles, loop diagrams et liste des instruments.",
    methodology: [
      "Analyse fonctionnelle du process et définition des boucles de régulation",
      "Rédaction des spécifications fonctionnelles (SFI) et des P&ID",
      "Sélection des instruments et capteurs selon les conditions process",
      "Rédaction des loop diagrams et fiches de câblage",
    ],
    deliverable:
      "Dossier I&E complet avec P&ID, liste instruments, loop diagrams et cahier des charges PLC/SCADA.",
    pole: "elec",
    poleId: "elec",
    domain: "automation",
    domainId: "automation",
  },
  {
    slug: "maintenance-preventive-tgbt-ups-atex",
    title: "Contrat de maintenance préventive TGBT, UPS & ventilation ATEX",
    shortDescription: "Prévenez les pannes électriques critiques avec un programme de maintenance structuré.",
    description:
      "Contrat de maintenance préventive pour les infrastructures électriques critiques : tableaux généraux basse tension, onduleurs UPS et systèmes de ventilation ATEX.",
    methodology: [
      "Thermographie infrarouge annuelle des tableaux électriques et connexions",
      "Test de décharge et vérification des batteries UPS",
      "Contrôle mécanique et électrique des ventilateurs ATEX",
      "Serrage des connexions, nettoyage et mise à jour du carnet de maintenance",
    ],
    deliverable:
      "Rapport annuel de maintenance avec thermogrammes, état des batteries et recommandations de remplacement.",
    pole: "elec",
    poleId: "elec",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: digital ─────────────────────────────────────────────────────
  {
    slug: "deploiement-iot-industriel",
    title: "Déploiement IoT industriel",
    shortDescription: "Connectez vos équipements et collectez vos données industrielles en temps réel.",
    description:
      "Service de déploiement IoT industriel clé en main : sélection des capteurs, architecture réseau, intégration sur plateforme cloud ou on-premise et formation des équipes.",
    methodology: [
      "Audit des équipements à connecter et définition des KPIs à surveiller",
      "Architecture réseau IoT (LoRaWAN, 4G, Modbus, OPC-UA)",
      "Déploiement et configuration des capteurs et passerelles",
      "Intégration sur plateforme de visualisation et formation utilisateurs",
    ],
    deliverable:
      "Architecture IoT déployée, documentation technique, tableau de bord opérationnel et formation équipes.",
    pole: "digital",
    poleId: "digital",
    domain: "iot",
    domainId: "iot",
  },
  {
    slug: "developpement-solution-ia-predictive",
    title: "Développement de solution IA prédictive",
    shortDescription: "Anticipez les pannes et optimisez vos process grâce à l'intelligence artificielle.",
    description:
      "Développement de modèles d'intelligence artificielle pour la maintenance prédictive, la détection d'anomalies et l'optimisation des process industriels à partir de vos données opérationnelles.",
    methodology: [
      "Collecte et qualification des données historiques process",
      "Sélection et entraînement des modèles ML adaptés",
      "Validation des performances et intégration dans les outils opérationnels",
      "Déploiement en production et suivi de la dérive des modèles",
    ],
    deliverable:
      "Modèle IA déployé avec interface de visualisation, documentation technique et plan de maintenance du modèle.",
    pole: "digital",
    poleId: "digital",
    domain: "ai",
    domainId: "ai",
  },
  {
    slug: "conseil-transformation-numerique-industrielle",
    title: "Conseil en transformation numérique industrielle",
    shortDescription: "Définissez votre feuille de route digitale pour l'industrie 4.0.",
    description:
      "Mission de conseil pour accompagner les industriels dans leur transformation numérique : évaluation de la maturité digitale, définition de la stratégie et sélection des technologies adaptées.",
    methodology: [
      "Évaluation de la maturité digitale par domaine (IoT, données, IA, SCADA)",
      "Benchmark des solutions du marché et cartographie des usages",
      "Définition de la feuille de route digitale avec priorisation des projets",
      "Accompagnement au choix des partenaires et à la mise en œuvre",
    ],
    deliverable:
      "Rapport de maturité digitale, feuille de route priorisée et cahier des charges des projets prioritaires.",
    pole: "digital",
    poleId: "digital",
    domain: "consulting",
    domainId: "consulting",
  },
  {
    slug: "maintenance-scada-iot",
    title: "Contrat de maintenance SCADA / IoT",
    shortDescription: "Assurez la disponibilité et la sécurité de vos systèmes de supervision et IoT.",
    description:
      "Contrat de maintenance applicative et infrastructure pour systèmes SCADA et plateformes IoT industrielles : mises à jour, sauvegardes, cybersécurité et support technique.",
    methodology: [
      "Mises à jour régulières des logiciels SCADA et firmwares IoT",
      "Vérification des sauvegardes et tests de restauration",
      "Audit de cybersécurité trimestriel selon IEC 62443",
      "Support technique réactif et assistance en cas d'incident",
    ],
    deliverable:
      "Contrat de maintenance avec SLA de disponibilité, rapport trimestriel de sécurité et journal des interventions.",
    pole: "digital",
    poleId: "digital",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: nuclear ─────────────────────────────────────────────────────
  {
    slug: "dosimetrie-installations-industrielles-medicales",
    title: "Dosimétrie pour installations industrielles et médicales",
    shortDescription: "Suivi dosimétrique réglementaire pour la protection des travailleurs exposés.",
    description:
      "Service de dosimétrie individuelle et collective conforme aux exigences réglementaires AIEA pour les installations industrielles (gammagraphie, jaugeage) et médicales (radiologie, radiothérapie).",
    methodology: [
      "Mise en place des postes dosimétriques individuels et collectifs",
      "Collecte mensuelle et lecture des dosimètres TLD ou OSL",
      "Interprétation des résultats et détection des expositions anormales",
      "Transmission des données à l'organisme agréé et archivage réglementaire",
    ],
    deliverable:
      "Fiches d'exposition individuelles certifiées, rapport mensuel de surveillance et registre réglementaire des doses.",
    pole: "nuclear",
    poleId: "nuclear",
    domain: "dosimetry",
    domainId: "dosimetry",
  },
  {
    slug: "audit-radioprotection",
    title: "Audit de radioprotection pour installations industrielles et médicales",
    shortDescription: "Évaluez la conformité de votre installation aux exigences de radioprotection AIEA.",
    description:
      "Audit de radioprotection réalisé par des experts certifiés AIEA pour évaluer l'organisation, les procédures, les équipements et la formation du personnel en matière de protection contre les rayonnements.",
    methodology: [
      "Revue documentaire (procédures, zonage, registres d'exposition)",
      "Inspection terrain des zones contrôlées et surveillées",
      "Évaluation de la signalétique, des EPI et des équipements de mesure",
      "Entretiens avec le personnel et vérification des habilitations",
    ],
    deliverable:
      "Rapport d'audit de radioprotection avec niveaux de non-conformité, plan d'action correctif et recommandations AIEA.",
    pole: "nuclear",
    poleId: "nuclear",
    domain: "radioprotection",
    domainId: "radioprotection",
  },
  {
    slug: "etalonnage-detecteurs-echange-dosimetres",
    title: "Étalonnage annuel détecteurs & échange dosimètres",
    shortDescription: "Maintenez la précision métrologique de vos équipements de mesure radiologique.",
    description:
      "Service annuel d'étalonnage des détecteurs de rayonnements ionisants et d'échange des dosimètres individuels, conforme aux exigences métrologiques et réglementaires.",
    methodology: [
      "Collecte et envoi des dosimètres au laboratoire agréé",
      "Étalonnage des détecteurs sur banc de référence certifié",
      "Vérification des certificats d'étalonnage et des incertitudes de mesure",
      "Fourniture des nouveaux dosimètres et mise à jour du registre métrologique",
    ],
    deliverable:
      "Certificats d'étalonnage certifiés, registre métrologique mis à jour et rapport de conformité réglementaire.",
    pole: "nuclear",
    poleId: "nuclear",
    domain: "maintenance",
    domainId: "maintenance",
  },

  // ── POLE: training ────────────────────────────────────────────────────
  {
    slug: "formation-traitement-eaux-air-dechets",
    title: "Formation traitement des eaux, air et déchets",
    shortDescription: "Maîtrisez les technologies de traitement environnemental industriel.",
    description:
      "Formation théorique et pratique sur les technologies de traitement des eaux usées, de l'air industriel et des déchets, dispensée par des ingénieurs experts Atlantic Dunes.",
    methodology: [
      "Modules théoriques sur les procédés biologiques, physiques et chimiques",
      "Exercices pratiques sur simulateur de station d'épuration",
      "Études de cas réels issus de projets Atlantic Dunes",
      "Évaluation des acquis et remise d'un certificat de formation",
    ],
    deliverable:
      "Certificat de formation, support de cours complet et accès e-learning pendant 6 mois.",
    pole: "training",
    poleId: "training",
    domain: "env",
    domainId: "env",
  },
  {
    slug: "formation-energies-renouvelables-solaire-pv",
    title: "Formation énergies renouvelables & solaire PV",
    shortDescription: "Acquérez les compétences pour concevoir et exploiter des installations solaires.",
    description:
      "Formation complète sur les énergies renouvelables industrielles : photovoltaïque, solaire thermique, stockage par batteries et dimensionnement de systèmes hybrides.",
    methodology: [
      "Fondamentaux du solaire PV : composants, onduleurs, câblage et sécurité",
      "Dimensionnement avec logiciels PVsyst et calcul de rentabilité",
      "Exploitation et maintenance des installations PV et BESS",
      "Atelier pratique sur kit solaire démonstration",
    ],
    deliverable:
      "Certificat de formation, guide de dimensionnement et accès à la bibliothèque technique Atlantic Dunes.",
    pole: "training",
    poleId: "training",
    domain: "energy",
    domainId: "energy",
  },
  {
    slug: "formation-securite-industrielle-reglementation",
    title: "Formation sécurité industrielle & réglementation",
    shortDescription: "Formez vos équipes aux exigences réglementaires et aux bonnes pratiques HSE.",
    description:
      "Formation aux fondamentaux de la sécurité industrielle : réglementation ICPE, prévention des risques d'explosion (ATEX), gestion des produits dangereux et élaboration des plans de prévention.",
    methodology: [
      "Cadre réglementaire ICPE, REACH et directives européennes",
      "Identification et évaluation des risques industriels (ATEX, chimique, incendie)",
      "Rédaction des documents sécurité : DUER, plan de prévention, permis feu",
      "Exercices pratiques et mises en situation d'urgence",
    ],
    deliverable:
      "Certificat de formation, modèles de documents HSE et accès au référentiel réglementaire Atlantic Dunes.",
    pole: "training",
    poleId: "training",
    domain: "safety",
    domainId: "safety",
  },
  {
    slug: "formation-electrotechnique-automatismes",
    title: "Formation électrotechnique & automatismes industriels",
    shortDescription: "Développez les compétences de vos techniciens en électricité et automatisme.",
    description:
      "Formation pratique en électrotechnique industrielle et automatismes : lecture de schémas électriques, programmation PLC, câblage d'armoires et diagnostic de pannes.",
    methodology: [
      "Lecture et interprétation de schémas électriques industriels",
      "Programmation PLC en Ladder et blocs fonctionnels (IEC 61131-3)",
      "Câblage et mise en service d'armoires de commande sur maquette",
      "Diagnostic de pannes et utilisation des outils de mesure",
    ],
    deliverable:
      "Certificat de formation, exercices pratiques et accès à la bibliothèque de schémas types Atlantic Dunes.",
    pole: "training",
    poleId: "training",
    domain: "elec",
    domainId: "elec",
  },
  {
    slug: "formation-iot-scada-ia-industrielle",
    title: "Formation IoT, SCADA & IA industrielle",
    shortDescription: "Maîtrisez les outils du numérique industriel pour l'industrie 4.0.",
    description:
      "Formation aux technologies numériques industrielles : architecture IoT, supervision SCADA, traitement de données et introduction à l'intelligence artificielle appliquée au process.",
    methodology: [
      "Architecture IoT industrielle : capteurs, protocoles et plateformes",
      "Création de tableaux de bord SCADA et configuration des alarmes",
      "Introduction au machine learning pour la maintenance prédictive",
      "Atelier pratique : connexion d'un capteur IoT et visualisation en temps réel",
    ],
    deliverable:
      "Certificat de formation, accès à l'environnement de démonstration SCADA/IoT et guide de démarrage rapide.",
    pole: "training",
    poleId: "training",
    domain: "digital",
    domainId: "digital",
  },
  {
    slug: "formation-radioprotection-dosimetrie-aiea",
    title: "Formation radioprotection & dosimétrie (certifiée AIEA)",
    shortDescription: "Formation certifiée AIEA pour les travailleurs exposés aux rayonnements ionisants.",
    description:
      "Formation de radioprotection conforme aux recommandations AIEA, destinée aux travailleurs des installations industrielles et médicales utilisant des sources radioactives ou des équipements émetteurs de rayonnements X.",
    methodology: [
      "Fondamentaux de la physique des rayonnements et effets biologiques",
      "Réglementation internationale et nationale en radioprotection",
      "Principes de justification, optimisation (ALARA) et limitation des doses",
      "Manipulation des sources, équipements de protection et conduite en cas d'incident",
    ],
    deliverable:
      "Certificat de formation reconnu AIEA, carnet de formation individuel et accès aux mises à jour réglementaires.",
    pole: "training",
    poleId: "training",
    domain: "nuclear",
    domainId: "nuclear",
  },
  {
    slug: "coaching-accompagnement-managerial-hse",
    title: "Coaching & accompagnement managérial HSE",
    shortDescription: "Renforcez le leadership HSE de vos managers et responsables de site.",
    description:
      "Programme de coaching individuel et collectif pour renforcer les compétences managériales en Hygiène, Sécurité et Environnement, adapter les comportements et ancrer une culture HSE durable.",
    methodology: [
      "Diagnostic des pratiques managériales HSE et identification des axes de progrès",
      "Séances de coaching individuel et ateliers collectifs de co-développement",
      "Simulations de gestion de crise et de communication sécurité",
      "Plan de développement personnalisé et suivi à 3 et 6 mois",
    ],
    deliverable:
      "Plan de développement managérial HSE, rapport de progression et attestation de coaching professionnel.",
    pole: "training",
    poleId: "training",
    domain: "coaching",
    domainId: "coaching",
  },
];
