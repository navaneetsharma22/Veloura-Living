"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function ExploreSpaces({ spaces }) {
  const cardsRef = useStaggerReveal(".reveal-space-card", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="default">
      <div className="flex justify-between items-end mb-12 lg:mb-16 border-b border-[var(--color-border-soft)] pb-6">
        <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--text-heading)]">
          Explore More Spaces
        </h2>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spaces.map((space, index) => (
          <Link 
            key={index}
            href={space.link}
            className="reveal-space-card group relative w-full aspect-[16/9] md:aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={space.image}
              alt={space.name}
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.9)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left z-10">
              <h4 className="font-heading text-2xl font-medium text-white mb-4">
                {space.name}
              </h4>
              <div className="flex items-center gap-2 font-ui text-xs uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                View Inspiration <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
