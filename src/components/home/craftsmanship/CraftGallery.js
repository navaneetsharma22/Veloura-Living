"use client";

import Image from "next/image";

export function CraftGallery() {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-2xl overflow-hidden group reveal-craft-image">
      <Image
        src="/images/craftsmanship/artisan-hero.png"
        alt="Artisan shaping solid wood in the Veloura Living workshop"
        fill
        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      
      {/* Subtle luxury gradient overlay to ensure the image feels deep and rich */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,15,17,0.4)] to-transparent opacity-60 mix-blend-multiply" />
      
      {/* Decorative subtle border inset */}
      <div className="absolute inset-4 border border-white/20 rounded-xl z-10 pointer-events-none" />
    </div>
  );
}
