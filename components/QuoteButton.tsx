"use client";

import Link from "next/link";

type QuoteButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export default function QuoteButton({
  href = "/contact#quote",
  label = "Demander un devis",
  className = ""
}: QuoteButtonProps) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 ${className}`}>
      {label}
    </Link>
  );
}
