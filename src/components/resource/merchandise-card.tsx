import { cn } from "@/lib/utils";
import type { Merchandise } from "@/types";
import { Icons } from "@/icons";
import { Badge } from "@/components/ui/badge";

interface MerchandiseCardProps {
  item: Merchandise;
  onClick?: () => void;
}

export function MerchandiseCard({ item, onClick }: MerchandiseCardProps) {
  const categoryLabels: Record<string, string> = {
    figure: "手办",
    badge: "吧唧",
    stand: "立牌",
    artprint: "色纸",
  };

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
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground border-0"
        >
          {categoryLabels[item.category] || item.category}
        </Badge>

        {/* Price Tag */}
        {item.price && (
          <div className="absolute top-3 right-3 px-3 py-1.5 bg-pink-500 rounded-full shadow-lg">
            <span className="text-sm font-bold text-white">{item.price}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-foreground line-clamp-1">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
            {item.description}
          </p>
        )}
        <div className="mt-3 space-y-1">
          {item.manufacturer && (
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground/70">厂商:</span>{" "}
              {item.manufacturer}
            </p>
          )}
          {item.scale && (
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground/70">比例:</span> {item.scale}
            </p>
          )}
          {item.shop_name && (
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground/70">商店:</span>{" "}
              {item.shop_name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
