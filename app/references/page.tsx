export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 shadow-sm">
              <span className="text-2xl font-bold">✓</span>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">Références</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Cette page arrive bientôt.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Nous finalisons actuellement la section Références. Bientôt, vous trouverez ici des études de cas,
              projets clients et preuves de notre expertise industrielle.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Ce que nous préparons</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Des présentations nettes de nos réalisations, avec résultats métier et bénéfices environnementaux.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Pourquoi revenir</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Cette page sera votre point d’entrée pour vérifier notre expérience avant tout partenariat.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Statut</p>
              <p className="mt-3 text-xl font-semibold">En construction</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-700 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Avancement</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">Design finalisé</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-700 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Prochaine étape</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">Mise en ligne</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/services"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Voir nos services
            </a>
            <a
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
