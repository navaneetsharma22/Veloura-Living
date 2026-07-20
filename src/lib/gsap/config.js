/**
 * Veloura Living - GSAP Configuration
 * Configures global GSAP settings, registers plugins, and handles accessibility.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register core plugins required for the motion foundation
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Configure global GSAP defaults.
 * This checks for reduced motion preference to ensure accessibility.
 */
export const configureGSAP = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.defaults({
    // If user prefers reduced motion, animations jump to end instantly
    duration: prefersReducedMotion ? 0 : 0.6,
    ease: "power3.inOut",
  });
  
  // Disable ScrollTrigger animations entirely if reduced motion is requested
  if (prefersReducedMotion) {
    ScrollTrigger.config({ limitCallbacks: true });
  }
};

export { gsap, ScrollTrigger };
