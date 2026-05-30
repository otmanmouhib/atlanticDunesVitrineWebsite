import Image from "next/image";
import { notFound } from "next/navigation";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import { getBoutiqueItemBySlug, getBoutiqueItems, getDomainLabel, getPoleLabel, getPoles, getDomains } from "@/lib/db";

export default async function BoutiqueProductPage({ params }: { params: { slug: string } }) {
  const item = await getBoutiqueItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const [relatedItems, poles, domains] = await Promise.all([
    getBoutiqueItems(item.poleId),
    getPoles(),
    getDomains(),
  ]);

  const related = relatedItems.filter((other) => other.poleId === item.poleId && other.slug !== item.slug).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-700">Article boutique</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">{item.title}</h1>
          </div>
          <QuoteButton href="/contact#quote" label="Demander un devis" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[220px] w-full overflow-hidden rounded-3xl sm:h-[320px] lg:h-[420px]">
                <Image
                  src={`/api/images/${item.imageId}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Description</p>
              <p className="mt-4 text-base leading-8 text-slate-700">{item.description}</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-100 px-6 py-4">
                <h2 className="text-lg font-semibold text-slate-950">Caractéristiques techniques</h2>
              </div>
              <div className="p-6">
                <dl className="grid gap-4 sm:grid-cols-2">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <dt className="text-sm font-semibold text-slate-900">{spec.label}</dt>
                      <dd className="mt-2 text-sm text-slate-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Détails</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Prix</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{item.price}</p>
              <p className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${item.inStock ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                {item.availability}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Pôle</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">{getPoleLabel(item.poleId, poles)}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Domaine</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">{getDomainLabel(item.domainId, domains)}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-950">Article similaire</h2>
              <div className="mt-4 space-y-3">
                {related.length > 0 ? (
                  related.map((relatedItem) => (
                    <Link
                      key={relatedItem.slug}
                      href={`/boutique/${relatedItem.slug}`}
                      className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-3 text-left transition hover:border-brand-400 hover:bg-brand-50"
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-slate-100">
                        <Image src={`/api/images/${relatedItem.imageId}`} alt={relatedItem.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{relatedItem.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{relatedItem.price}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">Aucun article similaire disponible.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
