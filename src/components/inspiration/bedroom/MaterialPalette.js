"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function MaterialPalette({ palette }) {
  const materialsRef = useStaggerReveal(".reveal-mat-card", {
    start: "top 80%",
    stagger: 0.15,
  });

  const colorsRef = useStaggerReveal(".reveal-color-swatch", {
    start: "top 85%",
    stagger: 0.1,
  });

  return (
    <Section spacing="standard" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="MATERIAL & COLOR PALETTE"
          title="Sensory Elements"
          description="A luxury bedroom relies on a tactile, highly intentional palette. We combine soft fabrics with warm natural woods to encourage relaxation."
          align="center"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Materials */}
        <div ref={materialsRef} className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {palette.materials.map((mat, index) => (
            <div key={index} className="reveal-mat-card flex flex-col gap-4 group">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h4 className="font-heading text-lg font-medium text-[var(--text-heading)]">
                {mat.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Colors */}
        <div ref={colorsRef} className="lg:w-1/3 flex flex-col justify-center gap-6">
          <h3 className="font-heading text-2xl font-medium text-[var(--text-heading)] mb-2">
            Serene Tones
          </h3>
          <div className="flex flex-col gap-4">
            {palette.colors.map((color, index) => (
              <div key={index} className="reveal-color-swatch flex items-center gap-6 p-2 -ml-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors">
                <div 
                  className="w-16 h-16 rounded-full border border-[var(--color-border-soft)] shadow-inner flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <div className="font-heading text-lg font-medium text-[var(--text-heading)]">
                    {color.name}
                  </div>
                  <div className="font-ui text-xs uppercase tracking-widest text-[var(--text-muted)]">
                    {color.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
