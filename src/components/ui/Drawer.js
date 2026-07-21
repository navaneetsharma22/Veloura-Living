"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Drawer Component
 * Slide-out panel for navigation, filters, or cart.
 */
export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  className,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const isRight = position === "right";

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isOpen ? "visible" : "invisible pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute top-0 bottom-0 w-full max-w-md surface-drawer flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isRight ? "right-0 border-l" : "left-0 border-r",
          isOpen
            ? "translate-x-0"
            : isRight
            ? "translate-x-full"
            : "-translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-soft shrink-0">
          <h3 className="text-card-title">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted hover:text-heading transition-colors focus-ring rounded-radius-sm p-1"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
