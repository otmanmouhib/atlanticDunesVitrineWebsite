export type Pole = {
  slug: string;
  label: string;
  shortDescription: string;
};

export const poles: Pole[] = [
  {
    slug: "env",
    label: "Environnement & Traitement Industriel",
    shortDescription: "Solutions de traitement des eaux, de l'air et des déchets industriels.",
  },
  {
    slug: "energy",
    label: "Énergie & Développement Durable",
    shortDescription: "Énergies renouvelables, solaire PV, stockage et décarbonation industrielle.",
  },
  {
    slug: "safety",
    label: "Sécurité & Conformité",
    shortDescription: "Systèmes de sécurité industrielle et conformité réglementaire.",
  },
  {
    slug: "elec",
    label: "Ingénierie Électrique",
    shortDescription: "Installations électriques, automatismes et continuité d'alimentation.",
  },
  {
    slug: "digital",
    label: "Numérique & IA",
    shortDescription: "IoT industriel, SCADA, jumeaux numériques et intelligence artificielle.",
  },
  {
    slug: "nuclear",
    label: "Nucléaire & Radioprotection",
    shortDescription: "Expertise certifiée AIEA en dosimétrie et radioprotection industrielle et médicale.",
  },
  {
    slug: "training",
    label: "Formation & Coaching",
    shortDescription: "Formations inter et intra-entreprise dispensées par nos experts certifiés.",
  },
];

export const poleMap = Object.fromEntries(poles.map((pole) => [pole.slug, pole]));

export function getPoleLabel(slug: string) {
  return poleMap[slug]?.label ?? slug;
}
