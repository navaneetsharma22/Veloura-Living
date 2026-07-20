import Link from "next/link";

/**
 * Veloura Living - Mega Menu Product Card
 * Minimal product preview card for the Popular Products column.
 */
export function MegaMenuProductCard({ name, category, price, href = "/shop/product/demo" }) {
  return (
    <Link href={href} className="group flex items-center space-x-4 p-2 -mx-2 rounded-radius-sm hover:bg-neutral-50 transition-colors outline-none focus-ring">
      <div className="w-16 h-16 shrink-0 bg-neutral-200 rounded-radius-sm overflow-hidden relative">
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-500 ease-out" />
      </div>
      
      <div className="flex flex-col justify-center flex-grow">
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted mb-1">
          {category}
        </span>
        <h4 className="text-body-sm text-heading font-medium group-hover:text-primary transition-colors">
          {name}
        </h4>
        <span className="text-body-sm text-neutral-500 mt-1">
          {price}
        </span>
      </div>
    </Link>
  );
}
