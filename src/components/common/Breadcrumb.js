import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Breadcrumb Component
 * Semantic navigation trail with Schema.org readiness.
 */
export function Breadcrumb({ items, className }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)}>
      <ol className="flex items-center space-x-2 text-ui-label text-muted flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-heading transition-colors focus-ring rounded-radius-sm outline-none inline-flex items-center"
            aria-label="Home"
          >
            <IconWrapper icon={Home} size="sm" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href || item.label} className="flex items-center space-x-2">
              <IconWrapper icon={ChevronRight} size="sm" className="text-neutral-300" />
              {isLast ? (
                <span
                  className="text-heading font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-heading transition-colors focus-ring rounded-radius-sm outline-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
