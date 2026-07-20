"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <Section className="bg-white py-24 border-t border-border-soft">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-border-soft pb-8">
          <div>
            <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-muted mb-4 block">
              Shop The Story
            </span>
            <h2 className="font-heading text-4xl text-heading">
              Featured Pieces
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group block">
              <div className="relative w-full aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <h3 className="font-heading text-lg text-heading mb-1">{product.name}</h3>
              <p className="font-ui text-xs text-muted tracking-wide">{product.price}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
