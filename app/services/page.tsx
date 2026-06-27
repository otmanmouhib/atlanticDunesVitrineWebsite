export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { getDomainLabel, getPoleLabel, getPoles, getDomains, getServices } from "@/lib/db";

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { pole?: string; domain?: string };
}) {
  const selectedPole = searchParams?.pole ?? "all";
  const selectedDomain = searchParams?.domain ?? "all";

  const [services, poles, domains] = await Promise.all([
    getServices(selectedPole === "all" ? undefined : selectedPole, selectedDomain === "all" ? undefined : selectedDomain),
    getPoles(),
    getDomains("service"),
  ]);
  const filtered = services;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Notre expertise d&apos;études et d&apos;audits.
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Une offre complète pour accompagner vos obligations réglementaires, vos projets de décarbonation et vos
            installations industrielles sur 7 pôles d&apos;expertise.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:border-brand-400 hover:shadow-lg"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              {service.imageId ? (
                <Image src={`/api/images/${service.imageId}`} alt={service.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-500">Visuel service</div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{getPoleLabel(service.poleId, poles)}</p>
                <span className="text-xs text-slate-300">/</span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">{getDomainLabel(service.domainId, domains)}</p>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{service.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
          Aucun service trouvé pour ce filtre. Sélectionnez une autre catégorie depuis le menu Services.
        </div>
      )}
    </div>
  );
}
