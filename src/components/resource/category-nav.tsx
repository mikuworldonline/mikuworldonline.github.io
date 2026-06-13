import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface CategoryItem {
  key: string;
  label: string;
  count: number;
}

interface CategoryNavProps {
  categories: CategoryItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

export function CategoryNav({ categories, activeKey, onSelect }: CategoryNavProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-48 flex-shrink-0 hidden lg:block">
        <nav className="sticky top-20 space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onSelect(cat.key)}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                activeKey === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span>{cat.label}</span>
              <Badge
                variant={activeKey === cat.key ? "secondary" : "outline"}
                className="text-xs"
              >
                {cat.count}
              </Badge>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Category Tabs */}
      <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={activeKey === cat.key ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(cat.key)}
          >
            {cat.label}
          </Button>
        ))}
      </div>
    </>
  );
}
