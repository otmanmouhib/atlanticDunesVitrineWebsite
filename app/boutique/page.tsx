import Image from "next/image";
import Link from "next/link";
import {
  getBoutiqueItems,
  getBoutiqueCategories,
  getBoutiqueCategoryLabel,
  getBoutiqueSubcategoryLabel,
} from "@/lib/db";

const formatPrice = (price: number, currency: string) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);

export const dynamic = "force-dynamic";

export default async function BoutiquePage({
  searchParams,
}: {
  searchParams: { category?: string; subcategory?: string };
}) {
  const selectedCategory = searchParams.category ?? "all";
  const selectedSubcategory = searchParams.subcategory ?? "all";

  const [items, boutiqueCategories] = await Promise.all([
    getBoutiqueItems(selectedCategory === "all" ? undefined : selectedCategory, selectedSubcategory === "all" ? undefined : selectedSubcategory),
    getBoutiqueCategories(),
  ]);
  const filtered = items;

  return (
    <div className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/90 bg-white/95 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Boutique</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Catalogue d’équipements et accessoires industriels
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Découvrez des équipements liés aux pôles Atlantic Dunes : pompes, panneaux solaires, batteries, capteurs, onduleurs et solutions de supervision.
            Chaque article affiche son prix, sa disponibilité et toutes les spécifications techniques dont vous avez besoin.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/boutique/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-400 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  {item.imageId ? (
                    <Image src={`/api/images/${item.imageId}`} alt={item.title} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-500">Visuel boutique</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      {getBoutiqueCategoryLabel(item.boutiqueCategoryId ?? "", boutiqueCategories) ?? "Boutique"}
                    </p>
                    {item.boutiqueSubcategoryId ? (
                      <>
                        <span className="text-xs text-slate-300">/</span>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                          {getBoutiqueSubcategoryLabel(item.boutiqueSubcategoryId, boutiqueCategories)}
                        </p>
                      </>
                    ) : null}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                    <p className="font-semibold text-slate-950">
                      {formatPrice(item.price, item.currency ?? "EUR")}
                    </p>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.inStock ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                      {item.availability}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
              Aucun article trouvé pour ce filtre. Essayez un autre pôle ou domaine.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
