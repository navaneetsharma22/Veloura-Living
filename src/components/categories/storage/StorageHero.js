"use client";

import Image from "next/image";
import Link from "next/link";
import { useStaggerReveal } from "@/lib/gsap/hooks";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export function StorageHero({ content }) {
  const contentRef = useStaggerReveal(".reveal-hero-text", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-between overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover animate-slow-zoom"
          sizes="100vw"
          priority
        />
        {/* Soft elegant gradient overlay tailored for a clean, organized feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.85)] via-[rgba(26,26,26,0.3)] to-[rgba(26,26,26,0.1)]" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pt-8">
        <Breadcrumb 
          items={[
            { label: 'Categories', href: '/categories' },
            { label: 'Storage', href: '/categories/storage' },
          ]} 
          theme="dark"
        />
      </div>

      {/* Hero Content */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pb-16 lg:pb-24 flex flex-col items-center text-center"
      >
        <div className="max-w-4xl flex flex-col items-center">
          <span className="reveal-hero-text inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-6">
            {content.eyebrow}
          </span>
          
          <h1 className="reveal-hero-text font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.1] tracking-tight">
            {content.title}
          </h1>
          
          <p className="reveal-hero-text font-body text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            {content.description}
          </p>
          
          <div className="reveal-hero-text flex flex-col sm:flex-row gap-4">
            <a 
              href="#collections-showcase"
              className="inline-flex items-center justify-center font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] bg-white hover:bg-[var(--brand-secondary)] hover:text-white px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
            >
              Explore Storage Collection
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center font-ui text-xs uppercase tracking-[0.1em] font-medium text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full transition-colors duration-300 backdrop-blur-sm"
            >
              Book Design Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
