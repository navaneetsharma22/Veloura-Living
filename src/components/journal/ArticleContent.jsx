/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function ArticleContent({ content }) {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        {content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="font-body text-body-lg text-muted leading-[1.8]">
                  {block.text}
                </p>
              );
            case "pullquote":
              return (
                <div key={index} className="py-12 my-12 border-y border-border-soft text-center">
                  <h3 className="font-heading text-3xl md:text-4xl text-heading leading-snug mb-4">
                    "{block.text}"
                  </h3>
                  {block.author && (
                    <span className="font-ui text-[10px] tracking-widest uppercase text-muted">
                      — {block.author}
                    </span>
                  )}
                </div>
              );
            case "gallery":
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
                  {block.images.map((img, i) => (
                    <div key={i} className="relative w-full aspect-[4/5] bg-neutral-100">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              );
            case "designer-tip":
              return (
                <div key={index} className="bg-neutral-50 p-8 md:p-12 my-12 border border-border-soft">
                  <span className="font-ui text-[10px] tracking-widest uppercase text-heading mb-4 block">
                    Designer's Tip
                  </span>
                  <h4 className="font-heading text-2xl text-heading mb-4">{block.title}</h4>
                  <p className="font-body text-muted leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </Container>
  );
}
