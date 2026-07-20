import { Container } from "@/components/layout/Container";
import { HeroBackground } from "./HeroBackground";
import { HeroLeftColumn } from "./HeroLeftColumn";
import { HeroRightColumn } from "./HeroRightColumn";

/**
 * Veloura Living - Hero Layout Structure (Phase 5.1)
 * Two-column responsive hero container holding placeholders for content and sliders.
 */
export function HeroLayout() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-0">
      {/* Full-bleed Background */}
      <HeroBackground />
      
      {/* Foreground Content Container */}
      <Container width="wide" className="relative z-10 h-full flex flex-col lg:flex-row">
        
        {/* Left Column (Content) - roughly 70% width on Desktop */}
        <div className="w-full lg:w-7/12 xl:w-2/3 h-full flex shrink-0">
          <HeroLeftColumn />
        </div>
        
        {/* Right Column (Slider) - roughly 30% width on Desktop */}
        <div className="w-full lg:w-5/12 xl:w-1/3 h-full flex flex-col justify-end lg:justify-center mt-8 lg:mt-0">
          <HeroRightColumn />
        </div>

      </Container>
    </section>
  );
}
