export const dynamic = "force-dynamic";

import Link from "next/link";
import { services } from "@/data/services";
import { getDomainLabel } from "@/data/domains";
import { getPoleLabel } from "@/data/poles";

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { pole?: string; domain?: string };
}) {
  const selectedPole = searchParams?.pole ?? "all";
  const selectedDomain = searchParams?.domain ?? "all";

  const poleFiltered = selectedPole === "all" ? services : services.filter((s) => s.pole === selectedPole);
  const filtered = selectedDomain === "all" ? poleFiltered : poleFiltered.filter((s) => s.domain === selectedDomain);

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
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-6 text-slate-600">
            Parcourez nos services par pôle et domaine avec le menu Services en haut de page.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{getPoleLabel(service.pole)}</p>
              <span className="text-xs text-slate-300">/</span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">{getDomainLabel(service.domain)}</p>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-brand-700">{service.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
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
