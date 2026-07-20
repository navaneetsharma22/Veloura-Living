"use client";

import { CATEGORIES } from "@/data/journal";

export function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-border-soft">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`font-ui text-[11px] tracking-widest uppercase whitespace-nowrap transition-colors pb-4 border-b-2 -mb-[17px] ${
            activeCategory === category
              ? "text-heading border-heading"
              : "text-muted border-transparent hover:text-heading"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
