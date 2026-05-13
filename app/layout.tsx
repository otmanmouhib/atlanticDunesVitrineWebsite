import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atlantic Dunes | Bureau d’étude & expertise",
  description: "Solutions environnementales et installations industrielles clé en main pour audits, études et projets durables.",
  metadataBase: new URL("https://atlantic-dunes.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
