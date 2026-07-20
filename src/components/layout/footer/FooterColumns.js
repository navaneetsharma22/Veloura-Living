"use client";

import Link from "next/link";
import { FooterColumn } from "./FooterColumn";
import { FooterSocial } from "./FooterSocial";
import { footerLinks } from "@/data/footerLinks";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function FooterColumns() {
  const columnsRef = useStaggerReveal(".reveal-footer-col", {
    start: "top 85%",
    stagger: 0.1,
  });

  return (
    <div ref={columnsRef} className="grid grid-cols-1 lg:grid-cols-5 gap-y-0 lg:gap-8 xl:gap-12 w-full">
      
      {/* Column 1: Brand Identity */}
      <div className="reveal-footer-col col-span-1 flex flex-col mb-12 lg:mb-0">
        <Link href="/" className="font-heading text-2xl font-medium tracking-wide text-[var(--text-heading)] mb-6">
          Veloura Living
        </Link>
        <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-8 max-w-sm lg:max-w-none">
          Crafting timeless furniture inspired by thoughtful design, exceptional materials, and enduring craftsmanship.
        </p>
        <FooterSocial />
      </div>

      {/* Columns 2-5: Navigation Links */}
      <div className="reveal-footer-col lg:col-span-1">
        <FooterColumn group={footerLinks.explore} />
      </div>
      
      <div className="reveal-footer-col lg:col-span-1">
        <FooterColumn group={footerLinks.collections} />
      </div>
      
      <div className="reveal-footer-col lg:col-span-1">
        <FooterColumn group={footerLinks.company} />
      </div>
      
      <div className="reveal-footer-col lg:col-span-1 border-b border-[var(--color-border-soft)] lg:border-none">
        <FooterColumn group={footerLinks.support} />
      </div>

    </div>
  );
}
