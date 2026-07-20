/**
 * Veloura Living - Motion Tokens
 * Centralized easing and duration variables for luxurious, intentional animations.
 */

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  extraSlow: 1.5,
};

export const EASE = {
  // Ultra-smooth easing curve, perfect for luxury UI (similar to standard cubic-bezier)
  smooth: "power3.inOut",
  // Slow start, incredibly smooth deceleration for grand entrances
  entrance: "expo.out",
  // Gentle push back for exits
  exit: "power2.in",
  // Bouncy, but very subdued and heavy
  settle: "back.out(1.2)",
};

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.2,
};
