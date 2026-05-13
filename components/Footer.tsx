import Link from "next/link";

const domains = [
  { label: "Water & wastewater", tag: "water" },
  { label: "Air & emissions", tag: "air" },
  { label: "Waste & recycling", tag: "waste" },
  { label: "Energy & climate", tag: "energy" },
  { label: "Eco-construction", tag: "eco" },
  { label: "Industrial safety", tag: "safety" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Atlantic Dunes</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Bureau d’étude et expertise pour solutions industrielles clé en main, spécialité environnementale et performance durable.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Expertise domains</h4>
            <div className="mt-4 space-y-2 text-sm">
              {domains.map((domain) => (
                <Link
                  key={domain.tag}
                  href={`/services?domain=${domain.tag}`}
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
              <p>contact@atlantic-dunes.ma</p>
              <p>+212 6 00 64 43 60</p>
              <p>+212 661 258 388</p>
              <p>Fax : +212 539 311875</p>
              <p className="mt-3 text-slate-400">45 Rue Ahmed Chaouki appt n°1 Centre-Ville Tanger, Maroc</p>
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
