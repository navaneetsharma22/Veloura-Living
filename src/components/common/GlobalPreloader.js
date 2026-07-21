"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePreloader } from "@/contexts/PreloaderContext";
import { cn } from "@/lib/utils";

function MonogramIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="10" stroke="var(--brand-primary)" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="5" fill="var(--brand-primary)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 14 + 10 * Math.cos(rad);
        const y1 = 14 + 10 * Math.sin(rad);
        const x2 = 14 + 13 * Math.cos(rad);
        const y2 = 14 + 13 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--brand-primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function GlobalPreloader() {
  const { isAssetsLoaded, isPreloaderActive, setIsPreloaderActive } = usePreloader();
  const containerRef = useRef(null);
  const monogramRef = useRef(null);
  const wordmarkRef = useRef(null);
  const lineRef = useRef(null);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  // Enforce a minimum display time of 2.2 seconds (between 2 and 2.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Ensure body scroll is locked while active
  useEffect(() => {
    if (isPreloaderActive) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isPreloaderActive]);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([monogramRef.current, wordmarkRef.current], { opacity: 0, y: 30 });
    gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
    
    tl.to(monogramRef.current, {
      opacity: 1,
      y: 0,
      rotation: 12, // User requested 8-12 degrees rotation
      duration: 1.4,
      ease: "power3.out"
    })
    .to(wordmarkRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.9")
    .to(lineRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: "center"
    }, "-=0.7");
    
    // Add subtle breathing animation if waiting
    gsap.to(monogramRef.current, {
      scale: 1.03,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });
    
  }, []);

  // Exit animation once ready
  useEffect(() => {
    if (isAssetsLoaded && minTimeElapsed && isPreloaderActive) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsPreloaderActive(false);
        }
      });
      
      tl.to(lineRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      })
      // Simulate scaling into navbar
      .to([monogramRef.current, wordmarkRef.current], {
        opacity: 0,
        y: -60,
        scale: 0.5,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.inOut"
      }, "-=0.4")
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.5");
    }
  }, [isAssetsLoaded, minTimeElapsed, isPreloaderActive, setIsPreloaderActive]);

  if (!isPreloaderActive) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0F0F0F]"
      style={{ touchAction: 'none' }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div ref={monogramRef} className="origin-center">
          <MonogramIcon />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <span 
            ref={wordmarkRef}
            className="font-heading uppercase text-4xl md:text-5xl leading-none text-white tracking-[6px]"
          >
            VELOURA
          </span>
          <div 
            ref={lineRef}
            className="w-24 h-[1px] bg-[var(--brand-primary)]"
          />
        </div>
      </div>
    </div>
  );
}
