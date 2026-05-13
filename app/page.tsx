import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { products } from "@/data/products";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 3);
const featuredProducts = products.slice(0, 3);

const strengths = [
  {
    title: "Conformité & performance",
    description: "Accompagnement réglementaire pour des installations sûres, économes et durables."
  },
  {
    title: "Solutions intégrées",
    description: "Études, conception et déploiement de systèmes eau, air, déchets et énergie."
  },
  {
    title: "Support terrain",
    description: "Expertise locale, pilotage de projets et service après-vente réactif."
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-accent-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-accent-700">
            Bureau d’étude & expertise
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Atlantic Dunes : expertise industrielle et installations environnementales
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            Nous concevons et déployons des solutions durables pour l’eau, l’air, les déchets et l’énergie, avec un accompagnement technique sur mesure pour vos projets industriels.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <QuoteButton href="/contact#quote" label="Demander un devis" />
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Voir nos services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-6 text-white shadow-xl sm:p-8">
            <h2 className="text-lg font-semibold">Nos services</h2>
            <p className="mt-4 text-sm leading-7 text-brand-100">
              Expertise en études, audits et pilotage de chantier pour maîtriser les risques et assurer la conformité réglementaire.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Diagnostic</p>
                <p className="mt-2 text-sm leading-6 text-brand-100">Audit technique, analyse de risque et optimisation de process.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Accompagnement</p>
                <p className="mt-2 text-sm leading-6 text-brand-100">Conseil réglementaire, rédaction de dossiers et suivi de projet.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-950">Nos produits</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Installations clé en main pour le traitement des effluents, la gestion des déchets et l’efficacité énergétique.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-700">Conception</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Solutions sur mesure pour sites industriels et collectivités.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-700">Installation</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Montage, tests et mise en service avec assistance terrain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Services phares</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Solutions concrètes pour vos enjeux terrain</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
            Voir tous les services →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-400 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase text-accent-700">{service.domain}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-slate-50 rounded-[2rem] p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Approche</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Une démarche agile, durable et opérationnelle</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Nous associons expertise technique et installation maîtrisée pour transformer vos besoins en résultats mesurables.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl font-semibold text-brand-700">1</div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">Évaluation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Audit du site et définition des priorités clients.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl font-semibold text-brand-700">2</div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">Conception</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Schémas techniques, choix des équipements et optimisation.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <div className="text-3xl font-semibold text-brand-700">3</div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">Mise en œuvre</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Installation, tests et suivi pour un résultat opérationnel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Produits sélectionnés</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Installations clé en main</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
            Découvrir tous les produits →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-400 hover:shadow-lg"
            >
              <div className="bg-slate-100 p-8 text-center text-slate-500">Visuel produit</div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase text-accent-700">{product.domain}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{product.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
