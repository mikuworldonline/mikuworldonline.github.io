import type { Avatar } from "@/types";
import { useState } from "react";
import { PreviewModal } from "@/components/resource/preview-modal";
import { AvatarCard } from "@/components/resource/avatar-card";
import { SearchBar } from "@/components/resource/search-bar";
import { EmptyState } from "@/components/resource/empty-state";

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
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="搜索头像..."
        count={filteredData.length}
        countLabel="个头像"
      />

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
      {filteredData.length === 0 && <EmptyState message="未找到匹配的头像" />}

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
