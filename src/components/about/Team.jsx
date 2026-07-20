"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function Team({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".team-reveal",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
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
          <h2 className="team-reveal font-heading text-3xl md:text-4xl text-heading">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.map((member, index) => (
            <div key={index} className="team-reveal flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-heading text-xl text-heading mb-1">{member.name}</h3>
              <p className="font-ui text-xs tracking-widest text-muted uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
