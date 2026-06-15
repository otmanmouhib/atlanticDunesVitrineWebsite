export type DomainTag = {
  slug: string;
  label: string;
  description: string;
};

export type Pole = {
  slug: string;
  label: string;
  shortDescription: string;
  domains: DomainTag[];
};

export const poles: Pole[] = [
  {
    slug: "env",
    label: "Environnement & Traitement Industriel",
    shortDescription: "Solutions de traitement des eaux, de l'air et des déchets industriels.",
    domains: [
      { slug: "water", label: "Eau", description: "Traitement des eaux et eaux usées" },
      { slug: "air", label: "Air", description: "Qualité de l'air et émissions" },
      { slug: "waste", label: "Déchets", description: "Gestion et valorisation des déchets" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
    ],
  },
  {
    slug: "energy",
    label: "Énergie & Développement Durable",
    shortDescription: "Énergies renouvelables, solaire PV, stockage et décarbonation industrielle.",
    domains: [
      { slug: "audit", label: "Audit énergétique", description: "Audits réglementaires et volontaires" },
      { slug: "biogas", label: "Méthanisation", description: "Production de biogaz" },
      { slug: "carbon", label: "Bilan carbone", description: "Calcul et réduction des émissions" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
      { slug: "power", label: "Onduleurs", description: "UPS et continuité d'alimentation" },
      { slug: "solar-pv", label: "Solaire PV", description: "Installations photovoltaïques" },
      { slug: "solar-thermal", label: "Solaire thermique", description: "Chaleur solaire process" },
      { slug: "storage", label: "Stockage", description: "Batteries et systèmes de stockage" },
    ],
  },
  {
    slug: "safety",
    label: "Sécurité & Conformité",
    shortDescription: "Systèmes de sécurité industrielle et conformité réglementaire.",
    domains: [
      { slug: "access", label: "Contrôle d'accès", description: "Sécurisation des accès" },
      { slug: "cctv", label: "Vidéosurveillance", description: "Caméras et supervision vidéo" },
      { slug: "esd", label: "Arrêt d'urgence", description: "Systèmes de sécurité fonctionnelle" },
      { slug: "fire", label: "Détection incendie", description: "Systèmes de détection incendie" },
      { slug: "gas", label: "Détection gaz", description: "Surveillance des atmosphères explosives" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
      { slug: "regulatory", label: "Réglementation", description: "Conformité réglementaire et audits normatifs" },
      { slug: "risk", label: "Risques", description: "Analyse et prévention des risques industriels" },
      { slug: "eco", label: "Écologie", description: "Conseil en management environnemental et sécurité" },
    ],
  },
  {
    slug: "elec",
    label: "Ingénierie Électrique",
    shortDescription: "Installations électriques, automatismes et continuité d'alimentation.",
    domains: [
      { slug: "atex", label: "ATEX", description: "Étude et conformité ATEX pour atmosphères explosibles" },
      { slug: "automation", label: "Automatisation", description: "Automates et supervision" },
      { slug: "distribution", label: "Distribution électrique", description: "Tableaux et armoires électriques" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
      { slug: "power", label: "Onduleurs", description: "UPS et continuité d'alimentation" },
    ],
  },
  {
    slug: "digital",
    label: "Numérique & IA",
    shortDescription: "IoT industriel, SCADA, jumeaux numériques et intelligence artificielle.",
    domains: [
      { slug: "ai", label: "IA prédictive", description: "Solutions d'IA et maintenance prédictive" },
      { slug: "consulting", label: "Conseil", description: "Conseil en stratégie industrielle" },
      { slug: "iot", label: "IoT industriel", description: "Collecte et supervision de données" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
      { slug: "scada", label: "SCADA", description: "Supervision et télégestion" },
      { slug: "simulation", label: "Simulation", description: "Jumeaux numériques et modélisation" },
    ],
  },
  {
    slug: "nuclear",
    label: "Nucléaire & Radioprotection",
    shortDescription: "Expertise certifiée AIEA en dosimétrie et radioprotection industrielle et médicale.",
    domains: [
      { slug: "detection", label: "Détection radioactivité", description: "Surveillance radiologique" },
      { slug: "dosimetry", label: "Dosimétrie", description: "Suivi des doses et conformité" },
      { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
      { slug: "radioprotection", label: "Radioprotection", description: "Protection contre les rayonnements" },
    ],
  },
  {
    slug: "training",
    label: "Formation & Coaching",
    shortDescription: "Formations inter et intra-entreprise dispensées par nos experts certifiés.",
    domains: [
      { slug: "coaching", label: "Coaching HSE", description: "Accompagnement managérial HSE" },
      { slug: "digital", label: "Numérique", description: "Transformation digitale et IA" },
      { slug: "elearning", label: "E-learning", description: "Formation en ligne" },
      { slug: "elec", label: "Électricité", description: "Ingénierie électrique et automatismes" },
      { slug: "energy", label: "Énergie", description: "Énergies renouvelables et électricité" },
      { slug: "env", label: "Environnement", description: "Thématiques environnementales" },
      { slug: "nuclear", label: "Nucléaire", description: "Expertise radioprotection et nucléaire" },
      { slug: "safety", label: "Sécurité", description: "Sécurité industrielle et conformité" },
      { slug: "simulation", label: "Simulation", description: "Jumeaux numériques et modélisation" },
    ],
  },
];

export const poleMap = Object.fromEntries(poles.map((pole) => [pole.slug, pole]));

export function getPoleLabel(slug: string) {
  return poleMap[slug]?.label ?? slug;
}
