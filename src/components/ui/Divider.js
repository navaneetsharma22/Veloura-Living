import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Divider Component
 * Reusable horizontal or vertical divider.
 */
export const Divider = forwardRef(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "shrink-0 bg-border-default",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
