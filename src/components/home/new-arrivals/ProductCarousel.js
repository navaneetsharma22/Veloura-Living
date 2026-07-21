"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { ProductCard } from "./ProductCard";
import { newArrivals } from "@/data/newArrivals";

export function ProductCarousel() {
  // Use the GSAP hook for the initial fade up of the entire carousel container
  const carouselRef = useStaggerReveal(".reveal-carousel-container", {
    start: "top 80%", 
  });

  // Duplicate products to create a seamless infinite marquee effect
  const marqueeProducts = [...newArrivals, ...newArrivals];

  return (
    <div ref={carouselRef} className="w-full overflow-hidden reveal-carousel-container pb-12 pt-4">
      <div className="relative w-full flex overflow-hidden">
        {/* 
          Infinite Marquee Scroll Container
        */}
        <div className="flex gap-6 md:gap-8 px-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeProducts.map((product, index) => (
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
