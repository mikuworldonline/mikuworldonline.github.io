import type { Video } from "@/types";
import { useState } from "react";
import { VideoCard } from "@/components/resource/video-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

interface VideoListProps {
  data: Video[];
}

const categories = ["全部", "官方PV", "演唱会", "MV", "动画PV"];

export function VideoList({ data }: VideoListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredData = data.filter((video) => {
    // Category filter
    if (selectedCategory !== "全部") {
      if (selectedCategory === "官方PV" && !video.keywords?.includes("官方")) {
        return false;
      }
      if (selectedCategory === "演唱会" && !video.keywords?.includes("Live") && !video.keywords?.includes("演唱会")) {
        return false;
      }
      if (selectedCategory === "MV" && !video.keywords?.includes("MV")) {
        return false;
      }
      if (selectedCategory === "动画PV" && !video.keywords?.includes("动画PV")) {
        return false;
      }
    }
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !video.title.toLowerCase().includes(query) &&
        !video.description?.toLowerCase().includes(query) &&
        !video.keywords?.toLowerCase().includes(query)
      ) {
        return false;
      }
    }
    return true;
  });

  const formatViews = (views?: number) => {
    if (!views) return "";
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索视频..."
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

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((video) => (
          <VideoCard
            key={video.id}
            item={video}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 text-sm text-muted-foreground text-center">
        共 {filteredData.length} 个视频
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const formatViews = (views?: number) => {
    if (!views) return "";
    return views.toLocaleString();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
        >
          <Icons.Close className="w-6 h-6" />
        </button>

        {/* Video Player */}
        <div className="aspect-video bg-black">
          {video.embed_url ? (
            <iframe
              src={video.embed_url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-white">视频播放</p>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4 bg-card">
          <h3 className="text-lg font-medium text-foreground">{video.title}</h3>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{video.duration}</span>
            {video.origin_site && <span>{video.origin_site}</span>}
            {video.views && <span>{formatViews(video.views)} views</span>}
          </div>
          {video.description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {video.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
