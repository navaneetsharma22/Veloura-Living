import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { CollectionGrid } from "@/components/home/collections/CollectionGrid";

export const metadata = {
  title: "Curated Collections | Veloura Living",
  description: "Explore our curated collections of luxury furniture.",
};

export default function CollectionsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--bg-warm)] pt-[120px] pb-24">
        <Container width="wide">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-muted mb-4 block">
              The Architecture of Living
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-heading mb-6">
              Collections
            </h1>
            <p className="font-body text-body-lg text-muted max-w-2xl mx-auto">
              Discover spaces designed with intention. Our collections blend timeless materials with modern silhouettes to create interiors of quiet luxury.
            </p>
          </div>

          {/* Collection Grid */}
          <CollectionGrid />
        </Container>
      </main>
    </PageTransition>
  );
}
