"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { FeaturedMaterial } from "./FeaturedMaterial";
import { MaterialCard } from "./MaterialCard";
import { materials } from "@/data/materials";

export function MaterialGrid() {
  // Setup GSAP stagger reveal for the grid items
  const gridRef = useStaggerReveal(".reveal-material", {
    start: "top 80%",
    stagger: 0.1,
  });

  // Split the data: First item is featured, rest are standard cards
  const featuredMaterial = materials[0];
  const standardMaterials = materials.slice(1);

  return (
    <div ref={gridRef} className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 mt-12">
      
      {/* Featured Material (Spans 5 columns on extra large screens) */}
      <div className="xl:col-span-5 reveal-material h-full">
        <FeaturedMaterial material={featuredMaterial} />
      </div>
      
      {/* Asymmetrical Grid for the remaining 5 materials (Spans 7 columns) */}
      <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 content-start">
        {standardMaterials.map((material, index) => {
          // Make the last item span exactly two columns if it's the odd one out on standard screens
          const isLastOdd = index === standardMaterials.length - 1 && standardMaterials.length % 2 !== 0;
          
          return (
            <div 
              key={material.id} 
              className={`reveal-material ${isLastOdd ? 'sm:col-span-2' : ''}`}
            >
              <MaterialCard material={material} />
            </div>
          );
        })}
      </div>

    </div>
  );
}
