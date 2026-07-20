"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductCarousel } from "./ProductCarousel";

export function NewArrivals() {
  return (
    <Section 
      spacing="spacious" 
      bg="light" 
      container={false}
      className="veloura-new-arrivals overflow-hidden"
      aria-label="New Arrivals"
    >
      {/* Container class added here just to center the heading text */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NEW ARRIVALS"
          title="The Latest Additions to Timeless Living"
          description="Discover our newest collection of handcrafted furniture, designed to elevate modern interiors with refined materials, exceptional craftsmanship, and enduring style."
          align="center"
        />
      </div>
      
      <ProductCarousel />
    </Section>
  );
}
