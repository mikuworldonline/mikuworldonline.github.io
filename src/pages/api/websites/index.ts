import type { ExternalSite } from "@/types";

// 官方资源网站
export const officialSites: ExternalSite[] = [
  {
    id: "official-001",
    title: "初音未来官方网站",
    description: "初音未来官方网站，提供最新资讯、活动信息、周边购买等。",
    url: "https:// HatsuneMikuOfficial.com",
    category: "官方",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/miku_official.webp",
  },
  {
    id: "official-002",
    title: "VOCALOID 官方网站",
    description: "VOCALOID 品牌官方网站，雅马哈运营的虚拟歌手技术平台。",
    url: "https://www.vocaloid.com",
    category: "官方",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/vocaloid.webp",
  },
  {
    id: "official-003",
    title: "CRYPTON FUTURE MEDIA",
    description: "初音未来等虚拟歌手的版权公司官网。",
    url: "https://www.crypton.co.jp",
    category: "官方",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/crypton.webp",
  },
  {
    id: "official-004",
    title: "SEGA 初音未来",
    description: "SEGA 开发的初音未来游戏系列官方网站。",
    url: "https://miku.sega.com",
    category: "官方",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/segamiku.webp",
  },
];

// 创作社区网站
export const communitySites: ExternalSite[] = [
  {
    id: "community-001",
    title: "Pixiv",
    description: "日本知名插画社区，众多初音同人创作者聚集地。",
    url: "https://www.pixiv.net",
    category: "创作社区",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/pixiv.webp",
  },
  {
    id: "community-002",
    title: "DeviantArt",
    description: "全球最大的艺术社区平台，海外初音粉丝聚集地。",
    url: "https://www.deviantart.com/search?q=hatsune+miku",
    category: "创作社区",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/deviantart.webp",
  },
  {
    id: "community-003",
    title: "Niconico Seiga",
    description: "Niconico 的漫画/插画投稿平台。",
    url: "https://seiga.nicovideo.jp/",
    category: "创作社区",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/seiga.webp",
  },
  {
    id: "community-004",
    title: " Tumblr",
    description: "轻博客平台，海外初音粉丝分享创作的平台。",
    url: "https://www.tumblr.com/search/hatsune+miku",
    category: "创作社区",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/tumblr.webp",
  },
];

// 资源站
export const resourceSites: ExternalSite[] = [
  {
    id: "resource-001",
    title: "VocaDB",
    description: "VOCALOID 音乐数据库，收录全球 VOCALOID 歌曲。",
    url: "https://vocadb.net/",
    category: "资源站",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/vocadb.webp",
  },
  {
    id: "resource-002",
    title: "Vocaloidism",
    description: "VOCALOID 音乐新闻和资源分享网站。",
    url: "https://vocaloidism.com/",
    category: "资源站",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/vocaloidism.webp",
  },
  {
    id: "resource-003",
    title: "初音壁纸站",
    description: "专注收集初音未来壁纸素材的网站。",
    url: "https://wallhaven.cc/search?q=hatsune+miku",
    category: "资源站",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/wallhaven.webp",
  },
];

// 粉丝站点
export const fansiteSites: ExternalSite[] = [
  {
    id: "fansite-001",
    title: "Miku Matsuda",
    description: "海外知名初音粉丝站点，提供新闻和资源。",
    url: "https://miku.us/",
    category: "粉丝站点",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/mikuus.webp",
  },
  {
    id: "fansite-002",
    title: "初音未来中文网",
    description: "国内初音粉丝自发维护的中文资讯站。",
    url: "https://miku.to/",
    category: "粉丝站点",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/mikuto.webp",
  },
  {
    id: "fansite-003",
    title: "Vocaloid Reddit",
    description: "Reddit 上的 VOCALOID 社区。",
    url: "https://www.reddit.com/r/Vocaloid/",
    category: "粉丝站点",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/reddit.webp",
  },
  {
    id: "fansite-004",
    title: "初音 Discord",
    description: "初音未来 Discord 服务器，粉丝交流社区。",
    url: "https://discord.gg/hatsunemiku",
    category: "粉丝站点",
    image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/sites/discord.webp",
  },
];

// 导出所有网站
export const allSites = [...officialSites, ...communitySites, ...resourceSites, ...fansiteSites];

// 网站分类
export const websiteCategories = [
  { id: "official", name: "官方", count: officialSites.length },
  { id: "community", name: "创作社区", count: communitySites.length },
  { id: "resource", name: "资源站", count: resourceSites.length },
  { id: "fansite", name: "粉丝站点", count: fansiteSites.length },
];
