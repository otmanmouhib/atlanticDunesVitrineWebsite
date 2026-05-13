"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import FilterChips from "@/components/FilterChips";
import { products } from "@/data/products";

const domainLabels = ["all", "water", "air", "waste", "energy", "eco", "safety"];

export default function ProductsPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");

  const filteredProducts = useMemo(
    () => (selectedDomain === "all" ? products : products.filter((item) => item.domain === selectedDomain)),
    [selectedDomain]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Produits</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Installations industrielles clé en main.</h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Des équipements packagés pour traitement des eaux, dépoussiérage, valorisation des déchets et production d’énergie propre.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Filtrer par domaine</p>
          <div className="mt-4">
            <FilterChips tags={domainLabels} selectedTag={selectedDomain} onTagChange={setSelectedDomain} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-400 hover:shadow-lg">
            <div className="bg-slate-100 p-8 text-center text-slate-500">Visuel produit</div>
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-700">{product.domain}</p>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{product.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
          Aucun produit trouvé pour ce domaine. Sélectionnez une autre catégorie ou revenez à Tous.
        </div>
      ) : null}
    </div>
  );
}
