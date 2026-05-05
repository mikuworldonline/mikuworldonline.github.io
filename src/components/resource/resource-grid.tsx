import { cn } from "@/lib/utils";
import type { BaseResource } from "@/types";

interface ResourceGridProps {
  data: BaseResource[];
  onItemClick: (index: number) => void;
  aspectRatio?: "square" | "portrait" | "landscape";
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
  renderItem?: (item: BaseResource, index: number, onClick: () => void) => React.ReactNode;
}

export function ResourceGrid({
  data,
  onItemClick,
  aspectRatio = "landscape",
  columns = { sm: 2, md: 4, lg: 6, xl: 8 },
  className,
  renderItem,
}: ResourceGridProps) {
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
  }[aspectRatio];

  const gridClass = {
    sm: columns.sm || 2,
    md: columns.md || 4,
    lg: columns.lg || 6,
    xl: columns.xl || 8,
  };

  return (
    <div
      className={cn(
        "grid gap-4",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${gridClass.sm}, minmax(0, 1fr))`,
      }}
    >
      {data?.map((item, index) =>
        renderItem ? (
          renderItem(item, index, () => onItemClick(index))
        ) : (
          <ResourceCard
            key={item.id}
            item={item}
            aspectRatio={aspectRatio}
            aspectClass={aspectClass}
            onClick={() => onItemClick(index)}
          />
        )
      )}
    </div>
  );
}

interface ResourceCardProps {
  item: BaseResource;
  aspectRatio?: "square" | "portrait" | "landscape";
  aspectClass?: string;
  onClick: () => void;
  showKeywords?: boolean;
}

export function ResourceCard({
  item,
  aspectRatio = "landscape",
  aspectClass,
  onClick,
  showKeywords = false,
}: ResourceCardProps) {
  const defaultAspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
  }[aspectRatio];

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-lg bg-muted-foreground/10 overflow-hidden cursor-pointer",
        "hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md",
        defaultAspectClass,
        aspectClass
      )}
    >
      <img
        src={item.thumb_url}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <h3 className="text-sm font-medium text-white line-clamp-1">{item.title}</h3>
        {showKeywords && item.keywords && (
          <p className="text-xs text-white/70 line-clamp-1 mt-1">{item.keywords}</p>
        )}
      </div>
    </div>
  );
}
