"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MaterialCard({ material }) {
  return (
    <Link 
      href={`/materials/${material.id}`}
      className="group relative flex flex-col h-[380px] bg-white rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(43,31,35,0.12)] border border-[var(--color-border-soft)] hover:border-[var(--color-border-default)]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={material.image}
          alt={`Close up texture of ${material.name}`}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark gradient overlay that deepens on hover to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,15,17,0.85)] via-[rgba(20,15,17,0.3)] to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* Origin Label (Top Right) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-secondary)]" />
        <span className="font-ui text-[10px] uppercase tracking-wider text-white font-medium">
          {material.origin}
        </span>
      </div>

      {/* Content Area (Bottom) */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <span className="font-body text-xs font-medium uppercase tracking-[0.1em] text-white/70 mb-1 transition-transform duration-500 ease-out group-hover:translate-x-1">
          {material.category}
        </span>
        
        <h4 className="font-heading text-2xl font-semibold mb-3 transition-transform duration-500 ease-out group-hover:translate-x-1">
          {material.name}
        </h4>
        
        {/* Hidden description that fades in on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <div className="overflow-hidden">
            <p className="font-body text-sm text-white/80 leading-relaxed mb-4 pb-2 border-b border-white/20">
              {material.description}
            </p>
            
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-[0.05em] uppercase text-white">
              Learn More 
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
