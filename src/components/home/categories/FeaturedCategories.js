"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CategoryGrid } from "./CategoryGrid";
import "./categories.css";

export function FeaturedCategories() {
  return (
    <Section 
      spacing="spacious" 
      bg="default" 
      container 
      className="veloura-featured-categories"
      aria-label="Featured Categories"
    >
      <SectionHeading
        eyebrow="OUR CATEGORIES"
        title="Explore Every Space"
        description="Discover thoughtfully designed furniture collections that transform every corner of your home into a timeless living experience."
        align="center"
      />
      
      <CategoryGrid />
    </Section>
  );
}
