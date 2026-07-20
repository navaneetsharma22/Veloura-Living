"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <Link 
      href={product.href} 
      className="veloura-product-card reveal-product"
      aria-label={`View details for ${product.name}`}
    >
      <div className="veloura-product-card__img-container">
        <span className="veloura-product-card__badge">{product.material}</span>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="veloura-product-card__img"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      
      <div className="veloura-product-card__content">
        <span className="veloura-product-card__collection">{product.collection}</span>
        <h3 className="veloura-product-card__title">{product.name}</h3>
        <p className="veloura-product-card__desc">{product.description}</p>
        
        <span className="veloura-product-card__cta">
          View Details 
          <ArrowRight size={14} className="veloura-product-card__cta-icon" />
        </span>
      </div>
    </Link>
  );
}
