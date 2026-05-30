import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function NewsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-[2rem] border border-slate-200/90 bg-white/95 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Actualités</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Journal Atlantic Dunes
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Retrouvez nos dernières publications, événements et annonces d’entreprise. Les articles sont affichés par ordre chronologique inversé, avec l’actualité la plus récente en premier.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              {newsArticles.map((article) => (
                <article key={article.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-brand-700">
                      <span>{article.category}</span>
                      <span className="text-slate-300">/</span>
                      <span className="text-slate-500">{formatDate(article.date)}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-950">{article.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{article.summary}</p>
                    <div className="mt-6">
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                      >
                        Lire l’article
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Dernières mises à jour</p>
              <ul className="mt-6 space-y-4">
                {newsArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/news/${article.slug}`} className="block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-brand-300 hover:bg-white">
                      <p className="text-sm font-semibold text-slate-900">{article.title}</p>
                      <p className="mt-2 text-xs text-slate-500">{formatDate(article.date)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
