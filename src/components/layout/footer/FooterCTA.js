"use client";

import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function FooterCTA() {
  const ctaRef = useStaggerReveal(".reveal-footer-cta", {
    start: "top 95%",
    stagger: 0.1,
  });

  return (
    <div 
      ref={ctaRef}
      className="w-full bg-[var(--text-heading)] text-white py-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Decorative large circle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-secondary)]/10 rounded-full blur-3xl pointer-events-none" />

      <h2 className="reveal-footer-cta font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 relative z-10">
        Ready to Create Your Dream Space?
      </h2>
      
      <p className="reveal-footer-cta font-body text-base lg:text-lg text-white/80 max-w-2xl mb-10 relative z-10">
        Whether you're furnishing a single room or designing an entire home, our team is here to help you create timeless interiors with thoughtfully crafted furniture.
      </p>
      
      <div className="reveal-footer-cta flex flex-col sm:flex-row gap-4 relative z-10">
        <Link 
          href="/contact"
          className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] bg-white hover:bg-[var(--brand-secondary)] hover:text-white px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Book a Consultation
        </Link>
        <Link 
          href="/collections"
          className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full transition-colors duration-300"
        >
          Explore Collections
        </Link>
      </div>
    </div>
  );
}
