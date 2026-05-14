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
  { step: "01", title: "Évaluation", desc: "Audit du site, analyse des besoins et définition des priorités clients." },
  { step: "02", title: "Conception", desc: "Schémas techniques, sélection des équipements et optimisation des solutions." },
  { step: "03", title: "Mise en œuvre", desc: "Installation, tests de conformité et suivi pour un résultat pleinement opérationnel." },
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

      {/* ── APPROCHE ─────────────────────────────────────────────────── */}
      <section className="flex min-h-screen flex-col justify-center bg-slate-950 py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-700 bg-accent-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
              Notre approche
            </span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Une démarche agile,{" "}
              <span className="text-accent-400">durable et opérationnelle</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
              Nous associons expertise technique et installation maîtrisée pour transformer vos besoins en résultats mesurables.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8"
              >
                {/* Step number */}
                <span className="text-4xl font-extrabold text-accent-400 opacity-80">{item.step}</span>
                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                {/* Accent divider */}
                <div className="my-4 h-px w-10 rounded-full bg-accent-500" />
                {/* Description */}
                <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <QuoteButton href="/contact#quote" label="Démarrer votre projet" />
          </div>

        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── SERVICES PHARES ───────────────────────────────────────── */}
        <section className="border-b border-slate-200 py-20">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                Services phares
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Solutions concrètes pour vos enjeux terrain
              </h2>
            </div>
            <Link href="/services" className="shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-500">
              Voir tous les services →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-700">
                    {service.domain}
                  </span>
                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500" aria-hidden="true">→</span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-slate-950 transition group-hover:text-brand-700">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PRODUITS PHARES ───────────────────────────────────────── */}
        <section className="py-20">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                Produits sélectionnés
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">Installations clé en main</h2>
            </div>
            <Link href="/products" className="shrink-0 text-sm font-semibold text-brand-700 transition hover:text-brand-500">
              Découvrir tous les produits →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                {/* Image placeholder with domain-tinted background */}
                <div className="relative flex h-40 items-center justify-center bg-brand-50">
                  <span className="text-xs font-medium text-brand-300">Visuel produit</span>
                  <span className="absolute right-4 top-4 rounded-full border border-brand-100 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-700">
                    {product.domain}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold leading-snug text-slate-950 transition group-hover:text-brand-700">{product.title}</h3>
                    <span className="mt-0.5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500" aria-hidden="true">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{product.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        </div>
      </div>
    </div>
  );
}
