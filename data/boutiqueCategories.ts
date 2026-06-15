export type BoutiqueCategory = {
  slug: string;
  label: string;
  description: string;
  subcategories: Array<{
    slug: string;
    label: string;
    description?: string;
  }>;
};

export const boutiqueCategories: BoutiqueCategory[] = [
  {
    slug: "water-solutions",
    label: "Solutions eau",
    description: "Équipements pour le traitement, la gestion et le recyclage de l'eau industrielle.",
    subcategories: [
      { slug: "pumps", label: "Pompes", description: "Pompes et systèmes de transfert d'eau." },
      { slug: "filters", label: "Filtration", description: "Filtration et traitement des effluents." },
      { slug: "air-treatment", label: "Air & poussière", description: "Solutions pour la gestion des poussières et de l'air." },
    ],
  },
  {
    slug: "energy-systems",
    label: "Systèmes énergie",
    description: "Matériel pour production, conversion et stockage d'énergie industrielle.",
    subcategories: [
      { slug: "pv", label: "Photovoltaïque", description: "Panneaux solaires et kits PV." },
      { slug: "storage", label: "Stockage", description: "Batteries et solutions de stockage d'énergie." },
      { slug: "power-electronics", label: "Électronique de puissance", description: "Onduleurs et onduleurs hybrides." },
    ],
  },
  {
    slug: "safety-equipment",
    label: "Équipements sécurité",
    description: "Dispositifs de sécurité, détection et protection des personnes et installations.",
    subcategories: [
      { slug: "gas-detection", label: "Détection gaz", description: "Détecteurs et stations multi-gaz." },
      { slug: "cctv", label: "Vidéo-surveillance", description: "Caméras thermiques et systèmes de surveillance." },
      { slug: "radiation", label: "Radioprotection", description: "Équipements et mesures radiologiques." },
    ],
  },
  {
    slug: "digital-automation",
    label: "Automatisation & supervision",
    description: "Produits pour automatisation, IoT, SCADA et monitoring industriel.",
    subcategories: [
      { slug: "iot", label: "IoT & connectivité", description: "Capteurs et passerelles LoRaWAN." },
      { slug: "scada", label: "SCADA", description: "Consoles et solutions de supervision." },
      { slug: "simulation", label: "Simulation", description: "Stations et simulateurs de processus." },
    ],
  },
  {
    slug: "training-solutions",
    label: "Formation & sécurité",
    description: "Outils pédagogiques, stations de formation et solutions HSE.",
    subcategories: [
      { slug: "hse", label: "HSE", description: "Kits formation santé, sécurité et environnement." },
      { slug: "elearning", label: "E-learning", description: "Modules et plateformes de formation digital." },
      { slug: "simulation", label: "Simulateurs", description: "Stations de simulation de processus industriels." },
    ],
  },
];
