import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Toggle Switch
 */
export const Toggle = forwardRef(
  ({ className, label, required, ...props }, ref) => {
    return (
      <label className="group flex items-center justify-between cursor-pointer w-full">
        {label && (
          <span className={cn("text-body-sm text-body", props.disabled && "text-neutral-400")}>
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        )}
        <div className="relative inline-flex items-center ml-4 shrink-0">
          <input
            type="checkbox"
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "w-11 h-6 bg-neutral-200 rounded-full peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 transition-colors duration-300",
              "peer-checked:bg-primary",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              className
            )}
          />
          <div
            className={cn(
              "absolute left-1 top-1 w-4 h-4 bg-surface rounded-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-level-1",
              "peer-checked:translate-x-5"
            )}
          />
        </div>
      </label>
    );
  }
);

Toggle.displayName = "Toggle";
