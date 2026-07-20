"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CollectionGrid } from "./CollectionGrid";
import "./collections.css";

export function FeaturedCollections() {
  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      container 
      containerWidth="wide"
      className="veloura-featured-collections"
      aria-label="Featured Collections"
    >
      <SectionHeading
        eyebrow="SIGNATURE COLLECTIONS"
        title="Timeless Collections Crafted for Modern Living"
        description="Explore carefully curated furniture collections inspired by contemporary architecture, timeless craftsmanship, and refined living. Every collection reflects a distinct design philosophy while maintaining the elegance of Veloura Living."
        align="center"
      />
      
      <CollectionGrid />
    </Section>
  );
}
