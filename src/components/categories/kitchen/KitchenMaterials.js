"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function KitchenMaterials({ materials }) {
  const materialsRef = useStaggerReveal(".reveal-mat-card", {
    start: "top 85%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      <div className="mb-12 lg:mb-16">
        <SectionHeading
          eyebrow="MATERIAL EXCELLENCE"
          title="Engineered for the Everyday"
          description="We select materials that combine rigorous durability with profound aesthetic depth, ensuring your kitchen remains beautiful through decades of daily use."
          align="center"
        />
      </div>

      <div ref={materialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {materials.map((mat) => (
          <div key={mat.id} className="reveal-mat-card group flex flex-col gap-6">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700">
              <Image
                src={mat.image}
                alt={mat.name}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div>
              <h4 className="font-heading text-xl font-medium text-[var(--text-heading)] mb-2">
                {mat.name}
              </h4>
              <p className="font-body text-sm text-[var(--text-body)] leading-relaxed">
                {mat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
