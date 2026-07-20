"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "@/components/common";
import { IconWrapper } from "@/components/ui/Icon";
import { Divider } from "@/components/ui/Divider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animations } from "@/lib/gsap";

/**
 * Veloura Living - Mobile Navigation
 * Minimalist header for mobile viewports with a premium slide-in drawer.
 */

const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", hasSubmenu: true },
  { label: "Collections", href: "/collections", hasSubmenu: true },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SECONDARY_LINKS = [
  { label: "Wishlist", href: "/wishlist" },
  { label: "Account", href: "/account" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null); // useGSAP scope
  
  const tl = useRef(null);

  // Handle Scroll state for Header Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC Key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Handle Route Changes (close menu when navigating)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // GSAP Animation setup
  useGSAP(
    () => {
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(drawerRef.current, { xPercent: 100 });
      gsap.set(".mobile-nav-link", { y: 20, autoAlpha: 0 });
      
      tl.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          drawerRef.current,
          {
            xPercent: 0,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "<0.1"
        )
        .to(
          ".mobile-nav-link",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  // Play/Reverse animation based on state
  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="lg:hidden">
      {/* MOBILE HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-colors duration-500",
          isScrolled || isOpen ? "bg-surface shadow-sm" : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="focus-ring rounded-radius-sm outline-none transition-opacity hover:opacity-80"
              aria-label="Home"
              onClick={() => setIsOpen(false)}
            >
              <Logo className="scale-90 origin-left" />
            </Link>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-search"))}
                className="p-2 text-heading focus-ring rounded-radius-sm outline-none" 
                aria-label="Search"
              >
                <IconWrapper icon={Search} size="sm" />
              </button>
              <button 
                onClick={() => window.dispatchEvent(new Event("open-cart"))}
                className="p-2 text-heading focus-ring rounded-radius-sm outline-none relative" 
                aria-label="Cart"
              >
                <IconWrapper icon={ShoppingBag} size="sm" />
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-medium text-surface">
                  0
                </span>
              </button>
              <button
                className="p-2 text-heading focus-ring rounded-radius-sm outline-none"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
              >
                <IconWrapper icon={Menu} size="md" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-heading/40 z-50 invisible backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* DRAWER PANEL */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-[90%] max-w-sm bg-surface z-50 flex flex-col shadow-level-3 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 shrink-0">
          <Logo className="scale-75 origin-left" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-heading hover:bg-neutral-100 transition-colors focus-ring rounded-radius-sm outline-none"
            aria-label="Close menu"
          >
            <IconWrapper icon={X} size="md" />
          </button>
        </div>

        {/* Primary Links */}
        <nav className="flex-1 px-6 py-8 flex flex-col space-y-6">
          <ul className="flex flex-col space-y-6">
            {PRIMARY_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} className="flex items-center justify-between mobile-nav-link">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-display-sm font-heading tracking-wide transition-colors focus-ring outline-none",
                      isActive ? "text-primary" : "text-heading hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                  {/* Expand Indicator (Placeholder for Mega Menu) */}
                  <span className="text-muted" aria-hidden="true">
                    <IconWrapper icon={Plus} size="sm" />
                  </span>
                </li>
              );
            })}
          </ul>

          <Divider className="my-8" />

          {/* Secondary Links */}
          <ul className="flex flex-col space-y-4">
            {SECONDARY_LINKS.map((link) => (
              <li key={link.label} className="mobile-nav-link">
                <Link
                  href={link.href}
                  className="text-body-lg text-muted hover:text-heading transition-colors focus-ring outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-8 bg-background shrink-0 mt-auto">
          <p className="text-ui-label text-muted mb-4 uppercase tracking-widest">Connect</p>
          <div className="flex space-x-6 mb-8">
            {/* Social Link Placeholders */}
            <a href="#" className="text-body-sm hover:text-primary transition-colors focus-ring outline-none">Instagram</a>
            <a href="#" className="text-body-sm hover:text-primary transition-colors focus-ring outline-none">Pinterest</a>
            <a href="#" className="text-body-sm hover:text-primary transition-colors focus-ring outline-none">Twitter</a>
          </div>
          <p className="text-body-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Veloura Living.
          </p>
        </div>
      </div>
    </div>
  );
}
