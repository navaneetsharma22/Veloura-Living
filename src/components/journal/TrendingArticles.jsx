"use client";

import Link from "next/link";

export function TrendingArticles({ articles }) {
  return (
    <div className="sticky top-[120px]">
      <h3 className="font-ui text-xs tracking-widest uppercase text-heading mb-8 border-b border-heading pb-4">
        Trending Now
      </h3>
      <div className="flex flex-col gap-8">
        {articles.map((article) => (
          <Link key={article.slug} href={`/journal/${article.slug}`} className="group flex items-start gap-6">
            <span className="font-heading text-4xl text-neutral-200 group-hover:text-neutral-300 transition-colors">
              {article.number}
            </span>
            <div>
              <h4 className="font-heading text-lg text-heading group-hover:text-muted transition-colors leading-tight mb-2">
                {article.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
