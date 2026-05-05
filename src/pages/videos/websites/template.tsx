import type { ExternalSite } from "@/types";
import { useState } from "react";
import { SiteCard } from "@/components/resource/site-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

interface VideoSitesListProps {
  data: ExternalSite[];
}

const categories = ["全部", "官方", "日本", "国内", "全球", "数据库", "音乐", "音源"];

export function VideoSitesList({ data }: VideoSitesListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredData = data.filter((site) => {
    // Category filter
    if (selectedCategory !== "全部") {
      if (site.category !== selectedCategory) {
        return false;
      }
    }
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !site.title.toLowerCase().includes(query) &&
        !site.description?.toLowerCase().includes(query) &&
        !site.category.toLowerCase().includes(query)
      ) {
        return false;
      }
    }
    return true;
  });

  // Group by category for better UX
  const groupedData = filteredData.reduce((acc, site) => {
    const category = site.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(site);
    return acc;
  }, {} as Record<string, ExternalSite[]>);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索网站..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
            {cat !== "全部" && (
              <Badge
                variant="secondary"
                className="ml-2 h-5 px-1.5 text-xs bg-white/20"
              >
                {data.filter((s) => s.category === cat).length}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Sites List */}
      {selectedCategory === "全部" ? (
        // Grouped view
        <div className="space-y-8">
          {Object.entries(groupedData).map(([category, sites]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{category}</Badge>
                <span className="text-sm text-muted-foreground">
                  {sites.length} 个网站
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sites.map((site) => (
                  <SiteCard key={site.id} item={site} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Flat view
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredData.map((site) => (
            <SiteCard key={site.id} item={site} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">未找到匹配的网站</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          共收录 {filteredData.length} 个初音未来相关投稿/资源网站
        </p>
      </div>
    </div>
  );
}
