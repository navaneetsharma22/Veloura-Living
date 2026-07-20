"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <Section className="bg-white py-32 border-t border-border-soft">
      <Container className="text-center max-w-2xl">
        <h2 className="font-heading text-4xl md:text-5xl text-heading mb-6">
          Ready to Create Your Dream Space?
        </h2>
        <p className="font-body text-muted leading-relaxed mb-10">
          Our design team is ready to help you curate the perfect pieces for your home. Schedule a private consultation online or in-store.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-4 bg-[var(--text-heading)] text-white px-8 py-4 rounded-full font-ui text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
        >
          Book a Consultation
          <ArrowRight size={16} />
        </Link>
      </Container>
    </Section>
  );
}
