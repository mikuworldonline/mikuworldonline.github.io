import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  picturesNav: [
    {
      title: "图像",
      items: [
        {
          title: "手机壁纸",
          href: "/pictures/wallpaper/mobile",
          description: "A landing page template with differents sections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj4.png",
        },
        {
          title: "桌面壁纸",
          href: "/pictures/wallpaper/desktop",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj3.png",
        },
        {
          title: "头像",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj1.png",
          disabled: true,
        },
        {
          title: "表情包",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
      ],
    },
  ],
  videosNav: [
    {
      title: "影音",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
      ],
    },
  ],
  websitesNav: [
    {
      title: "网站",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          launched: true,
          disabled: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
      ],
    },
  ],
  gamesNav: [
    {
      title: "游戏",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
      ],
    },
  ],
  goodsNav: [
    {
      title: "周边",
      items: [
        {
          title: "手办",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "吧唧",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "立牌",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
        },
        {
          title: "色纸",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          image: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/emj2.png",
          disabled: true,
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
