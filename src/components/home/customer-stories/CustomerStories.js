"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StoriesGrid } from "./StoriesGrid";
import { StoriesCTA } from "./StoriesCTA";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function CustomerStories() {
  // Reveal the section heading first
  const headerRef = useStaggerReveal(".reveal-stories-header", {
    start: "top 85%",
  });

  return (
    <Section 
      spacing="spacious" 
      bg="light" 
      containerWidth="wide"
      className="veloura-customer-stories overflow-hidden border-t border-[var(--color-border-soft)]"
      aria-label="Customer Stories"
    >
      <div ref={headerRef} className="reveal-stories-header w-full max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="CUSTOMER STORIES"
          title="Homes Designed with Timeless Elegance"
          description="Discover how thoughtfully designed furniture has transformed living spaces around the world through stories shared by our valued customers and design partners."
          align="center"
        />
      </div>
      
      <StoriesGrid />
      <StoriesCTA />
      
    </Section>
  );
}
