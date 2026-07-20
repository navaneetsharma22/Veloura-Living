"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GalleryCard({ space }) {
  // Map our masonry size hints to actual Tailwind Grid column/row spans
  // This assumes a 4-column desktop grid base in the parent
  const sizeClasses = {
    "large-landscape": "col-span-1 md:col-span-2 row-span-1 min-h-[300px] md:min-h-[400px]",
    "tall-portrait": "col-span-1 md:col-span-1 row-span-1 md:row-span-2 min-h-[400px] md:min-h-[824px]", // 400 * 2 + 24(gap)
    "standard-square": "col-span-1 md:col-span-1 row-span-1 min-h-[300px] md:min-h-[400px]",
    "large-square": "col-span-1 md:col-span-2 row-span-1 md:row-span-2 min-h-[300px] md:min-h-[824px]",
  };

  const layoutClass = sizeClasses[space.size] || sizeClasses["standard-square"];

  return (
    <Link 
      href={`/gallery/${space.id}`}
      className={`group relative flex rounded-xl overflow-hidden shadow-sm transition-shadow duration-700 hover:shadow-[0_24px_48px_rgba(43,31,35,0.2)] ${layoutClass} reveal-gallery-item`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={space.image}
          alt={`Veloura Living ${space.name} interior inspiration`}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Soft dark overlay that only appears on hover */}
        <div className="absolute inset-0 bg-[rgba(20,15,17,0.5)] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 mix-blend-multiply" />
      </div>

      {/* Content Area - Hidden by default, fades and slides up on hover */}
      <div className="relative z-10 flex flex-col justify-end w-full h-full p-8 text-white opacity-0 transform translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0">
        
        {/* Style Tag */}
        <span className="font-ui text-[10px] uppercase tracking-[0.2em] mb-3 text-white/80 border border-white/30 self-start px-3 py-1 rounded-full backdrop-blur-sm">
          {space.style}
        </span>
        
        {/* Room Name */}
        <h4 className="font-heading text-3xl font-medium mb-6">
          {space.name}
        </h4>
        
        {/* CTA */}
        <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-[0.1em] uppercase text-white hover:text-[var(--brand-secondary)] transition-colors">
          Explore Space 
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
        </span>
      </div>
    </Link>
  );
}
