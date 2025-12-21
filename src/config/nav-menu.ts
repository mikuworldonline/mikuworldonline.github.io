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
          image:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177937-Tzgg6rAdhCoH.jpg",
        },
        {
          title: "桌面壁纸",
          href: "/pictures/wallpaper/desktop",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "头像",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
          disabled: true,
        },
        {
          title: "表情包",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "/images/examples/pricing.jpg",
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
          image: "/images/examples/landing.jpg",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
          disabled: true,
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
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
          image: "/images/examples/static-blog.jpg",
          disabled: true,
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
          disabled: true,
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
          disabled: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
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
          image: "/images/examples/static-blog.jpg",
          disabled: true,
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
          disabled: true,
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          disabled: true,
        },
        {
          title: "Blog DB",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
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
          image: "/images/examples/static-blog.jpg",
          disabled: true,
        },
        {
          title: "吧唧",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
          disabled: true,
        },
        {
          title: "立牌",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          disabled: true,
        },
        {
          title: "色纸",
          href: "/blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          // image: "/images/examples/blog-db.jpg",
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
