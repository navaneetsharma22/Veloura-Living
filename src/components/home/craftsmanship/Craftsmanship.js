"use client";

import { Section } from "@/components/layout/Section";
import { CraftGallery } from "./CraftGallery";
import { CraftStory } from "./CraftStory";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function Craftsmanship() {
  // Setup the GSAP stagger reveal for the components
  const sectionRef = useStaggerReveal(".reveal-craft-image, .reveal-craft-content, .reveal-craft-card", {
    start: "top 75%",
    stagger: 0.15,
  });

  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      containerWidth="wide"
      className="veloura-craftsmanship overflow-hidden"
      aria-label="Our Craftsmanship"
    >
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Large Immersive Image */}
        <CraftGallery />
        
        {/* Right Side: Story and Feature Highlights */}
        <CraftStory />
      </div>
    </Section>
  );
}
