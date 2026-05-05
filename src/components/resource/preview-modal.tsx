import { useEffect, useState } from "react";
import { Icons } from "@/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl?: string;
  images?: string[];
  description?: string;
  keywords?: string;
  originUrl?: string;
  originSite?: string;
  onNext?: () => void;
  onPrev?: () => void;
  showNavigation?: boolean;
  currentIndex?: number;
  totalCount?: number;
  actions?: React.ReactNode;
  className?: string;
  // Multi-image navigation (for sticker packs)
  showImageNavigation?: boolean;
  currentImageIndex?: number;
  onNextImage?: () => void;
  onPrevImage?: () => void;
}

export function PreviewModal({
  isOpen,
  onClose,
  title,
  imageUrl,
  images,
  description,
  keywords,
  originUrl,
  originSite,
  onNext,
  onPrev,
  showNavigation = true,
  currentIndex,
  totalCount,
  actions,
  className,
  showImageNavigation = false,
  currentImageIndex: externalImageIndex,
  onNextImage: externalNextImage,
  onPrevImage: externalPrevImage,
}: PreviewModalProps) {
  const [internalImageIndex, setInternalImageIndex] = useState(0);
  const displayImages = images || (imageUrl ? [imageUrl] : []);
  const currentImageIndex = externalImageIndex ?? internalImageIndex;

  const setImageIndex = (index: number) => {
    if (externalImageIndex !== undefined) {
      externalNextImage; // suppress unused warning
    } else {
      setInternalImageIndex(index);
    }
  };

  const handleNextImage = () => {
    if (externalNextImage) {
      externalNextImage();
    } else {
      setInternalImageIndex((prev) =>
        prev < displayImages.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (externalPrevImage) {
      externalPrevImage();
    } else {
      setInternalImageIndex((prev) =>
        prev > 0 ? prev - 1 : displayImages.length - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && showNavigation) {
        if (showImageNavigation && displayImages.length > 1) {
          handleNextImage();
        } else {
          onNext?.();
        }
      }
      if (e.key === "ArrowLeft" && showNavigation) {
        if (showImageNavigation && displayImages.length > 1) {
          handlePrevImage();
        } else {
          onPrev?.();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, showNavigation, showImageNavigation, displayImages.length]);

  useEffect(() => {
    // Reset image index when modal opens with new content
    setInternalImageIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
      >
        <Icons.Close className="w-6 h-6" />
      </button>

      <div
        className={cn(
          "relative flex flex-col md:flex-row w-full max-w-7xl h-full md:h-[90vh] items-center justify-center gap-8",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Display */}
        <div className="flex-1 flex items-center justify-center w-full h-full relative">
          <img
            src={displayImages[currentImageIndex]}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            loading="eager"
          />

          {/* Image Navigation (for multi-image sticker packs) */}
          {showImageNavigation && displayImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
              >
                <Icons.ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
              >
                <Icons.ArrowRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">
                <span className="text-sm text-white">
                  {currentImageIndex + 1} / {displayImages.length}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Info Panel */}
        <div className="w-full md:w-80 lg:w-96 flex flex-col p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-2xl overflow-y-auto max-h-[50vh] md:max-h-full">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h2>

          {keywords && (
            <div className="flex flex-wrap gap-2 mb-6">
              {keywords.split(",").map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/10 text-white/90 hover:bg-white/20"
                >
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          )}

          {description && (
            <p className="text-sm text-gray-300 mb-4">{description}</p>
          )}

          {actions && <div className="mt-4 space-y-3">{actions}</div>}

          <div className="mt-auto pt-6 space-y-3">
            {originUrl && (
              <a
                href={originUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-pink-500/20"
              >
                <Icons.Download className="w-5 h-5 mr-2" />
                Download Original
              </a>
            )}
            {originSite && (
              <a
                href={originSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10"
              >
                <Icons.ExternalLink className="w-5 h-5 mr-2" />
                Visit Source
              </a>
            )}
          </div>

          {/* Sticker/Item Navigation */}
          {showNavigation && !showImageNavigation && (onNext || onPrev) && (
            <div className="mt-6 flex justify-between items-center gap-4">
              <button
                onClick={onPrev}
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <Icons.ArrowLeft className="w-5 h-5 mr-2" /> Prev
              </button>
              {currentIndex !== undefined && totalCount !== undefined && (
                <span className="text-sm text-gray-400">
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
              <button
                onClick={onNext}
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                Next <Icons.ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
