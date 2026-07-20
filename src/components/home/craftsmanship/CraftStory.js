"use client";

import { SectionHeading } from "@/components/layout/SectionHeading";
import { CraftFeatureCard } from "./CraftFeatureCard";
import { craftFeatures } from "@/data/craftsmanship";

export function CraftStory() {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="reveal-craft-content">
        <SectionHeading
          eyebrow="OUR CRAFTSMANSHIP"
          title="Crafted with Passion. Built to Last."
          description="Every piece at Veloura Living is shaped by skilled artisans using carefully selected materials and refined techniques. From the first sketch to the final finish, every detail reflects our commitment to timeless craftsmanship."
          align="left"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {craftFeatures.map((feature) => (
          <div key={feature.id} className="reveal-craft-card">
            <CraftFeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
