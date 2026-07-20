import { PageTransition } from "@/components/layout/PageTransition";
import { bedroomData } from "@/data/bedroom";
import { 
  BedroomHero,
  BedroomFurniture,
  BedroomGallery,
  BedroomPhilosophy,
  BedroomMaterials,
  BedroomCollection,
  BedroomStory,
  BedroomFAQ,
  BedroomCTA
} from "@/components/categories/bedroom";

export const metadata = {
  title: "Bedroom Furniture | Veloura Living",
  description: "Discover luxury bedroom furniture designed to create a calm, restorative sanctuary with timeless elegance.",
};

export default function BedroomPage() {
  return (
    <PageTransition>
      <BedroomHero content={bedroomData.heroContent} />
      <BedroomFurniture categories={bedroomData.furnitureCategories} />
      <BedroomGallery images={bedroomData.inspirationGallery} />
      <BedroomPhilosophy content={bedroomData.designPhilosophy} />
      <BedroomMaterials materials={bedroomData.materials} />
      <BedroomCollection collection={bedroomData.featuredCollection} />
      <BedroomStory story={bedroomData.customerStory} />
      <BedroomFAQ faqs={bedroomData.faqs} />
      <BedroomCTA />
    </PageTransition>
  );
}
