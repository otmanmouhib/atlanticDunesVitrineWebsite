"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, projectType, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Une erreur est survenue pendant l'envoi. Réessayez.");
        return;
      }

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setMessage("");
    } catch (err) {
      setError("Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.");
    } finally {
      setIsSubmitting(false);
    }
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

          <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            {isSubmitted ? (
              <div className="rounded-2xl bg-accent-100 px-4 py-3 text-sm text-accent-900" aria-live="polite">
                Merci ! Votre demande a été enregistrée. Nous revenons vers vous rapidement.
              </div>
            ) : null}

            {error ? (
              <div className="rounded-2xl bg-rose-100 px-4 py-3 text-sm text-rose-900" aria-live="polite">
                {error}
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-800">Nom complet</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Ex : Saïd El Idrissi"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-800">Adresse email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="contact@entreprise.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-800">Téléphone</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+212 6 00 64 43 60"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-800">Type de projet</span>
                <select
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="" disabled>
                    Sélectionnez un sujet
                  </option>
                  <option value="Audit réglementaire">Audit réglementaire</option>
                  <option value="Équipement industriel">Équipement industriel</option>
                  <option value="Étude de faisabilité">Étude de faisabilité</option>
                  <option value="Maintenance / SAV">Maintenance / SAV</option>
                  <option value="Autre">Autre</option>
                </select>
              </label>
            </div>

            <div className="space-y-2 text-sm">
              <label className="space-y-2">
                <span className="font-semibold text-slate-800">Votre message</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  rows={5}
                  placeholder="Décrivez rapidement votre besoin."
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>

            <p className="text-center text-sm leading-6 text-slate-500">
              Nous traitons chaque demande avec confidentialité et un suivi personnalisé.
            </p>
          </form>
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
                <dd>contact@atlantic-dunes.ma</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Téléphone</dt>
                <dd>+212 6 00 64 43 60</dd>
                <dd>+212 661 258 388</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Adresse</dt>
                <dd>45 Rue Ahmed Chaouki appt n°1</dd>
                <dd>Centre-Ville Tanger, Maroc</dd>
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
