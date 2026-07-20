import { FeaturedCategories } from "@/components/home/categories";
import { PageTransition } from "@/components/layout/PageTransition";

export default function CategoriesPage() {
  return (
    <PageTransition>
      <div className="pt-[100px] min-h-screen">
        <FeaturedCategories />
      </div>
    </PageTransition>
  );
}
