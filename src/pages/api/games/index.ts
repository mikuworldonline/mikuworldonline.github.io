import type { Game } from "@/types";

// 在线游戏 —— 真实可在浏览器直接游玩的 HTML5 / 网页初音小游戏
export const onlineGames: Game[] = [
  {
    id: "game-001",
    title: "Mikutap",
    description:
      "由 AIDN 制作的人气网页互动音乐玩具，点击屏幕即可即兴生成初音风格的旋律与音效，无需下载，打开网页就能玩。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    game_url: "https://aidn.jp/mikutap/",
    embed_url: "https://aidn.jp/mikutap/",
    game_type: "html5",
    genre: "音乐互动",
    keywords: "初音未来,Mikutap,音乐玩具,网页游戏,HTML5",
  },
  {
    id: "game-002",
    title: "Infinite Miku!",
    description:
      "Weisa 制作的无尽节奏游戏，自动切换不同歌曲与 osu! 谱面，命中音符并尽可能坚持更久刷新高分，浏览器内直接游玩。",
    thumb_url:
      "https://img.itch.zone/aW1nLzExNjM3MjYwLnBuZw==/347x500/B1UEdw.png",
    game_url: "https://weisa.itch.io/infinite-miku",
    embed_url: "https://weisa.itch.io/infinite-miku",
    game_type: "html5",
    genre: "音乐节奏",
    keywords: "初音未来,节奏游戏,osu,itch.io,HTML5",
  },
  {
    id: "game-003",
    title: "MikuMikuFly",
    description:
      "Magical Mirai 2024 编程大赛入围作品，与初音一起飞行、随音乐节拍收集歌词字符，收录 6 首参赛曲目，网页可玩。",
    thumb_url:
      "https://img.itch.zone/aW1hZ2UvMjgyMjQxMi8xNjg2MTgzNy5wbmc=/347x500/7zpwtE.png",
    game_url: "https://saderuuu.itch.io/mikumikufly",
    embed_url: "https://saderuuu.itch.io/mikumikufly",
    game_type: "html5",
    genre: "音乐节奏",
    keywords: "初音未来,MikuMikuFly,Magical Mirai,节奏游戏,HTML5",
  },
  {
    id: "game-004",
    title: "Flappy Miku",
    description:
      "Flappy Bird 玩法的初音版本，为庆祝初音 39 周年制作，空格键或鼠标点击让初音穿越障碍，支持移动端网页游玩。",
    thumb_url:
      "https://img.itch.zone/aW1nLzExNTM4MzYxLmpwZw==/347x500/eIjXBG.jpg",
    game_url: "https://sour-dani.itch.io/flappy-miku",
    embed_url: "https://sour-dani.itch.io/flappy-miku",
    game_type: "html5",
    genre: "休闲反应",
    keywords: "初音未来,Flappy Miku,休闲游戏,itch.io,HTML5",
  },
  {
    id: "game-005",
    title: "Infinite Miku!（Gamaverse 版）",
    description:
      "Infinite Miku! 的 Gamaverse 在线镜像，免登录直接在浏览器中游玩这款无尽初音节奏游戏，适合快速上手。",
    thumb_url:
      "https://img.itch.zone/aW1nLzExNjM3MjYwLnBuZw==/347x500/B1UEdw.png",
    game_url: "https://gamaverse.com/infinite-miku-game/",
    embed_url: "https://gamaverse.com/infinite-miku-game/",
    game_type: "online",
    genre: "音乐节奏",
    keywords: "初音未来,Infinite Miku,Gamaverse,节奏游戏,在线",
  },
  {
    id: "game-006",
    title: "FNF vs. Hatsune Miku",
    description:
      "Friday Night Funkin' 的初音 Mod，加入 Popipo、Aishite、消失等经典曲目的对唱关卡，浏览器内即可在线游玩。",
    thumb_url:
      "https://img.itch.zone/aW1hZ2UvMjgyMjQxMi8xNjg2MTgzNy5wbmc=/347x500/7zpwtE.png",
    game_url: "https://gamaverse.com/friday-night-funkin-hatsune-miku-game/",
    embed_url: "https://gamaverse.com/friday-night-funkin-hatsune-miku-game/",
    game_type: "online",
    genre: "音乐节奏",
    keywords: "初音未来,FNF,Friday Night Funkin,节奏对战,在线",
  },
  {
    id: "game-007",
    title: "Hatsune Miku: Colorful Stage!（Rhythia 网页版）",
    description:
      "Rhythia 提供的彩色舞台风格网页节奏体验，点击、长按、滑动跟随节拍演奏，含多种难度，无需安装即可在线游玩。",
    thumb_url:
      "https://img.itch.zone/aW1nLzExNjM3MjYwLnBuZw==/347x500/B1UEdw.png",
    game_url: "https://rhythiagame.com/hatsune-miku-colorful-stage/",
    embed_url: "https://rhythiagame.com/hatsune-miku-colorful-stage/",
    game_type: "online",
    genre: "音乐节奏",
    keywords: "初音未来,Colorful Stage,Rhythia,节奏游戏,在线",
  },
  {
    id: "game-008",
    title: "Mikutap（YaksGames 版）",
    description:
      "Mikutap 的 YaksGames 在线版本，结合敲击节拍与视觉特效的音乐互动小游戏，兼容 PC、安卓与 iOS 浏览器。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    game_url: "https://yaksgames.com/games/mikutap/G99FB0AC54",
    embed_url: "https://yaksgames.com/games/mikutap/G99FB0AC54",
    game_type: "online",
    genre: "音乐互动",
    keywords: "初音未来,Mikutap,YaksGames,音乐玩具,在线",
  },
];

// 游戏合集 —— 真实初音官方 / 知名商业游戏，origin_url 指向官网 / Steam / 商店页
export const gameCollection: Game[] = [
  {
    id: "game-col-001",
    title: "初音ミク Project DIVA MEGA39's＋ (Mega Mix+)",
    description:
      "SEGA 出品的旗舰音乐节奏游戏，收录 170+ 首带专属 MV 的曲目与海量服装模组，Project DIVA 系列 PC 版集大成之作。",
    thumb_url:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1761390/header.jpg",
    origin_url:
      "https://store.steampowered.com/app/1761390/Hatsune_Miku_Project_DIVA_Mega_Mix/",
    origin_site: "Steam",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project DIVA,MEGA39's,Mega Mix,SEGA,Steam",
  },
  {
    id: "game-col-002",
    title: "Hatsune Miku: Project DIVA Mega Mix (Switch)",
    description:
      "Project DIVA 系列首部登陆 Nintendo Switch 的作品，收录跨越十年的 101 首曲目，含经典街机模式与全新 Mix 体感模式。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    origin_url:
      "https://www.nintendo.com/us/store/products/hatsune-miku-project-diva-mega-mix-switch/",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project DIVA,Mega Mix,Nintendo Switch,SEGA",
  },
  {
    id: "game-col-003",
    title: "Project SEKAI / Hatsune Miku: Colorful Stage!",
    description:
      "SEGA、Colorful Palette 与 Crypton Future Media 联合打造的手游节奏大作，多组虚拟乐队与初音同台，支持丰富的原创剧情与曲目。",
    thumb_url: "https://www.colorfulstage.com/img/bg_pc_ver03.webp",
    origin_url: "https://www.colorfulstage.com/",
    origin_site: "Colorful Stage 官网",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project SEKAI,Colorful Stage,手游,节奏游戏",
  },
  {
    id: "game-col-004",
    title: "Hatsune Miku: Project DIVA Future Tone",
    description:
      "基于街机 Future Tone 移植的 PS4 节奏游戏，含 Future Sound 与 Colorful Tone 两大曲包共 200+ 首曲目，画面与内容量惊人。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    origin_url: "https://miku.sega.com/futuretone/index.html",
    origin_site: "SEGA 官网",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project DIVA,Future Tone,PS4,SEGA",
  },
  {
    id: "game-col-005",
    title: "初音ミク Logic Paint S",
    description:
      "KOMODO 与 Crypton 推出的初音主题数织（Nonogram）解谜游戏，收录 350+ 道谜题，通关可解锁初音与伙伴的插画与歌曲。",
    thumb_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000038962/8fa59b624004ca7f0e93207f4a1fd0631a2ab21dca80c5392e29d6c41e4c3eed",
    origin_url:
      "https://www.nintendo.com/us/store/products/hatsune-miku-logic-paint-s-switch/",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "益智解谜",
    keywords: "初音未来,Logic Paint S,数织,解谜,Nintendo Switch",
  },
  {
    id: "game-col-006",
    title: "Hatsune Miku VR",
    description:
      "登陆 Steam 的初音 VR 节奏动作游戏，玩家戴上 VR 设备与初音近距离互动，跟随多位知名 P 主的曲目挥手命中音符。",
    thumb_url:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/707300/header.jpg",
    origin_url: "https://store.steampowered.com/app/707300/Hatsune_Miku_VR/",
    origin_site: "Steam",
    game_type: "download",
    genre: "VR 节奏",
    keywords: "初音未来,Hatsune Miku VR,VR,节奏游戏,Steam",
  },
  {
    id: "game-col-007",
    title: "Hatsune Miku: Project DIVA X",
    description:
      "PS4 / PS Vita 平台的 Project DIVA 作品，玩家帮助初音与伙伴穿越由五朵「云」构成的世界，主打剧情演出与 Live 表演。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    origin_url: "https://miku.sega.com/divax/game.html",
    origin_site: "SEGA 官网",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project DIVA X,PS4,PS Vita,SEGA",
  },
  {
    id: "game-col-008",
    title: "Hatsune Miku: Project Mirai DX",
    description:
      "Nintendo 3DS 上的 Q 版头身比初音节奏游戏，收录 48 首人气曲目的完整版本，含多种玩法与可爱的 Nendoroid 风格演出。",
    thumb_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000038962/8fa59b624004ca7f0e93207f4a1fd0631a2ab21dca80c5392e29d6c41e4c3eed",
    origin_url:
      "https://www.nintendo.com/en-gb/Games/Nintendo-3DS-games/Hatsune-Miku-Project-Mirai-DX-1044120.html",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project Mirai DX,Nintendo 3DS,节奏游戏",
  },
  {
    id: "game-col-009",
    title: "Hatsune Miku - The Planet Of Wonder And Fragments Of Wishes",
    description:
      "登陆 Nintendo Switch 的初音冒险解谜游戏，玩家在奇幻星球上探索、解谜并收集愿望碎片，氛围治愈且画面唯美。",
    thumb_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000066163/bad10cc03fc79ff64856d13d9233f8c66c11fd492ecc1cb08d8394f46fae6370",
    origin_url:
      "https://www.nintendo.com/us/store/products/hatsune-miku-the-planet-of-wonder-and-fragments-of-wishes-switch/",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "冒险解谜",
    keywords: "初音未来,Planet Of Wonder,冒险,解谜,Nintendo Switch",
  },
  {
    id: "game-col-010",
    title: "Hatsune Miku Jigsaw Puzzle",
    description:
      "Nintendo Switch 上的初音拼图游戏，收录大量初音及伙伴的官方插画，玩家可在多种难度下拼合精美图片放松游玩。",
    thumb_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000047680/73b7358c0b35a34f8fb8b3b3ca7af4a233046ccfebfb0d4a40e6311daba63f16",
    origin_url:
      "https://www.nintendo.com/us/store/products/hatsune-miku-jigsaw-puzzle-switch/",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "益智拼图",
    keywords: "初音未来,Jigsaw Puzzle,拼图,益智,Nintendo Switch",
  },
  {
    id: "game-col-011",
    title: "Hatsune Miku: Project DIVA F 2nd",
    description:
      "PS3 / PS Vita 平台的 Project DIVA F 续作，收录 40 首曲目与丰富的换装、房间互动元素，是 PS 时代 DIVA 系列的代表作之一。",
    thumb_url: "https://miku.sega.com/megamix/img/top_miku.png",
    origin_url: "http://miku.sega.jp/f2/vita/en/",
    origin_site: "SEGA 官网",
    game_type: "download",
    genre: "音乐节奏",
    keywords: "初音未来,Project DIVA F 2nd,PS3,PS Vita,SEGA",
  },
  {
    id: "game-col-012",
    title: "Hatsune Miku Logic Paint S＋",
    description:
      "Logic Paint S 的强化续作，登陆 Steam、Switch、Xbox 与 PlayStation，收录 1000+ 道数织谜题与更多初音主题插画奖励。",
    thumb_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000038962/8fa59b624004ca7f0e93207f4a1fd0631a2ab21dca80c5392e29d6c41e4c3eed",
    origin_url:
      "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Hatsune-Miku-Logic-Paint-S-2870697.html",
    origin_site: "Nintendo",
    game_type: "download",
    genre: "益智解谜",
    keywords: "初音未来,Logic Paint S+,数织,解谜,Steam,Switch",
  },
];

// 导出所有游戏
export const allGames = [...onlineGames, ...gameCollection];

// 游戏分类
export const gameCategories = [
  { id: "online", name: "在线游戏", count: onlineGames.length },
  { id: "collection", name: "游戏合集", count: gameCollection.length },
];
