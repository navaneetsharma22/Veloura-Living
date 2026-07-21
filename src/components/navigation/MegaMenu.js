"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MegaMenuPromoCard } from "./MegaMenuPromoCard";
import { MegaMenuProductCard } from "./MegaMenuProductCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Mega Menu Layout
 * Full-width dropdown layout acting as an editorial portal for primary categories.
 */

// --- Mock Data ---
const MOCK_DATA = {
  SHOP: {
    categories: [
      { label: "Living Room", href: "/shop/living-room" },
      { label: "Bedroom", href: "/shop/bedroom" },
      { label: "Dining Room", href: "/shop/dining-room" },
      { label: "Office", href: "/shop/office" },
      { label: "Outdoor", href: "/shop/outdoor" },
      { label: "Lighting", href: "/shop/lighting" },
      { label: "Decor", href: "/shop/decor" },
      { label: "Storage", href: "/shop/storage" },
    ],
    popular: [
      { name: "Lumina Lounge Chair", category: "Living Room", price: "$1,250" },
      { name: "Aero Dining Table", category: "Dining Room", price: "$3,400" },
      { name: "Celine Platform Bed", category: "Bedroom", price: "$2,800" },
    ],
    promo: {
      badge: "New Arrival",
      title: "The Autumn Collection",
      description: "Embrace warmth and texture with our latest curation of seasonal centerpieces.",
    },
  },
  COLLECTIONS: {
    categories: [
      { label: "New Arrivals", href: "/collections/new-arrivals" },
      { label: "Best Sellers", href: "/collections/best-sellers" },
      { label: "Premium Collection", href: "/collections/premium" },
      { label: "Limited Edition", href: "/collections/limited" },
      { label: "Seasonal Collection", href: "/collections/seasonal" },
      { label: "Designer Picks", href: "/collections/designer-picks" },
    ],
    popular: [
      { name: "Veloura Signature Sofa", category: "Premium", price: "$4,500" },
      { name: "Onyx Coffee Table", category: "Limited Edition", price: "$1,800" },
    ],
    promo: {
      badge: "Featured",
      title: "Curated by Designers",
      description: "Explore exclusive pieces handpicked by leading interior architects.",
    },
  }
};

export function MegaMenu({ activeMenu, onClose }) {
  const containerRef = useRef(null);
  const data = activeMenu ? MOCK_DATA[activeMenu] : null;

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    if (activeMenu && data) {
      // Animate in
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        el.querySelectorAll(".mega-menu-stagger"),
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.15 }
      );
    } else {
      // Animate out
      gsap.to(el, { autoAlpha: 0, y: -10, duration: 0.25, ease: "power2.in" });
    }
  }, { dependencies: [activeMenu, data], scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 w-full bg-background border-t border-border-soft shadow-level-3 overflow-hidden origin-top invisible"
      style={{ pointerEvents: activeMenu && data ? "auto" : "none" }}
      role="menu"
      aria-label={`${activeMenu || "Navigation"} Mega Menu`}
      onMouseLeave={onClose}
    >
      {data && (
        <Container width="wide" className="py-12">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Column 1 & 2: Categories */}
            <div className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="col-span-2 mb-2">
                <h4 className="text-ui-label text-muted tracking-widest uppercase mega-menu-stagger">
                  Explore {activeMenu}
                </h4>
              </div>
              {data.categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="text-body-md text-heading hover:text-primary transition-colors focus-ring rounded-sm outline-none w-fit mega-menu-stagger"
                  onClick={onClose}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* Column 3: Popular Products */}
            <div className="col-span-4 pl-8 border-l border-border-soft flex flex-col space-y-4">
              <h4 className="text-ui-label text-muted tracking-widest uppercase mb-2 mega-menu-stagger">
                Trending Now
              </h4>
              <div className="flex flex-col space-y-2 mega-menu-stagger">
                {data.popular.map((prod) => (
                  <MegaMenuProductCard
                    key={prod.name}
                    name={prod.name}
                    category={prod.category}
                    price={prod.price}
                  />
                ))}
              </div>
            </div>

            {/* Column 4: Editorial Promo */}
            <div className="col-span-3 mega-menu-stagger">
              <MegaMenuPromoCard
                badge={data.promo.badge}
                title={data.promo.title}
                description={data.promo.description}
              />
            </div>

          </div>
        </Container>
      )}
    </div>
  );
}

