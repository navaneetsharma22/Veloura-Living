import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Input Component
 * Reusable input for text, email, and password.
 */
export const Input = forwardRef(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-ui-label text-heading">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-radius-sm border bg-surface px-4 py-2 text-body-md text-heading transition-colors",
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

Input.displayName = "Input";
