// 新闻 / 活动数据
// 类型就近定义，避免改动全局 src/types/index.d.ts。
// 所有 origin_url 指向官方公告 / 新闻页，thumb_url 为可公开访问的活动主视觉。
// 数据来源：初音ミク公式ブログ(piapro.net)、クリプトン公式、各活动官网。

export interface NewsItem {
  id: string;
  title: string;
  description?: string;
  thumb_url?: string;
  origin_url: string;
  origin_site?: string;
  /** ISO 日期字符串 YYYY-MM-DD（公告发布或活动相关日期） */
  date?: string;
  /** 分类：活动 / 演唱会 / 软件 / 联名 / 比赛 */
  category?: string;
  keywords?: string;
}

// 注意：按 date 倒序（最新在前）排列。
export const newsList: NewsItem[] = [
  {
    id: "news-001",
    title: "「初音ミク 20th Anniversary」衣装大募集 结果发表",
    description:
      "为迎接初音未来诞生 20 周年，官方面向全球创作者征集纪念服装设计，结果于 5 月 29 日公布，大赏由「あしす」的作品获得，并设有 GSC 赏、Crypton 赏等多个奖项。",
    thumb_url: "https://snowmiku.com/2026/images/og.jpg",
    origin_url: "https://blog.piapro.net/2026/05/f2605291-1.html",
    origin_site: "初音ミク公式ブログ",
    date: "2026-05-29",
    category: "比赛",
    keywords: "初音未来,20周年,衣装,征集,piapro,Crypton",
  },
  {
    id: "news-002",
    title: "プロジェクトセカイ クリエイターズフェスタ 2026 续报公开",
    description:
      "SEGA 旗下《Project SEKAI 彩色舞台 feat. 初音未来》公布「Creators Festa 2026」续报，由獅子志司、KIRA、ユリイ・カノン 等创作者提供新曲，并将举办 5.5 周年纪念活动。",
    thumb_url:
      "https://www.sega.jp/upload_files/co/topics/2026/03/260326_5_00.jpg",
    origin_url: "https://www.sega.jp/topics/detail/260326_5/",
    origin_site: "SEGA",
    date: "2026-03-26",
    category: "活动",
    keywords: "Project SEKAI,プロセカ,SEGA,创作者,5.5周年",
  },
  {
    id: "news-003",
    title: "初音ミク「マジカルミライ 2026」楽曲コンテスト 结果发表",
    description:
      "「Magical Mirai 2026」官方歌曲比赛结果公布，グランプリ（大奖）由 imie feat. 初音ミク 的《こたえて》获得，获奖作品将在今夏国内三城的 Magical Mirai 现场舞台上演奏。",
    thumb_url: "https://magicalmirai.com/2026/images/index/img_visual_miku.webp",
    origin_url: "https://www.crypton.co.jp/cfm/news/2026/03/26mm26musiccontest",
    origin_site: "クリプトン",
    date: "2026-03-26",
    category: "比赛",
    keywords: "Magical Mirai,マジカルミライ,楽曲コンテスト,投稿,Crypton",
  },
  {
    id: "news-004",
    title: "「初音ミク V6」公布新主视觉，预约开启",
    description:
      "搭载 VOCALOID6 引擎、支持日 / 英 / 中三语原创声库的歌声合成软件「初音ミク V6」于 2 月 18 日开启预约，新视觉于 3 月 9 日（ミクの日）公开，可自动加入自然换气并实现多语言流畅演唱。",
    thumb_url: "https://magicalmirai.com/2025/images/og.jpg",
    origin_url: "https://blog.piapro.net/2026/02/ms2602181.html",
    origin_site: "初音ミク公式ブログ",
    date: "2026-02-18",
    category: "软件",
    keywords: "初音ミク V6,VOCALOID6,声库,软件,预约,Crypton",
  },
  {
    id: "news-005",
    title: "「SNOW MIKU 2026」在小樽 Wing Bay 开幕",
    description:
      "应援北海道的冬季祭典「SNOW MIKU 2026」迎来第 17 届，本届服装主题为「Happy Patisserie」，主活动 2 月 7 日至 8 日在小樽 Wing Bay 举办，札幌雪祭会场同期展出雪初音雪像。",
    thumb_url: "https://snowmiku.com/2026/images/og.jpg",
    origin_url: "https://snowmiku.com/2026/",
    origin_site: "SNOW MIKU 官方",
    date: "2026-02-07",
    category: "活动",
    keywords: "SNOW MIKU,雪ミク,北海道,札幌雪祭,小樽",
  },
  {
    id: "news-006",
    title: "Pokémon feat. 初音ミク「Project VOLTAGE」Voltage Live 确定举办",
    description:
      "宝可梦与初音未来的官方联动企划「Project VOLTAGE」推出现场演出「Voltage Live」，于 2026 年 3 月 20 日至 22 日在 LaLa arena TOKYO-BAY 举行。",
    thumb_url: "https://mikuexpo.com/na2026/images/og.jpg",
    origin_url: "https://en.wikipedia.org/wiki/Project_Voltage",
    origin_site: "Project VOLTAGE",
    date: "2026-01-15",
    category: "联名",
    keywords: "宝可梦,Pokemon,Project VOLTAGE,联动,Live",
  },
  {
    id: "news-007",
    title: "「初音ミク「マジカルミライ 2026」楽曲コンテスト」截止收稿",
    description:
      "面向全球创作者的「Magical Mirai 2026」歌曲比赛于 12 月 15 日截止征稿，获奖作品将于次年夏季的官方现场演出中演奏，是初音未来年度最大规模的原创楽曲企划之一。",
    thumb_url: "https://magicalmirai.com/2026/images/index/img_visual_miku.webp",
    origin_url: "https://blog.piapro.net/2025/12/f2512151-1.html",
    origin_site: "初音ミク公式ブログ",
    date: "2025-12-15",
    category: "比赛",
    keywords: "Magical Mirai,マジカルミライ,楽曲コンテスト,piapro",
  },
  {
    id: "news-008",
    title: "「Sushiro × Project SEKAI」联动开启，限定周边登场",
    description:
      "回转寿司连锁 Sushiro（スシロー）与《Project SEKAI》展开大型联动，12 月 10 日起推出搭配寿司、饮品与外带套餐的限定周边，并在官方 X 举办转发抽奖活动。",
    thumb_url:
      "https://cdn.essential-japan.com/wp-content/uploads/2025/12/Hatsune-Miku-x-Sushiro-collab.jpg",
    origin_url:
      "https://essential-japan.com/news/sushiro-announces-huge-new-hatsune-miku-collab-with-exclusive-merch/",
    origin_site: "Essential Japan",
    date: "2025-12-10",
    category: "联名",
    keywords: "Sushiro,スシロー,Project SEKAI,联名,周边",
  },
  {
    id: "news-009",
    title: "「MIKU EXPO 2026 North America」北美巡演公布",
    description:
      "Crypton 公布初音未来世界巡演「MIKU EXPO 2026」北美场次，主题为「Candy Shop」，将于 2026 年 4 月至 5 月在美国、加拿大、墨西哥共 15 座城市演出，并追加多场，总计 18 场。",
    thumb_url: "https://mikuexpo.com/na2026/images/og.jpg",
    origin_url: "https://mikuexpo.com/na2026/",
    origin_site: "MIKU EXPO 官方",
    date: "2025-10-24",
    category: "演唱会",
    keywords: "MIKU EXPO,北美巡演,Candy Shop,演唱会,Crypton",
  },
  {
    id: "news-010",
    title: "「SNOW MIKU 2026」开催概要首次公开",
    description:
      "Crypton 首次公开「SNOW MIKU 2026」开催概要，2026 年服装设计经由粉丝投票从六个入围方案中选出 cold_air 的作品，并公布雪初音电车、雪像展出等周边企划。",
    thumb_url: "https://snowmiku.com/2026/images/og.jpg",
    origin_url: "https://www.crypton.co.jp/cfm/news/2025/10/22sm26",
    origin_site: "クリプトン",
    date: "2025-10-22",
    category: "活动",
    keywords: "SNOW MIKU,雪ミク,北海道,概要,投票",
  },
  {
    id: "news-011",
    title: "「プロジェクトセカイ 5th Anniversary 感謝祭」直播放映决定",
    description:
      "《Project SEKAI》迎来五周年，10 月 18 日至 19 日在东京花园剧场举办「5th Anniversary 感謝祭」真人舞台活动，并向日本各地及台湾、香港、韩国的影院进行 Live Viewing 直播。",
    thumb_url:
      "https://pjsekai.sega.jp/5thanniversarythanksfestival/assets/img/ogp.png",
    origin_url:
      "https://prtimes.jp/main/html/rd/p/000001882.000003481.html",
    origin_site: "PR TIMES",
    date: "2025-10-18",
    category: "活动",
    keywords: "Project SEKAI,プロセカ,5周年,感謝祭,Live Viewing",
  },
  {
    id: "news-012",
    title: "「初音ミク「マジカルミライ 2025」」官方 After Report 公开",
    description:
      "初音未来年度大型现场与企划展「Magical Mirai 2025」官方活动后回顾报告公开，本届首次在仙台、大阪、东京三城举办，三城累计入场观众超过 8.5 万人次。",
    thumb_url: "https://magicalmirai.com/2025/images/og.jpg",
    origin_url: "https://blog.piapro.net/2025/09/hm2508251.html",
    origin_site: "初音ミク公式ブログ",
    date: "2025-09-25",
    category: "活动",
    keywords: "Magical Mirai,マジカルミライ,2025,After Report,演唱会",
  },
  {
    id: "news-013",
    title: "「初音ミク「マジカルミライ 2026」楽曲コンテスト」开始征稿",
    description:
      "「Magical Mirai 2026」官方歌曲比赛于 9 月 8 日起开始向全球创作者征集原创作品，获奖楽曲将在 2026 年夏季的官方现场演出中正式演奏。",
    thumb_url: "https://magicalmirai.com/2026/images/index/img_visual_miku.webp",
    origin_url: "https://blog.piapro.net/2025/09/f2509081-1.html",
    origin_site: "初音ミク公式ブログ",
    date: "2025-09-08",
    category: "比赛",
    keywords: "Magical Mirai,マジカルミライ,楽曲コンテスト,征稿",
  },
  {
    id: "news-014",
    title: "「初音ミク「マジカルミライ 2025」」三城开催直前情报整理",
    description:
      "Crypton 在 Magical Mirai 2025 开演前公布三城（仙台、大阪、东京）情报汇总，本届为活动首次登陆仙台，并设有多个地区联动企划。",
    thumb_url: "https://magicalmirai.com/2025/images/og.jpg",
    origin_url: "https://www.crypton.co.jp/cfm/news/2025/07/30-mm25pr",
    origin_site: "クリプトン",
    date: "2025-07-30",
    category: "演唱会",
    keywords: "Magical Mirai,マジカルミライ,2025,仙台,大阪,东京",
  },
  {
    id: "news-015",
    title: "「MIKU EXPO 2025 ASIA」首次亚洲巡演公布",
    description:
      "初音未来世界巡演系列首次推出亚洲巡演「MIKU EXPO 2025 ASIA」，主视觉由 RITAO 绘制，演出期间为 2025 年 11 月 5 日至 11 月 29 日。",
    thumb_url:
      "https://www.siliconera.com/wp-content/uploads/2025/10/miku-expo-2026-hatsune-miku-north-american-concerts-revealed.jpg",
    origin_url: "https://mikuexpo.com/",
    origin_site: "MIKU EXPO 官方",
    date: "2025-07-15",
    category: "演唱会",
    keywords: "MIKU EXPO,亚洲巡演,Asia,演唱会,RITAO",
  },
  {
    id: "news-016",
    title: "「初音ミク「マジカルミライ 2025」」详细情报与主视觉解禁",
    description:
      "Crypton 公布 Magical Mirai 2025 详细情报，包括主视觉、主题曲负责人与门票信息等，本届为系列第 13 届活动。",
    thumb_url: "https://magicalmirai.com/2025/images/og.jpg",
    origin_url: "https://blog.piapro.net/2025/03/b2503061.html",
    origin_site: "初音ミク公式ブログ",
    date: "2025-03-06",
    category: "活动",
    keywords: "Magical Mirai,マジカルミライ,主视觉,主题曲,门票",
  },
];

// 按日期倒序排序（最新在前），即使上方手工顺序有偏差也能保证正确。
export const sortedNewsList: NewsItem[] = [...newsList].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? "")
);

// 分类列表（用于前端筛选）
export const newsCategories: string[] = [
  "全部",
  ...Array.from(
    new Set(newsList.map((n) => n.category).filter((c): c is string => !!c))
  ),
];
