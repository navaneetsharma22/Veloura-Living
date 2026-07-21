import { ArrowRight, Star, Globe, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconWrapper } from "@/components/ui/Icon";

/**
 * Veloura Living - Hero Left Column (Content)
 * Handles layout for Badge, Heading, Paragraph, CTAs, and Trust Indicators.
 */
export function HeroLeftColumn() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-2xl lg:pr-12 pt-32 pb-16 lg:py-0 text-surface">
      {/* Luxury Badge */}
      <div className="mb-6">
        <Badge variant="bestseller" className="bg-surface/10 text-surface backdrop-blur-md border-surface/20 py-1.5 px-4 font-body tracking-[0.2em] text-[10px]">
          Crafted for Timeless Living
        </Badge>
      </div>
      
      {/* Editorial Heading */}
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-display-lg md:text-[5.5rem] leading-[1.05] font-heading tracking-tight">
          Elevate Your <br />
          <span className="italic font-light opacity-90">Sanctuary.</span>
        </h1>
      </div>
      
      {/* Supporting Paragraph */}
      <div className="mb-10 max-w-xl">
        <p className="text-body-lg text-surface/80 font-light leading-relaxed">
          Discover a curated collection of artisanal furniture designed to transform modern spaces into havens of sophistication and quiet luxury.
        </p>
      </div>
      
      {/* CTA Group */}
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <Button 
          variant="primary" 
          size="lg" 
          rightIcon={<IconWrapper icon={ArrowRight} size="sm" />}
          className="bg-surface text-heading hover:bg-neutral-100 hover:text-primary transition-colors border-none"
        >
          Explore Category
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="border-surface/40 text-surface hover:bg-surface hover:text-heading"
        >
          Our Story
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-surface/20">
        <div className="flex flex-col space-y-2">
          <IconWrapper icon={ShieldCheck} size="sm" className="text-surface/70" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-surface/90">Handcrafted</span>
        </div>
        <div className="flex flex-col space-y-2">
          <IconWrapper icon={Star} size="sm" className="text-surface/70" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-surface/90">Premium Materials</span>
        </div>
        <div className="flex flex-col space-y-2">
          <IconWrapper icon={Globe} size="sm" className="text-surface/70" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-surface/90">Global Delivery</span>
        </div>
        <div className="flex flex-col space-y-2">
          <IconWrapper icon={Leaf} size="sm" className="text-surface/70" />
          <span className="text-[10px] font-medium tracking-widest uppercase text-surface/90">Sustainable</span>
        </div>
      </div>
      
      {/* Editorial Information Block (Absolute positioning for layout depth) */}
      <div className="hidden xl:flex absolute bottom-12 left-0 right-0 max-w-[calc(100vw-4rem)] mx-auto px-8 w-full justify-between items-end pointer-events-none">
        <div className="flex flex-col space-y-1">
          <span className="text-[10px] font-mono tracking-widest uppercase text-surface/60">Designed For</span>
          <span className="text-body-sm font-medium text-surface">Modern Living</span>
        </div>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-1 text-right">
            <span className="text-display-xs font-heading text-surface">250+</span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-surface/60">Curated Products</span>
          </div>
          <div className="flex flex-col space-y-1 text-right">
            <span className="text-display-xs font-heading text-surface">30+</span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-surface/60">Bespoke Collections</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
