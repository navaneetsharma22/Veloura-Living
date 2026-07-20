import { cn } from "@/lib/utils";

/**
 * Veloura Living - Logo Component
 * Renders the brand logo via an inline SVG (or pulls from public assets later).
 * Currently sets up a semantic typography-based logo placeholder perfectly matching the brand identity.
 */
export function Logo({ className, variant = "full" }) {
  if (variant === "monogram") {
    return (
      <div
        className={cn(
          "flex items-center justify-center font-heading tracking-widest uppercase text-heading leading-none",
          className
        )}
      >
        <span className="text-2xl">V</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center font-heading text-heading",
        className
      )}
    >
      <span className="text-3xl tracking-widest uppercase leading-none">
        Veloura
      </span>
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted mt-1 font-ui">
        Living
      </span>
    </div>
  );
}
