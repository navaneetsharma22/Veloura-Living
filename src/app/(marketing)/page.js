import dynamic from "next/dynamic";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroLayout } from "@/components/hero";

const FeaturedCategories = dynamic(() => import("@/components/home/categories").then(mod => mod.FeaturedCategories));
const FeaturedCollections = dynamic(() => import("@/components/home/collections").then(mod => mod.FeaturedCollections));
const NewArrivals = dynamic(() => import("@/components/home/new-arrivals").then(mod => mod.NewArrivals));
const Craftsmanship = dynamic(() => import("@/components/home/craftsmanship").then(mod => mod.Craftsmanship));
const MaterialShowcase = dynamic(() => import("@/components/home/material-showcase").then(mod => mod.MaterialShowcase));
const CustomerStories = dynamic(() => import("@/components/home/customer-stories").then(mod => mod.CustomerStories));
const FAQSection = dynamic(() => import("@/components/home/FAQSection").then(mod => mod.FAQSection));
const Newsletter = dynamic(() => import("@/components/home/newsletter").then(mod => mod.Newsletter));

export default function MarketingPage() {
  return (
    <PageTransition>
      <HeroLayout />
      <FeaturedCategories />
      <FeaturedCollections />
      <NewArrivals />
      <Craftsmanship />
      <MaterialShowcase />
      <CustomerStories />
      <FAQSection />
      <Newsletter />
    </PageTransition>
  );
}
