"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function JournalHero() {
  return (
    <Section className="bg-[var(--bg-warm)] pt-[120px] pb-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-soft pb-8">
          <div className="max-w-2xl">
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted mb-4 block">
              The Journal
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-heading">
              Stories, Ideas & Timeless Inspiration.
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="font-body text-body-lg text-muted">
              Discover curated articles on interior styling, furniture craftsmanship, and modern living.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
