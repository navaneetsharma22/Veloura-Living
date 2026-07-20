"use client";

export function BenefitItem({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="flex items-start gap-5 group reveal-newsletter-benefit">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-neutral-100)] border border-[var(--color-border-soft)] transition-colors duration-500 group-hover:border-[var(--brand-secondary)] group-hover:bg-[var(--brand-secondary)]/5 shrink-0">
        <Icon 
          size={20} 
          className="text-[var(--text-muted)] transition-colors duration-500 group-hover:text-[var(--brand-secondary)]" 
          strokeWidth={1.5} 
        />
      </div>
      
      {/* Content */}
      <div className="pt-1">
        <h4 className="font-heading text-lg font-medium text-[var(--text-heading)] mb-1">
          {benefit.title}
        </h4>
        <p className="font-body text-sm text-[var(--text-body)] leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
