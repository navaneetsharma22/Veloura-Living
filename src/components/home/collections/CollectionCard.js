"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap/config";

export function CollectionCard({ collection }) {
  const imgRef = useRef(null);
  
  // Subtle mouse parallax effect
  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    
    // Get mouse position relative to the card
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate movement (values between -1 and 1)
    const xMove = (x / rect.width - 0.5) * 2;
    const yMove = (y / rect.height - 0.5) * 2;
    
    // Move image slightly in opposite direction of mouse
    gsap.to(imgRef.current, {
      x: xMove * -8, // Max 8px movement
      y: yMove * -8,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    
    // Reset image position
    gsap.to(imgRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  return (
    <Link 
      href={collection.href} 
      className="veloura-collection-card reveal-collection"
      data-size={collection.size}
      aria-label={`Explore ${collection.title} collection`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="veloura-collection-card__img-wrapper">
        <Image
          ref={imgRef}
          src={collection.image}
          alt={collection.title}
          fill
          className="veloura-collection-card__img"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
        />
      </div>
      <div className="veloura-collection-card__overlay" />
      
      <div className="veloura-collection-card__content">
        <div className="veloura-collection-card__header">
          <span className="veloura-collection-card__id">{collection.id}</span>
          <span className="veloura-collection-card__line" />
        </div>
        
        <h3 className="veloura-collection-card__title">{collection.title}</h3>
        <p className="veloura-collection-card__desc">{collection.description}</p>
        
        <span className="veloura-collection-card__cta">
          Explore Category 
          <ArrowRight size={14} className="veloura-collection-card__cta-icon" />
        </span>
      </div>
    </Link>
  );
}
