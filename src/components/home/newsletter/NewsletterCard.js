"use client";

import { NewsletterForm } from "./NewsletterForm";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function NewsletterCard() {
  // GSAP reveal for the entire card
  const cardRef = useStaggerReveal(".reveal-newsletter-card", {
    start: "top 85%",
  });

  return (
    <div ref={cardRef} className="reveal-newsletter-card w-full max-w-md mx-auto lg:max-w-none">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_32px_64px_rgba(43,31,35,0.06)] border border-white/60 relative overflow-hidden group">
        
        {/* Subtle decorative glow effect that moves gently on hover */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-secondary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-transform duration-1000 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" />

        <div className="relative z-10">
          <h3 className="font-heading text-2xl font-medium text-[var(--text-heading)] mb-2 text-center">
            The Veloura Circle
          </h3>
          <p className="font-body text-sm text-[var(--text-muted)] text-center mb-8">
            An exclusive invitation to our design community.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
