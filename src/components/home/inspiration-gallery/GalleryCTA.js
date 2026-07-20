"use client";

import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function GalleryCTA() {
  // Reveal the bottom CTA block gracefully
  const ctaRef = useStaggerReveal(".reveal-gallery-cta", {
    start: "top 90%",
  });

  return (
    <div 
      ref={ctaRef} 
      className="reveal-gallery-cta flex flex-col items-center justify-center text-center mt-24 max-w-2xl mx-auto"
    >
      <h3 className="font-heading text-3xl md:text-4xl font-medium text-[var(--text-heading)] mb-4">
        Discover More Inspiring Spaces
      </h3>
      
      <p className="font-body text-base text-[var(--text-body)] mb-8">
        Browse our complete collection of beautifully designed interiors and find inspiration for every room in your home.
      </p>
      
      <Link 
        href="/gallery"
        className="inline-block font-ui text-xs uppercase tracking-[0.1em] font-medium text-white bg-[var(--text-heading)] hover:bg-black px-8 py-4 rounded-full transition-colors duration-300"
      >
        Explore Gallery
      </Link>
    </div>
  );
}
