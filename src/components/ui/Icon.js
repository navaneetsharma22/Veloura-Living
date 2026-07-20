import { cn } from "@/lib/utils";

/**
 * Veloura Living - Icon Wrapper
 * Normalizes all icons from lucide-react to ensure consistent scaling and stroke widths.
 */

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({
  name, // e.g. "ChevronRight", "ShoppingBag"
  size = "md",
  className,
  strokeWidth = 1.5,
  label, // For accessibility
  ...props
}) {
  // We use dynamic imports or require mapping for lucide icons if we want to pass name as string,
  // but a better pattern for Next.js is to pass the icon component itself directly to avoid huge bundle sizes.
  // We will expect the user to pass the imported Icon component via the `icon` prop.
  return null;
}

// Rewriting Icon to accept the component reference directly for better tree-shaking
export function IconWrapper({
  icon: IconComponent,
  size = "md",
  className,
  strokeWidth = 1.5,
  label,
  ...props
}) {
  if (!IconComponent) return null;

  return (
    <IconComponent
      size={iconSizes[size] || size}
      strokeWidth={strokeWidth}
      aria-hidden={label ? "false" : "true"}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("shrink-0 text-current transition-colors", className)}
      {...props}
    />
  );
}
