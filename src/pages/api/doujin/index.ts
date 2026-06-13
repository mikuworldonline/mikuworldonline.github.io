// 同人作品类目数据
// 数据来源：VocaDB（公开 Vocaloid 数据库，https://vocadb.net）。
// 收录初音未来相关的同人/独立音乐社团专辑与单曲（全年龄向，可公开展示）。
// origin_url 指向各作品的 VocaDB 详情页；thumb_url 使用 VocaDB 公开封面图。

export interface DoujinWork {
  id: string;
  /** 作品标题 */
  title: string;
  /** 作品简介 */
  description?: string;
  /** 封面图（可公开访问） */
  thumb_url: string;
  /** 来源详情页 */
  origin_url?: string;
  /** 来源站点名称 */
  origin_site?: string;
  /** 搜索关键词（逗号分隔） */
  keywords?: string;
  /** 社团 / 制作者 */
  author?: string;
  /** 作品类型，如 同人专辑 / 同人单曲 */
  type?: string;
}

export const doujinWorks: DoujinWork[] = [
  {
    id: "doujin-001",
    title: "supercell",
    description:
      "ryo（supercell）以初音未来制作的传奇同人专辑，收录《メルト》《World is Mine》等奠定 VOCALOID 文化的名曲。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/47.png",
    origin_url: "https://vocadb.net/Al/47",
    origin_site: "VocaDB",
    keywords: "supercell,ryo,初音未来,Melt,World is Mine,同人专辑",
    author: "ryo / supercell",
    type: "同人专辑",
  },
  {
    id: "doujin-002",
    title: "Re:MIKUS",
    description:
      "livetune（kz）以初音未来为主唱的代表性专辑，电子流行风格，收录《Packaged》《Last Night, Good Night》等。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/48.jpg",
    origin_url: "https://vocadb.net/Al/48",
    origin_site: "VocaDB",
    keywords: "livetune,kz,初音未来,Packaged,电子流行,同人专辑",
    author: "kz / livetune",
    type: "同人专辑",
  },
  {
    id: "doujin-003",
    title: "Tell Your World",
    description:
      "kz（livetune）创作的初音未来单曲，曾作为 Google Chrome 广告曲，是 VOCALOID 走向大众的标志性作品。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/1027.jpg",
    origin_url: "https://vocadb.net/Al/1027",
    origin_site: "VocaDB",
    keywords: "kz,livetune,初音未来,Tell Your World,单曲",
    author: "kz / livetune",
    type: "同人单曲",
  },
  {
    id: "doujin-004",
    title: "The World Is Mine",
    description:
      "ryo（supercell）的初音未来单曲，傲娇歌姬题材的经典曲目，发布后广泛传唱并被收入多款官方游戏。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/1338.jpg",
    origin_url: "https://vocadb.net/Al/1338",
    origin_site: "VocaDB",
    keywords: "supercell,ryo,初音未来,World is Mine,单曲",
    author: "ryo / supercell",
    type: "同人单曲",
  },
  {
    id: "doujin-005",
    title: "ロミオとシンデレラ (Romeo and Cinderella)",
    description:
      "doriko 以初音未来制作的同人专辑，收录人气曲《ロミオとシンデレラ》，旋律抒情、传唱度极高。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/17.jpg",
    origin_url: "https://vocadb.net/Al/17",
    origin_site: "VocaDB",
    keywords: "doriko,初音未来,罗密欧与灰姑娘,同人专辑",
    author: "doriko",
    type: "同人专辑",
  },
  {
    id: "doujin-006",
    title: "Naturalizm",
    description:
      "ハダノP（Hadano-P）的初音未来同人专辑，融合摇滚与流行的早期 VOCALOID 独立作品。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/15154.jpg",
    origin_url: "https://vocadb.net/Al/15154",
    origin_site: "VocaDB",
    keywords: "Hadano-P,初音未来,摇滚,同人专辑",
    author: "Hadano-P",
    type: "同人专辑",
  },
  {
    id: "doujin-007",
    title: "かぜのね (Kaze no Ne)",
    description:
      "同人社团「風ノ音堂」以初音未来制作的专辑，清新治愈的民谣风格，于同人即卖会发行。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/42615.jpg",
    origin_url: "https://vocadb.net/Al/42615",
    origin_site: "VocaDB",
    keywords: "風ノ音堂,テラカズ,初音未来,治愈,同人专辑",
    author: "テラカズ / 風ノ音堂",
    type: "同人专辑",
  },
  {
    id: "doujin-008",
    title: "unformed",
    description:
      "doriko 与 Team MOER 合作的初音未来同人专辑，延续抒情旋律，收录多首人气原创曲。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/18.jpg",
    origin_url: "https://vocadb.net/Al/18",
    origin_site: "VocaDB",
    keywords: "doriko,Team MOER,初音未来,同人专辑",
    author: "doriko / Team MOER",
    type: "同人专辑",
  },
  {
    id: "doujin-009",
    title: "synthesis",
    description:
      "Tripshots 以初音未来制作的同人 EP，氛围电子（ambient/electronica）风格，由 KarenT 发行。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/1.png",
    origin_url: "https://vocadb.net/Al/1",
    origin_site: "VocaDB",
    keywords: "Tripshots,初音未来,电子,ambient,KarenT,同人EP",
    author: "Tripshots",
    type: "同人专辑",
  },
  {
    id: "doujin-010",
    title: "THE VERY BEST OF DeadballP loves Hatsune Miku",
    description:
      "デッドボールP（DeadballP）的初音未来精选同人专辑，以个性鲜明、风格大胆的曲风著称。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/16.jpg",
    origin_url: "https://vocadb.net/Al/16",
    origin_site: "VocaDB",
    keywords: "DeadballP,初音未来,精选,同人专辑",
    author: "DeadballP",
    type: "同人专辑",
  },
  {
    id: "doujin-011",
    title: "HMO and WORKS -NEW VOICE-",
    description:
      "HMO とかの中の人。以芯片音乐（chiptune）风格翻奏初音未来名曲的同人专辑，复古电子质感十足。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/45.jpg",
    origin_url: "https://vocadb.net/Al/45",
    origin_site: "VocaDB",
    keywords: "HMO,chiptune,芯片音乐,初音未来,同人专辑",
    author: "HMO とかの中の人。",
    type: "同人专辑",
  },
  {
    id: "doujin-012",
    title: "TRAUMATIC",
    description:
      "鬱P（Utsu-P）的初音未来同人专辑，金属/硬核摇滚风格，VOCALOID 重型音乐的代表作之一。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/49.jpg",
    origin_url: "https://vocadb.net/Al/49",
    origin_site: "VocaDB",
    keywords: "Utsu-P,鬱P,初音未来,金属,摇滚,同人专辑",
    author: "Utsu-P / MY SONG IS SHIT",
    type: "同人专辑",
  },
  {
    id: "doujin-013",
    title: "is coloratura (CMY)",
    description:
      "k_zero+A 以初音未来制作的同人专辑，细腻的旋律编排，封面插画与音乐相得益彰。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/12616.jpg",
    origin_url: "https://vocadb.net/Al/12616",
    origin_site: "VocaDB",
    keywords: "k_zero+A,初音未来,同人专辑",
    author: "k_zero+A",
    type: "同人专辑",
  },
  {
    id: "doujin-014",
    title: "supercell (2008)",
    description:
      "ryo（supercell）2008 年于 Comic Market 发行的初版同人专辑，VOCALOID 同人音乐史上的里程碑。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/44028.jpg",
    origin_url: "https://vocadb.net/Al/44028",
    origin_site: "VocaDB",
    keywords: "supercell,ryo,初音未来,Comic Market,同人专辑",
    author: "ryo / supercell",
    type: "同人专辑",
  },
  {
    id: "doujin-015",
    title: "Circle you, Circle you!",
    description:
      "同人企划专辑，围绕《かごめかごめ》题材集结多位 P 主创作的 VOCALOID 同人合辑。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/52.jpg",
    origin_url: "https://vocadb.net/Al/52",
    origin_site: "VocaDB",
    keywords: "同人合辑,初音未来,かごめ,合辑",
    author: "Creepy Sots",
    type: "同人专辑",
  },
  {
    id: "doujin-016",
    title: "MEMORY -164 from 203soundworks-",
    description:
      "164（203soundworks）以初音未来制作的同人专辑，摇滚流行风格，收录《天ノ弱》等人气曲。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/8.png",
    origin_url: "https://vocadb.net/Al/8",
    origin_site: "VocaDB",
    keywords: "164,203soundworks,初音未来,摇滚,同人专辑",
    author: "164 / 203soundworks",
    type: "同人专辑",
  },
  {
    id: "doujin-017",
    title: "Onestep Layered",
    description:
      "Last Note. 以初音未来、巡音 Luka 制作的同人专辑，明快清爽的流行编曲，旋律记忆点十足。",
    thumb_url: "https://static.vocadb.net/img/Album/mainOrig/40.jpg",
    origin_url: "https://vocadb.net/Al/40",
    origin_site: "VocaDB",
    keywords: "Last Note.,初音未来,巡音Luka,流行,同人专辑",
    author: "Last Note.",
    type: "同人专辑",
  },
];
