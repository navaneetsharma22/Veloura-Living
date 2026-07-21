/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function OutdoorStory({ story }) {
  const contentRef = useStaggerReveal(".reveal-story-txt", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="spacious" containerWidth="wide" bg="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div ref={contentRef} className="flex flex-col order-2 lg:order-1">
          <span className="reveal-story-txt inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-8">
            CUSTOMER SPOTLIGHT
          </span>
          
          <blockquote className="reveal-story-txt font-heading text-2xl lg:text-4xl font-medium text-[var(--text-heading)] leading-snug mb-10">
            "{story.quote}"
          </blockquote>
          
          <div className="reveal-story-txt flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[var(--color-border-soft)] flex items-center justify-center bg-white shadow-sm">
              <span className="font-heading text-lg text-[var(--text-heading)]">{story.name.charAt(0)}</span>
            </div>
            <div>
              <div className="font-heading text-lg font-medium text-[var(--text-heading)] mb-1">
                {story.name}
              </div>
              <div className="font-ui text-xs uppercase tracking-widest text-[var(--text-muted)]">
                {story.profession} • {story.location}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 relative w-full aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg reveal-story-txt">
          <Image
            src={story.image}
            alt={`${story.name}'s outdoor space`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </Section>
  );
}
