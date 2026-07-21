"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function DecorCollections({ categories }) {
  // Removed GSAP stagger reveal to prevent fading bugs

  return (
    <Section id="collections-showcase" spacing="spacious" containerWidth="wide" bg="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="group relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-[var(--color-neutral-100)] flex flex-col justify-end p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,29,28,0.85)] via-[rgba(30,29,28,0.2)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex items-end justify-between">
              <div>
                <h3 className="font-heading text-2xl lg:text-3xl font-medium text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="font-body text-sm lg:text-base text-white/80 max-w-sm transition-transform duration-500 delay-75 group-hover:-translate-y-1">
                  {category.description}
                </p>
                {category.price && (
                  <p className="font-ui text-xs tracking-wider uppercase text-[var(--brand-secondary)] mt-3 transition-transform duration-500 delay-100 group-hover:-translate-y-1">
                    {category.price}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
