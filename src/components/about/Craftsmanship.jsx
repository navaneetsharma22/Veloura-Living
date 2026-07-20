"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function Craftsmanship({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".craft-reveal",
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <Section ref={containerRef} className="bg-white py-24 md:py-32">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <h2 className="craft-reveal font-heading text-3xl md:text-4xl text-heading">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {data.items.map((item, index) => (
            <div key={item.id} className={`craft-reveal flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-heading text-2xl text-heading mb-4">{item.title}</h3>
              <p className="font-body text-muted leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
