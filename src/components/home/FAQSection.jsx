"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Plus, Minus } from "lucide-react";
import { HOME_FAQ_DATA } from "@/data/homeFAQ";

gsap.registerPlugin(ScrollTrigger);

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".home-faq-item",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Split FAQs into two columns for desktop
  const leftColFAQs = HOME_FAQ_DATA.slice(0, Math.ceil(HOME_FAQ_DATA.length / 2));
  const rightColFAQs = HOME_FAQ_DATA.slice(Math.ceil(HOME_FAQ_DATA.length / 2));

  const AccordionItem = ({ faq, index }) => (
    <div 
      className={`home-faq-item border-b border-border-soft pb-6 transition-colors duration-300 ${openIndex === index ? "border-heading" : ""}`}
    >
      <button
        className="w-full flex items-start justify-between text-left py-4 focus:outline-none group"
        onClick={() => toggleFAQ(index)}
      >
        <span className={`font-heading text-xl md:text-2xl pr-8 transition-colors ${openIndex === index ? "text-heading" : "text-heading/80 group-hover:text-heading"}`}>
          {faq.question}
        </span>
        <span className="shrink-0 text-muted group-hover:text-heading transition-colors mt-1">
          {openIndex === index ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-body text-muted leading-relaxed pt-2 pb-4 pr-12">
          {faq.answer}
        </p>
      </div>
    </div>
  );

  return (
    <Section ref={containerRef} className="py-24 md:py-32 bg-white">
      <Container>
        <div className="home-faq-item text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <SectionHeading
            eyebrow="SUPPORT & CARE"
            title="Frequently Asked Questions"
            description="Everything you need to know about our furniture, craftsmanship, delivery, and design consultation services."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColFAQs.map((faq, idx) => (
              <AccordionItem key={faq.id} faq={faq} index={idx} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColFAQs.map((faq, idx) => (
              <AccordionItem key={faq.id} faq={faq} index={idx + leftColFAQs.length} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
