"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function FeaturedFurniture({ items }) {
  const furnitureRef = useStaggerReveal(".reveal-furn", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="default" className="border-t border-[var(--color-border-soft)]">
      
      <div className="mb-20 lg:mb-28 text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-[var(--text-heading)] mb-6">
          Curated Elements
        </h2>
        <p className="font-body text-lg text-[var(--text-muted)]">
          Discover the foundational pieces that compose a luxury bedroom.
        </p>
      </div>

      <div ref={furnitureRef} className="flex flex-col gap-24 lg:gap-40">
        {items.map((item, index) => {
          // Create an asymmetrical layout by alternating flex direction and sizes
          const isReversed = index % 2 !== 0;
          
          return (
            <div 
              key={index}
              className={`flex flex-col gap-10 lg:gap-20 items-center ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image side - takes up 60% on desktop */}
              <div className="reveal-furn w-full lg:w-[60%] relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Text side - takes up 40% on desktop */}
              <div className="reveal-furn w-full lg:w-[40%] flex flex-col justify-center">
                <div className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-4">
                  {item.category}
                </div>
                
                <h3 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--text-heading)] mb-6">
                  {item.title}
                </h3>
                
                <p className="font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="flex flex-col gap-4 border-t border-[var(--color-border-soft)] pt-6">
                  <div>
                    <span className="font-ui text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                      Primary Materials
                    </span>
                    <span className="font-heading text-lg text-[var(--text-heading)]">
                      {item.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-ui text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                      Designer Tip
                    </span>
                    <span className="font-body text-sm text-[var(--text-body)] italic">
                      "{item.recommendation}"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
