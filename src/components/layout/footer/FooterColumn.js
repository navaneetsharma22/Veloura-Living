"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function FooterColumn({ group }) {
  // Mobile accordion state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-b border-[var(--color-border-soft)] lg:border-none">
      {/* Mobile Accordion Toggle / Desktop Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 lg:py-0 lg:mb-8 lg:cursor-default"
        aria-expanded={isOpen}
      >
        <h4 className="font-heading text-lg lg:text-xl font-medium text-[var(--text-heading)]">
          {group.title}
        </h4>
        <ChevronDown 
          size={18} 
          className={`lg:hidden text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Links List */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:h-auto lg:opacity-100 ${
          isOpen ? 'max-h-[400px] opacity-100 pb-5' : 'max-h-0 opacity-0 lg:max-h-none lg:pb-0'
        }`}
      >
        <ul className="flex flex-col gap-3 lg:gap-4">
          {group.links.map((link) => (
            <li key={link.label}>
              <Link 
                href={link.href}
                className="group inline-flex relative font-body text-sm text-[var(--text-body)] hover:text-[var(--text-heading)] transition-colors duration-300"
              >
                {link.label}
                {/* Elegant underline animation on hover */}
                <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[var(--text-heading)] origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
