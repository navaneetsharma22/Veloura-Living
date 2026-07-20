"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Link as LinkIcon, Share2 } from "lucide-react";

export function ArticleHeader({ article }) {
  return (
    <div className="w-full">
      <Container className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-ui text-[11px] tracking-widest uppercase text-heading">
              {article.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-border-soft" />
            <span className="font-ui text-[11px] tracking-widest uppercase text-muted">
              {article.date}
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-heading mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between border-t border-b border-border-soft py-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop"
                  alt={article.author}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="text-left">
                <span className="block font-heading text-sm text-heading">{article.author}</span>
                <span className="block font-ui text-[10px] uppercase tracking-widest text-muted">{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-muted">
              <button className="flex items-center gap-2 hover:text-heading transition-colors font-ui text-[10px] uppercase tracking-widest">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="w-full h-[60vh] min-h-[400px] relative">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
