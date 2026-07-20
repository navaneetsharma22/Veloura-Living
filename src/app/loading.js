import { PageLoader } from "@/components/ui/Loader";

/**
 * Veloura Living - Global Loading Boundary
 * Uses Next.js Suspense behind the scenes for navigation transitions.
 */
export default function Loading() {
  return <PageLoader />;
}
