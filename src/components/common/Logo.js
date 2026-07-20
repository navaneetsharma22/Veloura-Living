import { cn } from "@/lib/utils";

/**
 * Veloura Living - Logo Component
 * "VELOURA" in serif, "LIVING" in sans-serif below it.
 */
export function Logo({ className }) {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      <span 
        className="font-heading uppercase text-[22px] leading-none text-[var(--text-heading)]"
        style={{ letterSpacing: '2px', fontFamily: '"Playfair Display", serif' }}
      >
        VELOURA
      </span>
      <span 
        className="font-body uppercase text-[10px] leading-none mt-[2px]"
        style={{ letterSpacing: '3px', color: '#B76E79' }}
      >
        LIVING
      </span>
    </div>
  );
}
