"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { GalleryCard } from "./GalleryCard";
import { gallerySpaces } from "@/data/inspirationGallery";

export function GalleryGrid() {
  // GSAP stagger reveal for all items in the masonry grid
  const gridRef = useStaggerReveal(".reveal-gallery-item", {
    start: "top 80%",
    stagger: 0.1, // very subtle stagger for a calm, luxurious reveal
  });

  return (
    <div 
      ref={gridRef}
      // Uses standard CSS Grid to simulate masonry. 
      // Tailwind's auto-rows keeps the height modular and organic.
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-6 w-full"
    >
      {gallerySpaces.map((space) => (
        <GalleryCard key={space.id} space={space} />
      ))}
    </div>
  );
}
