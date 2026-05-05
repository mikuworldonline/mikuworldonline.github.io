import type { Sticker } from "@/types";
import { useState } from "react";
import { PreviewModal } from "@/components/resource/preview-modal";
import { StickerCard } from "@/components/resource/sticker-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";

interface StickerListProps {
  data: Sticker[];
}

export function StickerList({ data }: StickerListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGif, setFilterGif] = useState<boolean | null>(null);

  const filteredData = data.filter((sticker) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !sticker.title.toLowerCase().includes(query) &&
        !sticker.keywords?.toLowerCase().includes(query) &&
        !sticker.description?.toLowerCase().includes(query)
      ) {
        return false;
      }
    }
    // GIF filter
    if (filterGif !== null && sticker.is_gif !== filterGif) {
      return false;
    }
    return true;
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
      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索表情包..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <Button
            variant={filterGif === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterGif(null)}
          >
            全部
          </Button>
          <Button
            variant={filterGif === false ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterGif(false)}
          >
            静态图
          </Button>
          <Button
            variant={filterGif === true ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterGif(true)}
          >
            GIF动图
          </Button>
        </div>
      </div>

      {/* Sticker Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredData.map((sticker, index) => (
          <StickerCard
            key={sticker.id}
            item={sticker}
            onClick={() => handleOpenModal(index)}
            showKeywords
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">未找到匹配的表情包</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-6 text-sm text-muted-foreground text-center">
        共 {filteredData.length} 个表情包
        {filterGif !== null && (
          <span>
            {" "}
            (其中 GIF {data.filter((s) => s.is_gif).length} 个)
          </span>
        )}
      </div>

      {/* Preview Modal */}
      {selectedIndex !== null && filteredData[selectedIndex] && (
        <StickerPreviewModal
          sticker={filteredData[selectedIndex]}
          isOpen={true}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedIndex}
          totalCount={filteredData.length}
        />
      )}
    </div>
  );
}

interface StickerPreviewModalProps {
  sticker: Sticker;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

function StickerPreviewModal({
  sticker,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}: StickerPreviewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = sticker.images?.length ? sticker.images : [sticker.thumb_url];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  if (!isOpen) return null;

  return (
    <PreviewModal
      isOpen={isOpen}
      onClose={onClose}
      title={sticker.title}
      images={images}
      currentImageIndex={currentImageIndex}
      onNextImage={handleNextImage}
      onPrevImage={handlePrevImage}
      description={sticker.description}
      keywords={sticker.keywords}
      originUrl={sticker.origin_url}
      originSite={sticker.origin_site}
      onNext={onNext}
      onPrev={onPrev}
      currentIndex={currentIndex}
      totalCount={totalCount}
      showImageNavigation={images.length > 1}
    />
  );
}
