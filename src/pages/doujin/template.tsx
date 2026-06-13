import { useState } from "react";
import type { DoujinWork } from "@/pages/api/doujin";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

interface DoujinPageProps {
  works: DoujinWork[];
}

export function DoujinPage({ works }: DoujinPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorks = works.filter((work) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      work.title.toLowerCase().includes(query) ||
      work.description?.toLowerCase().includes(query) ||
      work.author?.toLowerCase().includes(query) ||
      work.keywords?.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索同人作品 / 社团 / 制作者..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredWorks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredWorks.map((work) => (
              <DoujinCard key={work.id} item={work} />
            ))}
          </div>
          <div className="mt-6 text-sm text-muted-foreground text-center">
            共 {filteredWorks.length} 件同人作品
          </div>
        </>
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg font-medium text-foreground">未找到相关同人作品</p>
          <p className="mt-2 text-sm text-muted-foreground">
            试试更换关键词，或清空搜索框查看全部作品。
          </p>
        </div>
      )}
    </div>
  );
}

function DoujinCard({ item }: { item: DoujinWork }) {
  const content = (
    <div
      className={cn(
        "group block rounded-xl overflow-hidden h-full",
        "bg-card hover:bg-accent transition-colors",
        "border border-transparent hover:border-border",
        "shadow-sm hover:shadow-md",
        item.origin_url && "cursor-pointer"
      )}
    >
      {/* Cover */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {item.type && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground border-0"
          >
            {item.type}
          </Badge>
        )}
        {item.origin_url && (
          <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <Icons.ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-foreground line-clamp-1">
          {item.title}
        </h3>
        {item.author && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {item.author}
          </p>
        )}
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
            {item.description}
          </p>
        )}
        {item.origin_site && (
          <p className="text-xs text-muted-foreground/70 mt-3">
            来源: {item.origin_site}
          </p>
        )}
      </div>
    </div>
  );

  if (item.origin_url) {
    return (
      <a href={item.origin_url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
