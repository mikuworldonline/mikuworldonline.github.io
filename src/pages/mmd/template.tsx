import type { MMDModel } from "@/pages/api/mmd";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Icons } from "@/icons";

interface MMDPageProps {
  data: MMDModel[];
}

export function MMDPage({ data }: MMDPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((model) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      model.title.toLowerCase().includes(query) ||
      model.description?.toLowerCase().includes(query) ||
      model.keywords?.toLowerCase().includes(query) ||
      model.author?.toLowerCase().includes(query) ||
      model.origin_site?.toLowerCase().includes(query)
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
            placeholder="搜索 MMD 模型..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((model) => (
            <MMDCard key={model.id} item={model} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">未找到匹配的 MMD 模型</p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            试试其他关键词，例如 “Miku”“TDA”“Append”
          </p>
        </div>
      )}

      {/* Stats */}
      {filteredData.length > 0 && (
        <div className="mt-6 text-sm text-muted-foreground text-center">
          共 {filteredData.length} 个模型
        </div>
      )}
    </div>
  );
}

function MMDCard({ item }: { item: MMDModel }) {
  return (
    <a
      href={item.origin_url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden bg-card hover:bg-accent transition-colors border border-transparent hover:border-border shadow-sm hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative aspect-square bg-muted">
        <img
          src={item.thumb_url}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {item.origin_site && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
            {item.origin_site}
          </span>
        )}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-sm text-foreground font-medium shadow-lg">
            <Icons.ExternalLink className="w-4 h-4" />
            查看模型
          </span>
        </div>
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
        {item.author && (
          <p className="text-xs text-muted-foreground/70 mt-3 line-clamp-1">
            作者：{item.author}
          </p>
        )}
      </div>
    </a>
  );
}
