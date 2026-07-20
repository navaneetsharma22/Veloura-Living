"use client";

import { FooterCTA } from "./FooterCTA";
import { FooterColumns } from "./FooterColumns";
import { ShowroomCard } from "./ShowroomCard";
import { FooterBottom } from "./FooterBottom";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function Footer() {
  // GSAP reveal for the showroom card
  const showroomRef = useStaggerReveal(".reveal-showroom", {
    start: "top 90%",
  });

  return (
    <footer className="w-full bg-[var(--color-neutral-50)] pt-0 flex flex-col">
      {/* Top CTA (Full Width) */}
      <FooterCTA />

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pt-20 lg:pt-32">
        
        {/* Navigation & Brand */}
        <FooterColumns />

        {/* Showroom Block - Positioned aesthetically below the nav on desktop or mixed in on mobile */}
        <div ref={showroomRef} className="reveal-showroom w-full lg:w-1/3 xl:w-1/4 mt-0 lg:-mt-24 lg:ml-auto relative z-10 hidden lg:block pointer-events-none">
           {/* 
              On desktop, we pull the showroom card up slightly to break the grid 
              and nestle it nicely under the support columns. 
              The pointer-events-none on wrapper with pointer-events-auto on child 
              allows clicks to pass through the empty space.
           */}
           <div className="pointer-events-auto">
             <ShowroomCard />
           </div>
        </div>

        {/* Mobile Showroom Block */}
        <div className="lg:hidden mt-12 w-full">
           <ShowroomCard />
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <FooterBottom />
      
    </footer>
  );
}
