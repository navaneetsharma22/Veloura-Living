import { PageTransition } from "@/components/layout/PageTransition";
import { inspirationData } from "@/data/inspiration/livingRoom";
import { 
  LivingHero,
  DesignStory,
  InteractiveRoom,
  FeaturedFurniture,
  MaterialPalette,
  LightingGuide,
  StylingTips,
  BeforeAfter,
  FeaturedProject,
  CustomerStory,
  RelatedCollections,
  ExploreSpaces,
  LivingFAQ,
  ConsultationCTA
} from "@/components/inspiration/living-room";

export const metadata = {
  title: "Living Room Inspiration | Veloura Living",
  description: "Discover luxury living room inspiration. Explore curated styling tips, premium materials, and conversational layouts designed for timeless elegance.",
};

export default function LivingRoomInspirationPage() {
  return (
    <PageTransition>
      <LivingHero content={inspirationData.hero} />
      <DesignStory content={inspirationData.designStory} />
      <InteractiveRoom room={inspirationData.interactiveRoom} />
      <FeaturedFurniture items={inspirationData.featuredFurniture} />
      <MaterialPalette palette={inspirationData.materialPalette} />
      <LightingGuide guide={inspirationData.lightingGuide} />
      <StylingTips tips={inspirationData.stylingTips} />
      <BeforeAfter data={inspirationData.beforeAfter} />
      <FeaturedProject project={inspirationData.featuredProject} />
      <CustomerStory story={inspirationData.customerStory} />
      <RelatedCollections collections={inspirationData.relatedCollections} />
      <ExploreSpaces spaces={inspirationData.exploreSpaces} />
      <LivingFAQ faqs={inspirationData.faqs} />
      <ConsultationCTA />
    </PageTransition>
  );
}
