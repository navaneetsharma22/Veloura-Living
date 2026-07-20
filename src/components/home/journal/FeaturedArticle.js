"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedArticle({ article }) {
  return (
    <Link 
      href={`/journal/${article.id}`}
      className="group flex flex-col h-full reveal-journal-item"
    >
      {/* Immersive Image Container */}
      <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-neutral-100)] mb-8 shadow-sm transition-shadow duration-700 hover:shadow-2xl">
        <Image
          src={article.image}
          alt={`Featured article: ${article.title}`}
          fill
          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Very soft darkening overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/5" />
      </div>

      {/* Editorial Content */}
      <div className="flex flex-col flex-1 px-2 lg:px-4">
        {/* Meta */}
        <div className="flex items-center gap-4 font-ui text-xs uppercase tracking-widest text-[var(--text-muted)] mb-5">
          <span className="text-[var(--brand-secondary)] font-semibold">{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-black/20 hidden sm:block" />
          <span className="hidden sm:block">{article.readTime}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--text-heading)] mb-6 leading-[1.15] transition-colors duration-300 group-hover:text-[var(--brand-secondary)]">
          {article.title}
        </h3>
        
        {/* Excerpt */}
        <p className="font-body text-base lg:text-lg text-[var(--text-body)] leading-relaxed mb-8 max-w-2xl">
          {article.excerpt}
        </p>

        {/* Bottom Bar: Author & CTA */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--color-border-soft)]">
          <span className="font-ui text-xs text-[var(--text-muted)] uppercase tracking-widest">
            By {article.author}
          </span>
          
          <span className="inline-flex items-center gap-2 font-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--text-heading)]">
            Read Article
            <ArrowRight size={16} className="transition-transform duration-500 ease-out group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </Link>
  );
}
