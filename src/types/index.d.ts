export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MenuItem = NavItem & {
  image?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;
  forceReload?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: MenuItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type NavMenuConfig = {
  picturesNav: SidebarNavItem[];
  websitesNav: SidebarNavItem[];
  gamesNav: SidebarNavItem[];
  goodsNav: SidebarNavItem[];
  videosNav: SidebarNavItem[];
  links: MenuItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// Animes types
export type Airing = {
  id: number;
  episode: number;
  airingAt: number;
  media: Media;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

// ============================================
// 资源模块类型定义 (Resource Module Types)
// ============================================

// 资源基础类型
export interface BaseResource {
  id: string;
  title: string;
  description?: string;
  thumb_url: string;
  origin_url?: string;
  origin_site?: string;
  keywords?: string;
}

// 头像
export interface Avatar extends BaseResource {
  is_circle?: boolean;
}

// 表情包
export interface Sticker extends BaseResource {
  images: string[]; // 多图表情包
  is_gif?: boolean;
}

// 音乐
export interface Music extends BaseResource {
  artist?: string;
  duration?: string;
  album?: string;
  audio_url?: string;
  lyrics?: string;
}

// 视频
export interface Video extends BaseResource {
  duration: string;
  video_url?: string;
  embed_url?: string;
  views?: number;
  upload_date?: string;
}

// 外部网站
export interface ExternalSite {
  id: string;
  title: string;
  description: string;
  url: string;
  favicon?: string;
  category: string;
  image?: string;
}

// 游戏
export interface Game extends BaseResource {
  game_url?: string;
  embed_url?: string;
  game_type: "online" | "flash" | "download" | "html5";
  genre?: string;
  size?: string;
}

// 周边商品
export interface Merchandise extends BaseResource {
  price?: string;
  shop_url?: string;
  shop_name?: string;
  category: "figure" | "badge" | "stand" | "artprint";
  scale?: string; // 手办比例
  manufacturer?: string; // 厂商
}
