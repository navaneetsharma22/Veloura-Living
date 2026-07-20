"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function InteractiveBedroom({ room }) {
  const roomRef = useStaggerReveal(".reveal-int", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section spacing="standard" containerWidth="full" bg="light" className="border-t border-[var(--color-border-soft)]">
      
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 mb-10">
        <SectionHeading
          eyebrow="INTERACTIVE EXPERIENCE"
          title="Inside the Sanctuary"
          description="Hover over the indicators to explore the premium furniture, rich textures, and architectural details that make up this perfectly balanced bedroom."
          align="center"
        />
      </div>

      <div ref={roomRef} className="reveal-int relative w-full max-w-[1800px] mx-auto aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-none md:rounded-3xl shadow-2xl bg-[var(--color-neutral-900)]">
        
        {/* Base Image */}
        <Image
          src={room.image}
          alt="Interactive bedroom environment"
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />

        {/* Hotspots */}
        {room.hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute group z-10"
            style={{ top: `${spot.y}%`, left: `${spot.x}%`, transform: 'translate(-50%, -50%)' }}
          >
            {/* The Dot */}
            <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer peer">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
              <div className="relative w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-150" />
            </div>

            {/* The Tooltip Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl opacity-0 translate-y-4 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-hover:opacity-100 peer-hover:translate-y-0 peer-hover:pointer-events-auto hover:opacity-100 hover:translate-y-0 hover:pointer-events-auto border border-[var(--color-border-soft)]">
              
              <div className="font-ui text-[10px] uppercase tracking-widest text-[var(--brand-secondary)] mb-2">
                {spot.collection}
              </div>
              
              <h4 className="font-heading text-xl font-medium text-[var(--text-heading)] mb-2">
                {spot.title}
              </h4>
              
              <div className="font-body text-xs text-[var(--text-muted)] mb-4 flex gap-2">
                {spot.materials.map((m, i) => (
                  <span key={i} className="bg-[var(--color-neutral-100)] px-2 py-1 rounded-sm">
                    {m}
                  </span>
                ))}
              </div>
              
              <p className="font-body text-sm text-[var(--text-body)] leading-relaxed italic mb-5">
                "{spot.note}"
              </p>
              
              <Link 
                href={spot.link}
                className="inline-flex items-center gap-2 font-ui text-xs uppercase tracking-widest text-[var(--text-heading)] hover:text-[var(--brand-secondary)] transition-colors group/link"
              >
                View Product <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
