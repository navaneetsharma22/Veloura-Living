"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { BenefitItem } from "./BenefitItem";
import { NewsletterCard } from "./NewsletterCard";
import { newsletterBenefits } from "@/data/newsletterBenefits";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function Newsletter() {
  // GSAP reveal for the left-side text content
  const contentRef = useStaggerReveal(".reveal-newsletter-header, .reveal-newsletter-benefit", {
    start: "top 80%",
    stagger: 0.15,
  });

  return (
    <Section 
      spacing="spacious" 
      containerWidth="wide"
      className="veloura-newsletter overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#FAF8F5] to-[#F2EBE5] border-y border-[var(--color-border-soft)]"
      aria-label="Newsletter Subscription"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Editorial Content */}
        <div ref={contentRef} className="flex flex-col max-w-xl">
          <div className="reveal-newsletter-header mb-12">
            <SectionHeading
              eyebrow="JOIN THE VELOURA CIRCLE"
              title="Design Inspiration Delivered Thoughtfully"
              description="Receive carefully curated interior inspiration, new collection launches, craftsmanship stories, design insights, and exclusive showroom updates. No spam. Only timeless inspiration."
              align="left"
            />
          </div>

          <div className="flex flex-col gap-8">
            {newsletterBenefits.map((benefit) => (
              <BenefitItem key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>

        {/* Right Side: Subscription Card */}
        <div className="w-full">
          <NewsletterCard />
        </div>

      </div>
    </Section>
  );
}
