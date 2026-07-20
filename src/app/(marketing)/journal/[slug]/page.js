import { PageTransition } from "@/components/layout/PageTransition";
import { JOURNAL_DATA } from "@/data/journal";
import {
  ReadingProgress,
  ArticleHeader,
  ArticleContent,
  RelatedProducts,
  RelatedArticles,
  NewsletterCTA,
} from "@/components/journal";

export function generateMetadata({ params }) {
  // In a real app, fetch metadata based on slug
  return {
    title: "The Art of Designing a Timeless Living Room | Veloura Living",
    description: "Discover the foundational principles of creating a living space that transcends fleeting trends.",
  };
}

export default function ArticleDetailPage({ params }) {
  // In a real app, fetch the article based on params.slug
  const article = JOURNAL_DATA.featured; 
  const relatedArticles = JOURNAL_DATA.articles;

  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <ReadingProgress />
        <ArticleHeader article={article} />
        <ArticleContent content={article.content} />
        <RelatedProducts products={article.relatedProducts} />
        <RelatedArticles articles={relatedArticles} />
        <NewsletterCTA />
      </main>
    </PageTransition>
  );
}
