"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { CategoryCard } from "./CategoryCard";
import { featuredCategories } from "@/data/categories";

export function CategoryGrid() {
  // Use the GSAP hook to stagger animate elements with the "reveal-item" class
  const gridRef = useStaggerReveal(".reveal-item", {
    start: "top 75%", // Trigger animation when top of grid hits 75% of viewport
  });

  return (
    <div ref={gridRef} className="veloura-categories__grid">
      {featuredCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
