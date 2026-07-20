import { PageTransition } from "@/components/layout/PageTransition";
import { HeroLayout } from "@/components/hero";
import { FeaturedCategories } from "@/components/home/categories";

export default function MarketingPage() {
  return (
    <PageTransition>
      <HeroLayout />
      <FeaturedCategories />
    </PageTransition>
  );
}
