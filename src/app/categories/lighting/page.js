import { PageTransition } from "@/components/layout/PageTransition";
import { LightingData } from "@/data/lighting";
import { 
  LightingHero,
  LightingCollections,
  LightingGallery,
  LightingPhilosophy,
  LightingMaterials,
  LightingCollection,
  LightingStory,
  LightingFAQ,
  LightingCTA
} from "@/components/categories/lighting";

export const metadata = {
  title: "Designer Lighting | Veloura Living",
  description: "Discover carefully curated lighting fixtures that add warmth, personality, and timeless elegance to every room.",
};

export default function LightingPage() {
  return (
    <PageTransition>
      <LightingHero content={LightingData.heroContent} />
      <LightingCollections categories={LightingData.LightingCategories} />
      <LightingGallery images={LightingData.inspirationGallery} />
      <LightingPhilosophy content={LightingData.designPhilosophy} />
      <LightingMaterials materials={LightingData.materials} />
      <LightingCollection collection={LightingData.featuredCollection} />
      <LightingStory story={LightingData.customerStory} />
      <LightingFAQ faqs={LightingData.faqs} />
      <LightingCTA />
    </PageTransition>
  );
}
