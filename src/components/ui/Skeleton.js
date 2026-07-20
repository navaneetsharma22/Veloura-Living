import { cn } from "@/lib/utils";

/**
 * Veloura Living - Skeleton
 * Reusable loading placeholder with a premium pulse animation.
 */
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-radius-sm bg-neutral-200", className)}
      {...props}
    />
  );
}

export function TextSkeleton({ lines = 3, className }) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4 w-full", i === lines - 1 && "w-2/3")}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className }) {
  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <Skeleton className="h-64 w-full rounded-radius-md" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}
