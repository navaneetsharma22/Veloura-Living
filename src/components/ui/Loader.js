import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/**
 * Reusable loading spinner.
 * @param {string} className - Additional CSS classes.
 * @param {number} size - Size of the lucide icon.
 */
export function Spinner({ className, size = 20, ...props }) {
  return (
    <Loader2
      size={size}
      className={cn("animate-spin text-current", className)}
      {...props}
    />
  );
}

/**
 * Centered page-level loader.
 */
export function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center w-full">
      <Spinner size={32} className="text-primary" />
    </div>
  );
}

/**
 * Inline loader for minimal contextual loading (e.g., inside cards).
 */
export function InlineLoader({ className }) {
  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Spinner size={24} className="text-muted" />
    </div>
  );
}
