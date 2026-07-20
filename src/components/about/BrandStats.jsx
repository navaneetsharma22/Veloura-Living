"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function BrandStats({ data }) {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        if (!hasAnimated) {
          const targets = gsap.utils.toArray(".stat-number");
          targets.forEach((target, i) => {
            const endValue = data[i].value;
            gsap.fromTo(
              target,
              { innerHTML: 0 },
              {
                innerHTML: endValue,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
              }
            );
          });
          setHasAnimated(true);
        }
      },
    });
  }, [hasAnimated, data]);

  return (
    <Section ref={containerRef} className="bg-neutral-50 py-24 border-y border-border-soft">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border-soft">
          {data.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-8 md:py-0">
              <span className="stat-number font-heading text-5xl md:text-7xl text-heading mb-2">
                0
              </span>
              <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
