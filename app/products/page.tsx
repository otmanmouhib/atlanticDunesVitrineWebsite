export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { getDomainLabel, getPoleLabel, getPoles, getDomains, getProducts } from "@/lib/db";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { pole?: string; domain?: string };
}) {
  const selectedPole = searchParams?.pole ?? "all";
  const selectedDomain = searchParams?.domain ?? "all";

  const [products, poles, domains] = await Promise.all([
    getProducts(selectedPole === "all" ? undefined : selectedPole, selectedDomain === "all" ? undefined : selectedDomain),
    getPoles(),
    getDomains("product"),
  ]);
  const filtered = products;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Produits</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Installations industrielles clé en main.
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Des équipements packagés couvrant 7 pôles : environnement, énergie, sécurité, électricité, numérique,
            nucléaire et formation.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-400 hover:shadow-lg"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              {product.imageId ? (
                <Image src={`/api/images/${product.imageId}`} alt={product.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-500">Visuel produit</div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{getPoleLabel(product.poleId, poles)}</p>
                <span className="text-xs text-slate-300">/</span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">{getDomainLabel(product.domainId, domains)}</p>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{product.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
          Aucun produit trouvé pour ce filtre. Sélectionnez une autre catégorie depuis le menu Produits.
        </div>
      )}
    </div>
  );
}
