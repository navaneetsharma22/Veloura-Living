"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { MaterialGrid } from "./MaterialGrid";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function MaterialShowcase() {
  // GSAP hook for the section header
  const headerRef = useStaggerReveal(".reveal-mat-header", {
    start: "top 85%",
  });

  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      containerWidth="wide"
      className="veloura-materials overflow-hidden border-t border-[var(--color-border-soft)]"
      aria-label="Material Showcase"
    >
      <div ref={headerRef} className="reveal-mat-header w-full max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="PREMIUM MATERIALS"
          title="Naturally Beautiful. Carefully Selected."
          description="Every Veloura Living piece begins with exceptional materials. From sustainably sourced hardwoods to natural stone and luxurious fabrics, each element is chosen for its beauty, durability, and timeless appeal."
          align="center"
        />
      </div>
      
      <MaterialGrid />
    </Section>
  );
}
