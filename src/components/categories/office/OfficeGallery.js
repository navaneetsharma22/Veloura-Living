"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function OfficeGallery({ images }) {
  const galleryRef = useStaggerReveal(".reveal-insp-image", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="WORKSPACE INSPIRATION"
          title="Designed for Deep Work"
          description="Explore beautifully styled home offices and executive workspaces that balance sophisticated aesthetics with rigorous functionality."
          align="center"
        />
      </div>

      <div ref={galleryRef} className="grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
        {images.map((item) => (
          <div 
            key={item.id} 
            className={`reveal-insp-image relative w-full h-full rounded-xl overflow-hidden group ${item.span}`}
          >
            <Image
              src={item.image}
              alt="Office lifestyle inspiration"
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Subtle soft overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-[#1f2937]/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </Section>
  );
}
