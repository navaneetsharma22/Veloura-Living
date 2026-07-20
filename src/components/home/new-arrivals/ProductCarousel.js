"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { ProductCard } from "./ProductCard";
import { newArrivals } from "@/data/newArrivals";

export function ProductCarousel() {
  // Use the GSAP hook for the initial fade up of the entire carousel container
  const carouselRef = useStaggerReveal(".reveal-carousel-container", {
    start: "top 80%", 
  });

  // Duplicate the array to create a seamless infinite loop
  const duplicatedProducts = [...newArrivals, ...newArrivals];

  return (
    <div ref={carouselRef} className="w-full overflow-hidden reveal-carousel-container pb-12 pt-4">
      <div className="relative w-full flex">
        {/* 
          Infinite Marquee Container
          Uses a custom animation: animate-[marquee_40s_linear_infinite]
          Pauses on hover so users can easily click the cards 
        */}
        <div className="flex gap-6 md:gap-8 px-4 md:px-8 w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedProducts.map((product, index) => (
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
