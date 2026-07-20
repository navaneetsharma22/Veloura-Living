"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function DecorCollections({ categories }) {
  const gridRef = useStaggerReveal(".reveal-furn-card", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section id="collections-showcase" spacing="spacious" containerWidth="wide" bg="light">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link 
            href={category.href}
            key={category.id}
            className="reveal-furn-card group relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-[var(--color-neutral-100)] flex flex-col justify-end p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
              </div>
              
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-[var(--text-heading)] group-hover:scale-110">
                <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
