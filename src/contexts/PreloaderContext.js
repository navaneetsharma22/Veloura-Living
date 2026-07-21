"use client";

import { createContext, useContext, useState, useEffect } from "react";

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

  return (
    <PreloaderContext.Provider value={{ 
      isAssetsLoaded, 
      setIsAssetsLoaded, 
      isPreloaderActive, 
      setIsPreloaderActive 
    }}>
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
