import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { products } from "@/data/products";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 3);
const featuredProducts = products.slice(0, 3);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-accent-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-accent-700">
            Bureau d’étude & expertise
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Atlantic Dunes – Expertise environnementale et installations clé en main
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            Accompagnement technique, audit, conformité et solutions industrielles durables pour vos enjeux eau, air, déchets, énergie et sécurité.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <QuoteButton href="/contact#quote" label="Demander un devis" />
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Voir nos services
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Services</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Études, audits et accompagnements environnementaux pour piloter vos projets industriels.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Produits</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Installations clé en main pour le traitement, la gestion des déchets et la transition énergétique.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Services phares</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Solutions d’expertise adaptées</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
            Voir tous les services →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-lg">
              <p className="text-sm font-semibold text-accent-700">{service.domain.toUpperCase()}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
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
            <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-400 hover:shadow-lg">
              <div className="bg-slate-100 p-8 text-center text-slate-500">Visuel produit</div>
              <div className="p-6">
                <p className="text-sm font-semibold text-accent-700">{product.domain.toUpperCase()}</p>
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
