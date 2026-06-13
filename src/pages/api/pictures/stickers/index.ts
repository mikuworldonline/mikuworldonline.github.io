import type { Sticker } from "@/types";

// 表情包数据 - 初音未来主题
// 图源策略：自托管图床 (cdn.jsdelivr.net/gh/mikuworldonline/img) 目前仅有壁纸目录，
// 暂无表情包目录，故本数据采用 Wikimedia Commons 的公开可热链直链
// (upload.wikimedia.org，CC 协议、长期稳定、可直接公开访问)。
// 全部 thumb_url 与 images[] 均经 curl 实测返回 200。
// 后续若 mikuworldonline/img 仓库新增表情包目录，可逐条替换为自托管直链。
export const stickers: Sticker[] = [
  {
    id: "sticker-001",
    title: "初音同人插画表情包",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hatsune_Miku_fanart_by_Chaiffon.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hatsune_Miku_fanart_by_Chaiffon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Hatsune_Miku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/20170806_01_MMD_Victorian_Feels_1920x1080.png",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Hatsune_Miku_fanart_by_Chaiffon.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,同人,插画,表情包",
    description: "初音未来同人插画风格表情合集",
    is_gif: false,
  },
  {
    id: "sticker-002",
    title: "MMD 渲染表情包",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/20170806_01_MMD_Victorian_Feels_1920x1080.png",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/20170806_01_MMD_Victorian_Feels_1920x1080.png",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Hatsune_Miku.jpg",
    ],
    origin_url:
      "https://commons.wikimedia.org/wiki/File:20170806_01_MMD_Victorian_Feels_1920x1080.png",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,MMD,3D,渲染",
    description: "MMD 3D 渲染风格初音表情",
    is_gif: false,
  },
  {
    id: "sticker-003",
    title: "圣诞主题初音表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Christmas_Theme_Hatsune_Miku.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Christmas_Theme_Hatsune_Miku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Balloon_Modelling_Hatsune_Miku.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Christmas_Theme_Hatsune_Miku.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,圣诞,节日,表情包",
    description: "圣诞节主题初音未来表情合集",
    is_gif: false,
  },
  {
    id: "sticker-004",
    title: "气球造型初音表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Balloon_Modelling_Hatsune_Miku.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Balloon_Modelling_Hatsune_Miku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Christmas_Theme_Hatsune_Miku.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Balloon_Modelling_Hatsune_Miku.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,气球,创意,表情包",
    description: "气球造型创意初音表情",
    is_gif: false,
  },
  {
    id: "sticker-005",
    title: "初音演唱会现场表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hatsune_Miku_Night_-_Sapporo_2008-10-12.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hatsune_Miku_Night_-_Sapporo_2008-10-12.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/BC_20141004-0241_%2815294565358%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Fancy_Frontier_20_P7280579_%287660934578%29_%282%29.jpg",
    ],
    origin_url:
      "https://commons.wikimedia.org/wiki/File:Hatsune_Miku_Night_-_Sapporo_2008-10-12.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,演唱会,现场,表情包",
    description: "初音未来演唱会现场表情合集",
    is_gif: false,
  },
  {
    id: "sticker-006",
    title: "漫展活动初音表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Fancy_Frontier_20_P7280579_%287660934578%29_%282%29.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Fancy_Frontier_20_P7280579_%287660934578%29_%282%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/FanimeCon_2012_061_%287293522098%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Anime_Expo_2011_%285893319312%29.jpg",
    ],
    origin_url:
      "https://commons.wikimedia.org/wiki/File:Fancy_Frontier_20_P7280579_(7660934578)_(2).jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,漫展,活动,表情包",
    description: "漫展现场初音未来表情合集",
    is_gif: false,
  },
  {
    id: "sticker-007",
    title: "秋叶原街景初音表情",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Akihabara_-11.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Akihabara_-11.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Akihabara_-21.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Akihabara_ex.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Akihabara_-11.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,秋叶原,街景,表情包",
    description: "秋叶原初音未来主题街景表情",
    is_gif: false,
  },
  {
    id: "sticker-008",
    title: "初音 Cosplay 表情包",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Calne_Ca_cosplay_%28hatsune_miku%29.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Calne_Ca_cosplay_%28hatsune_miku%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Cosplay_-_AWA15_-_Hatsune_Miku_%283982089851%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Cosplayer%2C_Hatsune_Miku_-_Caracas_Comic-Con_2023.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Calne_Ca_cosplay_(hatsune_miku).jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,cosplay,角色扮演,表情包",
    description: "初音未来 Cosplay 表情合集",
    is_gif: false,
  },
  {
    id: "sticker-009",
    title: "雪初音表情包",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Snow_Miku_Airplane_202312.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Snow_Miku_Airplane_202312.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Snow_Miku_Bus_2022.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Snow_Miku_Airplane_202312.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,雪初音,SnowMiku,表情包",
    description: "雪初音 Snow Miku 主题表情合集",
    is_gif: false,
  },
  {
    id: "sticker-010",
    title: "初音联动彩绘表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Japan-Mobility-Show-2025-RuinDig_1769.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Japan-Mobility-Show-2025-RuinDig_1769.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Japan-Mobility-Show-2025-RuinDig_1771.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Japan-Mobility-Show-2025-RuinDig_1868.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Japan-Mobility-Show-2025-RuinDig_1863.jpg",
    ],
    origin_url:
      "https://commons.wikimedia.org/wiki/File:Japan-Mobility-Show-2025-RuinDig_1769.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,联动,彩绘,表情包",
    description: "初音未来品牌联动彩绘表情合集",
    is_gif: false,
  },
  {
    id: "sticker-011",
    title: "初音乐器主题表情",
    thumb_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/CyberVocal_Hatsune_Miku_Ver_legs_at_BYOC_Zone_20251116.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/79/CyberVocal_Hatsune_Miku_Ver_legs_at_BYOC_Zone_20251116.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Miss_Hatsune_Switch.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Kitsune_Coffee_%26_Tea_booth_rear_20240720.jpg",
    ],
    origin_url:
      "https://commons.wikimedia.org/wiki/File:CyberVocal_Hatsune_Miku_Ver_legs_at_BYOC_Zone_20251116.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,乐器,主题,表情包",
    description: "初音未来乐器与周边主题表情",
    is_gif: false,
  },
  {
    id: "sticker-012",
    title: "初音漫展合影表情",
    thumb_url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Conociendo_a_Miku.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Conociendo_a_Miku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Cosplayers_of_Hatsune_Miku_and_Ash_Ketchum_at_Anime_Friends_20150712.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Cosplay_Contest_at_Copenhagen_Sakura_Festival_2023_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Cosplay_Contest_at_Copenhagen_Sakura_Festival_2023_02.jpg",
    ],
    origin_url: "https://commons.wikimedia.org/wiki/File:Conociendo_a_Miku.jpg",
    origin_site: "https://commons.wikimedia.org",
    keywords: "初音未来,漫展,合影,表情包",
    description: "初音未来漫展合影表情合集",
    is_gif: false,
  },
];
