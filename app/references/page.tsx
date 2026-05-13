import { references } from "@/data/references";

export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Références</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Cas clients et projets réussis.</h1>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Des projets combinant expertise, études et solutions techniques pour répondre aux enjeux environnementaux et industriels.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {references.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-700">{item.category}</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{item.description}</p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Client</p>
              <p>{item.client}</p>
              <p className="mt-4 font-semibold text-slate-900">Résultat</p>
              <p>{item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
