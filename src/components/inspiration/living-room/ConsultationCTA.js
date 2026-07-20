"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function ConsultationCTA() {
  const ctaRef = useStaggerReveal(".reveal-consult-cta", {
    start: "top 90%",
    stagger: 0.1,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      <div 
        ref={ctaRef} 
        className="w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="reveal-consult-cta font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--text-heading)] mb-6">
          Let's Design Your Perfect Living Room
        </h2>
        
        <p className="reveal-consult-cta font-body text-lg text-[var(--text-body)] mb-12">
          Our interior designers create elegant living spaces tailored to your lifestyle, architecture, and personal aesthetics.
        </p>
        
        <div className="reveal-consult-cta flex flex-col sm:flex-row gap-4">
          <Link 
            href="/consultation"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--bg-surface)] bg-[var(--text-heading)] hover:bg-[var(--brand-secondary)] px-10 py-5 rounded-full transition-colors duration-300 shadow-xl hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link 
            href="/collections"
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] border border-[var(--color-border-soft)] bg-white hover:border-[var(--text-heading)] px-10 py-5 rounded-full transition-all duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </Section>
  );
}
