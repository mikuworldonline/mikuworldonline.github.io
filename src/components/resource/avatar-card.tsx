import { cn } from "@/lib/utils";
import type { Avatar } from "@/types";

interface AvatarCardProps {
  item: Avatar;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  showKeywords?: boolean;
}

export function AvatarCard({
  item,
  onClick,
  size = "md",
  showKeywords = false,
}: AvatarCardProps) {
  const sizeClass = {
    sm: "w-20 h-20",
    md: "w-28 h-28",
    lg: "w-36 h-36",
  }[size];

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-full overflow-hidden cursor-pointer",
        "hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg",
        "ring-2 ring-transparent hover:ring-pink-500/50",
        sizeClass
      )}
    >
      <img
        src={item.thumb_url}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <p className="text-xs font-medium text-white text-center line-clamp-1">
          {item.title}
        </p>
      </div>
    </div>
  );
}
