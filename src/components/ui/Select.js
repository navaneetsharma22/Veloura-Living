import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

/**
 * Veloura Living - Select Component
 * Custom styled native select.
 */
export const Select = forwardRef(
  ({ className, label, error, helperText, required, children, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full relative">
        {label && (
          <label className="text-ui-label text-heading">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "flex h-12 w-full appearance-none rounded-radius-sm border bg-surface px-4 py-2 pr-10 text-body-md text-heading transition-colors",
              "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
              "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500",
              error ? "border-error focus:border-error focus:ring-error" : "border-border-default",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
            size={16}
          />
        </div>
        {(error || helperText) && (
          <p className={cn("text-xs font-ui", error ? "text-error" : "text-muted")}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
