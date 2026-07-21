"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function BedroomCTA() {
  const ctaRef = useStaggerReveal(".reveal-bed-cta", {
    start: "top 90%",
    stagger: 0.1,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div 
        ref={ctaRef} 
        className="w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="reveal-bed-cta font-heading text-4xl md:text-5xl font-medium text-[var(--text-heading)] mb-6">
          Create Your Personal Sanctuary
        </h2>
        
        <p className="reveal-bed-cta font-body text-base text-[var(--text-body)] mb-10">
          Let our design specialists help you create a bedroom that combines timeless elegance with everyday comfort.
        </p>
        
        <div className="reveal-bed-cta flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--bg-surface)] bg-[var(--text-heading)] hover:bg-[var(--brand-secondary)] px-8 py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link 
            href="/collections"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] border border-[var(--color-border-soft)] bg-white hover:border-[var(--text-heading)] px-8 py-4 rounded-full transition-all duration-300"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    </Section>
  );
}
