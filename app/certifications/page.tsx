import Link from "next/link";

export default function CertificationsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-12 pb-20 sm:pt-14 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-50 to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-start px-4 text-center sm:px-6 lg:px-8">
        <div className="relative z-10 w-full rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Catalogue des certifications</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Catalogue des certifications<br className="hidden sm:block" />Atlantic Dunes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Notre page de certifications est en construction. Nous préparons un catalogue détaillé de nos qualifications pour renforcer la crédibilité de vos projets industriels.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Crédibilité", value: "Bientôt disponible" },
              { label: "Normes", value: "ATEX, NF C, IEC, EN, AIEA" },
              { label: "Documents", value: "Certificats & attestations" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Nous contacter
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
