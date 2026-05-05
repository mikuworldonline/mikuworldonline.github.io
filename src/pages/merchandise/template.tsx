import type { Merchandise } from "@/types";
import { useState } from "react";
import { MerchandiseCard } from "@/components/resource/merchandise-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

type MerchandiseCategory = "figure" | "badge" | "stand" | "artprint";

interface MerchandisePageProps {
  figures: Merchandise[];
  badges: Merchandise[];
  stands: Merchandise[];
  artprints: Merchandise[];
}

const categories = [
  { id: "figure" as const, name: "手办" },
  { id: "badge" as const, name: "吧唧" },
  { id: "stand" as const, name: "立牌" },
  { id: "artprint" as const, name: "色纸" },
];

export function MerchandisePage({ figures, badges, stands, artprints }: MerchandisePageProps) {
  const [activeCategory, setActiveCategory] = useState<MerchandiseCategory>("figure");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<Merchandise | null>(null);

  const categoryData: Record<MerchandiseCategory, Merchandise[]> = {
    figure: figures,
    badge: badges,
    stand: stands,
    artprint: artprints,
  };

  const currentItems = categoryData[activeCategory];

  const filteredItems = currentItems.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.manufacturer?.toLowerCase().includes(query)
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
              placeholder={`搜索${categories.find((c) => c.id === activeCategory)?.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <span className="text-sm text-muted-foreground">
            共 {filteredItems.length} 件商品
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MerchandiseCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">未找到匹配的商品</p>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <MerchandiseModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
}

function MerchandiseModal({ item, onClose }: { item: Merchandise; onClose: () => void }) {
  const categoryLabels: Record<string, string> = {
    figure: "手办",
    badge: "吧唧",
    stand: "立牌",
    artprint: "色纸",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-card rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
        >
          <Icons.Close className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
            <img
              src={item.thumb_url}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 p-6">
            <Badge variant="secondary" className="mb-2">
              {categoryLabels[item.category] || item.category}
            </Badge>
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>

            {item.price && (
              <div className="mt-4 text-2xl font-bold text-pink-500">
                {item.price}
              </div>
            )}

            {item.description && (
              <p className="mt-4 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}

            <div className="mt-6 space-y-2">
              {item.manufacturer && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">厂商</span>
                  <span>{item.manufacturer}</span>
                </div>
              )}
              {item.scale && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">比例</span>
                  <span>{item.scale}</span>
                </div>
              )}
              {item.shop_name && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">商店</span>
                  <span>{item.shop_name}</span>
                </div>
              )}
            </div>

            {item.shop_url && (
              <a
                href={item.shop_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-colors shadow-lg shadow-pink-500/20"
              >
                <Icons.ExternalLink className="w-5 h-5" />
                在商店查看
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
