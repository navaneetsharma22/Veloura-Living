"use client";

export function CraftFeatureCard({ feature }) {
  return (
    <div className="group relative flex flex-col p-6 bg-white rounded-xl border border-[var(--color-border-soft)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(43,31,35,0.06)] hover:border-[var(--color-border-default)]">
      {/* Decorative dot indicator */}
      <div className="absolute top-8 left-0 w-[3px] h-0 bg-[var(--brand-primary)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-8 rounded-r-full" />
      
      <h4 className="font-heading text-lg font-semibold text-[var(--text-heading)] mb-2 transition-transform duration-500 group-hover:translate-x-2">
        {feature.title}
      </h4>
      <p className="font-body text-sm text-[var(--text-body)] leading-relaxed transition-all duration-500 group-hover:translate-x-2 group-hover:text-[var(--text-heading)]">
        {feature.description}
      </p>
    </div>
  );
}
