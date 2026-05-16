"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Produits", href: "/products" },
  { label: "Références", href: "/references" },
  { label: "Qui sommes-nous", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-brand-900">
          Atlantic Dunes
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
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
          onClick={() => setIsOpen(!isOpen)}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
