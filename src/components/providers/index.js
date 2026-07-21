"use client";

import { useEffect, useState } from "react";
import { configureGSAP } from "@/lib/gsap";
import { Toaster } from "@/components/ui/Toast";

/**
 * Veloura Living - Global Providers
 * Wraps the application to inject global client-side logic and context.
 */
export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize global GSAP defaults and accessibility configurations
    configureGSAP();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {/* Global Toast Notification System */}
      {mounted && <Toaster />}
    </>
  );
}
