import type { Game } from "@/types";
import { useState } from "react";
import { GameCard } from "@/components/resource/game-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";

interface GamesPageProps {
  onlineGames: Game[];
  gameCollection: Game[];
}

export function GamesPage({ onlineGames, gameCollection }: GamesPageProps) {
  const [activeCategory, setActiveCategory] = useState<"online" | "collection">("online");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const currentGames = activeCategory === "online" ? onlineGames : gameCollection;

  const filteredGames = currentGames.filter((game) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      game.title.toLowerCase().includes(query) ||
      game.description?.toLowerCase().includes(query) ||
      game.genre?.toLowerCase().includes(query) ||
      game.keywords?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-48 flex-shrink-0 hidden lg:block">
        <nav className="sticky top-20 space-y-1">
          <button
            onClick={() => setActiveCategory("online")}
            className={cn(
              "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
              activeCategory === "online"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            在线游戏
          </button>
          <button
            onClick={() => setActiveCategory("collection")}
            className={cn(
              "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
              activeCategory === "collection"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            游戏合集
          </button>
        </nav>
      </aside>

      {/* Mobile Category Tabs */}
      <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={activeCategory === "online" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("online")}
        >
          在线游戏
        </Button>
        <Button
          variant={activeCategory === "collection" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("collection")}
        >
          游戏合集
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Search */}
        <div className="mb-6 flex gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="搜索游戏..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <span className="text-sm text-muted-foreground">
            共 {filteredGames.length} 个{activeCategory === "online" ? "在线游戏" : "游戏合集"}
          </span>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              item={game}
              onClick={() => setSelectedGame(game)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">未找到匹配的游戏</p>
          </div>
        )}

        {/* Game Modal */}
        {selectedGame && (
          <GameModal
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </div>
    </div>
  );
}

function GameModal({ game, onClose }: { game: Game; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
        >
          <Icons.Close className="w-6 h-6" />
        </button>

        {/* Game Player */}
        <div className="aspect-video bg-black/90">
          {game.embed_url ? (
            <iframe
              src={game.embed_url}
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Icons.ExternalLink className="w-12 h-12 text-muted-foreground" />
              <p className="text-muted-foreground">点击下方按钮开始游戏</p>
              {game.game_url && (
                <a
                  href={game.game_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-colors"
                >
                  打开游戏
                </a>
              )}
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-foreground">{game.title}</h3>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            {game.genre && <span>{game.genre}</span>}
            {game.game_type && (
              <Badge variant="secondary">
                {game.game_type === "html5" && "HTML5"}
                {game.game_type === "flash" && "Flash"}
                {game.game_type === "download" && "下载版"}
                {game.game_type === "online" && "Online"}
              </Badge>
            )}
          </div>
          {game.description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {game.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
