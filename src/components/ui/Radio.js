import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Radio Component
 */
export const Radio = forwardRef(
  ({ className, label, error, required, ...props }, ref) => {
    return (
      <label className="group flex items-start space-x-3 cursor-pointer">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="radio"
            ref={ref}
            className={cn(
              "peer appearance-none w-5 h-5 border rounded-full bg-surface transition-all duration-200",
              "checked:border-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-200",
              error ? "border-error" : "border-border-strong",
              className
            )}
            {...props}
          />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-primary opacity-0 scale-50 pointer-events-none peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200" />
        </div>
        {label && (
          <span className={cn("text-body-sm text-body leading-relaxed", props.disabled && "text-neutral-400")}>
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";
