"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
      {articles.map((article) => (
        <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-neutral-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-ui text-[10px] tracking-widest uppercase text-heading">
              {article.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-border-soft" />
            <span className="font-ui text-[10px] tracking-widest uppercase text-muted">
              {article.date}
            </span>
          </div>
          <h3 className="font-heading text-2xl text-heading mb-3 group-hover:text-muted transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="font-body text-muted line-clamp-2 text-sm leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 font-ui text-[10px] tracking-widest uppercase text-heading group-hover:gap-4 transition-all duration-300">
            Read <ArrowRight size={12} />
          </div>
        </Link>
      ))}
    </div>
  );
}
