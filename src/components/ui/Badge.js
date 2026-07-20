import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Badge Component
 * Elegant product labels avoiding loud colors.
 */

const variantStyles = {
  default: "bg-surface text-heading border border-border-default",
  new: "bg-surface text-heading border border-border-default",
  bestseller: "bg-[#F5ECEF] text-accent border border-transparent", // Very soft pink
  exclusive: "bg-primary text-surface border border-transparent",
  limited: "bg-heading text-surface border border-transparent",
  sale: "bg-transparent text-error border-none !p-0 font-semibold tracking-normal",
  soldout: "bg-neutral-200 text-neutral-600 border border-transparent",
};

export const Badge = forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-2.5 py-0.5 rounded-radius-none text-caption font-medium uppercase tracking-wider whitespace-nowrap transition-colors",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
