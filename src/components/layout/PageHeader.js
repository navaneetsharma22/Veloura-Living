import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Veloura Living - Page Header
 * Standardized header block for top-level pages (Shop, About, Journal, etc).
 */

const alignments = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
  right: "text-right items-end ml-auto",
};

const bgVariants = {
  default: "bg-background",
  surface: "bg-surface border-b border-border-soft",
  transparent: "bg-transparent",
};

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  breadcrumb,
  align = "center",
  bg = "default",
  className,
  containerWidth = "narrow", // Usually headers shouldn't span full width to maintain readability
}) {
  return (
    <header
      className={cn(
        "w-full pt-16 pb-12 md:pt-24 md:pb-16",
        bgVariants[bg],
        className
      )}
    >
      <Container width={containerWidth}>
        <div className={cn("flex flex-col max-w-3xl", alignments[align])}>
          {breadcrumb && <div className="mb-8">{breadcrumb}</div>}
          
          {badge && (
            <div className="mb-4">
              {badge}
            </div>
          )}

          {subtitle && (
            <span className="text-ui-label text-accent mb-3 block">
              {subtitle}
            </span>
          )}

          <h1 className="text-display-md md:text-display-lg font-heading text-heading mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-body-lg text-muted max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
