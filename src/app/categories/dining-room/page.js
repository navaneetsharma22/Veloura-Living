import { PageTransition } from "@/components/layout/PageTransition";
import { diningRoomData } from "@/data/diningRoom";
import { 
  DiningHero,
  DiningFurniture,
  DiningGallery,
  DiningPhilosophy,
  DiningMaterials,
  DiningCollection,
  DiningStory,
  DiningFAQ,
  DiningCTA
} from "@/components/categories/dining-room";

export const metadata = {
  title: "Dining Room Furniture | Veloura Living",
  description: "Discover luxury dining room furniture designed for meaningful gatherings and elegant entertaining.",
};

export default function DiningRoomPage() {
  return (
    <PageTransition>
      <DiningHero content={diningRoomData.heroContent} />
      <DiningFurniture categories={diningRoomData.furnitureCategories} />
      <DiningGallery images={diningRoomData.inspirationGallery} />
      <DiningPhilosophy content={diningRoomData.designPhilosophy} />
      <DiningMaterials materials={diningRoomData.materials} />
      <DiningCollection collection={diningRoomData.featuredCollection} />
      <DiningStory story={diningRoomData.customerStory} />
      <DiningFAQ faqs={diningRoomData.faqs} />
      <DiningCTA />
    </PageTransition>
  );
}
