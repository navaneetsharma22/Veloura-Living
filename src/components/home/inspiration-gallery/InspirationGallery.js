"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryCTA } from "./GalleryCTA";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function InspirationGallery() {
  // Reveal the section heading first
  const headerRef = useStaggerReveal(".reveal-gallery-header", {
    start: "top 85%",
  });

  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      containerWidth="wide"
      className="veloura-inspiration-gallery overflow-hidden"
      aria-label="Inspiration Gallery"
    >
      <div ref={headerRef} className="reveal-gallery-header w-full max-w-4xl mx-auto mb-16">
        <SectionHeading
          eyebrow="INTERIOR INSPIRATION"
          title="Spaces Designed to Inspire Everyday Living"
          description="Explore thoughtfully curated interiors where timeless furniture, refined materials, and elegant styling come together to create exceptional living experiences."
          align="center"
        />
      </div>
      
      <GalleryGrid />
      <GalleryCTA />
      
    </Section>
  );
}
