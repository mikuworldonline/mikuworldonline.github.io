import { useMemo, useState } from "react";
import type { NewsItem } from "@/pages/api/news";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

interface NewsPageProps {
  data: NewsItem[];
  categories: string[];
}

function formatDate(date?: string) {
  if (!date) return "";
  // ISO YYYY-MM-DD -> YYYY.MM.DD
  return date.replace(/-/g, ".");
}

export function NewsPage({ data, categories }: NewsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return data.filter((item) => {
      if (selectedCategory !== "全部" && item.category !== selectedCategory) {
        return false;
      }
      if (query) {
        const haystack = [
          item.title,
          item.description,
          item.keywords,
          item.origin_site,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [data, searchQuery, selectedCategory]);

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索新闻 / 活动..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* News List */}
      {filteredData.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {filteredData.map((item) => (
            <li key={item.id}>
              <NewsRow item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState />
      )}

      {/* Stats */}
      {filteredData.length > 0 && (
        <div className="mt-8 text-sm text-muted-foreground text-center">
          共 {filteredData.length} 条新闻 / 活动
        </div>
      )}
    </div>
  );
}

function NewsRow({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.origin_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col sm:flex-row gap-4 p-4 rounded-xl",
        "bg-card hover:bg-accent transition-colors",
        "border border-transparent hover:border-border",
        "shadow-sm hover:shadow-md"
      )}
    >
      {item.thumb_url && (
        <div className="relative w-full sm:w-48 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-muted">
          <img
            src={item.thumb_url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          {item.date && (
            <time
              dateTime={item.date}
              className="text-xs font-medium text-muted-foreground tabular-nums"
            >
              {formatDate(item.date)}
            </time>
          )}
          {item.category && (
            <Badge variant="secondary" className="text-xs">
              {item.category}
            </Badge>
          )}
        </div>
        <h3 className="text-base font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}
        {item.origin_site && (
          <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground/70">
            <Icons.ExternalLink className="w-3 h-3" />
            <span>{item.origin_site}</span>
          </div>
        )}
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icons.Search className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-foreground font-medium">没有找到匹配的新闻 / 活动</p>
      <p className="text-sm text-muted-foreground mt-1">
        试试更换关键词或切换分类。
      </p>
    </div>
  );
}
