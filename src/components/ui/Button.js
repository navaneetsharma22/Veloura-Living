import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./Loader";

/**
 * Veloura Living - Button Component
 * Highly reusable button primitive following the luxury design system.
 */

const variantStyles = {
  primary:
    "bg-primary text-surface border border-transparent hover:bg-[#9F5E69] focus-ring",
  secondary:
    "bg-surface text-heading border border-border-default hover:bg-neutral-50 focus-ring",
  outline:
    "bg-transparent text-heading border border-heading hover:bg-heading hover:text-surface focus-ring",
  ghost:
    "bg-transparent text-body border border-transparent hover:bg-neutral-50 hover:text-heading focus-ring",
  text: "bg-transparent text-heading border border-transparent hover:text-primary !p-0 inline-flex focus-ring",
};

const sizeStyles = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "h-11 w-11 p-0 flex items-center justify-center",
};

export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const disabled = isLoading || isDisabled;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-radius-none text-btn transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          disabled && "opacity-60 cursor-not-allowed hover:bg-inherit hover:text-inherit pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size={16} className="shrink-0" />}
        {!isLoading && leftIcon && (
          <span className="shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
