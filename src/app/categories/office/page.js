import { PageTransition } from "@/components/layout/PageTransition";
import { officeData } from "@/data/office";
import { 
  OfficeHero,
  OfficeFurniture,
  OfficeGallery,
  OfficePhilosophy,
  OfficeMaterials,
  OfficeCollection,
  OfficeStory,
  OfficeFAQ,
  OfficeCTA
} from "@/components/categories/office";

export const metadata = {
  title: "Office Furniture | Veloura Living",
  description: "Discover luxury workspace furniture designed to inspire focus and elevate productivity.",
};

export default function OfficePage() {
  return (
    <PageTransition>
      <OfficeHero content={officeData.heroContent} />
      <OfficeFurniture categories={officeData.furnitureCategories} />
      <OfficeGallery images={officeData.inspirationGallery} />
      <OfficePhilosophy content={officeData.designPhilosophy} />
      <OfficeMaterials materials={officeData.materials} />
      <OfficeCollection collection={officeData.featuredCollection} />
      <OfficeStory story={officeData.customerStory} />
      <OfficeFAQ faqs={officeData.faqs} />
      <OfficeCTA />
    </PageTransition>
  );
}
