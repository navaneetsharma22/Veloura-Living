"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactInfo({ data }) {
  return (
    <div className="flex flex-col gap-12">
      {data.map((item, index) => (
        <div key={index} className="border-b border-border-soft pb-8 last:border-0">
          <span className="font-ui text-[10px] tracking-widest uppercase text-muted mb-3 block">
            {item.label}
          </span>
          
          {item.link ? (
            <Link href={item.link} className="group inline-flex flex-col">
              <span className="font-heading text-2xl text-heading mb-2 group-hover:text-muted transition-colors">
                {item.value}
              </span>
              <span className="font-body text-sm text-muted">
                {item.subtext}
              </span>
            </Link>
          ) : (
            <div>
              <span className="block font-heading text-2xl text-heading mb-2">
                {item.value}
              </span>
              <span className="block font-body text-sm text-muted">
                {item.subtext}
              </span>
            </div>
          )}
        </div>
      ))}
      
      <div className="pt-8">
        <span className="font-ui text-[10px] tracking-widest uppercase text-muted mb-4 block">
          Follow Us
        </span>
        <div className="flex gap-6">
          {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
            <Link 
              key={social} 
              href="#" 
              className="font-ui text-[11px] tracking-widest uppercase text-heading hover:text-muted transition-colors"
            >
              {social}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
