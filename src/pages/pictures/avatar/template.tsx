import type { Avatar } from "@/types";
import { useState } from "react";
import { PreviewModal } from "@/components/resource/preview-modal";
import { AvatarCard } from "@/components/resource/avatar-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/icons";

interface AvatarListProps {
  data: Avatar[];
}

export function AvatarList({ data }: AvatarListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((avatar) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      avatar.title.toLowerCase().includes(query) ||
      avatar.keywords?.toLowerCase().includes(query) ||
      avatar.description?.toLowerCase().includes(query)
    );
  });

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索头像..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <span className="text-sm text-muted-foreground">
          共 {filteredData.length} 个头像
        </span>
      </div>

      {/* Avatar Grid */}
      <div className="flex flex-wrap gap-4 justify-start">
        {filteredData.map((avatar, index) => (
          <AvatarCard
            key={avatar.id}
            item={avatar}
            onClick={() => handleOpenModal(index)}
            size="lg"
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">未找到匹配的头像</p>
        </div>
      )}

      {/* Preview Modal */}
      {selectedIndex !== null && filteredData[selectedIndex] && (
        <PreviewModal
          isOpen={true}
          onClose={handleCloseModal}
          title={filteredData[selectedIndex].title}
          imageUrl={filteredData[selectedIndex].thumb_url}
          description={filteredData[selectedIndex].description}
          keywords={filteredData[selectedIndex].keywords}
          originUrl={filteredData[selectedIndex].origin_url}
          originSite={filteredData[selectedIndex].origin_site}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedIndex}
          totalCount={filteredData.length}
        />
      )}
    </div>
  );
}
