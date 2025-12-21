import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "mikuworld.online",
  description:
    "MikuWorld is a platform to share and explore Miku-related content, including pictures, videos, games, goods, and awesome websites.",
  url: "https://mikuworld.online",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
  links: {
    github: "https://github.com/mikuworldonline/mikuworldonline.github.io",
  },
};

export const footerLinks: SidebarNavItem[] = [
  // {
  //   title: "Company",
  //   items: [
  //     { title: "About", href: "#" },
  //     { title: "Enterprise", href: "#" },
  //     { title: "Partners", href: "#" },
  //     { title: "Jobs", href: "#" },
  //   ],
  // },
  // {
  //   title: "Product",
  //   items: [
  //     { title: "Security", href: "#" },
  //     { title: "Customization", href: "#" },
  //     { title: "Customers", href: "#" },
  //     { title: "Changelog", href: "#" },
  //   ],
  // },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];

export const coverImages = [
  {
    position: "right center",
    size: "auto 100%",
    img: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/Hatsune-Miku-%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF-%E5%88%9D%E9%9F%B3%E6%9C%AA%E6%9D%A5-Wallpaper-ID10000260.webp",
    origin: "https://www.2dwallpapers.com/38838.html",
    author: "2dwallpapers",
  },
  {
    position: "center center",
    size: "cover",
    img: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/wallhaven-p27ov3.png",
    origin: "https://wallhaven.cc/w/p27ov3",
    author: "wallhaven",
  },
];

export const getCoverImage = (index = 0) => {
  return coverImages[index % coverImages.length];
};

export const isIndex = (url: URL) => url?.pathname === "/";
