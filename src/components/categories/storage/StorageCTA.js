"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function StorageCTA() {
  const ctaRef = useStaggerReveal(".reveal-storage-cta", {
    start: "top 90%",
    stagger: 0.1,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div 
        ref={ctaRef} 
        className="w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="reveal-storage-cta font-heading text-4xl md:text-5xl font-medium text-[var(--text-heading)] mb-6">
          Design Storage That Elevates Every Space
        </h2>
        
        <p className="reveal-storage-cta font-body text-base text-[var(--text-body)] mb-10">
          Create beautifully organized interiors with handcrafted storage solutions designed for timeless living.
        </p>
        
        <div className="reveal-storage-cta flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--bg-surface)] bg-[var(--text-heading)] hover:bg-[var(--brand-secondary)] px-8 py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link 
            href="/categories"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] border border-[var(--color-border-soft)] bg-white hover:border-[var(--text-heading)] px-8 py-4 rounded-full transition-all duration-300"
          >
            Explore Categories
          </Link>
        </div>
      </div>
    </Section>
  );
}
