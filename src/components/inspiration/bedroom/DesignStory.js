"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function DesignStory({ content }) {
  const contentRef = useStaggerReveal(".reveal-story", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="default" id="explore">
      
      {/* Introduction */}
      <div ref={contentRef} className="max-w-3xl mx-auto text-center mb-24 lg:mb-32">
        <h2 className="reveal-story font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--text-heading)] mb-8">
          {content.title}
        </h2>
        <p className="reveal-story font-body text-lg lg:text-xl text-[var(--text-body)] leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Split Sections */}
      <div className="flex flex-col gap-24 lg:gap-32">
        {content.sections.map((section, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center reveal-story-block">
                <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
                  {`0${index + 1} — Philosophy`}
                </span>
                <h3 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--text-heading)] mb-6">
                  {section.title}
                </h3>
                <p className="font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed max-w-xl">
                  {section.description}
                </p>
              </div>

              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl reveal-story-block">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
