import { PageTransition } from "@/components/layout/PageTransition";
import { decorData } from "@/data/decor";
import { 
  DecorHero,
  DecorCollections,
  DecorGallery,
  DecorPhilosophy,
  DecorMaterials,
  DecorCollection,
  DecorStory,
  DecorFAQ,
  DecorCTA
} from "@/components/categories/decor";

export const metadata = {
  title: "Decor & Accessories | Veloura Living",
  description: "Discover carefully curated decorative pieces that add warmth, personality, and timeless elegance to every room.",
};

export default function DecorPage() {
  return (
    <PageTransition>
      <DecorHero content={decorData.heroContent} />
      <DecorCollections categories={decorData.decorCategories} />
      <DecorGallery images={decorData.inspirationGallery} />
      <DecorPhilosophy content={decorData.designPhilosophy} />
      <DecorMaterials materials={decorData.materials} />
      <DecorCollection collection={decorData.featuredCollection} />
      <DecorStory story={decorData.customerStory} />
      <DecorFAQ faqs={decorData.faqs} />
      <DecorCTA />
    </PageTransition>
  );
}
