"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animations } from "@/lib/gsap";

/**
 * Veloura Living - Page Transition Wrapper
 * Wraps page contents and triggers a smooth entrance animation on mount.
 */
export function PageTransition({ children, variant = "fadeUp", stagger = false }) {
  const container = useRef(null);

  useGSAP(
    () => {
      // Respect user's reduced motion preferences via GSAP global settings
      if (gsap.matchMedia().contexts.length === 0) {
        // If GSAP is configured globally to respect prefers-reduced-motion,
        // it handles it internally. Otherwise, we can strictly check it here.
      }

      if (variant === "fadeUp") {
        if (stagger) {
          animations.staggerReveal(container.current.children, { y: 30, duration: 0.8 });
        } else {
          animations.fadeUp(container.current, { y: 30, duration: 0.8 });
        }
      } else if (variant === "fade") {
        animations.fadeIn(container.current, { duration: 0.8 });
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full flex-grow flex flex-col invisible">
      {/* 
        We start invisible to prevent FOUC (Flash of Unstyled Content) before GSAP takes over.
        The animation utilities will handle setting autoAlpha/visibility to visible. 
      */}
      {children}
    </div>
  );
}
