import type { ExternalSite } from "@/types";
import { useState } from "react";
import { SiteCard } from "@/components/resource/site-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

type SiteCategory = "official" | "community" | "resource" | "fansite";

interface WebsitesPageProps {
  officialSites: ExternalSite[];
  communitySites: ExternalSite[];
  resourceSites: ExternalSite[];
  fansiteSites: ExternalSite[];
}

const categories = [
  { id: "official" as const, name: "官方" },
  { id: "community" as const, name: "创作社区" },
  { id: "resource" as const, name: "资源站" },
  { id: "fansite" as const, name: "粉丝站点" },
];

export function WebsitesPage({
  officialSites,
  communitySites,
  resourceSites,
  fansiteSites,
}: WebsitesPageProps) {
  const [activeCategory, setActiveCategory] = useState<SiteCategory>("official");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryData: Record<SiteCategory, ExternalSite[]> = {
    official: officialSites,
    community: communitySites,
    resource: resourceSites,
    fansite: fansiteSites,
  };

  const currentSites = categoryData[activeCategory];

  const filteredSites = currentSites.filter((site) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      site.title.toLowerCase().includes(query) ||
      site.description?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-48 flex-shrink-0 hidden lg:block">
        <nav className="sticky top-20 space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span>{cat.name}</span>
              <Badge
                variant={activeCategory === cat.id ? "secondary" : "outline"}
                className="text-xs"
              >
                {categoryData[cat.id].length}
              </Badge>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Category Tabs */}
      <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Search */}
        <div className="mb-6 flex gap-4 items-center">
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
          <span className="text-sm text-muted-foreground">
            共 {filteredSites.length} 个网站
          </span>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSites.map((site) => (
            <SiteCard key={site.id} item={site} />
          ))}
        </div>

        {/* Empty State */}
        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">未找到匹配的网站</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            共收录 {categoryData[activeCategory].length} 个{categories.find((c) => c.id === activeCategory)?.name}网站
          </p>
        </div>
      </div>
    </div>
  );
}
