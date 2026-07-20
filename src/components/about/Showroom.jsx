"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function Showroom({ data }) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Section ref={containerRef} className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-80 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white p-6 backdrop-blur-sm bg-black/20 border border-white/10 rounded-sm">
        <span className="font-ui text-xs tracking-widest uppercase text-white/70 mb-2 block">
          {data.subtitle}
        </span>
        <h2 className="font-heading text-4xl mb-4">{data.title}</h2>
        <p className="font-body text-sm tracking-wide">{data.address}</p>
      </div>
    </Section>
  );
}
