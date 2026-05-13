import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { products } from "@/data/products";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 3);
const featuredProducts = products.slice(0, 3);

const strengths = [
  {
    title: "Conformité & performance",
    description: "Accompagnement réglementaire pour des installations sûres, économes et durables.",
  },
  {
    title: "Service après-vente & garanties",
    description: "Assistance continue, maintenance et garanties pour renforcer la confiance et la durabilité de vos installations.",
  },
  {
    title: "Solutions intégrées",
    description: "Études, conception et déploiement de systèmes eau, air, déchets et énergie.",
  },
  {
    title: "Support terrain",
    description: "Expertise locale, pilotage de projets et service après-vente réactif.",
  },
];

const steps = [
  { step: "1", title: "Évaluation", desc: "Audit du site et définition des priorités clients." },
  { step: "2", title: "Conception", desc: "Schémas techniques, choix des équipements et optimisation." },
  { step: "3", title: "Mise en œuvre", desc: "Installation, tests et suivi pour un résultat opérationnel." },
];

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left – headline + CTAs + value props */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Bureau d&apos;étude &amp; expertise
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Expertise industrielle et{" "}
                <span className="text-brand-600">installations environnementales</span>
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                Nous concevons et déployons des solutions durables pour l&apos;eau, l&apos;air, les déchets
                et l&apos;énergie — avec un accompagnement technique sur mesure pour vos projets industriels.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <QuoteButton href="/contact#quote" label="Demander un devis" />
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
                >
                  Nos services <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Value props */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <span className="mt-1 h-4 w-1 shrink-0 rounded-full bg-brand-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – offer summary cards */}
            <div className="flex h-full flex-col gap-4">

              {/* Services */}
              <div className="flex flex-1 flex-col rounded-2xl bg-brand-900 p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-300">Nos services</p>
                <h2 className="mt-2 text-xl font-bold text-white">Études, audits et pilotage de chantier</h2>
                <p className="mt-2 text-sm leading-6 text-brand-200">
                  Maîtrise des risques et conformité réglementaire pour vos installations industrielles.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {["Diagnostic & analyse de risque", "Accompagnement réglementaire", "Suivi et pilotage de chantier"].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-brand-200">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />{s}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition hover:text-white">
                  Voir tous les services <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Products */}
              <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-600">Nos produits</p>
                <h2 className="mt-2 text-xl font-bold text-slate-950">Installations clé en main</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Solutions pour le traitement des effluents, la gestion des déchets et l&apos;efficacité énergétique.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {["Traitement des eaux et effluents", "Gestion des déchets industriels", "Efficacité énergétique"].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent-400" />{s}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-500">
                  Découvrir nos produits <span aria-hidden>→</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── APPROCHE ──────────────────────────────────────────────── */}
        <section className="border-b border-slate-100 py-16">
          <div className="mb-10 max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-600">Notre approche</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Une démarche agile, durable et opérationnelle
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Nous associons expertise technique et installation maîtrisée pour transformer vos besoins en résultats mesurables.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-base font-extrabold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES PHARES ───────────────────────────────────────── */}
        <section className="border-b border-slate-100 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-600">Services phares</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Solutions concrètes pour vos enjeux terrain
              </h2>
            </div>
            <Link href="/services" className="hidden shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-500 sm:block">
              Voir tous les services →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-md"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-600">{service.domain}</p>
                <h3 className="mt-3 text-base font-bold text-slate-950 transition group-hover:text-brand-700">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/services" className="text-sm font-semibold text-brand-700 transition hover:text-brand-500">
              Voir tous les services →
            </Link>
          </div>
        </section>

        {/* ── PRODUITS PHARES ───────────────────────────────────────── */}
        <section className="py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-600">Produits sélectionnés</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Installations clé en main</h2>
            </div>
            <Link href="/products" className="hidden shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-500 sm:block">
              Découvrir tous les produits →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="flex h-36 items-center justify-center bg-slate-50 text-sm text-slate-400">
                  Visuel produit
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-600">{product.domain}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-950 transition group-hover:text-brand-700">{product.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{product.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/products" className="text-sm font-semibold text-brand-700 transition hover:text-brand-500">
              Découvrir tous les produits →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
