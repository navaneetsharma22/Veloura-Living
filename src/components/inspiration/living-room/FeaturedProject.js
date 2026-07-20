"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function FeaturedProject({ project }) {
  const contentRef = useStaggerReveal(".reveal-fp", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="none" containerWidth="full" bg="default" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 mb-16 lg:mb-24">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <div>
            <span className="reveal-fp inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
              FEATURED PROJECT
            </span>
            <h2 className="reveal-fp font-heading text-4xl lg:text-6xl font-medium text-[var(--text-heading)] mb-4">
              {project.title}
            </h2>
            <div className="reveal-fp font-ui text-sm uppercase tracking-widest text-[var(--text-muted)]">
              {project.location}
            </div>
          </div>
          
          <div className="reveal-fp border-l border-[var(--color-border-soft)] pl-8 lg:pl-12">
            <blockquote className="font-heading text-xl lg:text-3xl font-medium text-[var(--text-heading)] leading-snug italic mb-6">
              "{project.quote}"
            </blockquote>
            <div className="font-ui text-xs uppercase tracking-widest text-[var(--text-muted)]">
              — {project.designer}, Lead Designer
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full h-[60vh] min-h-[500px] relative mb-4 lg:mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gallery Ribbon */}
      <div className="w-full flex gap-4 lg:gap-6 px-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {project.gallery.map((img, i) => (
          <div key={i} className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden snap-center shadow-sm">
            <Image
              src={img}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 500px"
            />
          </div>
        ))}
      </div>

    </Section>
  );
}
