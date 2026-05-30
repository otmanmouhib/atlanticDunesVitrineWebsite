"use client";

type Pole = {
  slug: string;
  label: string;
};

type PoleTabsProps = {
  selectedPole: string;
  onPoleChange: (pole: string) => void;
  poles: Pole[];
};

export default function PoleTabs({ selectedPole, onPoleChange, poles }: PoleTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onPoleChange("all")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          selectedPole === "all"
            ? "border-brand-500 bg-brand-500 text-white"
            : "border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50"
        }`}
      >
        Tous les pôles
      </button>
      {poles.map((pole) => (
        <button
          key={pole.slug}
          type="button"
          onClick={() => onPoleChange(pole.slug)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selectedPole === pole.slug
              ? "border-brand-500 bg-brand-500 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50"
          }`}
        >
          {pole.label}
        </button>
      ))}
    </div>
  );
}
