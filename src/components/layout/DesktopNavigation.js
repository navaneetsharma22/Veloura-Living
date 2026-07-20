"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "@/components/common";
import { IconWrapper } from "@/components/ui/Icon";

/**
 * Veloura Living - Desktop Navigation
 * Premium desktop navigation with scroll-sensitive background states.
 */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Rooms", href: "/rooms" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function DesktopNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Transition background after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to catch initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "hidden lg:block fixed top-0 left-0 w-full z-40 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled ? "bg-surface shadow-sm" : "bg-transparent"
      )}
    >
      <Container width="wide">
        <nav
          className="flex items-center justify-between h-20 md:h-24"
          aria-label="Desktop Navigation"
        >
          {/* LEFT: Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="focus-ring rounded-radius-sm outline-none transition-opacity hover:opacity-80"
              aria-label="Veloura Living Home"
            >
              <Logo className="scale-90 md:scale-100 origin-left" />
            </Link>
          </div>

          {/* CENTER: Links */}
          <ul className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-body-sm tracking-wide uppercase transition-colors duration-300 focus-ring rounded-radius-sm py-2 px-1 outline-none relative group",
                      isActive ? "text-primary font-medium" : "text-heading hover:text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Minimal active/hover indicator */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-transform duration-300 origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex justify-end items-center space-x-6">
            <button
              className="text-heading hover:text-primary transition-colors focus-ring rounded-radius-sm p-1 outline-none group"
              aria-label="Search"
            >
              <IconWrapper icon={Search} size="md" className="group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </button>
            <Link
              href="/wishlist"
              className="text-heading hover:text-primary transition-colors focus-ring rounded-radius-sm p-1 outline-none group"
              aria-label="Wishlist"
            >
              <IconWrapper icon={Heart} size="md" className="group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </Link>
            <Link
              href="/account"
              className="text-heading hover:text-primary transition-colors focus-ring rounded-radius-sm p-1 outline-none group"
              aria-label="Account"
            >
              <IconWrapper icon={User} size="md" className="group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </Link>
            <button
              className="text-heading hover:text-primary transition-colors focus-ring rounded-radius-sm p-1 outline-none group relative"
              aria-label="Cart"
            >
              <IconWrapper icon={ShoppingBag} size="md" className="group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              {/* Placeholder for cart count badge later */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-medium text-surface">
                0
              </span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
