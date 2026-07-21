"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { ProductCard } from "./ProductCard";
import { newArrivals } from "@/data/newArrivals";

export function ProductCarousel() {
  // Use the GSAP hook for the initial fade up of the entire carousel container
  const carouselRef = useStaggerReveal(".reveal-carousel-container", {
    start: "top 80%", 
  });

  // Use the original products for a static scroll (no duplication needed)
  const products = newArrivals;

  return (
    <div ref={carouselRef} className="w-full overflow-hidden reveal-carousel-container pb-12 pt-4">
      <div className="relative w-full flex">
        {/* 
          Static Horizontal Scroll Container
          Uses custom scrollbar hiding class for clean UI
        */}
        <div className="flex gap-6 md:gap-8 px-4 md:px-8 w-full overflow-x-auto hide-scrollbar pb-8">
          {products.map((product, index) => (
            <ProductCard 
              key={`${product.id}-${index}`} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
