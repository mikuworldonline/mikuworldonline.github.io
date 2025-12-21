export interface Provider {
  name: string;
  url: string;
}
export interface Wallpaper {
  id: string; // "6a21203fd24b70af";
  title: string;
  keywords: string; // "初音未来,VOCALOID,蓝发,礼服,二次元,唯美,宽屏,车机壁纸";
  is_mobile?: boolean;
  thumb_url: string;
  origin_url: string;
  origin_site: string;
}
export const providers = {
  mikuworld: {
    name: "Mikuworld Online",
    url: "https://mikuworldonline.github.io",
  },
};

import list3gbizhi from "./c557";

export const mobileWallpapers: Wallpaper[] = [
  ...list3gbizhi.filter((wp) => wp.is_mobile),
];

export const desktopWallpapers: Wallpaper[] = [
  ...list3gbizhi.filter((wp) => !wp.is_mobile),
];
