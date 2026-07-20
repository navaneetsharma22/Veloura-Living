import { PageTransition } from "@/components/layout/PageTransition";
import { ABOUT_DATA } from "@/data/about";
import {
  AboutHero,
  BrandStory,
  Philosophy,
  Craftsmanship,
  Sustainability,
  Team,
  Showroom,
  BrandStats,
  CTA,
} from "@/components/about";

export const metadata = {
  title: "About Us | Veloura Living",
  description: "Discover the heritage, craftsmanship, and design philosophy behind Veloura Living.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="w-full bg-white text-[var(--text-body)]">
        <AboutHero data={ABOUT_DATA.hero} />
        <BrandStory data={ABOUT_DATA.brandStory} />
        <Philosophy data={ABOUT_DATA.philosophy} />
        <Craftsmanship data={ABOUT_DATA.craftsmanship} />
        <Sustainability data={ABOUT_DATA.sustainability} />
        <Team data={ABOUT_DATA.team} />
        <Showroom data={ABOUT_DATA.showroom} />
        <BrandStats data={ABOUT_DATA.stats} />
        <CTA />
      </main>
    </PageTransition>
  );
}
