import ContactForm from "@/components/ContactForm";
import { getEnterpriseInfo } from "@/lib/db";

export default async function ContactPage() {
  const enterpriseInfo = await getEnterpriseInfo();
  const info = enterpriseInfo ?? {
    id: "main",
    email: "contact@atlantic-dunes.ma",
    phones: ["+212 6 00 64 43 60", "+212 661 258 388"],
    fax: "+212 539 311875",
    addressLines: ["45 Rue Ahmed Chaouki appt n°1", "Centre-Ville Tanger, Maroc"],
  };

  return (
    <div id="quote" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Contactez-nous pour un accompagnement rapide.
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Nous vous recontactons sous 24h avec une proposition claire, conforme et durable.
            </p>
          </div>

          <ContactForm defaultEmail={info.email} defaultPhone={info.phones[0]} />
        </section>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">Informations</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Réponse sous 24h</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Suivi dédié</p>
              </div>
            </div>

            <dl className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">Email</dt>
                <dd>{info.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Téléphone</dt>
                {info.phones.map((phone) => (
                  <dd key={phone}>{phone}</dd>
                ))}
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Adresse</dt>
                {info.addressLines.map((line) => (
                  <dd key={line}>{line}</dd>
                ))}
              </div>
            </dl>

            <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Engagements</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Devis personnalisé en 24h</li>
                <li>Audit & pilotage chantier</li>
                <li>Solutions eau, air, déchets</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
