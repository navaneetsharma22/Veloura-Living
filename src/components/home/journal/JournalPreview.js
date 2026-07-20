"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { JournalGrid } from "./JournalGrid";
import { JournalCTA } from "./JournalCTA";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function JournalPreview() {
  // Reveal the section heading first
  const headerRef = useStaggerReveal(".reveal-journal-header", {
    start: "top 85%",
  });

  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      containerWidth="wide"
      className="veloura-journal-preview overflow-hidden"
      aria-label="From the Journal"
    >
      <div ref={headerRef} className="reveal-journal-header w-full max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="FROM THE JOURNAL"
          title="Stories, Ideas & Timeless Inspiration"
          description="Discover curated articles on interior styling, furniture craftsmanship, premium materials, and modern living. Every story is crafted to inspire beautiful spaces and thoughtful design."
          align="center"
        />
      </div>
      
      <JournalGrid />
      <JournalCTA />
      
    </Section>
  );
}
