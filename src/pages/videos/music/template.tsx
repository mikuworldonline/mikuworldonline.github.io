import type { Music } from "@/types";
import { useState } from "react";
import { AudioPlayer } from "@/components/resource/audio-player";
import { SearchBar } from "@/components/resource/search-bar";
import { EmptyState } from "@/components/resource/empty-state";

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
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="搜索音乐..."
        count={filteredData.length}
        countLabel="首歌曲"
      />

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
      {filteredData.length === 0 && <EmptyState message="未找到匹配的音乐" />}
    </div>
  );
}
