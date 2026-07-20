"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-sm mb-12">
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full bg-transparent border-b border-border-soft pb-3 pl-8 text-sm font-body text-heading placeholder:text-muted focus:outline-none focus:border-heading transition-colors"
      />
      <Search className="absolute left-0 top-0 text-muted" size={18} />
    </div>
  );
}
