import { useState, useRef, useEffect } from "react";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";
import type { Music } from "@/types";

interface AudioPlayerProps {
  item: Music;
  autoPlay?: boolean;
}

export function AudioPlayer({ item, autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-card rounded-xl p-4 shadow-sm border">
      <audio ref={audioRef} src={item.audio_url} preload="metadata" />

      <div className="flex items-center gap-4">
        {/* Thumbnail */}
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
          <img
            src={item.thumb_url}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Icons.Play className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        {/* Info & Controls */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground line-clamp-1">
            {item.title}
          </h3>
          {item.artist && (
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
              {item.artist}
            </p>
          )}
          {item.album && (
            <p className="text-xs text-muted-foreground/70 line-clamp-1">
              {item.album}
            </p>
          )}

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">
                {formatTime(currentTime)}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
            "bg-pink-500 hover:bg-pink-600 text-white transition-colors",
            "shadow-lg shadow-pink-500/30"
          )}
        >
          {isPlaying ? (
            <Icons.Pause className="w-5 h-5" />
          ) : (
            <Icons.Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
