"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function FeaturedFurniture({ items }) {
  const revealRef = useStaggerReveal(".reveal-furn-item", {
    start: "top 80%",
    stagger: 0.2,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light" className="border-t border-[var(--color-border-soft)]">
      <div ref={revealRef} className="flex flex-col gap-24 lg:gap-32">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="reveal-furn-item grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Image */}
              <div className={`lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Text */}
              <div className={`lg:col-span-5 flex flex-col ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
                  {item.category}
                </span>
                
                <h3 className="font-heading text-3xl md:text-4xl font-medium text-[var(--text-heading)] mb-6 leading-tight">
                  {item.title}
                </h3>
                
                <p className="font-body text-base text-[var(--text-body)] leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="bg-[var(--color-neutral-100)] p-6 rounded-xl border border-[var(--color-border-soft)] relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--brand-secondary)] rounded-l-xl" />
                  <span className="block font-heading text-sm font-medium text-[var(--text-heading)] mb-2">
                    Designer's Note
                  </span>
                  <p className="font-body text-sm text-[var(--text-muted)] italic leading-relaxed">
                    "{item.designerNote}"
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </Section>
  );
}
