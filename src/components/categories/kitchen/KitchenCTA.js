"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function KitchenCTA() {
  const ctaRef = useStaggerReveal(".reveal-kitchen-cta", {
    start: "top 90%",
    stagger: 0.1,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div 
        ref={ctaRef} 
        className="w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="reveal-kitchen-cta font-heading text-4xl md:text-5xl font-medium text-[var(--text-heading)] mb-6">
          Create a Kitchen Designed Around Your Lifestyle
        </h2>
        
        <p className="reveal-kitchen-cta font-body text-base text-[var(--text-body)] mb-10">
          Work with our design specialists to create a timeless kitchen that combines craftsmanship, beauty, and everyday functionality.
        </p>
        
        <div className="reveal-kitchen-cta flex flex-col sm:flex-row gap-4">
          <Link 
            href="/consultation"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--bg-surface)] bg-[var(--text-heading)] hover:bg-[var(--brand-secondary)] px-8 py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link 
            href="/collections"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] border border-[var(--color-border-soft)] bg-white hover:border-[var(--text-heading)] px-8 py-4 rounded-full transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </Section>
  );
}
