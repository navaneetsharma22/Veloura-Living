"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <Link 
      href={product.href} 
      className="group relative flex flex-col no-underline bg-[var(--bg-surface)] rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0"
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--bg-surface)]">
        {/* Material Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm font-body text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-heading)] z-10">
          {product.material}
        </span>
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-body text-xs text-[var(--text-muted)] mb-2 transition-transform duration-500 ease-out">
          {product.collection}
        </span>
        <h3 className="font-heading text-xl font-semibold text-[var(--text-heading)] mb-2 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--text-body)] leading-relaxed mb-4">
          {product.description}
        </p>
        
        {/* CTA Button */}
        <span className="mt-auto flex items-center gap-2 font-body text-xs font-semibold tracking-[0.05em] uppercase text-[var(--text-accent)] transform translate-y-3 opacity-60 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
          View Details 
          <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
