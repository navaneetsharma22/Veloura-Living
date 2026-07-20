import { cn } from "@/lib/utils";
import { IconWrapper } from "@/components/ui/Icon";
import { Image as ImageIcon, Box, User, ImageOff } from "lucide-react";

/**
 * Veloura Living - Placeholder System
 * Reusable placeholder graphics for products, avatars, and empty states.
 */

export function ProductPlaceholder({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-neutral-50 text-neutral-400 aspect-[4/5] w-full",
        className
      )}
    >
      <IconWrapper icon={Box} size="xl" strokeWidth={1} className="opacity-50" />
      <span className="text-ui-label mt-4 opacity-50">No Image</span>
    </div>
  );
}

export function AvatarPlaceholder({ className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-neutral-100 text-neutral-400 rounded-full aspect-square w-full",
        className
      )}
    >
      <IconWrapper icon={User} size="lg" strokeWidth={1.5} />
    </div>
  );
}

export function GalleryPlaceholder({ className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-neutral-50 text-neutral-400 aspect-video w-full",
        className
      )}
    >
      <IconWrapper icon={ImageIcon} size="xl" strokeWidth={1} className="opacity-50" />
    </div>
  );
}

export function EmptyStatePlaceholder({ title, description, icon: CustomIcon = ImageOff, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 bg-surface border border-dashed border-border-default rounded-radius-lg",
        className
      )}
    >
      <div className="h-16 w-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
        <IconWrapper icon={CustomIcon} size="xl" strokeWidth={1} className="text-muted" />
      </div>
      <h3 className="text-card-title mb-2">{title}</h3>
      {description && <p className="text-body-md text-muted max-w-sm">{description}</p>}
    </div>
  );
}
