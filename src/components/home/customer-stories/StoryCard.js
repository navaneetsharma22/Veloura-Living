"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StoryCard({ story }) {
  return (
    <Link 
      href={`/stories/${story.id}`}
      className="group relative flex flex-col h-[360px] bg-white rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(43,31,35,0.08)] reveal-story-item"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[var(--color-neutral-100)]">
        <Image
          src={story.image}
          alt={`Interior space designed by ${story.name} in ${story.location}`}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,21,22,0.8)] via-[rgba(26,21,22,0.3)] to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
      </div>

      {/* Customer Info (Top) */}
      <div className="absolute top-5 left-5 right-5 z-10 flex justify-between items-start opacity-90">
        <div>
          <span className="block font-heading text-lg text-white font-medium mb-0.5">
            {story.name}
          </span>
          <span className="block font-ui text-[10px] uppercase tracking-wider text-white/70">
            {story.location}
          </span>
        </div>
        <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/30 px-2 py-1 rounded-sm bg-[var(--brand-secondary)]/10 backdrop-blur-sm">
          {story.collection}
        </span>
      </div>

      {/* Content Area (Bottom) */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <h4 className="font-heading text-xl font-medium mb-3 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
          {story.storyTitle}
        </h4>
        
        {/* Quote expands slightly on hover using the grid trick */}
        <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <div className="overflow-hidden">
            <p className="font-body text-sm text-white/80 leading-relaxed italic mb-4">
              "{story.quote}"
            </p>
          </div>
        </div>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.05em] uppercase text-white/90 group-hover:text-white transition-colors duration-300">
          Read Story
          <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1 text-[var(--brand-secondary)]" />
        </span>
      </div>
    </Link>
  );
}
