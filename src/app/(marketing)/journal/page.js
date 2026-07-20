"use client";

import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { JOURNAL_DATA } from "@/data/journal";
import {
  JournalHero,
  FeaturedArticle,
  ArticleGrid,
  CategoryFilter,
  SearchBar,
  TrendingArticles,
  NewsletterCTA,
} from "@/components/journal";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All"
    ? JOURNAL_DATA.articles
    : JOURNAL_DATA.articles.filter(article => article.category === activeCategory);

  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <JournalHero />
        
        <Container className="py-16 md:py-24">
          <FeaturedArticle article={JOURNAL_DATA.featured} />
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Articles */}
            <div className="w-full lg:w-[65%]">
              <CategoryFilter 
                activeCategory={activeCategory} 
                onSelect={setActiveCategory} 
              />
              <ArticleGrid articles={filteredArticles} />
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-[35%] pt-4">
              <SearchBar />
              <TrendingArticles articles={JOURNAL_DATA.trending} />
            </div>
            
          </div>
        </Container>

        <NewsletterCTA />
      </main>
    </PageTransition>
  );
}
