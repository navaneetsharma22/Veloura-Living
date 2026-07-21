"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function DecorGallery({ images }) {
  const galleryRef = useStaggerReveal(".reveal-insp-image", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="STYLING INSPIRATION"
          title="Curated Spaces"
          description="Explore beautifully styled interiors showcasing how thoughtful accessories and objects bring a room to life."
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
              alt={item.title || "Decor lifestyle inspiration"}
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Subtle soft overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-[#35322a]/10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 bg-gradient-to-t from-[rgba(15,12,13,0.8)] via-[rgba(15,12,13,0.3)] to-transparent opacity-90 transition-opacity duration-500 flex flex-col justify-end pointer-events-none">
              {item.title && (
                <h4 className="font-heading text-xl lg:text-2xl text-white font-medium mb-1">
                  {item.title}
                </h4>
              )}
              {item.price && (
                <p className="font-ui text-xs tracking-wider uppercase text-[var(--brand-secondary)] mt-1">
                  {item.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
