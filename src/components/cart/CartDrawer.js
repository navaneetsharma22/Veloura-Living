"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  CartItem, 
  EmptyCart, 
  OrderSummary, 
  RecommendedProducts 
} from "./CartComponents";

/**
 * Veloura Living - Global Cart Drawer
 * Right-side sliding drawer for shopping cart experience.
 */

// Mock Data
const INITIAL_CART = [
  {
    id: "1",
    name: "Lumina Lounge Chair",
    category: "Seating",
    variant: "Bouclé, Oatmeal",
    price: 1250,
    quantity: 1,
    href: "/shop/product/lumina-lounge",
  },
  {
    id: "2",
    name: "Onyx Coffee Table",
    category: "Tables",
    variant: "Matte Black Marble",
    price: 1800,
    quantity: 1,
    href: "/shop/product/onyx-table",
  }
];

const MOCK_RECOMMENDED = [
  { name: "Bouclé Throw Pillow", category: "Decor", price: 120 },
  { name: "Alabaster Table Lamp", category: "Lighting", price: 450 },
];

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);
  const tl = useRef(null);

  // Custom Event Listener to open cart from anywhere
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-cart", handleOpen);
    return () => window.removeEventListener("open-cart", handleOpen);
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
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // GSAP Animations
  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0 });
    gsap.set(drawerRef.current, { xPercent: 100 });
    gsap.set(".cart-item-stagger", { autoAlpha: 0, x: 20 });

    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
      .to(drawerRef.current, { xPercent: 0, duration: 0.6, ease: "power3.inOut" }, "<0.1")
      .to(".cart-item-stagger", { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  }, { scope: overlayRef });

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  // Cart Actions
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isEmpty = cartItems.length === 0;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 invisible"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
    >
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Drawer Panel */}
      <div 
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-surface shadow-level-3 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-8 h-20 md:h-24 shrink-0 border-b border-border-soft">
          <h2 className="text-display-xs font-heading">
            Shopping Cart <span className="text-muted font-body text-body-sm align-top ml-1">({cartItems.length})</span>
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center p-2 text-muted hover:text-heading transition-colors rounded-radius-sm outline-none focus-ring -mr-2"
            aria-label="Close cart"
          >
            <IconWrapper icon={X} size="md" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-2 custom-scrollbar">
          {isEmpty ? (
            <EmptyCart onClose={() => setIsOpen(false)} />
          ) : (
            <div className="flex flex-col">
              {cartItems.map((item, idx) => (
                <div key={item.id}>
                  <CartItem 
                    item={item} 
                    onUpdate={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                  {idx < cartItems.length - 1 && <Divider className="my-0 opacity-50 cart-item-stagger" />}
                </div>
              ))}
              
              <Divider className="mt-6 mb-2 cart-item-stagger" />
              <RecommendedProducts products={MOCK_RECOMMENDED} />
            </div>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="shrink-0 px-6 md:px-8 py-6 border-t border-border-soft bg-background cart-item-stagger">
            <OrderSummary subtotal={subtotal} />
          </div>
        )}
      </div>
    </div>
  );
}
