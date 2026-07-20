import { PageTransition } from "@/components/layout/PageTransition";
import { HeroLayout } from "@/components/hero";
import { FeaturedCategories } from "@/components/home/categories";
import { FeaturedCollections } from "@/components/home/collections";
import { NewArrivals } from "@/components/home/new-arrivals";

export default function MarketingPage() {
  return (
    <PageTransition>
      <HeroLayout />
      <FeaturedCategories />
      <FeaturedCollections />
      <NewArrivals />
    </PageTransition>
  );
}
