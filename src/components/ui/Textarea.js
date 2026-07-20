import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Textarea Component
 */
export const Textarea = forwardRef(
  ({ className, label, error, helperText, required, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-ui-label text-heading">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "flex min-h-[120px] w-full rounded-radius-sm border bg-surface px-4 py-3 text-body-md text-heading transition-colors resize-y",
            "placeholder:text-neutral-500",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
            "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500",
            error ? "border-error focus:border-error focus:ring-error" : "border-border-default",
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn("text-xs font-ui", error ? "text-error" : "text-muted")}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
