"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";
import { IconWrapper } from "@/components/ui/Icon";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-6 h-20 w-20 bg-error/10 rounded-full flex items-center justify-center">
        <IconWrapper icon={AlertCircle} size="xl" className="text-error" />
      </div>
      <h1 className="text-display-sm font-heading mb-4">Something went wrong</h1>
      <p className="text-body-lg text-muted max-w-md mx-auto mb-8">
        We apologize for the inconvenience. Our technical team has been notified.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary" size="lg">
          Try Again
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline" size="lg">
          Return Home
        </Button>
      </div>
    </div>
  );
}
