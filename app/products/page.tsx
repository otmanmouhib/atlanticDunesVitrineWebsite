"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import FilterChips from "@/components/FilterChips";
import PoleTabs from "@/components/PoleTabs";
import { products } from "@/data/products";
import { getDomainLabel } from "@/data/domains";
import { getPoleLabel } from "@/data/poles";

export default function ProductsPage() {
  const [selectedPole, setSelectedPole] = useState("all");
  const [selectedDomain, setSelectedDomain] = useState("all");

  const poleFiltered = useMemo(
    () => (selectedPole === "all" ? products : products.filter((p) => p.pole === selectedPole)),
    [selectedPole]
  );

  const availableDomains = useMemo(() => {
    const domains = Array.from(new Set(poleFiltered.map((p) => p.domain)));
    return ["all", ...domains];
  }, [poleFiltered]);

  const filtered = useMemo(
    () => (selectedDomain === "all" ? poleFiltered : poleFiltered.filter((p) => p.domain === selectedDomain)),
    [poleFiltered, selectedDomain]
  );

  function handlePoleChange(pole: string) {
    setSelectedPole(pole);
    setSelectedDomain("all");
  }

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
        <div className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-slate-900">Filtrer par pôle</p>
            <div className="mt-3">
              <PoleTabs selectedPole={selectedPole} onPoleChange={handlePoleChange} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Filtrer par domaine</p>
            <div className="mt-3">
              <FilterChips tags={availableDomains} selectedTag={selectedDomain} onTagChange={setSelectedDomain} />
            </div>
          </div>
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
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-500">Visuel produit</div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{getPoleLabel(product.pole)}</p>
                <span className="text-xs text-slate-300">/</span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">{getDomainLabel(product.domain)}</p>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{product.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
          Aucun produit trouvé pour ce filtre. Sélectionnez un autre pôle ou domaine.
        </div>
      )}
    </div>
  );
}
