export type DomainTag = {
  slug: string;
  label: string;
  description: string;
};

export const domainTags: DomainTag[] = [
  { slug: "water", label: "Eau", description: "Traitement des eaux et eaux usées" },
  { slug: "air", label: "Air", description: "Qualité de l'air et émissions" },
  { slug: "waste", label: "Déchets", description: "Gestion et valorisation des déchets" },
  { slug: "maintenance", label: "Maintenance", description: "Contrats et services récurrents" },
  { slug: "solar-pv", label: "Solaire PV", description: "Installations photovoltaïques" },
  { slug: "solar-thermal", label: "Solaire thermique", description: "Chaleur solaire process" },
  { slug: "storage", label: "Stockage", description: "Batteries et systèmes de stockage" },
  { slug: "biogas", label: "Méthanisation", description: "Production de biogaz" },
  { slug: "carbon", label: "Bilan carbone", description: "Calcul et réduction des émissions" },
  { slug: "audit", label: "Audit énergétique", description: "Audits réglementaires et volontaires" },
  { slug: "fire", label: "Détection incendie", description: "Systèmes de détection incendie" },
  { slug: "gas", label: "Détection gaz", description: "Surveillance des atmosphères explosives" },
  { slug: "access", label: "Contrôle d'accès", description: "Sécurisation des accès" },
  { slug: "cctv", label: "Vidéosurveillance", description: "Caméras et supervision vidéo" },
  { slug: "esd", label: "Arrêt d'urgence", description: "Systèmes de sécurité fonctionnelle" },
  { slug: "distribution", label: "Distribution électrique", description: "Tableaux et armoires électriques" },
  { slug: "automation", label: "Automatisation", description: "Automates et supervision" },
  { slug: "power", label: "Onduleurs", description: "UPS et continuité d'alimentation" },
  { slug: "iot", label: "IoT industriel", description: "Collecte et supervision de données" },
  { slug: "scada", label: "SCADA", description: "Supervision et télégestion" },
  { slug: "simulation", label: "Simulation", description: "Jumeaux numériques et modélisation" },
  { slug: "detection", label: "Détection radioactivité", description: "Surveillance radiologique" },
  { slug: "dosimetry", label: "Dosimétrie", description: "Suivi des doses et conformité" },
  { slug: "radioprotection", label: "Radioprotection", description: "Protection contre les rayonnements" },
  { slug: "env", label: "Environnement", description: "Thématiques environnementales" },
  { slug: "energy", label: "Énergie", description: "Énergies renouvelables et électricité" },
  { slug: "safety", label: "Sécurité", description: "Sécurité industrielle et conformité" },
  { slug: "elec", label: "Électricité", description: "Ingénierie électrique et automatismes" },
  { slug: "digital", label: "Numérique", description: "Transformation digitale et IA" },
  { slug: "nuclear", label: "Nucléaire", description: "Expertise radioprotection et nucléaire" },
  { slug: "coaching", label: "Coaching HSE", description: "Accompagnement managérial HSE" },
  { slug: "elearning", label: "E-learning", description: "Formation en ligne" },
  { slug: "consulting", label: "Conseil", description: "Conseil en stratégie industrielle" },
  { slug: "ai", label: "IA prédictive", description: "Solutions d'IA et maintenance prédictive" },
];

const domainTagMap = Object.fromEntries(domainTags.map((tag) => [tag.slug, tag]));

export function getDomainLabel(slug: string) {
  return domainTagMap[slug]?.label ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getDomainDescription(slug: string) {
  return domainTagMap[slug]?.description ?? "";
}
