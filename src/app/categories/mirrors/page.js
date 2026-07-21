import { PageTransition } from "@/components/layout/PageTransition";
import { mirrorsData } from "@/data/mirrors";
import { 
  MirrorsHero,
  MirrorsCollections,
  MirrorsGallery,
  MirrorsPhilosophy,
  MirrorsMaterials,
  MirrorsCollection,
  MirrorsStory,
  MirrorsFAQ,
  MirrorsCTA
} from "@/components/categories/mirrors";

export const metadata = {
  title: "Mirrors & Accessories | Veloura Living",
  description: "Discover carefully curated Mirrorsative pieces that add warmth, personality, and timeless elegance to every room.",
};

export default function MirrorsPage() {
  return (
    <PageTransition>
      <MirrorsHero content={mirrorsData.heroContent} />
      <MirrorsCollections categories={mirrorsData.mirrorsCategories} />
      <MirrorsGallery images={mirrorsData.inspirationGallery} />
      <MirrorsPhilosophy content={mirrorsData.designPhilosophy} />
      <MirrorsMaterials materials={mirrorsData.materials} />
      <MirrorsCollection collection={mirrorsData.featuredCollection} />
      <MirrorsStory story={mirrorsData.customerStory} />
      <MirrorsFAQ faqs={mirrorsData.faqs} />
      <MirrorsCTA />
    </PageTransition>
  );
}
