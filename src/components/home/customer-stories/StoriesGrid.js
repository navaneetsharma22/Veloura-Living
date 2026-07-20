"use client";

import { useStaggerReveal } from "@/lib/gsap/hooks";
import { FeaturedStory } from "./FeaturedStory";
import { StoryCard } from "./StoryCard";
import { customerStories } from "@/data/customerStories";

export function StoriesGrid() {
  // Setup GSAP stagger reveal for all story items
  const gridRef = useStaggerReveal(".reveal-story-item", {
    start: "top 80%",
    stagger: 0.15,
  });

  const featuredStory = customerStories.find((s) => s.isFeatured);
  const supportingStories = customerStories.filter((s) => !s.isFeatured);

  return (
    <div ref={gridRef} className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 mt-12 lg:mt-20">
      
      {/* Featured Story - Spans 7 columns to dominate the layout */}
      <div className="xl:col-span-7 reveal-story-item">
        {featuredStory && <FeaturedStory story={featuredStory} />}
      </div>
      
      {/* Supporting Stories - Stacked in the remaining 5 columns */}
      <div className="xl:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
        {supportingStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

    </div>
  );
}
