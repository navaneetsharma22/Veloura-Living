import { PageTransition } from "@/components/layout/PageTransition";
import { HeroLayout } from "@/components/hero";
import { FeaturedCategories } from "@/components/home/categories";
import { FeaturedCollections } from "@/components/home/collections";
import { NewArrivals } from "@/components/home/new-arrivals";
import { Craftsmanship } from "@/components/home/craftsmanship";
import { MaterialShowcase } from "@/components/home/material-showcase";
import { InspirationGallery } from "@/components/home/inspiration-gallery";
import { CustomerStories } from "@/components/home/customer-stories";
import { FAQSection } from "@/components/home/FAQSection";
import { Newsletter } from "@/components/home/newsletter";

export default function MarketingPage() {
  return (
    <PageTransition>
      <HeroLayout />
      <FeaturedCategories />
      <FeaturedCollections />
      <NewArrivals />
      <Craftsmanship />
      <MaterialShowcase />
      <InspirationGallery />
      <CustomerStories />
      <FAQSection />
      <Newsletter />
    </PageTransition>
  );
}
