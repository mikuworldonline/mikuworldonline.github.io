import { cn } from "@/lib/utils";
import type { ExternalSite } from "@/types";
import { Icons } from "@/icons";

interface SiteCardProps {
  item: ExternalSite;
  onClick?: () => void;
  variant?: "card" | "list";
}

export function SiteCard({
  item,
  onClick,
  variant = "card",
}: SiteCardProps) {
  const content = (
    <>
      <div className="flex items-start gap-4">
        {item.favicon ? (
          <img
            src={item.favicon}
            alt=""
            className="w-10 h-10 rounded-lg object-contain bg-white shadow-sm"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
            <Icons.ExternalLink className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-foreground line-clamp-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {item.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
          {item.category}
        </span>
        <Icons.ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </>
  );

  if (variant === "list") {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center gap-4 p-4 rounded-lg",
          "bg-card hover:bg-accent transition-colors",
          "border border-transparent hover:border-border",
          "shadow-sm hover:shadow-md"
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block p-5 rounded-xl",
        "bg-card hover:bg-accent transition-colors",
        "border border-transparent hover:border-border",
        "shadow-sm hover:shadow-md"
      )}
      onClick={onClick}
    >
      {content}
    </a>
  );
}
