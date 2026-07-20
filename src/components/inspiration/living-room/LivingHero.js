"use client";

import Image from "next/image";
import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export function LivingHero({ content }) {
  const contentRef = useStaggerReveal(".reveal-hero-text", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <section className="relative w-full h-[95vh] min-h-[700px] flex flex-col justify-between overflow-hidden">
      
      {/* Cinematic Parallax Background */}
      <div className="absolute inset-0 z-0 bg-[var(--color-neutral-900)]">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover animate-slow-zoom opacity-80"
          sizes="100vw"
          priority
        />
        {/* Deep, luxurious gradient overlay for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151312] via-[#151312]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151312]/30 via-transparent to-transparent" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pt-8">
        <Breadcrumb 
          items={[
            { label: 'Inspiration', href: '/inspiration' },
            { label: 'Living Room', href: '/inspiration/living-room' },
          ]} 
          theme="dark"
        />
      </div>

      {/* Hero Content - Magazine Layout */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pb-20 lg:pb-32 flex flex-col items-start text-left"
      >
        <div className="max-w-4xl">
          <span className="reveal-hero-text inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)] mb-6 md:mb-8">
            {content.eyebrow}
          </span>
          
          <h1 className="reveal-hero-text font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 leading-[1.05] tracking-tight">
            {content.title}
          </h1>
          
          <p className="reveal-hero-text font-body text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl font-light">
            {content.description}
          </p>
          
          <div className="reveal-hero-text flex flex-col sm:flex-row gap-6">
            <a 
              href="#design-story"
              className="inline-flex items-center justify-center font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] bg-white hover:bg-[var(--brand-secondary)] hover:text-white px-10 py-5 rounded-full transition-colors duration-300 shadow-xl"
            >
              Explore the Space
            </a>
            <Link 
              href="/consultation"
              className="inline-flex items-center justify-center font-ui text-xs uppercase tracking-[0.1em] font-medium text-white border border-white/20 hover:bg-white/10 px-10 py-5 rounded-full transition-colors duration-300 backdrop-blur-sm"
            >
              Book Design Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
