"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function BeforeAfter({ data }) {
  const [showAfter, setShowAfter] = useState(false);
  
  const contentRef = useStaggerReveal(".reveal-ba", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12">
        <SectionHeading
          eyebrow="TRANSFORMATION"
          title="The Power of Proportion"
          align="center"
        />
      </div>

      <div ref={contentRef} className="flex flex-col items-center">
        
        {/* Toggle Controls */}
        <div className="reveal-ba flex bg-white border border-[var(--color-border-soft)] rounded-full p-1 mb-8 shadow-sm">
          <button 
            onClick={() => setShowAfter(false)}
            className={`px-8 py-3 rounded-full font-ui text-xs uppercase tracking-widest transition-all duration-300 ${!showAfter ? 'bg-[var(--text-heading)] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'}`}
          >
            Before
          </button>
          <button 
            onClick={() => setShowAfter(true)}
            className={`px-8 py-3 rounded-full font-ui text-xs uppercase tracking-widest transition-all duration-300 ${showAfter ? 'bg-[var(--text-heading)] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'}`}
          >
            After
          </button>
        </div>

        {/* Image Container with crossfade */}
        <div className="reveal-ba relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12 bg-[var(--color-neutral-200)]">
          <Image
            src={data.beforeImage}
            alt="Living room before transformation"
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${showAfter ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 1200px) 100vw, 80vw"
          />
          <Image
            src={data.afterImage}
            alt="Living room after transformation"
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${showAfter ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 1200px) 100vw, 80vw"
          />
        </div>

        {/* Story */}
        <p className="reveal-ba font-body text-lg lg:text-xl text-[var(--text-body)] text-center max-w-3xl leading-relaxed italic">
          "{data.story}"
        </p>

      </div>
    </Section>
  );
}
