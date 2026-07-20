"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedArticle({ article }) {
  return (
    <Link href={`/journal/${article.slug}`} className="group block relative w-full h-[60vh] min-h-[500px] rounded-sm overflow-hidden mb-16">
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full font-ui text-[10px] tracking-widest uppercase text-white border border-white/20">
            {article.category}
          </span>
          <span className="font-ui text-[11px] tracking-wider uppercase text-white/70">
            {article.readTime}
          </span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl mb-4 leading-tight group-hover:text-[var(--color-neutral-200)] transition-colors">
          {article.title}
        </h2>
        
        <p className="font-body text-white/80 max-w-2xl text-lg mb-8 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 font-ui text-xs tracking-widest uppercase text-white group-hover:gap-4 transition-all duration-300">
          Read Article <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
