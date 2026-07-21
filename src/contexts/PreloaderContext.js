"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";

const PreloaderContext = createContext();

export function PreloaderProvider({ children }) {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  // Fallback timeout to ensure the preloader eventually disappears 
  // even if an image fails to load or the onLoad event drops.
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isAssetsLoaded) {
        setIsAssetsLoaded(true);
      }
    }, 8000); // 8s max wait

    return () => clearTimeout(fallbackTimer);
  }, [isAssetsLoaded]);

  const contextValue = useMemo(() => ({
    isAssetsLoaded, 
    setIsAssetsLoaded, 
    isPreloaderActive, 
    setIsPreloaderActive 
  }), [isAssetsLoaded, isPreloaderActive]);

  return (
    <PreloaderContext.Provider value={contextValue}>
      {/* 
        We use a strict data-attribute on body to prevent scrolling 
        while the preloader is active, avoiding React hydration issues with manipulating body classes directly.
      */}
      <div data-preloader-active={isPreloaderActive} className="h-full w-full contents">
        {children}
      </div>
    </PreloaderContext.Provider>
  );
}

export const usePreloader = () => useContext(PreloaderContext);
