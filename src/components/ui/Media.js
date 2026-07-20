"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Image Wrapper Component
 * Enforces optimized loading, aspect ratios, and smooth fade-in reveal.
 */

const aspectRatios = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  editorial: "aspect-[4/5]", // Very common in luxury fashion/furniture
};

export function Media({
  src,
  alt,
  width,
  height,
  fill = false,
  aspect = "auto",
  priority = false,
  objectFit = "cover",
  className,
  imageClassName,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        aspectRatios[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
          objectFit === "cover" ? "object-cover" : "object-contain",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105",
          imageClassName
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
