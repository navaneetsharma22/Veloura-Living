import { PageTransition } from "@/components/layout/PageTransition";
import { storageData } from "@/data/storage";
import { 
  StorageHero,
  StorageCollections,
  StorageGallery,
  StoragePhilosophy,
  StorageMaterials,
  StorageCollection,
  StorageStory,
  StorageFAQ,
  StorageCTA
} from "@/components/categories/storage";

export const metadata = {
  title: "Storage Furniture | Veloura Living",
  description: "Create beautifully organized interiors with handcrafted storage solutions designed for timeless living.",
};

export default function StoragePage() {
  return (
    <PageTransition>
      <StorageHero content={storageData.heroContent} />
      <StorageCollections categories={storageData.storageCategories} />
      <StorageGallery images={storageData.inspirationGallery} />
      <StoragePhilosophy content={storageData.designPhilosophy} />
      <StorageMaterials materials={storageData.materials} />
      <StorageCollection collection={storageData.featuredCollection} />
      <StorageStory story={storageData.customerStory} />
      <StorageFAQ faqs={storageData.faqs} />
      <StorageCTA />
    </PageTransition>
  );
}
