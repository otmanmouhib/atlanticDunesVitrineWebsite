import { notFound } from "next/navigation";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { getDomainLabel } from "@/data/domains";
import { getPoleLabel } from "@/data/poles";

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.pole === service.pole && item.slug !== service.slug).slice(0, 3);
  const linkedTraining = service.pole !== "training"
    ? services.find((s) => s.pole === "training" && s.domain === service.pole)
    : undefined;
  const linkedMaintenance = service.domain !== "maintenance"
    ? services.find((s) => s.domain === "maintenance" && s.pole === service.pole && s.slug !== service.slug)
    : undefined;
  const linkedProducts = products.filter((p) => p.pole === service.pole).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-700">Service</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">{service.title}</h1>
          </div>
          <QuoteButton href="/contact#quote" label="Demander un devis" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-base leading-8 text-slate-700">{service.description}</p>
            <div className="mt-8 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">Méthodologie</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {service.methodology.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Livrable</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{service.deliverable}</p>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Pôle</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">{getPoleLabel(service.pole)}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Domaine</p>
              <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">{getDomainLabel(service.domain)}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Services liés</h2>
              <div className="mt-4 space-y-3">
                {related.length > 0 ? (
                  related.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`} className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:bg-brand-50">
                      {item.title}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">Aucun service lié disponible.</p>
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
            {linkedMaintenance && (
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Maintenance liée</h2>
                <div className="mt-4">
                  <Link href={`/services/${linkedMaintenance.slug}`} className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:bg-brand-50">
                    {linkedMaintenance.title}
                  </Link>
                </div>
              </div>
            )}
            {linkedProducts.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Produits liés</h2>
                <div className="mt-4 space-y-3">
                  {linkedProducts.map((item) => (
                    <Link key={item.slug} href={`/products/${item.slug}`} className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:bg-brand-50">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
