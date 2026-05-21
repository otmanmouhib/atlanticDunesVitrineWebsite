import Link from "next/link";

const certifications = [
  {
    title: "ATEX zone 1/2 & 21/22",
    category: "Sécurité explosible",
    description:
      "Études de conformité ATEX, vérification des zones, plans de protection, et qualifications pour installations en atmosphères explosives.",
    highlights: ["Dossiers ATEX complets", "Mesures de protection électrique", "Audit de zonage"],
  },
  {
    title: "NF C 15-100",
    category: "Installations électriques",
    description:
      "Contrôles électriques et conformité des tableaux, câblages et protections pour sites industriels et process.",
    highlights: ["Cahier de conformité électrique", "Vérification des protections", "Rapport de conformité"],
  },
  {
    title: "IEC 62443",
    category: "Cybersécurité industrielle",
    description:
      "Audit de sécurité des systèmes de contrôle, analyse des risques réseaux et recommandations conformes aux normes IEC 62443.",
    highlights: ["Analyse de risques SCADA", "Recommandations de durcissement", "Support de conformité"],
  },
  {
    title: "EN 54",
    category: "Détection incendie",
    description:
      "Validation des systèmes de détection incendie, procédures d’essai et certification des dispositifs selon EN 54.",
    highlights: ["Essais de performance", "Documentation de conformité", "Livraison de certificats"],
  },
  {
    title: "AIEA / Radioprotection",
    category: "Radioprotection",
    description:
      "Certifications et dossiers pour installations radiologiques, suivi des équipements et conformité aux exigences AIEA.",
    highlights: ["Rapports de conformité radioprotection", "Suivi des équipements", "Dossiers d’autorisation"],
  },
  {
    title: "ICPE & autorisation environnementale",
    category: "Environnement réglementaire",
    description:
      "Dossiers de déclaration ou d’autorisation ICPE, études d’impact, et appels de conformité environnementale.",
    highlights: ["Rapports réglementaires", "Plans de gestion des émissions", "Accompagnement dossier"],
  },
];

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 xl:px-16">
      <div className="space-y-10 lg:space-y-12">
        <header className="rounded-[2.25rem] border border-slate-200/90 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Catalogue des certifications</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Les certifications Atlantic Dunes pour vos projets industriels.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
            Découvrez notre catalogue de références en conformité et certifications industrielles. Chaque fiche présente les normes couvertes, les usages et les points de valeur ajoutée pour votre site.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert.title} className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{cert.category}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">{cert.title}</h2>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">
                  {cert.title.split(" ")[0]}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">{cert.description}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                {cert.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.65fr] lg:items-start">
          <section className="rounded-[2.25rem] border border-slate-200/90 bg-brand-50 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-700">Catalogue détaillé</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Certification & conformité sur mesure</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
              Notre catalogue couvre les certifications détenues et celles que nous accompagnons sur site. Nous fournissons des dossiers, des rapports et un appui réglementaire pour chaque étape de la conformité.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-700" />Documentation prête à l’audit et aux autorités.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-700" />Accompagnement pour la conformité ICPE, ATEX, radioprotection et cybersécurité.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-700" />Validation des installations et certifications délivrées sous forme de rapports clairs.
              </li>
            </ul>
          </section>

          <aside className="space-y-8 lg:space-y-10">
            <div className="rounded-[2.25rem] border border-slate-200/90 bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Supports disponibles</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">Attestations & rapports</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  Des attestations de conformité, des certificats d’étalonnage et des rapports d’audit peuvent être fournis sur demande, selon le projet et la norme.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Attestation ATEX
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Rapport NF C 15-100
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Fiche conformité ICPE
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-slate-200/90 bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:p-10">
              <h2 className="text-xl font-semibold text-slate-950">Demande catalogue</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Besoin d’une preuve spécifique ou d’un dossier détaillé ? Contactez-nous pour recevoir le catalogue complet de nos certifications et attestations.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Demander le catalogue
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
