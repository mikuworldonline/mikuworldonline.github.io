import { cn } from "@/lib/utils";
import type { Video } from "@/types";
import { Icons } from "@/icons";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  item: Video;
  onClick?: () => void;
  variant?: "card" | "list";
}

export function VideoCard({ item, onClick, variant = "card" }: VideoCardProps) {
  if (variant === "list") {
    return (
      <a
        href={item.video_url || item.embed_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center gap-4 p-3 rounded-lg",
          "bg-card hover:bg-accent transition-colors",
          "border border-transparent hover:border-border",
          "shadow-sm hover:shadow-md"
        )}
      >
        <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.thumb_url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Icons.Play className="w-8 h-8 text-white" />
          </div>
          {item.duration && (
            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 rounded text-xs text-white">
              {item.duration}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground line-clamp-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
              {item.description}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            {item.origin_site && (
              <span className="text-xs text-muted-foreground/70">
                {item.origin_site}
              </span>
            )}
            {item.views && (
              <span className="text-xs text-muted-foreground/70">
                {item.views.toLocaleString()} views
              </span>
            )}
          </div>
        </div>
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "group block rounded-xl overflow-hidden",
        "bg-card hover:bg-accent transition-colors",
        "border border-transparent hover:border-border",
        "shadow-sm hover:shadow-md cursor-pointer"
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <Icons.Play className="w-6 h-6 text-foreground ml-1" />
          </div>
        </div>
        {item.duration && (
          <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
            {item.duration}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
            {item.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          {item.origin_site && (
            <span className="text-xs text-muted-foreground">
              {item.origin_site}
            </span>
          )}
          {item.views && (
            <span className="text-xs text-muted-foreground">
              {item.views.toLocaleString()} views
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
