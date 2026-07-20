"use client";

import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/common";
import { IconWrapper } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  SearchResultCard, 
  RecentSearches, 
  TrendingSearches, 
  QuickNavigation 
} from "./SearchComponents";

/**
 * Veloura Living - Global Search Overlay
 * Full-screen immersive search experience.
 */

// Mock Data
const MOCK_RECENT = ["Velvet Sofa", "Oak Dining Table", "Lounge Chair"];
const MOCK_TRENDING = ["New Arrivals", "Best Sellers", "Luxury Bedroom", "Premium Sofa", "Minimal Dining"];
const MOCK_RESULTS = {
  Products: [
    { title: "Lumina Lounge Chair", category: "Seating", description: "Minimalist ergonomic lounge chair." },
    { title: "Aero Dining Table", category: "Tables", description: "Solid oak dining table for 8." }
  ],
  Collections: [
    { title: "The Autumn Collection", category: "Collection", description: "Warmth and texture curated for the season." }
  ],
  Journal: [
    { title: "Designing with Negative Space", category: "Editorial", description: "How to use whitespace to create luxurious interiors." }
  ]
};

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState(MOCK_RECENT);
  
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const inputRef = useRef(null);
  const tl = useRef(null);

  // Custom Event Listener to open search from anywhere
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-search", handleOpen);
    return () => window.removeEventListener("open-search", handleOpen);
  }, []);

  // Handle ESC and Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
      // Reset query on close after animation finishes
      setTimeout(() => setQuery(""), 500); 
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // GSAP Animations
  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0 });
    gsap.set(contentRef.current, { y: -20, autoAlpha: 0 });
    gsap.set(".search-stagger", { y: 20, autoAlpha: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
      .to(contentRef.current, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" }, "<0.1")
      .to(".search-stagger", { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.3");
  }, { scope: overlayRef });

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
        // Auto focus input
        setTimeout(() => inputRef.current?.focus(), 100);
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  const hasResults = query.length > 2;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md invisible overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search Overlay"
    >
      <Container width="default" className="min-h-full flex flex-col py-8 md:py-12">
        {/* Header */}
        <div ref={contentRef} className="w-full flex flex-col invisible">
          <div className="flex items-center justify-between mb-12">
            <Logo className="scale-90 md:scale-100 origin-left" />
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center text-ui-label text-muted hover:text-heading transition-colors focus-ring rounded-radius-sm p-2 outline-none group"
              aria-label="Close search"
            >
              <span className="mr-2 hidden md:inline">CLOSE</span>
              <IconWrapper icon={X} size="md" className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Large Search Input */}
          <div className="relative w-full mb-12 group">
            <IconWrapper 
              icon={SearchIcon} 
              size="lg" 
              className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors" 
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, collections, and articles..."
              className="w-full bg-transparent border-b-2 border-border-soft focus:border-primary text-display-xs md:text-display-sm font-heading py-4 pl-12 pr-12 outline-none transition-colors placeholder:text-neutral-300"
              aria-label="Search query"
            />
            {query && (
              <button 
                onClick={() => setQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-heading transition-colors p-2 outline-none focus-ring"
                aria-label="Clear search"
              >
                <IconWrapper icon={X} size="sm" />
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 pb-12">
          
          {/* Default State (No Query) */}
          {!hasResults && (
            <>
              <div className="md:col-span-5 flex flex-col space-y-12 search-stagger">
                <RecentSearches searches={recent} onClear={() => setRecent([])} />
                <TrendingSearches suggestions={MOCK_TRENDING} />
              </div>
              
              {/* Optional editorial/curated content on right for empty state */}
              <div className="hidden md:block md:col-span-7 search-stagger">
                <div className="w-full h-full min-h-[300px] bg-surface rounded-radius-md flex items-center justify-center border border-border-soft">
                  <p className="text-body-md text-muted font-medium">Curated Editorial Space</p>
                </div>
              </div>
            </>
          )}

          {/* Results State */}
          {hasResults && (
            <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
              
              {/* Main Products/Collections Column */}
              <div className="md:col-span-7 flex flex-col space-y-12">
                
                {/* Products */}
                <div className="search-stagger">
                  <h4 className="text-ui-label text-muted tracking-widest uppercase mb-4">Products</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {MOCK_RESULTS.Products.map((prod) => (
                      <SearchResultCard key={prod.title} {...prod} />
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div className="search-stagger">
                  <h4 className="text-ui-label text-muted tracking-widest uppercase mb-4">Collections</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {MOCK_RESULTS.Collections.map((col) => (
                      <SearchResultCard key={col.title} {...col} />
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Results (Journal, Rooms) */}
              <div className="md:col-span-5 flex flex-col space-y-12 border-t md:border-t-0 md:border-l border-border-soft pt-12 md:pt-0 md:pl-12">
                <div className="search-stagger">
                  <h4 className="text-ui-label text-muted tracking-widest uppercase mb-4">Journal Articles</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {MOCK_RESULTS.Journal.map((article) => (
                      <SearchResultCard key={article.title} {...article} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Quick Nav */}
        <div className="w-full pt-8 border-t border-border-soft flex flex-col md:flex-row md:items-center justify-between gap-6 search-stagger">
          <QuickNavigation />
          <div className="text-body-sm text-muted flex items-center">
            <span className="hidden md:inline mr-2">Press</span>
            <kbd className="px-2 py-1 bg-surface border border-border-soft rounded-radius-sm text-[10px] font-mono tracking-widest">ESC</kbd>
            <span className="hidden md:inline ml-2">to close</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
