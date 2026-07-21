/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".phil-reveal",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <Section ref={containerRef} className="bg-neutral-50 py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="phil-reveal font-ui text-xs tracking-[0.2em] uppercase text-muted mb-8">
            {data.title}
          </span>
          <h3 className="phil-reveal font-heading text-3xl md:text-5xl text-heading leading-[1.3] mb-16">
            "{data.statement}"
          </h3>
          <div className="phil-reveal relative w-full aspect-video rounded-sm overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
