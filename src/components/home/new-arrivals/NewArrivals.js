"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductCarousel } from "./ProductCarousel";
import "./newArrivals.css";

export function NewArrivals() {
  return (
    <Section 
      spacing="spacious" 
      bg="light" // Using a light surface background to differentiate the section
      container 
      containerWidth="wide"
      className="veloura-new-arrivals"
      aria-label="New Arrivals"
    >
      <SectionHeading
        eyebrow="NEW ARRIVALS"
        title="The Latest Additions to Timeless Living"
        description="Discover our newest collection of handcrafted furniture, designed to elevate modern interiors with refined materials, exceptional craftsmanship, and enduring style."
        align="center"
      />
      
      <ProductCarousel />
    </Section>
  );
}
