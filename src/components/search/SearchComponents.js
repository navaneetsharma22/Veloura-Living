import Link from "next/link";
import { ArrowRight, Clock, Search as SearchIcon, X } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";

export function SearchResultCard({ title, category, description, href = "#" }) {
  return (
    <Link href={href} className="group flex items-start space-x-4 p-3 -mx-3 rounded-radius-sm hover:bg-neutral-50 transition-colors outline-none focus-ring">
      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-neutral-200 rounded-radius-sm overflow-hidden relative">
        <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-500 ease-out" />
      </div>
      
      <div className="flex flex-col justify-center flex-grow pt-1">
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted mb-1">
          {category}
        </span>
        <h4 className="text-body-md text-heading font-medium group-hover:text-primary transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-body-sm text-neutral-500 mt-1 line-clamp-1">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

export function RecentSearches({ searches, onClear }) {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-ui-label text-muted tracking-widest uppercase">Recent Searches</h4>
        <button 
          onClick={onClear}
          className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-heading transition-colors focus-ring outline-none"
        >
          Clear
        </button>
      </div>
      <ul className="flex flex-col space-y-2">
        {searches.map((search) => (
          <li key={search}>
            <button className="flex items-center text-body-lg text-heading hover:text-primary transition-colors focus-ring outline-none w-full text-left group">
              <IconWrapper icon={Clock} size="sm" className="mr-3 text-neutral-400 group-hover:text-primary transition-colors" />
              {search}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrendingSearches({ suggestions }) {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="text-ui-label text-muted tracking-widest uppercase">Trending Now</h4>
      <ul className="flex flex-col space-y-2">
        {suggestions.map((suggestion) => (
          <li key={suggestion}>
            <button className="flex items-center text-body-lg text-heading hover:text-primary transition-colors focus-ring outline-none w-full text-left group">
              <IconWrapper icon={SearchIcon} size="sm" className="mr-3 text-neutral-400 group-hover:text-primary transition-colors" />
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function QuickNavigation() {
  const links = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Rooms", href: "/rooms" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <Link 
          key={link.label}
          href={link.href}
          className="text-body-sm font-medium uppercase tracking-widest text-heading hover:text-primary transition-colors focus-ring outline-none flex items-center group"
        >
          {link.label}
          <IconWrapper icon={ArrowRight} size="sm" className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </Link>
      ))}
    </div>
  );
}
