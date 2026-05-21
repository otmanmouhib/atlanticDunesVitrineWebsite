export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 xl:px-16">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-start">
        <section className="space-y-10 rounded-[2.25rem] border border-slate-200/90 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:p-10">
          <div className="max-w-3xl space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Qui nous sommes</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Atlantic Dunes, bureau d’étude & expertise.
              </h1>
            </div>

            <p className="text-base leading-8 text-slate-700">
              Atlantic Dunes accompagne les industriels dans leurs projets environnementaux et leurs installations clé en main. Nous combinons ingénierie, conformité et solutions durables pour l’eau, l’air, les déchets, l’énergie et la sécurité.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg lg:p-8 lg:min-h-[240px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-700 text-sm font-semibold text-white">01</span>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Mission</p>
              </div>
              <h2 className="text-xl font-semibold text-slate-950">Notre mission</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">
                Garantir des solutions industrielles performantes, conformes et respectueuses des enjeux environnementaux du territoire.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg lg:p-8 lg:min-h-[240px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">02</span>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Valeurs</p>
              </div>
              <h2 className="text-xl font-semibold text-slate-950">Nos valeurs</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Responsabilité
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Exigence technique
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Agilité
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Innovation durable
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="grid gap-8 lg:grid-rows-[1fr_1fr] lg:space-y-0">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-8 shadow-sm ring-1 ring-slate-100 lg:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[3rem] bg-brand-100/90" />
            <h2 className="text-xl font-semibold text-slate-950">Une expertise sectorielle</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">
              Nous intervenons sur des sites industriels, portuaires et logistiques avec une vision transversale de l’environnement et de la production.
            </p>
            <div className="mt-7 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Sites industriels
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Sites portuaires
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />Sites logistiques
              </div>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-brand-200/80 bg-brand-50 p-8 shadow-sm ring-1 ring-slate-100 lg:p-10">
            <div className="flex items-center gap-3 text-brand-700">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-sm font-semibold text-white">03</span>
              <p className="text-xs uppercase tracking-[0.24em]">Approche</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Notre approche</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">
              Nous offrons un accompagnement sur mesure, du diagnostic initial à la mise en service, en intégrant les contraintes réglementaires, techniques et économiques de chaque projet.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
