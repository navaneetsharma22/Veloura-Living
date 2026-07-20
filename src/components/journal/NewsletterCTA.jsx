"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function NewsletterCTA() {
  return (
    <Section className="bg-neutral-900 py-32 border-t border-border-soft">
      <Container className="text-center max-w-2xl">
        <span className="font-ui text-xs tracking-widest uppercase text-white/50 mb-4 block">
          Veloura Dispatch
        </span>
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
          Design Inspiration, Delivered.
        </h2>
        <p className="font-body text-white/70 leading-relaxed mb-10">
          Join our newsletter to receive curated styling tips, new collection previews, and exclusive editorial content directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-b border-white/30 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors rounded-none"
            required
          />
          <button
            type="submit"
            className="font-ui text-[11px] tracking-widest uppercase text-black bg-white px-8 py-3 rounded-sm hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </Section>
  );
}
