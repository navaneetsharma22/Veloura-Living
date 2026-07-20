"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Tooltip
 * A simple, reusable tooltip component.
 */
export function Tooltip({ children, content, position = "top", className }) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), 300); // 300ms hover intent delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      <div
        role="tooltip"
        className={cn(
          "absolute z-50 surface-tooltip whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none",
          positionStyles[position],
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
        aria-hidden={!isVisible}
      >
        {content}
      </div>
    </div>
  );
}
