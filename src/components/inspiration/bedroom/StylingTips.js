"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function StylingTips({ tips }) {
  const cardsRef = useStaggerReveal(".reveal-tip-card", {
    start: "top 85%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="narrow" bg="default">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="EXPERT INSIGHTS"
          title="Designer Styling Tips"
          align="center"
        />
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className="reveal-tip-card p-8 lg:p-10 rounded-2xl bg-[var(--color-neutral-100)] border border-[var(--color-border-soft)] hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl font-medium text-[var(--text-heading)] mb-4">
              {tip.title}
            </h3>
            <p className="font-body text-base text-[var(--text-body)] leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
