/**
 * Veloura Living - Reusable Animation Helpers
 * Core animation utility functions that return GSAP tweens/timelines.
 * These do NOT trigger the animation themselves, but provide the config.
 */
import { gsap } from "./config";
import { DURATION, EASE, STAGGER } from "./tokens";

export const animations = {
  /**
   * Subtle fade in and move up (Y-axis)
   */
  fadeUp: (target, vars = {}) => {
    return gsap.from(target, {
      y: 40,
      autoAlpha: 0,
      duration: DURATION.normal,
      ease: EASE.entrance,
      ...vars,
    });
  },

  /**
   * Subtle fade in and move down (Y-axis)
   */
  fadeDown: (target, vars = {}) => {
    return gsap.from(target, {
      y: -40,
      autoAlpha: 0,
      duration: DURATION.normal,
      ease: EASE.entrance,
      ...vars,
    });
  },

  /**
   * Standard fade without movement
   */
  fadeIn: (target, vars = {}) => {
    return gsap.from(target, {
      autoAlpha: 0,
      duration: DURATION.normal,
      ease: EASE.smooth,
      ...vars,
    });
  },

  /**
   * Premium image/card reveal scale effect
   */
  scaleIn: (target, vars = {}) => {
    return gsap.from(target, {
      scale: 0.95,
      autoAlpha: 0,
      duration: DURATION.slow,
      ease: EASE.entrance,
      transformOrigin: "center center",
      ...vars,
    });
  },

  /**
   * Editorial text stagger reveal (assuming text is split into lines/words)
   */
  staggerReveal: (targets, vars = {}) => {
    return gsap.from(targets, {
      y: 20,
      autoAlpha: 0,
      duration: DURATION.normal,
      ease: EASE.entrance,
      stagger: STAGGER.normal,
      ...vars,
    });
  },

  /**
   * Image mask reveal (requires overflow-hidden wrapper in CSS)
   */
  imageReveal: (target, wrapper, vars = {}) => {
    const tl = gsap.timeline({ ...vars });
    tl.from(wrapper, {
      yPercent: 100,
      duration: DURATION.slow,
      ease: EASE.entrance,
    }).from(
      target,
      {
        yPercent: -100,
        scale: 1.1,
        duration: DURATION.slow,
        ease: EASE.entrance,
      },
      "<"
    );
    return tl;
  },
};
