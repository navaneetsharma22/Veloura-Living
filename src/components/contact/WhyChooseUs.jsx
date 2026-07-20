"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseUs({ features }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".feat-card",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Section ref={containerRef} className="bg-neutral-900 py-24 md:py-32">
      <Container>
        <div className="text-center mb-16">
          <span className="font-ui text-[10px] tracking-widest uppercase text-white/50 mb-4 block">
            The Veloura Standard
          </span>
          <h2 className="font-heading text-4xl text-white">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feat) => (
            <div key={feat.id} className="feat-card border-t border-white/20 pt-6">
              <h3 className="font-heading text-xl text-white mb-3">{feat.title}</h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
