"use client";

import { FeaturedStory } from "./FeaturedStory";
import { StoryCard } from "./StoryCard";
import { customerStories } from "@/data/customerStories";

export function StoriesGrid() {
  const featuredStory = customerStories.find((s) => s.isFeatured);
  const supportingStories = customerStories.filter((s) => !s.isFeatured);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 mt-12 lg:mt-20">
      
      {/* Featured Story - Spans 7 columns to dominate the layout */}
      <div className="xl:col-span-7">
        {featuredStory && <FeaturedStory story={featuredStory} />}
      </div>
      
      {/* Supporting Stories - Stacked in the remaining 5 columns */}
      <div className="xl:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between h-full">
        {supportingStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

    </div>
  );
}
