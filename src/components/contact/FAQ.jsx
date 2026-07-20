"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Plus, Minus } from "lucide-react";

export function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section className="py-24 bg-white border-b border-border-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="font-ui text-[10px] tracking-widest uppercase text-muted mb-4 block">
              Support
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-heading mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-muted leading-relaxed max-w-sm">
              Find quick answers to common questions about our design services, delivery process, and product care.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-border-soft pb-6 transition-colors duration-300 ${openIndex === index ? "border-heading" : ""}`}
              >
                <button
                  className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-heading text-xl transition-colors ${openIndex === index ? "text-heading" : "text-heading/80 group-hover:text-heading"}`}>
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-muted group-hover:text-heading transition-colors">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-muted leading-relaxed pt-2 pb-4 pr-12 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
