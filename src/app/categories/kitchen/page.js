import { PageTransition } from "@/components/layout/PageTransition";
import { kitchenData } from "@/data/kitchen";
import { 
  KitchenHero,
  KitchenFurniture,
  KitchenGallery,
  KitchenPhilosophy,
  KitchenMaterials,
  KitchenCollection,
  KitchenStory,
  KitchenFAQ,
  KitchenCTA
} from "@/components/categories/kitchen";

export const metadata = {
  title: "Kitchen Furniture | Veloura Living",
  description: "Discover luxury kitchen furniture and storage solutions designed to celebrate modern culinary living.",
};

export default function KitchenPage() {
  return (
    <PageTransition>
      <KitchenHero content={kitchenData.heroContent} />
      <KitchenFurniture categories={kitchenData.furnitureCategories} />
      <KitchenGallery images={kitchenData.inspirationGallery} />
      <KitchenPhilosophy content={kitchenData.designPhilosophy} />
      <KitchenMaterials materials={kitchenData.materials} />
      <KitchenCollection collection={kitchenData.featuredCollection} />
      <KitchenStory story={kitchenData.customerStory} />
      <KitchenFAQ faqs={kitchenData.faqs} />
      <KitchenCTA />
    </PageTransition>
  );
}
