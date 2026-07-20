"use client";

import { MapPin, Clock, Mail, Phone } from "lucide-react";

export function ShowroomCard() {
  return (
    <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-soft)] shadow-sm mt-12 lg:mt-0">
      <h4 className="font-heading text-xl font-medium text-[var(--text-heading)] mb-6">
        Visit Our Showroom
      </h4>
      
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-[var(--text-muted)] mt-0.5 shrink-0" strokeWidth={1.5} />
          <p className="font-body text-sm text-[var(--text-body)] leading-relaxed">
            123 Design Avenue<br />
            New York, NY 10001
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-[var(--text-muted)] mt-0.5 shrink-0" strokeWidth={1.5} />
          <p className="font-body text-sm text-[var(--text-body)] leading-relaxed">
            Mon – Sat<br />
            10:00 AM – 7:00 PM
          </p>
        </div>

        <div className="w-full h-px bg-[var(--color-border-soft)] my-1" />

        <div className="flex items-start gap-3">
          <Mail size={18} className="text-[var(--text-muted)] shrink-0" strokeWidth={1.5} />
          <a href="mailto:hello@velouraliving.com" className="font-body text-sm text-[var(--text-body)] hover:text-[var(--brand-secondary)] transition-colors">
            hello@velouraliving.com
          </a>
        </div>
        
        <div className="flex items-start gap-3">
          <Phone size={18} className="text-[var(--text-muted)] shrink-0" strokeWidth={1.5} />
          <a href="tel:+15551234567" className="font-body text-sm text-[var(--text-body)] hover:text-[var(--brand-secondary)] transition-colors">
            +1 (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
}
