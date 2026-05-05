import { cn } from "@/lib/utils";
import type { Sticker } from "@/types";
import { Badge } from "@/components/ui/badge";

interface StickerCardProps {
  item: Sticker;
  onClick: () => void;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  showKeywords?: boolean;
}

export function StickerCard({
  item,
  onClick,
  columns = { sm: 2, md: 4, lg: 6 },
  showKeywords = false,
}: StickerCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-lg overflow-hidden cursor-pointer",
        "bg-muted-foreground/10 hover:bg-muted-foreground/20",
        "hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
      )}
    >
      {/* Multi-image preview for sticker packs */}
      <div className="relative aspect-square">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {item.is_gif && (
          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-pink-500 text-white text-xs"
          >
            GIF
          </Badge>
        )}
        {item.images && item.images.length > 1 && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white">
            +{item.images.length - 1}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-foreground line-clamp-1">
          {item.title}
        </h3>
        {showKeywords && item.keywords && (
          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
            {item.keywords}
          </p>
        )}
      </div>
    </div>
  );
}
