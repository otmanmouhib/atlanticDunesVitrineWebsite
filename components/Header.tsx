"use client";

import Link from "next/link";
import { useState } from "react";
import { poles } from "@/data/poles";
import { getDomainLabel } from "@/data/domains";
import { products } from "@/data/products";
import { services } from "@/data/services";

const otherNavItems = [
  { label: "Boutique", href: "/boutique" },
  { label: "News", href: "/news" },
  { label: "Références", href: "/references" },
  { label: "Certifications", href: "/certifications" },
  { label: "Qui sommes-nous", href: "/about" },
];

type MenuCategory = {
  pole: { slug: string; label: string };
  domains: string[];
};

function buildMenu(items: Array<{ pole: string; domain: string }>): MenuCategory[] {
  return poles
    .map((pole) => {
      const domains = Array.from(
        new Set(items.filter((item) => item.pole === pole.slug).map((item) => item.domain))
      );
      return domains.length > 0 ? { pole, domains } : null;
    })
    .filter((item): item is MenuCategory => item !== null);
}

const productCategories = buildMenu(products);
const serviceCategories = buildMenu(services);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"none" | "products" | "services">("none");
  const [openServicePole, setOpenServicePole] = useState<string | null>(null);
  const [openProductPole, setOpenProductPole] = useState<string | null>(null);

  const toggleMenu = (menu: "products" | "services") => {
    setOpenMenu((current) => {
      const nextMenu = current === menu ? "none" : menu;
      if (nextMenu !== "services") setOpenServicePole(null);
      if (nextMenu !== "products") setOpenProductPole(null);
      return nextMenu;
    });
  };

  const toggleServicePole = (poleSlug: string) => {
    setOpenServicePole((current) => (current === poleSlug ? null : poleSlug));
  };

  const toggleProductPole = (poleSlug: string) => {
    setOpenProductPole((current) => (current === poleSlug ? null : poleSlug));
  };

  const closeAllMenus = () => {
    setOpenMenu("none");
    setOpenServicePole(null);
    setOpenProductPole(null);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-brand-900">
          Atlantic Dunes
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("services")}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              Services
              <span aria-hidden>{openMenu === "services" ? "▴" : "▾"}</span>
            </button>

            {openMenu === "services" && (
              <div className="absolute left-0 top-full z-50 mt-3 w-[min(42rem,100vw)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid gap-6 p-6 sm:grid-cols-[240px_1fr]">
                  <div className="space-y-4 border-r border-slate-200 pr-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Services</p>
                    <Link href="/services" onClick={closeAllMenus} className="block text-sm font-semibold text-slate-900 hover:text-brand-700">
                      Voir tous les services
                    </Link>
                    <p className="text-sm leading-6 text-slate-600">
                      Parcourez nos services par pôle et domaine depuis le menu.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {serviceCategories.map((category) => {
                      const isOpenPole = openServicePole === category.pole.slug;
                      return (
                        <div key={category.pole.slug}>
                          <button
                            type="button"
                            onClick={() => toggleServicePole(category.pole.slug)}
                            className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                          >
                            {category.pole.label}
                            <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                          </button>
                          {isOpenPole && (
                            <div className="mt-3 space-y-2">
                              <Link
                                href={`/services?pole=${category.pole.slug}`}
                                onClick={closeAllMenus}
                                className="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                              >
                                {`Tous les ${category.pole.label.toLowerCase()}`}
                              </Link>
                              {category.domains.map((domain) => (
                                <Link
                                  key={domain}
                                  href={`/services?pole=${category.pole.slug}&domain=${domain}`}
                                  onClick={closeAllMenus}
                                  className="block rounded-2xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                >
                                  {getDomainLabel(domain)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("products")}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              Produits
              <span aria-hidden>{openMenu === "products" ? "▴" : "▾"}</span>
            </button>

            {openMenu === "products" && (
              <div className="absolute left-0 top-full z-50 mt-3 w-[min(42rem,100vw)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid gap-6 p-6 sm:grid-cols-[240px_1fr]">
                  <div className="space-y-4 border-r border-slate-200 pr-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Produits</p>
                    <Link href="/products" onClick={closeAllMenus} className="block text-sm font-semibold text-slate-900 hover:text-brand-700">
                      Voir tous les produits
                    </Link>
                    <p className="text-sm leading-6 text-slate-600">
                      Sélectionnez un pôle ou un domaine pour découvrir nos solutions packagées.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {productCategories.map((category) => {
                      const isOpenPole = openProductPole === category.pole.slug;
                      return (
                        <div key={category.pole.slug}>
                          <button
                            type="button"
                            onClick={() => toggleProductPole(category.pole.slug)}
                            className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                          >
                            {category.pole.label}
                            <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                          </button>
                          {isOpenPole && (
                            <div className="mt-3 space-y-2">
                              <Link
                                href={`/products?pole=${category.pole.slug}`}
                                onClick={closeAllMenus}
                                className="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                              >
                                {`Tous les ${category.pole.label.toLowerCase()}`}
                              </Link>
                              {category.domains.map((domain) => (
                                <Link
                                  key={domain}
                                  href={`/products?pole=${category.pole.slug}&domain=${domain}`}
                                  onClick={closeAllMenus}
                                  className="block rounded-2xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                >
                                  {getDomainLabel(domain)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {otherNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => {
            setIsOpen((current) => !current);
            setOpenMenu("none");
          }}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-brand-400 hover:text-brand-700 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 md:hidden">
          <div className="space-y-3">
            <Link href="/services" className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
              Services
            </Link>
            <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <Link href="/services" className="block rounded-xl px-3 py-2 hover:bg-white" onClick={closeAllMenus}>
                Tous les services
              </Link>
              {serviceCategories.map((category) => {
                const isOpenPole = openServicePole === category.pole.slug;
                return (
                  <div key={category.pole.slug} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => toggleServicePole(category.pole.slug)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                    >
                      {category.pole.label}
                      <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                    </button>
                    {isOpenPole && (
                      <div className="space-y-1 pl-3">
                        <Link
                          href={`/services?pole=${category.pole.slug}`}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                          onClick={closeAllMenus}
                        >
                          {`Tous les ${category.pole.label.toLowerCase()}`}
                        </Link>
                        {category.domains.map((domain) => (
                          <Link
                            key={domain}
                            href={`/services?pole=${category.pole.slug}&domain=${domain}`}
                            className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                            onClick={closeAllMenus}
                          >
                            {getDomainLabel(domain)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Link href="/products" className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
              Produits
            </Link>
            <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <Link href="/products" className="block rounded-xl px-3 py-2 hover:bg-white" onClick={closeAllMenus}>
                Tous les produits
              </Link>
              {productCategories.map((category) => {
                const isOpenPole = openProductPole === category.pole.slug;
                return (
                  <div key={category.pole.slug} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => toggleProductPole(category.pole.slug)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                    >
                      {category.pole.label}
                      <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                    </button>
                    {isOpenPole && (
                      <div className="space-y-1 pl-3">
                        <Link
                          href={`/products?pole=${category.pole.slug}`}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                          onClick={closeAllMenus}
                        >
                          {`Tous les ${category.pole.label.toLowerCase()}`}
                        </Link>
                        {category.domains.map((domain) => (
                          <Link
                            key={domain}
                            href={`/products?pole=${category.pole.slug}&domain=${domain}`}
                            className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                            onClick={closeAllMenus}
                          >
                            {getDomainLabel(domain)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {otherNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
