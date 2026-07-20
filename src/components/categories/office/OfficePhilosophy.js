"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function OfficePhilosophy({ content }) {
  const contentRef = useStaggerReveal(".reveal-phil-text", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="overflow-hidden border-t border-[var(--color-border-soft)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Editorial Image */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle architectural frame */}
          <div className="absolute inset-4 border border-white/20 rounded-xl z-10 pointer-events-none mix-blend-overlay" />
        </div>

        {/* Right Side: Philosophy Text */}
        <div ref={contentRef} className="flex flex-col max-w-xl">
          <span className="reveal-phil-text inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
            DESIGN PHILOSOPHY
          </span>
          
          <h2 className="reveal-phil-text font-heading text-4xl lg:text-5xl font-medium text-[var(--text-heading)] mb-8 leading-tight">
            {content.title}
          </h2>
          
          <p className="reveal-phil-text font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed mb-10">
            {content.description}
          </p>

          <div className="reveal-phil-text w-16 h-px bg-[var(--text-muted)]" />
        </div>

      </div>
    </Section>
  );
}
