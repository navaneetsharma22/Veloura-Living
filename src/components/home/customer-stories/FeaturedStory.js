"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedStory({ story }) {
  return (
    <Link 
      href={`/stories/${story.id}`}
      className="group relative flex flex-col w-full h-[600px] lg:h-full min-h-[744px] bg-[var(--color-neutral-100)] rounded-2xl overflow-hidden shadow-sm transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-2xl"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={story.image}
          alt={`Interior designed by ${story.name} featuring Veloura Living`}
          fill
          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
        {/* Soft luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,12,13,0.9)] via-[rgba(15,12,13,0.4)] to-[rgba(15,12,13,0.1)] opacity-80" />
      </div>

      {/* Customer Header */}
      <div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
            <span className="font-heading text-xl text-white">{story.name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-heading text-xl text-white font-medium mb-1">{story.name}</h4>
            <span className="font-ui text-xs uppercase tracking-widest text-white/70">
              {story.title} • {story.location}
            </span>
          </div>
        </div>
        
        <div className="hidden sm:block">
          <span className="font-ui text-[10px] uppercase tracking-[0.15em] text-white/80 border border-white/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {story.homeType}
          </span>
        </div>
      </div>

      {/* Editorial Story Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-12 text-white max-w-2xl">
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-secondary)] mb-4">
          {story.collection}
        </span>
        
        <h3 className="font-heading text-4xl lg:text-5xl font-medium mb-6 leading-[1.15] transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-2">
          {story.storyTitle}
        </h3>
        
        {/* We use whitespace-pre-line to respect the \n line breaks in the data */}
        <p className="font-body text-base lg:text-lg text-white/80 leading-relaxed mb-10 whitespace-pre-line pr-4 lg:pr-12">
          {story.fullStory}
        </p>
        
        <span className="inline-flex items-center gap-3 font-body text-sm font-semibold tracking-[0.1em] uppercase text-white hover:text-[var(--brand-secondary)] transition-colors duration-300 w-max">
          Read Full Story 
          <ArrowRight size={16} className="transition-transform duration-500 ease-out group-hover:translate-x-2" />
        </span>
      </div>
    </Link>
  );
}
