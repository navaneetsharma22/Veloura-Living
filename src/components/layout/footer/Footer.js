"use client";

import { FooterCTA } from "./FooterCTA";
import { FooterColumns } from "./FooterColumns";
import { FooterBottom } from "./FooterBottom";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-neutral-50)] pt-0 flex flex-col">
      {/* Top CTA (Full Width) */}
      <FooterCTA />

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 pt-20 lg:pt-32">
        {/* Navigation & Brand */}
        <FooterColumns />
      </div>

      {/* Bottom Legal Bar */}
      <FooterBottom />
    </footer>
  );
}
