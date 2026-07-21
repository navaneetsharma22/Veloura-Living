/* eslint-disable react/no-unescaped-entities */
"use client";

import { Star } from "lucide-react";

export function StoryCard({ story }) {
  return (
    <div className="flex flex-col bg-white p-8 rounded-xl border border-border-soft shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-6 text-[#C49B74]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="font-body text-base text-body leading-relaxed mb-8 flex-grow">
        "{story.quote}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-[var(--color-neutral-100)] text-heading flex items-center justify-center font-heading font-medium">
          {story.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-heading text-lg font-medium text-heading leading-tight">
            {story.name}
          </h4>
          <span className="font-ui text-[10px] uppercase tracking-wider text-muted">
            {story.location}
          </span>
        </div>
      </div>
    </div>
  );
}
