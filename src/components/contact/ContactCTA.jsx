"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <Section className="bg-[var(--bg-warm)] py-32">
      <Container className="text-center max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl text-heading mb-6">
          Start Your Interior Journey Today
        </h2>
        <p className="font-body text-muted leading-relaxed mb-10">
          Our design team is ready to curate a timeless space that reflects your lifestyle and honors architectural principles.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[var(--text-heading)] text-white px-8 py-4 font-ui text-[10px] tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Book a Consultation
          </button>
          <Link 
            href="/categories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-transparent text-heading border border-heading px-8 py-4 font-ui text-[10px] tracking-widest uppercase hover:bg-heading hover:text-white transition-colors"
          >
            Explore Categories <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
