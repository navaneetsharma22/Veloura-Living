"use client";

import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function JournalCTA() {
  // Reveal the bottom CTA block gracefully
  const ctaRef = useStaggerReveal(".reveal-journal-cta", {
    start: "top 90%",
  });

  return (
    <div 
      ref={ctaRef} 
      className="reveal-journal-cta flex flex-col items-center justify-center text-center mt-24 max-w-2xl mx-auto px-4"
    >
      <h3 className="font-heading text-3xl md:text-4xl font-medium text-[var(--text-heading)] mb-4">
        Explore More Design Stories
      </h3>
      
      <p className="font-body text-base text-[var(--text-body)] mb-8">
        Dive into our complete journal for expert advice, design inspiration, and stories celebrating timeless interiors.
      </p>
      
      <Link 
        href="/journal"
        className="inline-block font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] border border-[var(--text-heading)] hover:bg-[var(--text-heading)] hover:text-white px-8 py-4 rounded-full transition-colors duration-300"
      >
        View All Articles
      </Link>
    </div>
  );
}
