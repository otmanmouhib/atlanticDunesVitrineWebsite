export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Qui nous sommes</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Atlantic Dunes, bureau d’étude & expertise.</h1>
          </div>
          <p className="text-base leading-8 text-slate-700">
            Atlantic Dunes accompagne les industriels dans leurs projets environnementaux et leurs installations clé en main. Nous combinons ingénierie, conformité et solutions durables pour l’eau, l’air, les déchets, l’énergie et la sécurité.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Notre mission</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Garantir des solutions industrielles performantes, conformes et respectueuses des enjeux environnementaux du territoire.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Nos valeurs</h2>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                <li>Responsabilité</li>
                <li>Exigence technique</li>
                <li>Agilité</li>
                <li>Innovation durable</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-950">Notre approche</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Nous offrons un accompagnement sur mesure, du diagnostic initial à la mise en service, en intégrant les contraintes réglementaires, techniques et économiques de chaque projet.
            </p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Notre équipe</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-lg font-bold text-white">M</div>
                <div>
                  <p className="font-semibold text-slate-900">Mohammed</p>
                  <p className="text-sm text-slate-600">Directeur général</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">O</div>
                <div>
                  <p className="font-semibold text-slate-900">Otman</p>
                  <p className="text-sm text-slate-600">Responsable technique</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-600">M</div>
                <div>
                  <p className="font-semibold text-slate-900">Mounir</p>
                  <p className="text-sm text-slate-600">Chargé de projets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Une expertise sectorielle</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Nous intervenons sur des sites industriels, portuaires et logistiques avec une vision transversale de l’environnement et de la production.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
