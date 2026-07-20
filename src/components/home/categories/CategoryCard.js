"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryCard({ category }) {
  return (
    <Link 
      href={category.href} 
      className="veloura-category-card reveal-item"
      data-size={category.size}
      aria-label={`Explore ${category.title} collection`}
    >
      <div className="veloura-category-card__img-wrapper">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="veloura-category-card__img"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="veloura-category-card__overlay" />
      
      <div className="veloura-category-card__content">
        <span className="veloura-category-card__id">{category.id}</span>
        <h3 className="veloura-category-card__title">{category.title}</h3>
        <p className="veloura-category-card__desc">{category.description}</p>
        
        <span className="veloura-category-card__cta">
          Explore Collection 
          <ArrowRight size={14} className="veloura-category-card__cta-icon" />
        </span>
      </div>
    </Link>
  );
}
