"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { CollectionCard } from "./CollectionCard";
import { featuredCollections } from "@/data/collections";
import "./collections.css";

export function CollectionGrid() {
  // Use the GSAP hook to stagger animate elements with the "reveal-collection" class
  const gridRef = useStaggerReveal(".reveal-collection", {
    start: "top 75%", 
  });

  return (
    <div ref={gridRef} className="veloura-collections__grid">
      {featuredCollections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}
