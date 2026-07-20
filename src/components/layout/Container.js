import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Container Component
 * Handles horizontal boundaries and padding for layout structure.
 */

const maxWidths = {
  default: "max-w-7xl", // 1280px
  narrow: "max-w-4xl", // 896px
  wide: "max-w-[1600px]",
  full: "max-w-full",
};

export const Container = forwardRef(
  ({ children, className, width = "default", as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          maxWidths[width],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
