import type { Game } from "@/types";

// 在线游戏
export const onlineGames: Game[] = [
  {
    id: "game-001",
    title: "初音未来：梦幻歌姬",
    description: "经典的音乐节奏游戏，伴随初音的歌声在梦幻世界中冒险。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_rhythm_01.webp",
    game_url: "https://example.com/miku-rhythm",
    embed_url: "https://example.com/miku-rhythm/embed",
    game_type: "html5",
    genre: "音乐节奏",
    keywords: "初音未来,音乐节奏,节奏游戏",
  },
  {
    id: "game-002",
    title: "Miku Cosplay Dress Up",
    description: "为初音未来搭配可爱的服装和配饰。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_dressup_01.webp",
    game_url: "https://example.com/miku-dress-up",
    embed_url: "https://example.com/miku-dress-up/embed",
    game_type: "html5",
    genre: "换装",
    keywords: "初音未来,换装,打扮",
  },
  {
    id: "game-003",
    title: "初音消除大师",
    description: "经典的泡泡龙/消消乐游戏，初音角色为你加油。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_puzzle_01.webp",
    game_url: "https://example.com/miku-puzzle",
    embed_url: "https://example.com/miku-puzzle/embed",
    game_type: "html5",
    genre: "益智消除",
    keywords: "初音未来,消除,益智",
  },
  {
    id: "game-004",
    title: "初音躲避球",
    description: "控制初音躲避飞来的障碍物，看你能坚持多久。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_dodger_01.webp",
    game_url: "https://example.com/miku-dodger",
    embed_url: "https://example.com/miku-dodger/embed",
    game_type: "html5",
    genre: "反应",
    keywords: "初音未来,躲避,反应游戏",
  },
  {
    id: "game-005",
    title: "初音拼图",
    description: "将初音的图片碎片拼成完整的图片。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_puzzle_02.webp",
    game_url: "https://example.com/miku-jigsaw",
    embed_url: "https://example.com/miku-jigsaw/embed",
    game_type: "html5",
    genre: "益智拼图",
    keywords: "初音未来,拼图,益智",
  },
  {
    id: "game-006",
    title: "初音跑酷",
    description: "初音在音乐节拍中奔跑收集音符。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_runner_01.webp",
    game_url: "https://example.com/miku-runner",
    embed_url: "https://example.com/miku-runner/embed",
    game_type: "html5",
    genre: "跑酷",
    keywords: "初音未来,跑酷,动作",
  },
];

// 游戏合集
export const gameCollection: Game[] = [
  {
    id: "game-col-001",
    title: "初音未来：歌姬计划 series",
    description: "SEGA 开发的经典音乐节奏游戏系列，包含 Future Sound、Future Tone、Extenal 等多个版本。玩家可以操控初音等角色演奏经典曲目。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/hatsune_project_01.webp",
    game_url: "https://store.steampowered.com/search/?term=Hatsune+Miku",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,歌姬计划,节奏游戏,SEGA,PS",
  },
  {
    id: "game-col-002",
    title: "初音未来：VR",
    description: "通过 VR 设备与初音近距离互动的 VR 应用，可以在虚拟空间中观看初音表演和互动。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_vr_01.webp",
    game_url: "https://store.steampowered.com/app/793950/Hatsune_Miku_VR/",
    game_type: "download",
    genre: "VR 互动",
    keywords: "初音未来,VR,虚拟现实,互动",
  },
  {
    id: "game-col-003",
    title: "初音未来：梦幻剧场",
    description: "在梦幻般的剧场环境中欣赏初音的歌声和舞蹈，支持多种交互方式。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_theater_01.webp",
    game_url: "https://example.com/miku-theater",
    game_type: "download",
    genre: "音乐休闲",
    keywords: "初音未来,梦幻剧场,休闲,音乐",
  },
  {
    id: "game-col-004",
    title: "初音 Collect",
    description: "初音未来主题的收集类游戏，收集虚拟初音手办和周边。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_collect_01.webp",
    game_url: "https://example.com/miku-collect",
    game_type: "download",
    genre: "收集养成",
    keywords: "初音未来,收集,养成,休闲",
  },
  {
    id: "game-col-005",
    title: "初音的生活",
    description: "模拟初音日常生活起居的模拟游戏，体验初音的日常生活。",
    thumb_url: "https://cdn.jsdelivr.net/gh/0326/imgs@main/games/miku_life_01.webp",
    game_url: "https://example.com/miku-life",
    game_type: "download",
    genre: "模拟养成",
    keywords: "初音未来,模拟,养成,日常生活",
  },
];

// 导出所有游戏
export const allGames = [...onlineGames, ...gameCollection];

// 游戏分类
export const gameCategories = [
  { id: "online", name: "在线游戏", count: onlineGames.length },
  { id: "collection", name: "游戏合集", count: gameCollection.length },
];
