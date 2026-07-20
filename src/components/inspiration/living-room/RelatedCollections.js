"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function RelatedCollections({ collections }) {
  const cardsRef = useStaggerReveal(".reveal-rel-card", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="CURATED STYLES"
          title="Related Aesthetics"
          description="Explore complete furniture collections designed around specific architectural movements."
          align="center"
        />
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {collections.map((col, index) => (
          <Link 
            key={index}
            href={col.link}
            className="reveal-rel-card group block flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={col.image}
                alt={col.name}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            
            <div className="text-center">
              <h4 className="font-heading text-2xl font-medium text-[var(--text-heading)] group-hover:text-[var(--brand-secondary)] transition-colors duration-300">
                {col.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
