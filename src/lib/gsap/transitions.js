/**
 * Veloura Living - Page Transitions
 * Foundation for seamless, premium route transitions.
 */
import { gsap } from "./config";
import { DURATION, EASE } from "./tokens";

/**
 * Triggers the page entrance animation.
 * Typically called within a top-level template.js or layout.js component.
 */
export const animatePageIn = (target, onComplete) => {
  return gsap.fromTo(
    target,
    { autoAlpha: 0, y: 20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: DURATION.normal,
      ease: EASE.entrance,
      onComplete,
    }
  );
};

/**
 * Triggers the page exit animation.
 * Typically called right before Next.js changes routes.
 */
export const animatePageOut = (target, onComplete) => {
  return gsap.to(target, {
    autoAlpha: 0,
    y: -20,
    duration: DURATION.fast,
    ease: EASE.exit,
    onComplete,
  });
};
