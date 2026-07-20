"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleCard({ article }) {
  return (
    <Link 
      href={`/journal/${article.id}`}
      className="group relative flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8 reveal-journal-item"
    >
      {/* Image Container */}
      <div className="relative w-full sm:w-2/5 lg:w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-neutral-100)] shadow-sm transition-shadow duration-700 hover:shadow-xl">
        <Image
          src={article.image}
          alt={`Cover image for article: ${article.title}`}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Metadata */}
        <div className="flex items-center gap-3 font-ui text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4">
          <span className="text-[var(--brand-secondary)] font-semibold">{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>{article.date}</span>
        </div>
        
        {/* Title */}
        <h4 className="font-heading text-2xl font-medium text-[var(--text-heading)] mb-4 leading-snug transition-colors duration-300 group-hover:text-[var(--brand-secondary)]">
          {article.title}
        </h4>
        
        {/* Excerpt */}
        <p className="font-body text-sm text-[var(--text-body)] leading-relaxed mb-6 line-clamp-2">
          {article.excerpt}
        </p>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 font-ui text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--text-heading)] mt-auto">
          Read More
          <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
