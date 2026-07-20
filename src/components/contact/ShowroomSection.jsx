"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowRight, MapPin } from "lucide-react";

export function ShowroomSection({ data }) {
  return (
    <Section className="py-24 border-t border-border-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-100">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-ui text-[10px] tracking-widest uppercase text-muted mb-4 block">
              Visit Us
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-heading mb-8">
              {data.title}
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <MapPin className="text-muted shrink-0 mt-1" size={18} />
                <div>
                  <span className="block font-heading text-xl text-heading mb-1">Location</span>
                  <p className="font-body text-muted">{data.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-[18px] shrink-0" />
                <div>
                  <span className="block font-heading text-xl text-heading mb-1">Hours</span>
                  <p className="font-body text-muted whitespace-pre-line">{data.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#" 
                className="flex items-center justify-center gap-3 bg-[var(--text-heading)] text-white px-8 py-4 font-ui text-[10px] tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                Get Directions <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
