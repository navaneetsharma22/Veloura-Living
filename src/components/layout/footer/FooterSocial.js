"use client";

import { socialLinks } from "@/data/socialLinks";

export function FooterSocial() {
  return (
    <div className="flex items-center gap-4 mt-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Veloura Living on ${social.name}`}
            className="w-10 h-10 rounded-full bg-white border border-[var(--color-border-soft)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-secondary)] hover:border-[var(--brand-secondary)] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <Icon size={18} strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
}
