"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact form submitted", { name, email, phone, message });
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Échangeons sur votre projet.</h1>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Remplissez le formulaire et notre équipe vous contactera pour étudier votre projet de solution environnementale ou d’installation industrielle.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            {isSubmitted ? (
              <div className="rounded-2xl bg-accent-100 px-4 py-4 text-sm text-accent-900">
                Merci ! Votre demande a été enregistrée. Nous revenons vers vous rapidement.
              </div>
            ) : null}

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span>Nom</span>
                <input value={name} onChange={(event) => setName(event.target.value)} required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
              </label>
              <label className="space-y-2 text-sm">
                <span>Email</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
              </label>
            </div>

            <div className="space-y-2 text-sm">
              <label>
                <span>Téléphone</span>
                <input value={phone} onChange={(event) => setPhone(event.target.value)} className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
              </label>
            </div>

            <div className="space-y-2 text-sm">
              <label>
                <span>Message</span>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={5} className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
              </label>
            </div>

            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Envoyer la demande
            </button>
          </form>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Coordonnées</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">contact@atlantic-dunes.ma</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">45 Rue Ahmed Chaouki appt n°1 Centre-Ville Tanger, Maroc</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Tel 1 : +212 6 00 64 43 60</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Tel 2 : +212 661 258 388</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Fax : +212 539 311875</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Tarification</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">Demandez un devis clé en main pour un service ou une installation complète. Nous vous accompagnons dès le premier contact.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
