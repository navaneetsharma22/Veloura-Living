"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";

gsap.registerPlugin(ScrollTrigger);

export function ContactHero({ data }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-hero-text",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );

    gsap.to(imageRef.current, {
      yPercent: 15,
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
    <section ref={containerRef} className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image
          ref={imageRef}
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object-cover opacity-50 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <Container className="relative z-10">
        <span className="contact-hero-text font-ui text-[10px] tracking-[0.3em] uppercase text-white/80 mb-6 block">
          Concierge Services
        </span>
        <h1 className="contact-hero-text font-heading text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight max-w-4xl mb-6">
          {data.title}
        </h1>
        <p className="contact-hero-text font-body text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
          {data.description}
        </p>
      </Container>
    </section>
  );
}
