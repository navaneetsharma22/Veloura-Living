"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedMaterial({ material }) {
  return (
    <Link 
      href={`/materials/${material.id}`}
      className="group relative flex flex-col h-[500px] lg:h-[790px] w-full bg-white rounded-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_24px_48px_rgba(43,31,35,0.16)] border border-transparent hover:border-white/10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={material.image}
          alt={`Premium ${material.name} texture`}
          fill
          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Soft luxury gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1516] via-[rgba(26,21,22,0.6)] to-[rgba(26,21,22,0.2)] opacity-100" />
      </div>

      {/* Origin Badge */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-secondary)] animate-pulse" />
        <span className="font-ui text-xs uppercase tracking-wider text-white font-medium">
          Source: {material.origin}
        </span>
      </div>

      {/* Featured Tag */}
      <div className="absolute top-6 right-6 z-10">
        <span className="font-ui text-xs uppercase tracking-[0.2em] text-white/60">
          Featured Material
        </span>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-12 text-white">
        <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-2">
          <span className="inline-block font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-3">
            {material.category}
          </span>
          
          <h3 className="font-heading text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            {material.name}
          </h3>
          
          <p className="font-body text-base lg:text-lg text-white/80 leading-relaxed max-w-md mb-8">
            {material.description}
          </p>
          
          <span className="inline-flex items-center gap-3 font-body text-sm font-semibold tracking-[0.1em] uppercase text-white bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300">
            Discover {material.name} 
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
