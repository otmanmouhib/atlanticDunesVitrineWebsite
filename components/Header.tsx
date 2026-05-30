"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { Pole, DomainTag } from "@/lib/db";

type MenuCategory = {
  pole: { slug: string; label: string };
  domains: Array<{ slug: string; label: string }>;
};

type HeaderProps = {
  serviceCategories: MenuCategory[];
  productCategories: MenuCategory[];
  boutiqueCategories: MenuCategory[];
  poles: Pole[];
  domains: DomainTag[];
};

const otherNavItems = [
  { label: "News", href: "/news" },
  { label: "Références", href: "/references" },
  { label: "Certifications", href: "/certifications" },
  { label: "Qui sommes-nous", href: "/about" },
];

const getLabel = (slug: string, list: Array<{ slug: string; label: string }>) => {
  return list.find((item) => item.slug === slug)?.label ?? slug;
};

function getPoleLabel(poleId: string, poles: Pole[]) {
  return getLabel(poleId, poles);
}

function getDomainLabel(domainId: string, domains: DomainTag[]) {
  return getLabel(domainId, domains);
}

export default function Header({ serviceCategories, productCategories, boutiqueCategories, poles, domains }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"none" | "products" | "services" | "boutique">("none");
  const [openServicePole, setOpenServicePole] = useState<string | null>(null);
  const [openProductPole, setOpenProductPole] = useState<string | null>(null);
  const [openBoutiquePole, setOpenBoutiquePole] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<"none" | "services" | "products" | "boutique">("none");

  const toggleMenu = (menu: "products" | "services" | "boutique") => {
    setOpenMenu((current) => {
      const nextMenu = current === menu ? "none" : menu;
      if (nextMenu !== "services") setOpenServicePole(null);
      if (nextMenu !== "products") setOpenProductPole(null);
      if (nextMenu !== "boutique") setOpenBoutiquePole(null);
      return nextMenu;
    });
  };

  const toggleServicePole = (poleSlug: string) => {
    setOpenServicePole((current) => (current === poleSlug ? null : poleSlug));
  };

  const toggleProductPole = (poleSlug: string) => {
    setOpenProductPole((current) => (current === poleSlug ? null : poleSlug));
  };

  const toggleBoutiquePole = (poleSlug: string) => {
    setOpenBoutiquePole((current) => (current === poleSlug ? null : poleSlug));
  };

  const toggleMobileSection = (section: "services" | "products" | "boutique") => {
    setOpenMobileSection((current) => (current === section ? "none" : section));
  };

  const closeAllMenus = () => {
    setOpenMenu("none");
    setOpenServicePole(null);
    setOpenProductPole(null);
    setOpenBoutiquePole(null);
    setOpenMobileSection("none");
    setIsOpen(false);
  };

  const openMobileMenu = () => {
    setIsOpen((current) => !current);
    setOpenMenu("none");
    setOpenServicePole(null);
    setOpenProductPole(null);
    setOpenBoutiquePole(null);
    setOpenMobileSection("none");
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const breadcrumbs = useMemo(() => {
    const segments = pathname?.split("/").filter(Boolean) ?? [];
    const crumbs: Array<{ href: string; label: string }> = [{ href: "/", label: "Accueil" }];
    if (segments.length === 0) return crumbs;

    const section = segments[0];
    const sectionLabel = section === "products" ? "Produits" : section === "services" ? "Services" : section === "boutique" ? "Boutique" : section;
    crumbs.push({ href: `/${section}`, label: sectionLabel });

    const pole = searchParams.get("pole");
    const domain = searchParams.get("domain");

    if (segments.length === 1) {
      if (pole) crumbs.push({ href: `/${section}?pole=${pole}`, label: getPoleLabel(pole, poles) });
      if (domain) crumbs.push({ href: `/${section}?pole=${pole}&domain=${domain}`, label: getDomainLabel(domain, domains) });
    } else if (segments.length > 1) {
      if (pole) crumbs.push({ href: `/${section}?pole=${pole}`, label: getPoleLabel(pole, poles) });
      if (domain) crumbs.push({ href: `/${section}?pole=${pole}&domain=${domain}`, label: getDomainLabel(domain, domains) });
      crumbs.push({ href: pathname, label: "Détail" });
    }

    return crumbs;
  }, [pathname, searchParams, poles, domains]);

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
                                  key={domain.slug}
                                  href={`/services?pole=${category.pole.slug}&domain=${domain.slug}`}
                                  onClick={closeAllMenus}
                                  className="block rounded-2xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                >
                                  {domain.label}
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
                                  key={domain.slug}
                                  href={`/products?pole=${category.pole.slug}&domain=${domain.slug}`}
                                  onClick={closeAllMenus}
                                  className="block rounded-2xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                >
                                  {domain.label}
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
              onClick={() => toggleMenu("boutique")}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              Boutique
              <span aria-hidden>{openMenu === "boutique" ? "▴" : "▾"}</span>
            </button>

            {openMenu === "boutique" && (
              <div className="absolute left-0 top-full z-50 mt-3 w-[min(42rem,100vw)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid gap-6 p-6 sm:grid-cols-[240px_1fr]">
                  <div className="space-y-4 border-r border-slate-200 pr-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Boutique</p>
                    <Link href="/boutique" onClick={closeAllMenus} className="block text-sm font-semibold text-slate-900 hover:text-brand-700">
                      Voir toute la boutique
                    </Link>
                    <p className="text-sm leading-6 text-slate-600">
                      Parcourez nos équipements et accessoires par pôle et domaine.
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {boutiqueCategories.map((category) => {
                      const isOpenPole = openBoutiquePole === category.pole.slug;
                      return (
                        <div key={category.pole.slug}>
                          <button
                            type="button"
                            onClick={() => toggleBoutiquePole(category.pole.slug)}
                            className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                          >
                            {category.pole.label}
                            <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                          </button>
                          {isOpenPole && (
                            <div className="mt-3 space-y-2">
                              <Link
                                href={`/boutique?pole=${category.pole.slug}`}
                                onClick={closeAllMenus}
                                className="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                              >
                                {`Tous les ${category.pole.label.toLowerCase()}`}
                              </Link>
                              {category.domains.map((domain) => (
                                <Link
                                  key={domain.slug}
                                  href={`/boutique?pole=${category.pole.slug}&domain=${domain.slug}`}
                                  onClick={closeAllMenus}
                                  className="block rounded-2xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                >
                                  {domain.label}
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

          <Link href="/contact" onClick={closeAllMenus} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={openMobileMenu}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-brand-400 hover:text-brand-700 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className="hidden border-t border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-2 sm:px-6 lg:px-8">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="inline-flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-slate-400">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-slate-800">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-slate-500 hover:text-brand-700">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 md:hidden">
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto space-y-3">
            <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <button
                type="button"
                onClick={() => toggleMobileSection("services")}
                aria-expanded={openMobileSection === "services"}
                aria-controls="mobile-services-section"
                className="flex w-full items-center justify-between rounded-2xl bg-slate-100 px-3 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Services
                <span aria-hidden>{openMobileSection === "services" ? "▴" : "▾"}</span>
              </button>
              {openMobileSection === "services" && (
                <div id="mobile-services-section" className="space-y-3 pt-3">
                  <Link href="/services" className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
                    Tous les services
                  </Link>
                  {serviceCategories.map((category) => {
                    const isOpenPole = openServicePole === category.pole.slug;
                    return (
                      <div key={category.pole.slug} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => toggleServicePole(category.pole.slug)}
                          aria-expanded={isOpenPole}
                          aria-controls={`services-${category.pole.slug}`}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                        >
                          {category.pole.label}
                          <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                        </button>
                        {isOpenPole && (
                          <div id={`services-${category.pole.slug}`} className="space-y-1 pl-3">
                            <Link
                              href={`/services?pole=${category.pole.slug}`}
                              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                              onClick={closeAllMenus}
                            >
                              {`Tous les ${category.pole.label.toLowerCase()}`}
                            </Link>
                            {category.domains.map((domain) => (
                              <Link
                                key={domain.slug}
                                href={`/services?pole=${category.pole.slug}&domain=${domain.slug}`}
                                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                                onClick={closeAllMenus}
                              >
                                {domain.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <button
                type="button"
                onClick={() => toggleMobileSection("products")}
                aria-expanded={openMobileSection === "products"}
                aria-controls="mobile-products-section"
                className="flex w-full items-center justify-between rounded-2xl bg-slate-100 px-3 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Produits
                <span aria-hidden>{openMobileSection === "products" ? "▴" : "▾"}</span>
              </button>
              {openMobileSection === "products" && (
                <div id="mobile-products-section" className="space-y-3 pt-3">
                  <Link href="/products" className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
                    Tous les produits
                  </Link>
                  {productCategories.map((category) => {
                    const isOpenPole = openProductPole === category.pole.slug;
                    return (
                      <div key={category.pole.slug} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => toggleProductPole(category.pole.slug)}
                          aria-expanded={isOpenPole}
                          aria-controls={`products-${category.pole.slug}`}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                        >
                          {category.pole.label}
                          <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                        </button>
                        {isOpenPole && (
                          <div id={`products-${category.pole.slug}`} className="space-y-1 pl-3">
                            <Link
                              href={`/products?pole=${category.pole.slug}`}
                              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                              onClick={closeAllMenus}
                            >
                              {`Tous les ${category.pole.label.toLowerCase()}`}
                            </Link>
                            {category.domains.map((domain) => (
                              <Link
                                key={domain.slug}
                                href={`/products?pole=${category.pole.slug}&domain=${domain.slug}`}
                                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                                onClick={closeAllMenus}
                              >
                                {domain.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
              <button
                type="button"
                onClick={() => toggleMobileSection("boutique")}
                aria-expanded={openMobileSection === "boutique"}
                aria-controls="mobile-boutique-section"
                className="flex w-full items-center justify-between rounded-2xl bg-slate-100 px-3 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Boutique
                <span aria-hidden>{openMobileSection === "boutique" ? "▴" : "▾"}</span>
              </button>
              {openMobileSection === "boutique" && (
                <div id="mobile-boutique-section" className="space-y-3 pt-3">
                  <Link href="/boutique" className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700" onClick={closeAllMenus}>
                    Toute la boutique
                  </Link>
                  {boutiqueCategories.map((category) => {
                    const isOpenPole = openBoutiquePole === category.pole.slug;
                    return (
                      <div key={category.pole.slug} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => toggleBoutiquePole(category.pole.slug)}
                          aria-expanded={isOpenPole}
                          aria-controls={`boutique-${category.pole.slug}`}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-white"
                        >
                          {category.pole.label}
                          <span aria-hidden>{isOpenPole ? "▴" : "▾"}</span>
                        </button>
                        {isOpenPole && (
                          <div id={`boutique-${category.pole.slug}`} className="space-y-1 pl-3">
                            <Link
                              href={`/boutique?pole=${category.pole.slug}`}
                              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                              onClick={closeAllMenus}
                            >
                              {`Tous les ${category.pole.label.toLowerCase()}`}
                            </Link>
                            {category.domains.map((domain) => (
                              <Link
                                key={domain.slug}
                                href={`/boutique?pole=${category.pole.slug}&domain=${domain.slug}`}
                                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-white"
                                onClick={closeAllMenus}
                              >
                                {domain.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
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
