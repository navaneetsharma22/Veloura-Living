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
        <div className="flex gap-6 md:gap-8 px-4 w-max animate-marquee">
          {marqueeProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[280px] md:w-[320px] flex-shrink-0">
              <ProductCard 
                product={product} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
