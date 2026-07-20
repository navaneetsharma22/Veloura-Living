import { PageTransition } from "@/components/layout/PageTransition";
import { livingRoomData } from "@/data/livingRoom";
import { 
  LivingHero,
  FurnitureShowcase,
  InspirationGallery,
  DesignPhilosophy,
  MaterialHighlights,
  FeaturedCollectionBanner,
  CustomerStory,
  LivingFAQ,
  LivingCTA
} from "@/components/categories/living-room";

export const metadata = {
  title: "Living Room Furniture | Veloura Living",
  description: "Discover luxury living room furniture including premium sofas, coffee tables, and accent chairs crafted for timeless elegance.",
};

export default function LivingRoomPage() {
  return (
    <PageTransition>
      <LivingHero content={livingRoomData.heroContent} />
      <FurnitureShowcase categories={livingRoomData.furnitureCategories} />
      <InspirationGallery images={livingRoomData.inspirationGallery} />
      <DesignPhilosophy content={livingRoomData.designPhilosophy} />
      <MaterialHighlights materials={livingRoomData.materials} />
      <FeaturedCollectionBanner collection={livingRoomData.featuredCollection} />
      <CustomerStory story={livingRoomData.customerStory} />
      <LivingFAQ faqs={livingRoomData.faqs} />
      <LivingCTA />
    </PageTransition>
  );
}
