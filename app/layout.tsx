import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenuCategories, getEnterpriseInfo } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Atlantic Dunes | Bureau d’étude & expertise",
  description: "Solutions environnementales et installations industrielles clé en main pour audits, études et projets durables.",
  metadataBase: new URL("https://atlantic-dunes.vercel.app")
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [{ serviceCategories, productCategories, boutiqueCategories, poles, domains }, enterpriseInfo] = await Promise.all([
    getMenuCategories(),
    getEnterpriseInfo(),
  ]);

  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Suspense fallback={<div className="h-20 bg-slate-50" />}>
          <Header
            serviceCategories={serviceCategories}
            productCategories={productCategories}
            boutiqueCategories={boutiqueCategories}
            poles={poles}
            domains={domains}
          />
        </Suspense>
        <main>{children}</main>
        <Footer domains={domains} enterpriseInfo={enterpriseInfo} />
      </body>
    </html>
  );
}
