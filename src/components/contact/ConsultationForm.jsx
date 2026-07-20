"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ConsultationForm({ options }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you. Our design concierge will be in touch shortly.");
    }, 1500);
  };

  return (
    <div className="bg-neutral-50 p-8 md:p-12 border border-border-soft">
      <div className="mb-10">
        <h2 className="font-heading text-3xl text-heading mb-3">Book a Consultation</h2>
        <p className="font-body text-muted text-sm leading-relaxed">
          Share a few details about your project, and a dedicated designer will reach out to schedule your discovery call.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">First Name</label>
            <input type="text" required className="bg-transparent border-b border-border-soft pb-2 font-body text-sm focus:outline-none focus:border-heading transition-colors" />
          </div>
          <div className="flex flex-col">
            <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Last Name</label>
            <input type="text" required className="bg-transparent border-b border-border-soft pb-2 font-body text-sm focus:outline-none focus:border-heading transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Email Address</label>
            <input type="email" required className="bg-transparent border-b border-border-soft pb-2 font-body text-sm focus:outline-none focus:border-heading transition-colors" />
          </div>
          <div className="flex flex-col">
            <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Phone Number</label>
            <input type="tel" className="bg-transparent border-b border-border-soft pb-2 font-body text-sm focus:outline-none focus:border-heading transition-colors" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Project Type</label>
          <select className="bg-transparent border-b border-border-soft pb-2 font-body text-sm text-heading focus:outline-none focus:border-heading transition-colors cursor-pointer appearance-none">
            <option value="" disabled selected>Select a project type</option>
            {options.projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Estimated Budget</label>
          <select className="bg-transparent border-b border-border-soft pb-2 font-body text-sm text-heading focus:outline-none focus:border-heading transition-colors cursor-pointer appearance-none">
            <option value="" disabled selected>Select a budget range</option>
            {options.budgets.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-ui text-[10px] tracking-widest uppercase text-heading mb-2">Tell us about your space</label>
          <textarea rows="4" className="bg-transparent border-b border-border-soft pb-2 font-body text-sm focus:outline-none focus:border-heading transition-colors resize-none placeholder:text-muted" placeholder="What are you hoping to achieve?"></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-4 bg-[var(--text-heading)] text-white py-4 font-ui text-[11px] tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"} 
          {!isSubmitting && <ArrowRight size={14} />}
        </button>
      </form>
    </div>
  );
}
