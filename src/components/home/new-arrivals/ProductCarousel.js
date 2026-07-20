"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { ProductCard } from "./ProductCard";
import { newArrivals } from "@/data/newArrivals";

export function ProductCarousel() {
  // Use the GSAP hook to stagger animate elements with the "reveal-product" class
  const gridRef = useStaggerReveal(".reveal-product", {
    start: "top 80%", 
  });

  return (
    <div ref={gridRef} className="veloura-new-arrivals__grid">
      {newArrivals.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
