"use client";

import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function StoriesCTA() {
  // Reveal the bottom CTA block gracefully
  const ctaRef = useStaggerReveal(".reveal-stories-cta", {
    start: "top 90%",
  });

  return (
    <div 
      ref={ctaRef} 
      className="reveal-stories-cta flex flex-col items-center justify-center text-center mt-24 max-w-2xl mx-auto px-4"
    >
      <h3 className="font-heading text-3xl md:text-4xl font-medium text-[var(--text-heading)] mb-4">
        Become Part of the Veloura Living Story
      </h3>
      
      <p className="font-body text-base text-[var(--text-body)] mb-8">
        Every beautifully designed home begins with thoughtful choices. Start creating your own timeless living experience today.
      </p>
      
      <Link 
        href="/consultation"
        className="inline-block font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--bg-surface)] bg-[var(--text-heading)] hover:bg-[var(--brand-accent)] px-8 py-4 rounded-full transition-colors duration-300"
      >
        Book a Design Consultation
      </Link>
    </div>
  );
}
