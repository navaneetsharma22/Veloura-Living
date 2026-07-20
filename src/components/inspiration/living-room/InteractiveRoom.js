"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function InteractiveRoom({ room }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <Section spacing="none" containerWidth="full" bg="default" className="relative h-[70vh] min-h-[600px] w-full group overflow-hidden">
      
      {/* Full Width Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={room.image}
          alt="Interactive living room space"
          fill
          className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
          sizes="100vw"
        />
        {/* Subtle dark overlay for hotspot visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hotspots */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto">
        {room.hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute z-20"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* Hotspot Button */}
            <button 
              className="relative -ml-4 -mt-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[var(--text-heading)] hover:scale-110 shadow-lg"
              aria-label={`View details for ${spot.title}`}
            >
              <Plus size={16} strokeWidth={2} />
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-30" />
            </button>

            {/* Tooltip Card */}
            <div 
              className={`absolute left-6 top-6 w-64 p-5 bg-white shadow-2xl rounded-xl border border-[var(--color-border-soft)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top-left ${
                activeHotspot === spot.id 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 translate-y-2 pointer-events-none"
              }`}
            >
              <h4 className="font-heading text-lg font-medium text-[var(--text-heading)] mb-1">
                {spot.title}
              </h4>
              <p className="font-body text-sm text-[var(--text-muted)] mb-3 leading-snug">
                {spot.description}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border-soft)]">
                <span className="font-ui text-[10px] uppercase tracking-widest text-[var(--brand-secondary)] font-semibold">
                  {spot.material}
                </span>
                <Link 
                  href={spot.link}
                  className="font-ui text-[10px] uppercase tracking-widest font-medium text-[var(--text-heading)] hover:text-[var(--brand-secondary)] transition-colors"
                >
                  View item
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Instruction Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-ui text-xs uppercase tracking-[0.2em] font-medium text-white/80 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full pointer-events-none">
        Hover hotspots to explore
      </div>

    </Section>
  );
}
