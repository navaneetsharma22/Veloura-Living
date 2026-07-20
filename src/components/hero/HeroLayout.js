"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Play, ArrowUpRight, MoreHorizontal } from "lucide-react";
import "./hero.css";

/**
 * Veloura Living - Two-Panel Hero Section
 * Using the official color tokens.
 */

/* ─── Gear / Sun Logo Icon ───────────────────────────────────── */
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
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

/* ─── Carousel Dots ──────────────────────────────────────────── */
function CarouselDots({ count = 5, active = 1, onDotClick }) {
  return (
    <div className="veloura-hero__dots">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          onClick={() => onDotClick && onDotClick(i)}
          className={`veloura-hero__dot ${i === active ? "veloura-hero__dot--active" : ""}`}
        />
      ))}
    </div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────── */
export function HeroLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const rightPanelImages = [
    "/images/hero/right-panel-1.png",
    "/images/hero/right-panel-2.png",
    "/images/hero/right-panel-3.png",
    "/images/hero/right-panel-4.png",
    "/images/hero/right-panel-5.png",
  ];

  const slideCount = rightPanelImages.length;
  // Clone the first image to the end to create a seamless infinite loop
  const displayImages = [...rightPanelImages, rightPanelImages[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slideCount - 1) {
          // We are about to slide to the cloned first image (index 5)
          setTimeout(() => {
            // Once the 3s slide animation finishes, instantly snap back to the REAL first image (index 0)
            setIsTransitioning(false);
            setCurrentSlide(0);
            
            // Re-enable smooth transitions shortly after the snap
            setTimeout(() => {
              setIsTransitioning(true);
            }, 50);
          }, 3000); 
          return prev + 1;
        }
        return prev + 1;
      });
    }, 6000); // 6 seconds total: 3s sliding + 3s static
    return () => clearInterval(timer);
  }, [slideCount]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };
  return (
    <section
      className="veloura-hero"
      aria-label="Hero section"
    >
      {/* ──── Thick Dark Frame ──── */}
      <div className="veloura-hero__frame">
        <div className="veloura-hero__grid">

          {/* ════════════════════ LEFT PANEL ════════════════════ */}
          <div className="veloura-hero__panel veloura-hero__panel--left">
            <Image
              src="/images/hero/left-panel-v3.png"
              alt="Warm luxury living room with an olive sofa and textured pillows"
              fill
              className="veloura-hero__panel-img"
              sizes="(max-width: 768px) 100vw, 65vw"
              priority
            />
            <div className="veloura-hero__overlay" aria-hidden="true" />

            {/* Content Layer */}
            <div className="veloura-hero__left-content">
              {/* Logo Lockup */}
              <div className="veloura-hero__logo">
                <LogoIcon />
                <span className="veloura-hero__wordmark">LIVORA</span>
              </div>

              {/* Badge + Headline + CTA pushed to bottom */}
              <div className="veloura-hero__left-bottom">
                {/* Pill Badge */}
                <span className="veloura-hero__badge">
                  REFINED LIVING SPACES EXPERIENCE
                </span>

                {/* Main Headline */}
                <h1 className="veloura-hero__headline">
                  BRING WARMTH,<br />
                  TEXTURE, AND LIFE<br />
                  INTO YOUR HOME
                </h1>

                {/* CTA Row */}
                <div className="veloura-hero__cta-row">
                  <button className="veloura-hero__btn-primary" aria-label="View collection">
                    <span>VIEW COLLECTION</span>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </button>

                  <span className="veloura-hero__divider" aria-hidden="true" />

                  <button className="veloura-hero__btn-play" aria-label="Play how we work video">
                    <span className="veloura-hero__play-circle">
                      <Play size={12} fill="white" stroke="white" />
                    </span>
                    <span className="veloura-hero__play-label">HOW WE WORK</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════ RIGHT PANEL ════════════════════ */}
          <div className="veloura-hero__panel veloura-hero__panel--right">
            <div 
              className="veloura-hero__slider-track"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitioning ? 'transform 3s ease-in-out' : 'none'
              }}
            >
              {displayImages.map((src, index) => (
                <div key={`${src}-${index}`} className="veloura-hero__slider-slide">
                  <Image
                    src={src}
                    alt={`Luxury interior showcase ${index + 1}`}
                    fill
                    className="veloura-hero__panel-img"
                    sizes="(max-width: 768px) 100vw, 35vw"
                    priority={index <= 1}
                  />
                </div>
              ))}
            </div>
            <div className="veloura-hero__overlay" aria-hidden="true" />

            {/* Content Layer */}
            <div className="veloura-hero__right-content">
              {/* Story Header */}
              <div className="veloura-hero__story-header">
                <div className="veloura-hero__story-user">
                  <Image
                    src="/images/hero/avatar.png"
                    alt="Williamson"
                    width={32}
                    height={32}
                    className="veloura-hero__avatar"
                  />
                  <span className="veloura-hero__story-name">Williamson</span>
                </div>
                <div className="veloura-hero__story-actions">
                  <button aria-label="Play story" className="veloura-hero__story-icon">
                    <Play size={14} fill="white" stroke="white" />
                  </button>
                  <button aria-label="More options" className="veloura-hero__story-icon">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="veloura-hero__right-bottom">
                <h2 className="veloura-hero__right-headline">
                  SMOOTHEST<br />COMFORT
                </h2>
                <p className="veloura-hero__right-subtext">
                  Like home, like never before
                </p>
                <CarouselDots count={slideCount} active={currentSlide % slideCount} onDotClick={handleDotClick} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
