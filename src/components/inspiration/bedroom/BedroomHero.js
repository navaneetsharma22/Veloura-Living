"use client";

import Image from "next/image";
import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function BedroomHero({ content }) {
  const contentRef = useStaggerReveal(".reveal-hero", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--color-neutral-900)]">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image}
          alt="Luxury bedroom interior"
          fill
          priority
          className="object-cover opacity-70 scale-105 transition-transform duration-[10s] ease-out"
          sizes="100vw"
        />
        {/* Elegant moody gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef} 
        className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-20"
      >
        <span className="reveal-hero inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-6">
          {content.eyebrow}
        </span>
        
        <h1 className="reveal-hero font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-8 drop-shadow-sm">
          {content.title}
        </h1>
        
        <p className="reveal-hero font-body text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-12 font-light">
          {content.description}
        </p>
        
        <div className="reveal-hero flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link 
            href={content.primaryCta.href}
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] bg-white hover:bg-white/90 px-10 py-4 rounded-full transition-colors duration-300 shadow-lg text-center"
          >
            {content.primaryCta.label}
          </Link>
          <Link 
            href={content.secondaryCta.href}
            className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 px-10 py-4 rounded-full transition-all duration-300 text-center backdrop-blur-sm"
          >
            {content.secondaryCta.label}
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-70 animate-pulse">
        <span className="font-ui text-[10px] uppercase tracking-widest text-white">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}
