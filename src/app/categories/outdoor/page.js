import { PageTransition } from "@/components/layout/PageTransition";
import { outdoorData } from "@/data/outdoor";
import { 
  OutdoorHero,
  OutdoorFurniture,
  OutdoorGallery,
  OutdoorPhilosophy,
  OutdoorMaterials,
  OutdoorCollection,
  OutdoorStory,
  OutdoorFAQ,
  OutdoorCTA
} from "@/components/categories/outdoor";

export const metadata = {
  title: "Outdoor Furniture | Veloura Living",
  description: "Discover luxury outdoor furniture designed to seamlessly extend your living space into nature.",
};

export default function OutdoorPage() {
  return (
    <PageTransition>
      <OutdoorHero content={outdoorData.heroContent} />
      <OutdoorFurniture categories={outdoorData.furnitureCategories} />
      <OutdoorGallery images={outdoorData.inspirationGallery} />
      <OutdoorPhilosophy content={outdoorData.designPhilosophy} />
      <OutdoorMaterials materials={outdoorData.materials} />
      <OutdoorCollection collection={outdoorData.featuredCollection} />
      <OutdoorStory story={outdoorData.customerStory} />
      <OutdoorFAQ faqs={outdoorData.faqs} />
      <OutdoorCTA />
    </PageTransition>
  );
}
