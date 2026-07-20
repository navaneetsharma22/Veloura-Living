"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

gsap.registerPlugin(ScrollTrigger);

export function BrandStory({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".story-reveal");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <Section ref={containerRef} className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
            <h2 className="story-reveal font-heading text-3xl md:text-4xl text-heading">
              {data.heading}
            </h2>
            <div className="story-reveal space-y-6">
              {data.paragraphs.map((text, idx) => (
                <p key={idx} className="font-body text-body-lg text-muted leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px]">
              <div className="story-reveal absolute top-0 right-0 w-[85%] h-[85%] z-10 shadow-2xl rounded-sm overflow-hidden">
                <Image
                  src={data.image1.src}
                  alt={data.image1.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="story-reveal absolute bottom-0 left-0 w-[55%] h-[60%] z-0 rounded-sm overflow-hidden">
                <Image
                  src={data.image2.src}
                  alt={data.image2.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
