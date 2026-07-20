import { PageTransition } from "@/components/layout/PageTransition";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { bedroomInspirationData } from "@/data/inspiration/bedroom";
import { 
  BedroomHero,
  DesignStory,
  InteractiveBedroom,
  FeaturedFurniture,
  MaterialPalette,
  LightingGuide,
  StylingTips,
  BeforeAfter,
  FeaturedProject,
  CustomerStory,
  RelatedCollections,
  ExploreSpaces,
  BedroomFAQ,
  ConsultationCTA
} from "@/components/inspiration/bedroom";

export const metadata = {
  title: "Bedroom Inspiration | Veloura Living",
  description: "Discover luxury bedroom inspiration. Explore curated styling tips, premium materials, and conversational layouts designed for timeless elegance and rest.",
};

export default function BedroomInspirationPage() {
  return (
    <PageTransition>
      {/* Immersive cinematic hero */}
      <BedroomHero content={bedroomInspirationData.hero} />
      
      {/* Since we have a dark immersive hero, we add breadcrumbs directly below it on a white background for accessibility, or we can overlay them. For this design, we will inject them into a subtle container right after the hero. */}
      <div className="w-full bg-[var(--bg-surface)] py-4 border-b border-[var(--color-border-soft)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">
          <Breadcrumb 
            items={[
              { label: "Inspiration", href: "/inspiration" },
              { label: "Bedroom", href: "/inspiration/bedroom" },
            ]} 
          />
        </div>
      </div>

      <DesignStory content={bedroomInspirationData.designStory} />
      <InteractiveBedroom room={bedroomInspirationData.interactiveRoom} />
      <FeaturedFurniture items={bedroomInspirationData.featuredFurniture} />
      <MaterialPalette palette={bedroomInspirationData.materialPalette} />
      <LightingGuide guide={bedroomInspirationData.lightingGuide} />
      <StylingTips tips={bedroomInspirationData.stylingTips} />
      <BeforeAfter data={bedroomInspirationData.beforeAfter} />
      <FeaturedProject project={bedroomInspirationData.featuredProject} />
      <CustomerStory story={bedroomInspirationData.customerStory} />
      <RelatedCollections collections={bedroomInspirationData.relatedCollections} />
      <ExploreSpaces spaces={bedroomInspirationData.exploreSpaces} />
      <BedroomFAQ faqs={bedroomInspirationData.faqs} />
      <ConsultationCTA />
    </PageTransition>
  );
}
