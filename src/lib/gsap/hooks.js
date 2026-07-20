"use client";

/**
 * Veloura Living - React Animation Hooks
 * Custom hooks wrapping GSAP context to provide reusable scroll and entrance animations.
 */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "./config";
import { animations } from "./animations";

/**
 * Hook to trigger a fade-up animation when the element scrolls into view.
 * @param {Object} options - ScrollTrigger config overrides
 * @returns {React.RefObject} - Ref to attach to the element
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    animations.fadeUp(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
        ...options,
      },
    });
  }, { scope: ref });

  return ref;
};

/**
 * Hook to stagger reveal children elements when the parent scrolls into view.
 * Expects children to have a specific class name.
 * @param {string} selector - CSS selector for children (e.g., ".reveal-item")
 * @param {Object} options - ScrollTrigger config overrides
 * @returns {React.RefObject} - Ref to attach to the parent container
 */
export const useStaggerReveal = (selector = ".reveal-item", options = {}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return;

    animations.staggerReveal(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        ...options,
      },
    });
  }, { scope: containerRef });

  return containerRef;
};
