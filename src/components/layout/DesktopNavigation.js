"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common";
import { IconWrapper } from "@/components/ui/Icon";
import { MegaMenu } from "@/components/navigation/MegaMenu";

/**
 * Veloura Living - Desktop Navigation
 */

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop", hasMegaMenu: true },
  { label: "COLLECTIONS", href: "/collections", hasMegaMenu: true },
  { label: "ROOMS", href: "/rooms", hasMegaMenu: true },
  { label: "INSPIRATION", href: "/inspiration/living-room" },
  { label: "JOURNAL", href: "/journal" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function DesktopNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const hoverTimeout = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMouseEnter = (menuName) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header
      className={cn(
        "hidden lg:block fixed top-0 left-0 w-full z-40 transition-all duration-200 ease-in-out bg-[var(--bg-warm)] h-[90px]",
        isScrolled ? "shadow-[0_2px_8px_rgba(43,31,35,0.08)]" : ""
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full px-[48px] h-full">
        <nav
          className="flex items-center justify-between h-full"
          aria-label="Desktop Navigation"
        >
          {/* LEFT: Logo */}
          <div className="flex-1 flex justify-start items-center h-full">
            <Link
              href="/"
              className="outline-none transition-opacity hover:opacity-80 flex items-center h-full"
              aria-label="Veloura Living Home"
            >
              <Logo />
            </Link>
          </div>

          {/* CENTER: Links */}
          <ul className="hidden lg:flex items-center justify-center gap-[32px] h-full flex-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              const isMegaMenuActive = activeMenu === link.label;
              
              return (
                <li 
                  key={link.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={() => link.hasMegaMenu ? handleMouseEnter(link.label) : handleMouseEnter(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-body uppercase text-[13px] font-medium tracking-[1px] transition-colors duration-200 outline-none relative",
                      isActive || isMegaMenuActive ? "text-[var(--brand-primary)]" : "text-[var(--text-heading)] hover:text-[var(--brand-primary)]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    aria-expanded={link.hasMegaMenu ? isMegaMenuActive : undefined}
                  >
                    {link.label}
                    {/* 2px underline, 8px below text */}
                    <span
                      className={cn(
                        "absolute -bottom-[8px] left-0 w-full h-[2px] bg-[var(--brand-primary)] transition-transform duration-200 origin-left",
                        isActive || isMegaMenuActive ? "scale-x-100" : "scale-x-0"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Actions */}
          <div className="flex-1 flex justify-end items-center gap-[20px]">
            <button
              onClick={() => window.dispatchEvent(new Event("open-search"))}
              className="text-[var(--text-heading)] transition-opacity duration-200 hover:opacity-60 outline-none"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link
              href="/wishlist"
              className="text-[var(--text-heading)] transition-opacity duration-200 hover:opacity-60 outline-none"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.5} />
            </Link>
            <Link
              href="/account"
              className="text-[var(--text-heading)] transition-opacity duration-200 hover:opacity-60 outline-none"
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event("open-cart"))}
              className="text-[var(--text-heading)] transition-opacity duration-200 hover:opacity-60 outline-none relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[var(--brand-accent)] text-white text-[10px] font-medium leading-none">
                0
              </span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* MEGA MENU LAYER */}
      <MegaMenu activeMenu={activeMenu} onClose={closeMenu} />
    </header>
  );
}
