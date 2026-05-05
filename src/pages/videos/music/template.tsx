import type { Music } from "@/types";
import { useState } from "react";
import { AudioPlayer } from "@/components/resource/audio-player";
import { Input } from "@/components/ui/input";
import { Icons } from "@/icons";

interface MusicListProps {
  data: Music[];
}

export function MusicList({ data }: MusicListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);

  const filteredData = data.filter((music) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      music.title.toLowerCase().includes(query) ||
      music.artist?.toLowerCase().includes(query) ||
      music.album?.toLowerCase().includes(query) ||
      music.keywords?.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索音乐..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <span className="text-sm text-muted-foreground">
          共 {filteredData.length} 首歌曲
        </span>
      </div>

      {/* Music List */}
      <div className="space-y-4">
        {filteredData.map((music) => (
          <AudioPlayer
            key={music.id}
            item={music}
            autoPlay={currentPlaying === music.id}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">未找到匹配的音乐</p>
        </div>
      )}
    </div>
  );
}
