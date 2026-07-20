import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProductCard } from "@/components/home/new-arrivals/ProductCard";
import { newArrivals } from "@/data/newArrivals";

export const metadata = {
  title: "Shop All Collections | Veloura Living",
  description: "Explore our complete curation of luxury furniture and home decor.",
};

export default function ShopPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--bg-warm)] pt-[120px] pb-24">
        <Container width="wide">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted mb-4 block">
              Curated Selection
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-heading mb-6">
              Shop All
            </h1>
            <p className="font-body text-body-lg text-muted max-w-2xl mx-auto">
              Explore our complete collection of architectural furniture, engineered for both uncompromising comfort and timeless aesthetic appeal.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}
