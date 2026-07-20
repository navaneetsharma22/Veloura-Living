import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";

/**
 * Veloura Living - Mega Menu Promo Card
 * An editorial promotional card displayed in the right column of the Mega Menu.
 */
export function MegaMenuPromoCard({ badge, title, description, href = "/collections/new-arrivals" }) {
  return (
    <Link href={href} className="group flex flex-col h-full rounded-radius-md overflow-hidden bg-surface outline-none focus-ring shadow-sm hover-lift">
      <div className="relative aspect-[4/3] w-full bg-neutral-200 overflow-hidden">
        {/* Placeholder for Luxury Image */}
        <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" />
        
        {badge && (
          <div className="absolute top-4 left-4 bg-background px-3 py-1 text-[10px] font-medium tracking-widest uppercase rounded-full">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-display-xs font-heading mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body-sm text-muted mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto flex items-center text-body-sm font-medium uppercase tracking-widest text-primary">
          Explore Collection
          <IconWrapper icon={ArrowRight} size="sm" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
