"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { FeaturedArticle } from "./FeaturedArticle";
import { ArticleCard } from "./ArticleCard";
import { journalArticles } from "@/data/journalArticles";

export function JournalGrid() {
  // GSAP stagger reveal for the journal articles
  const gridRef = useStaggerReveal(".reveal-journal-item", {
    start: "top 80%",
    stagger: 0.15,
  });

  const featuredArticle = journalArticles.find((a) => a.isFeatured);
  const supportingArticles = journalArticles.filter((a) => !a.isFeatured);

  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12 lg:mt-20">
      
      {/* Featured Article - Dominates the left side spanning 7 columns */}
      <div className="lg:col-span-7">
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
      </div>
      
      {/* Supporting Articles - Stacked cleanly on the right side spanning 5 columns */}
      <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-12">
        {supportingArticles.map((article, index) => (
          <div key={article.id} className="h-full">
            <ArticleCard article={article} />
            {/* Elegant divider between supporting articles, omitted on the last one */}
            {index < supportingArticles.length - 1 && (
              <div className="w-full h-px bg-[var(--color-border-soft)] mt-10 lg:mt-12 hidden lg:block" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
