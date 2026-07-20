"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function LightingGuide({ guide }) {
  const contentRef = useStaggerReveal(".reveal-light-txt", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Typography & Layers */}
        <div ref={contentRef} className="flex flex-col max-w-xl order-2 lg:order-1">
          <span className="reveal-light-txt inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
            DESIGNER GUIDE
          </span>
          
          <h2 className="reveal-light-txt font-heading text-4xl lg:text-5xl font-medium text-[var(--text-heading)] mb-6 leading-tight">
            {guide.title}
          </h2>
          
          <p className="reveal-light-txt font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed mb-12">
            {guide.description}
          </p>

          <div className="flex flex-col gap-8">
            {guide.layers.map((layer, index) => (
              <div key={index} className="reveal-light-txt flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--color-border-soft)] bg-[var(--bg-surface)] flex items-center justify-center font-heading text-lg font-medium text-[var(--text-heading)] shadow-sm">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="font-heading text-xl font-medium text-[var(--text-heading)] mb-2">
                    {layer.title} Lighting
                  </h4>
                  <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Editorial Image */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
          <Image
            src={guide.image}
            alt="Lighting layering in a luxury bedroom"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Simulate a warm bedside lighting glow over the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ffe6c9]/15 to-transparent mix-blend-overlay" />
        </div>

      </div>
    </Section>
  );
}
