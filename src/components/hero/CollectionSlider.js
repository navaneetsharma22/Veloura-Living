"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/Icon";
import { heroCollections } from "@/data/heroCollections";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Veloura Living - Hero Collection Slider
 * Vertical, autoplaying, drag-supported slider for featured collections.
 */

const AUTOPLAY_INTERVAL = 6000;

export function CollectionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  
  const totalSlides = heroCollections.length;

  // Handle Navigation
  const goToSlide = useCallback((index) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setCurrentIndex(index);
  }, [totalSlides]);

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  // Autoplay Logic (pauses on hover or when page is hidden)
  useEffect(() => {
    let interval;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else if (!isHovered && !isDragging) {
        interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);
      }
    };

    if (!isHovered && !isDragging && !document.hidden) {
      interval = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentIndex, isHovered, isDragging, nextSlide]);

  // GSAP Slide Animation
  useGSAP(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        yPercent: -(currentIndex * 100),
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, [currentIndex]);

  // Touch & Drag Support
  const handleDragStart = (e) => {
    setIsDragging(true);
    startY.current = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    currentY.current = e.type.includes('mouse') ? e.pageY : e.touches[0].pageY;
    
    // Prevent default scroll when dragging slider
    if (e.cancelable) e.preventDefault();
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = startY.current - currentY.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    startY.current = 0;
    currentY.current = 0;
  };

  return (
    <div 
      className="flex flex-col lg:flex-row items-end lg:items-center justify-end w-full h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Viewport */}
      <div 
        ref={sliderRef}
        className="w-full aspect-[3/4] lg:aspect-[4/5] max-w-[400px] overflow-hidden rounded-radius-md relative shadow-level-2 group cursor-grab active:cursor-grabbing border border-border-soft"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured Collections"
      >
        {/* Track */}
        <div 
          ref={trackRef} 
          className="w-full h-full flex flex-col"
          style={{ height: `${totalSlides * 100}%` }}
        >
          {heroCollections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="w-full h-full relative overflow-hidden bg-neutral-200"
              style={{ height: `${100 / totalSlides}%` }}
              role="group"
              aria-roledescription="slide"
              aria-hidden={currentIndex !== index}
            >
              {/* Image */}
              <Image 
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority={index === 0}
              />
              
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start justify-end text-surface">
                <span className="text-[10px] font-medium tracking-widest uppercase mb-2 text-surface/80">
                  {collection.category}
                </span>
                <h3 className="text-display-xs font-heading mb-2">
                  {collection.title}
                </h3>
                <p className="text-body-sm text-surface/70 line-clamp-2 mb-6">
                  {collection.description}
                </p>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="bg-surface text-heading hover:bg-neutral-100 border-none"
                  tabIndex={currentIndex === index ? 0 : -1}
                >
                  {collection.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute lg:relative -left-4 lg:left-0 bottom-1/4 lg:bottom-auto flex lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-6 mt-8 lg:mt-0 lg:ml-8 lg:mr-4 z-10 w-full lg:w-auto px-6 lg:px-0 pointer-events-none lg:pointer-events-auto">
        
        {/* Prev Button */}
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm border border-border-soft flex items-center justify-center text-heading hover:text-primary transition-colors focus-ring outline-none pointer-events-auto shadow-sm"
          aria-label="Previous slide"
        >
          <IconWrapper icon={ArrowUp} size="sm" className="hidden lg:block" />
          <IconWrapper icon={ArrowUp} size="sm" className="block lg:hidden -rotate-90" />
        </button>

        {/* Progress & Pagination */}
        <div className="flex lg:flex-col items-center space-x-3 lg:space-x-0 lg:space-y-3 pointer-events-auto">
          <span className="text-[10px] font-mono font-medium text-surface lg:text-heading">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          
          <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
            {heroCollections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "w-2 lg:w-1.5 h-2 lg:h-8 rounded-full transition-all duration-500 outline-none focus-ring",
                  currentIndex === idx 
                    ? "w-8 lg:w-1.5 h-2 lg:h-12 bg-primary" 
                    : "bg-surface/50 lg:bg-neutral-300 hover:bg-surface lg:hover:bg-neutral-400"
                )}
              />
            ))}
          </div>
          
          <span className="text-[10px] font-mono text-surface/60 lg:text-muted">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm border border-border-soft flex items-center justify-center text-heading hover:text-primary transition-colors focus-ring outline-none pointer-events-auto shadow-sm"
          aria-label="Next slide"
        >
          <IconWrapper icon={ArrowDown} size="sm" className="hidden lg:block" />
          <IconWrapper icon={ArrowDown} size="sm" className="block lg:hidden -rotate-90" />
        </button>

      </div>
    </div>
  );
}
