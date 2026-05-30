import Link from "next/link";
import type { DomainTag, EnterpriseInfo } from "@/lib/db";

type FooterProps = {
  domains: DomainTag[];
  enterpriseInfo?: EnterpriseInfo | null;
};

const fallbackEnterpriseInfo: EnterpriseInfo = {
  id: "main",
  email: "contact@atlantic-dunes.ma",
  phones: ["+212 6 00 64 43 60", "+212 661 258 388"],
  fax: "+212 539 311875",
  addressLines: ["45 Rue Ahmed Chaouki appt n°1", "Centre-Ville Tanger, Maroc"],
};

export default function Footer({ domains, enterpriseInfo }: FooterProps) {
  const info = enterpriseInfo ?? fallbackEnterpriseInfo;
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Atlantic Dunes</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Bureau d’étude et expertise pour solutions industrielles clé en main, spécialité environnementale et performance durable.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Domaines d&apos;expertise</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
              {domains.map((domain) => (
                <Link
                  key={domain.slug}
                  href={`/services?domain=${domain.slug}`}
                  className="block text-slate-300 transition hover:text-white"
                >
                  {domain.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h4>
            <div className="mt-4 text-sm leading-7 text-slate-300">
              <p>{info.email}</p>
              {info.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
              {info.fax ? <p>Fax : {info.fax}</p> : null}
              <div className="mt-3 text-slate-400">
                {info.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 Atlantic Dunes. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
