"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArticleGrid } from "./ArticleGrid";

export function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  // Just grab the first two for the related section
  const related = articles.slice(0, 2);

  return (
    <Section className="bg-[var(--bg-warm)] py-24">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-border-soft pb-8">
          <div>
            <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-muted mb-4 block">
              Keep Reading
            </span>
            <h2 className="font-heading text-4xl text-heading">
              More from the Journal
            </h2>
          </div>
        </div>

        <ArticleGrid articles={related} />
      </Container>
    </Section>
  );
}
