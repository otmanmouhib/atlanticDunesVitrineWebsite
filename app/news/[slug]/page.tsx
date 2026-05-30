import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticleBySlug, getNewsCategories, getNewsCategoryLabel } from "@/lib/db";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const [article, newsCategories] = await Promise.all([
    getNewsArticleBySlug(params.slug),
    getNewsCategories(),
  ]);

  if (!article) return notFound();

  return (
    <div className="relative overflow-hidden bg-slate-50 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-50 to-transparent" />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-10 lg:p-12">
          <Link href="/news" className="text-sm font-medium text-brand-700 hover:text-brand-900">
            ← Retour aux actualités
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-brand-700">
            <span>{getNewsCategoryLabel(article.categoryId, newsCategories)}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{formatDate(article.date)}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-9">{article.summary}</p>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-slate-100">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[1.5rem] sm:h-[320px] lg:h-[420px]">
              <Image
                src={`/api/images/${article.imageId}`}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 space-y-7 text-base leading-7 text-slate-700 sm:space-y-8 sm:text-lg sm:leading-9">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-700"
            >
              Retour aux actualités
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
