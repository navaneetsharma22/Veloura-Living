"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";

gsap.registerPlugin(ScrollTrigger);

export function AboutHero({ data }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Fade in text
    gsap.fromTo(
      ".hero-text",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );

    // Parallax image
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          ref={imageRef}
          src={data.image.src}
          alt={data.image.alt}
          fill
          priority
          className="object-cover opacity-60 scale-110"
          sizes="100vw"
        />
      </div>
      
      <Container className="relative z-10 text-center flex flex-col items-center">
        <span className="hero-text font-ui text-sm tracking-[0.3em] uppercase text-white/80 mb-6 block">
          {data.subtitle}
        </span>
        <h1 className="hero-text font-heading text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight">
          {data.title}
        </h1>
      </Container>
    </section>
  );
}
