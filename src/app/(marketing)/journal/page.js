import { PageTransition } from "@/components/layout/PageTransition";
import { JournalPreview } from "@/components/home/journal";

export const metadata = {
  title: "Journal | Veloura Living",
  description: "Stories, Ideas & Timeless Inspiration for luxury living.",
};

export default function JournalPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--bg-warm)] pt-[120px] pb-24">
        <JournalPreview />
      </main>
    </PageTransition>
  );
}
