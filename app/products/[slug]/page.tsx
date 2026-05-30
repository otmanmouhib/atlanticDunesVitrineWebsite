import Image from "next/image";
import { notFound } from "next/navigation";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import { getDomainLabel, getPoleLabel, getProducts, getProductBySlug, getServices, getPoles, getDomains } from "@/lib/db";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const [relatedProducts, services, poles, domains] = await Promise.all([
    getProducts(product.poleId),
    getServices(),
    getPoles(),
    getDomains(),
  ]);

  const related = relatedProducts.filter((item) => item.poleId === product.poleId && item.slug !== product.slug).slice(0, 3);
  const linkedTraining = services.find((s) => s.poleId === "training" && s.domainId === product.poleId);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-700">Produit</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">{product.title}</h1>
          </div>
          <QuoteButton href="/contact#quote" label="Demander un devis clé en main" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {product.imageId && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src={`/api/images/${product.imageId}`}
                  alt={product.title}
                  width={1200}
                  height={700}
                  className="h-72 w-full object-cover"
                />
              </div>
            )}

            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Description</p>
              <p className="mt-4 text-base leading-8 text-slate-700">{product.description}</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-100 px-6 py-4">
                <h2 className="text-lg font-semibold text-slate-950">Spécifications clés</h2>
              </div>
              <div className="p-6">
                <dl className="grid gap-4 sm:grid-cols-2">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <dt className="text-sm font-semibold text-slate-900">{spec.label}</dt>
                      <dd className="mt-2 text-sm text-slate-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Performance attendue</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{product.performance}</p>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Pôle</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">{getPoleLabel(product.poleId, poles)}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Domaine</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">{getDomainLabel(product.domainId, domains)}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Fiche technique</p>
              <a href={product.pdfLink} className="mt-4 inline-flex items-center rounded-full border border-brand-500 px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">
                Télécharger la fiche technique
              </a>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Lien PDF de démonstration pour cette solution clé en main.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Produits liés</h2>
              <div className="mt-4 space-y-3">
                {related.length > 0 ? (
                  related.map((item) => (
                    <Link key={item.slug} href={`/products/${item.slug}`} className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:bg-brand-50">
                      {item.title}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">Aucun produit lié disponible.</p>
                )}
              </div>
            </div>
            {linkedTraining && (
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Formation liée</h2>
                <div className="mt-4">
                  <Link href={`/services/${linkedTraining.slug}`} className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:bg-brand-50">
                    {linkedTraining.title}
                  </Link>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
