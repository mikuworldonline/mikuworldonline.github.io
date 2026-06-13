import type { ExternalSite } from "@/types";

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

// 官方资源网站
export const officialSites: ExternalSite[] = [
  {
    id: "official-001",
    title: "CRYPTON FUTURE MEDIA",
    description: "初音未来等 Piapro Characters 的版权与开发公司官网，发布官方资讯、产品与活动信息。",
    url: "https://www.crypton.co.jp/",
    favicon: favicon("crypton.co.jp"),
    category: "官方",
  },
  {
    id: "official-002",
    title: "piapro（ピアプロ）",
    description: "Crypton 运营的官方创作协作平台，提供初音未来等角色的官方素材并支持二次创作投稿。",
    url: "https://piapro.jp/",
    favicon: favicon("piapro.jp"),
    category: "官方",
  },
  {
    id: "official-003",
    title: "VOCALOID 官方网站",
    description: "雅马哈（YAMAHA）运营的 VOCALOID 歌声合成技术品牌官方网站。",
    url: "https://www.vocaloid.com/",
    favicon: favicon("vocaloid.com"),
    category: "官方",
  },
  {
    id: "official-004",
    title: "Project SEKAI 官方网站",
    description: "《世界计划 彩色舞台 feat. 初音未来》（プロセカ）官方网站，由 SEGA 与 Colorful Palette 开发。",
    url: "https://pjsekai.sega.jp/",
    favicon: favicon("pjsekai.sega.jp"),
    category: "官方",
  },
  {
    id: "official-005",
    title: "SNOW MIKU",
    description: "雪初音（SNOW MIKU）官方网站，每年配合札幌雪祭举办的初音未来主题活动。",
    url: "https://snowmiku.com/",
    favicon: favicon("snowmiku.com"),
    category: "官方",
  },
  {
    id: "official-006",
    title: "MIKU EXPO",
    description: "初音未来全球巡回演唱会 MIKU EXPO 官方网站，发布世界各地的演出与巡演信息。",
    url: "https://mikuexpo.com/",
    favicon: favicon("mikuexpo.com"),
    category: "官方",
  },
  {
    id: "official-007",
    title: "マジカルミライ Magical Mirai",
    description: "Crypton 主办的初音未来年度官方演唱会与企划展 Magical Mirai 官方网站。",
    url: "https://magicalmirai.com/",
    favicon: favicon("magicalmirai.com"),
    category: "官方",
  },
];

// 创作社区网站
export const communitySites: ExternalSite[] = [
  {
    id: "community-001",
    title: "萌娘百科 · 初音未来",
    description: "中文 ACG 百科萌娘百科的初音未来词条，收录角色设定、衍生作品与文化资料。",
    url: "https://zh.moegirl.org.cn/初音未来",
    favicon: favicon("moegirl.org.cn"),
    category: "创作社区",
  },
  {
    id: "community-002",
    title: "niconico · 初音ミクタグ",
    description: "niconico 动画的「初音ミク」标签页，海量初音相关原创歌曲与 MV 的发源地。",
    url: "https://www.nicovideo.jp/tag/初音ミク",
    favicon: favicon("nicovideo.jp"),
    category: "创作社区",
  },
  {
    id: "community-003",
    title: "Reddit · r/Vocaloid",
    description: "Reddit 上的 VOCALOID 社区，海外粉丝讨论初音未来歌曲、创作与活动的聚集地。",
    url: "https://www.reddit.com/r/Vocaloid/",
    favicon: favicon("reddit.com"),
    category: "创作社区",
  },
  {
    id: "community-004",
    title: "Pixiv · 初音ミク",
    description: "日本知名插画社区 Pixiv 的初音未来作品页，众多同人画师的创作聚集地。",
    url: "https://www.pixiv.net/tags/初音ミク",
    favicon: favicon("pixiv.net"),
    category: "创作社区",
  },
  {
    id: "community-005",
    title: "DeviantArt · Hatsune Miku",
    description: "全球艺术社区 DeviantArt 的 Hatsune Miku 标签页，海外初音同人插画作品集合。",
    url: "https://www.deviantart.com/tag/hatsunemiku",
    favicon: favicon("deviantart.com"),
    category: "创作社区",
  },
  {
    id: "community-006",
    title: "百度初音贴吧",
    description: "百度贴吧的初音未来吧，中文圈历史悠久的初音粉丝交流社区。",
    url: "https://tieba.baidu.com/f?kw=初音miku",
    favicon: favicon("tieba.baidu.com"),
    category: "创作社区",
  },
];

// 资源站
export const resourceSites: ExternalSite[] = [
  {
    id: "resource-001",
    title: "VocaDB",
    description: "全球最完整的 VOCALOID 音乐数据库，收录歌曲、专辑、术师与角色信息。",
    url: "https://vocadb.net/",
    favicon: favicon("vocadb.net"),
    category: "资源站",
  },
  {
    id: "resource-002",
    title: "UtaiteDB",
    description: "VocaDB 旗下的歌手（歌い手）翻唱作品数据库，收录大量初音曲的翻唱版本。",
    url: "https://utaitedb.net/",
    favicon: favicon("utaitedb.net"),
    category: "资源站",
  },
  {
    id: "resource-003",
    title: "niconico 音乐排行榜",
    description: "niconico 动画音乐分区排行榜，追踪人气 VOCALOID 与初音原创曲的热度。",
    url: "https://www.nicovideo.jp/ranking/genre/music_sound",
    favicon: favicon("nicovideo.jp"),
    category: "资源站",
  },
  {
    id: "resource-004",
    title: "ニコニ立体（3D）",
    description: "niconico 的 3D 模型分享平台，包含大量初音未来 MMD 模型与配布。",
    url: "https://3d.nicovideo.jp/",
    favicon: favicon("3d.nicovideo.jp"),
    category: "资源站",
  },
  {
    id: "resource-005",
    title: "BowlRoll",
    description: "日本常用的同人素材文件配布平台，MMD 模型、动作与音源的重要分发渠道。",
    url: "https://bowlroll.net/",
    favicon: favicon("bowlroll.net"),
    category: "资源站",
  },
  {
    id: "resource-006",
    title: "ニコニ・コモンズ",
    description: "niconico 官方的创作共享素材库，提供可二次创作使用的图像、音频与视频素材。",
    url: "https://commons.nicovideo.jp/",
    favicon: favicon("commons.nicovideo.jp"),
    category: "资源站",
  },
];

// 粉丝站点
export const fansiteSites: ExternalSite[] = [
  {
    id: "fansite-001",
    title: "初音未来官方 YouTube 频道",
    description: "初音未来官方 YouTube 频道，发布官方 MV、演唱会片段与活动视频。",
    url: "https://www.youtube.com/@HatsuneMiku",
    favicon: favicon("youtube.com"),
    category: "粉丝站点",
  },
  {
    id: "fansite-002",
    title: "Miku Monday",
    description: "海外社区发起的 #MikuMonday 主题站，汇集每周分享的初音未来同人创作。",
    url: "https://mikumonday.com/",
    favicon: favicon("mikumonday.com"),
    category: "粉丝站点",
  },
  {
    id: "fansite-003",
    title: "VOCALOID @ wiki（初音ミク）",
    description: "atwiki 上历史悠久的 VOCALOID 综合资料 wiki，收录初音相关曲目与术师资料。",
    url: "https://w.atwiki.jp/hmiku/",
    favicon: favicon("atwiki.jp"),
    category: "粉丝站点",
  },
  {
    id: "fansite-004",
    title: "Vocaloid Wiki（Fandom）",
    description: "Fandom 上的英文 Vocaloid Wiki，海外粉丝维护的角色与歌曲百科。",
    url: "https://vocaloid.fandom.com/wiki/Hatsune_Miku",
    favicon: favicon("fandom.com"),
    category: "粉丝站点",
  },
  {
    id: "fansite-005",
    title: "Reddit · r/hatsunemiku",
    description: "Reddit 上专注初音未来的粉丝子版块，分享同人绘画、周边与活动信息。",
    url: "https://www.reddit.com/r/hatsunemiku/",
    favicon: favicon("reddit.com"),
    category: "粉丝站点",
  },
  {
    id: "fansite-006",
    title: "Pixiv · みくみくにしてあげる",
    description: "Pixiv 上以初音经典曲目为标签的同人作品聚合，热门粉丝插画展示。",
    url: "https://www.pixiv.net/tags/みくみくにしてあげる",
    favicon: favicon("pixiv.net"),
    category: "粉丝站点",
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
