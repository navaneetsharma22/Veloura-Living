"use client";

import Link from "next/link";

export function FooterBottom() {
  return (
    <div className="w-full border-t border-[var(--color-border-soft)] py-8 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-body text-xs text-[var(--text-muted)] mb-1">
            &copy; {new Date().getFullYear()} Veloura Living
          </span>
          <span className="font-body text-xs text-[var(--text-body)] italic">
            Crafted for Timeless Living.
          </span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="font-body text-xs text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="font-body text-xs text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
            Terms
          </Link>
          <Link href="/cookies" className="font-body text-xs text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors">
            Cookies
          </Link>
        </div>

        {/* Right */}
        <div className="font-ui text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
          Designed with care.
        </div>
        
      </div>
    </div>
  );
}
