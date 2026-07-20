import { cn } from "@/lib/utils";

/**
 * Veloura Living - Section Heading
 * Reusable text block for introducing sections within a page.
 */

const alignments = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
  right: "text-right items-end ml-auto",
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  cta, // Pass a <Button> component here
  align = "center",
  className,
}) {
  return (
    <div className={cn("flex flex-col max-w-2xl mb-12 md:mb-16", alignments[align], className)}>
      {eyebrow && (
        <span className="text-ui-label text-accent mb-3 block tracking-widest uppercase">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-display-sm md:text-display-md font-heading text-heading mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <h3 className="text-card-title text-heading mb-3">
          {subtitle}
        </h3>
      )}

      {description && (
        <p className="text-body-lg text-muted leading-relaxed mb-6">
          {description}
        </p>
      )}

      {cta && <div className="mt-2">{cta}</div>}
    </div>
  );
}
