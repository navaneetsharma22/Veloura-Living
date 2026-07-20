"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate an API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      
      // Reset after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-[var(--color-neutral-50)] border border-[var(--color-border-soft)] text-[var(--text-heading)] font-body text-base px-6 py-5 rounded-xl outline-none transition-all duration-300 focus:border-[var(--brand-secondary)] focus:ring-4 focus:ring-[var(--brand-secondary)]/10 disabled:opacity-70 disabled:cursor-not-allowed placeholder:text-[var(--text-muted)]"
          required
        />
        
        {/* Subtle decorative border that scales out on focus */}
        <div className="absolute inset-0 rounded-xl border border-[var(--brand-secondary)] opacity-0 scale-95 transition-all duration-500 pointer-events-none group-focus-within:opacity-20 group-focus-within:scale-105" />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="relative w-full flex items-center justify-center gap-3 bg-[var(--text-heading)] hover:bg-black text-white font-ui text-sm font-medium uppercase tracking-[0.1em] px-8 py-5 rounded-xl mt-4 transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:-translate-y-0.5 overflow-hidden group"
      >
        {/* State: Idle / Typing */}
        <span className={`flex items-center gap-3 transition-transform duration-500 ${status === "idle" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 absolute"}`}>
          Join the Circle
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        {/* State: Loading */}
        <span className={`flex items-center justify-center transition-transform duration-500 ${status === "loading" ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 absolute"}`}>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </span>

        {/* State: Success */}
        <span className={`flex items-center justify-center gap-2 transition-transform duration-500 text-[var(--brand-secondary)] ${status === "success" ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 absolute"}`}>
          <Check size={18} />
          Welcome to the Circle
        </span>
      </button>

      <p className="text-center font-ui text-[10px] uppercase tracking-widest text-[var(--text-muted)] mt-6">
        Your information is always private. Unsubscribe anytime.
      </p>
    </form>
  );
}
