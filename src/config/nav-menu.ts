import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  picturesNav: [
    {
      title: "图像",
      items: [
        {
          title: "手机壁纸",
          href: "/pictures/wallpaper/mobile",
          description: "精选初音未来手机壁纸，分辨率适配各类机型",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj4.png",
        },
        {
          title: "桌面壁纸",
          href: "/pictures/wallpaper/desktop",
          description: "高清初音未来桌面壁纸，16:9/21:9 多比例可选",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj3.png",
        },
        {
          title: "头像",
          href: "/pictures/avatar",
          description: "初音未来主题头像图片，圆角方形设计",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj1.png",
        },
        {
          title: "表情包",
          href: "/pictures/stickers",
          description: "初音未来系列表情包，静态与 GIF 动图",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  videosNav: [
    {
      title: "影音",
      items: [
        {
          title: "音乐",
          href: "/videos/music",
          description: "初音未来原创歌曲与翻唱作品精选",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "视频",
          href: "/videos/clips",
          description: "初音未来 MV、Live 现场、官方 PV 等视频",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "投稿网站",
          href: "/videos/websites",
          description: "Niconico、YouTube 等初音投稿平台导航",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  websitesNav: [
    {
      title: "网站",
      items: [
        {
          title: "网站导航",
          href: "/websites",
          description: "收录初音未来相关网站，官方、创作社区、资源站等",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  gamesNav: [
    {
      title: "游戏",
      items: [
        {
          title: "游戏中心",
          href: "/games",
          description: "初音未来在线游戏与游戏合集",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  goodsNav: [
    {
      title: "周边",
      items: [
        {
          title: "周边中心",
          href: "/merchandise",
          description: "初音未来手办、吧唧、立牌、色纸等周边",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  extraNav: [
    {
      title: "更多",
      items: [
        {
          title: "MMD 模型",
          href: "/mmd",
          description: "初音未来 MMD 模型下载与作品展示",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "同人作品",
          href: "/doujin",
          description: "初音未来同人插画、漫画与创作精选",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "新闻活动",
          href: "/news",
          description: "初音未来最新资讯、演唱会与线下活动",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
      ],
    },
  ],
  links: [
    // {
    //   title: "网站链接",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
