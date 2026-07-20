"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function Sustainability({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".sust-reveal",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Section ref={containerRef} className="bg-neutral-900 text-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="sust-reveal font-heading text-3xl md:text-5xl">
              {data.title}
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="sust-reveal font-body text-body-lg text-white/70 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
