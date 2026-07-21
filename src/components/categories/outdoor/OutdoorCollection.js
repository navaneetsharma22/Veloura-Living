"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";

export function OutdoorCollection({ collection }) {
  return (
    <Section spacing="none" containerWidth="full" className="h-[60vh] min-h-[500px] relative group overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)] mb-4">
          {collection.eyebrow}
        </span>
        
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium text-white max-w-4xl mb-8 leading-tight">
          {collection.title}
        </h2>
        
        <Link 
          href={collection.href}
          className="font-ui text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-heading)] bg-white hover:bg-[var(--brand-secondary)] hover:text-white px-8 py-4 rounded-full transition-colors duration-300"
        >
          Explore Category
        </Link>
      </div>

    </Section>
  );
}
