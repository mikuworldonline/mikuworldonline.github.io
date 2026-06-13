import { Input } from "@/components/ui/input";
import { Icons } from "@/icons";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  count?: number;
  countLabel?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "搜索...",
  count,
  countLabel,
}: SearchBarProps) {
  return (
    <div className="mb-6 flex gap-4 items-center">
      <div className="relative flex-1 max-w-md">
        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10"
        />
      </div>
      {count !== undefined && (
        <span className="text-sm text-muted-foreground">
          共 {count} {countLabel}
        </span>
      )}
    </div>
  );
}
