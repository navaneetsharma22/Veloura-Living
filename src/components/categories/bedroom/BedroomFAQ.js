"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { useStaggerReveal } from "@/lib/gsap/hooks";

export function BedroomFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqRef = useStaggerReveal(".reveal-faq", {
    start: "top 85%",
    stagger: 0.1,
  });

  return (
    <Section spacing="standard" containerWidth="narrow" bg="default">
      <div className="mb-12">
        <SectionHeading
          title="Questions & Support"
          align="left"
        />
      </div>

      <div ref={faqRef} className="flex flex-col border-t border-[var(--color-border-soft)]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="reveal-faq border-b border-[var(--color-border-soft)]">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left group transition-colors duration-300 hover:text-[var(--brand-secondary)]"
                aria-expanded={isOpen}
              >
                <span className="font-heading text-xl font-medium text-[var(--text-heading)] pr-8 group-hover:text-[var(--brand-secondary)] transition-colors">
                  {faq.question}
                </span>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--brand-secondary)] transition-colors">
                  {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isOpen ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-body text-base text-[var(--text-body)] leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
