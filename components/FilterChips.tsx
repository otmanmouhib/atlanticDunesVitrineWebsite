"use client";

type FilterChipsProps = {
  tags: string[];
  selectedTag: string;
  onTagChange: (tag: string) => void;
};

export default function FilterChips({ tags, selectedTag, onTagChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => {
        const isActive = selectedTag === tag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onTagChange(tag)}
            className={`rounded-full border px-4 py-2 text-sm transition ${isActive ? "border-brand-500 bg-brand-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50"}`}
          >
            {tag === "all" ? "Tous" : tag.replace(/\b\w/g, (c) => c.toUpperCase())}
          </button>
        );
      })}
    </div>
  );
}
