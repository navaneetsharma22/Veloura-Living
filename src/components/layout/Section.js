import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Veloura Living - Section Component
 * Handles vertical spacing (padding) and optional background colors.
 */

const verticalSpacings = {
  normal: "py-16 md:py-24", // section padding scale
  compact: "py-8 md:py-12",
  spacious: "py-24 md:py-32",
  none: "py-0",
};

const backgrounds = {
  default: "bg-background",
  light: "bg-surface",
  dark: "bg-heading text-background",
  transparent: "bg-transparent",
};

export const Section = forwardRef(
  (
    {
      children,
      className,
      spacing = "normal",
      bg = "transparent",
      container = true,
      containerWidth = "default",
      as: Component = "section",
      ...props
    },
    ref
  ) => {
    const content = container ? (
      <Container width={containerWidth}>{children}</Container>
    ) : (
      children
    );

    return (
      <Component
        ref={ref}
        className={cn(
          "w-full relative overflow-hidden",
          verticalSpacings[spacing],
          backgrounds[bg],
          className
        )}
        {...props}
      >
        {content}
      </Component>
    );
  }
);

Section.displayName = "Section";
