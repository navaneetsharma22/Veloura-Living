import Link from "next/link";
import { EmptyStatePlaceholder } from "@/components/common/Placeholder";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <EmptyStatePlaceholder
        title="Page Not Found"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        icon={Search}
        className="max-w-2xl w-full mx-auto border-none shadow-none bg-transparent"
      />
      <div className="mt-8">
        <Button asChild variant="primary" size="lg">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
