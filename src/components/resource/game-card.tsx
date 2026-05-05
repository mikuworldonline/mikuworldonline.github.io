import { cn } from "@/lib/utils";
import type { Game } from "@/types";
import { Icons } from "@/icons";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  item: Game;
  onClick?: () => void;
}

export function GameCard({ item, onClick }: GameCardProps) {
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
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Game Type Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white border-0"
        >
          {item.game_type === "online" && "Online"}
          {item.game_type === "flash" && "Flash"}
          {item.game_type === "html5" && "HTML5"}
          {item.game_type === "download" && "Download"}
        </Badge>

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <Icons.Play className="w-7 h-7 text-foreground ml-1" />
          </div>
        </div>
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
        <div className="flex items-center justify-between mt-3">
          {item.genre && (
            <span className="text-xs text-muted-foreground">{item.genre}</span>
          )}
          {item.size && (
            <span className="text-xs text-muted-foreground/70">{item.size}</span>
          )}
        </div>
      </div>
    </div>
  );
}
