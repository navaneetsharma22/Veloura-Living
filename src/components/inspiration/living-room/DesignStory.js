"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function DesignStory({ content }) {
  const textRef = useStaggerReveal(".reveal-story-txt", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section id="design-story" spacing="spacious" containerWidth="wide" bg="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Typography & Story */}
        <div ref={textRef} className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
          <h2 className="reveal-story-txt font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--text-heading)] leading-tight mb-12">
            {content.title}
          </h2>
          
          <div className="flex flex-col gap-8">
            {content.paragraphs.map((p, i) => (
              <p key={i} className="reveal-story-txt font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="reveal-story-txt mt-12 w-24 h-px bg-[var(--color-border-soft)]" />
        </div>

        {/* Right Column: Large Editorial Photography */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-24">
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={content.image1}
              alt="Living room editorial shot 1"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl lg:-ml-12">
            <Image
              src={content.image2}
              alt="Living room editorial shot 2"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
