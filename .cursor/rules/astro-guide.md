# Astro 开发指南

> 本文件专门针对 Astro 框架的最佳实践和开发指南。

## 1. Astro 配置 (`astro.config.mjs`)

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import simpleStackForm from "astro-form-stack";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://mikuworld.online",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({ applyBaseStyles: false }),
    simpleStackForm(),
    robotsTxt(),
  ],
});
```

## 2. 页面路由

Astro 使用基于文件的路由：

| 文件路径 | URL 路由 |
|----------|----------|
| `src/pages/index.astro` | `/` |
| `src/pages/blog/index.astro` | `/blog` |
| `src/pages/blog/[slug].astro` | `/blog/:slug` |
| `src/pages/blog/category/[category].astro` | `/blog/category/:category` |
| `src/pages/docs/[...slug].astro` | `/docs/*` |
| `src/pages/[...slug].astro` | `/*` |

## 3. 组件类型

### 3.1 Astro 组件

```astro
---
// Frontmatter 脚本 (服务端执行)
const title = "My Page";
---

<html>
  <head><title>{title}</title></head>
  <body>
    <h1>{title}</h1>
    <slot />
  </body>
</html>
```

### 3.2 React 组件

在 Astro 中使用 React 组件：

```astro
---
import Counter from '../components/Counter.tsx';
---

<Counter client:load />
```

### 3.3 客户端指令

| 指令 | 说明 |
|------|------|
| `client:load` | 页面加载时立即加载 |
| `client:idle` | 页面空闲时加载 |
| `client:visible` | 组件可见时加载 |
| `client:media` | 匹配媒体查询时加载 |
| `client:only="react"` | 仅客户端渲染 |

## 4. Content Collections

### 4.1 定义集合 (`src/content/config.ts`)

```typescript
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
  }),
});

const releases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    versionNumber: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, docs, guides, releases };
```

### 4.2 查询内容

```typescript
// 获取所有条目
const posts = await getCollection("blog");

// 过滤已发布
const publishedPosts = posts.filter((post) => !post.data.draft);

// 按 slug 获取单个条目
const { Content } = await render(post);
```

### 4.3 动态路由

```typescript
// src/pages/blog/[slug].astro
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
```

## 5. 布局系统

### 5.1 基础布局

```astro
---
// src/layouts/base-layout.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title} | MikuWorld</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body class="min-h-screen bg-background font-sans antialiased">
    <slot />
  </body>
</html>
```

### 5.2 主布局

```astro
---
// src/layouts/main-layout.astro
import BaseLayout from "./BaseLayout.astro";
import Header from "@/components/layout/header.astro";
import Footer from "@/components/layout/footer.astro";
---

<BaseLayout>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</BaseLayout>
```

## 6. MDX 集成

### 6.1 安装配置

```javascript
// astro.config.mjs
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      gfm: true,
    }),
  ],
});
```

### 6.2 MDX 组件

```tsx
// src/components/content/mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
  };
}
```

## 7. 样式处理

### 7.1 Tailwind CSS

```astro
---
// 在布局或页面中导入
import "../styles/globals.css";
---

<html class="scroll-smooth">
  ...
</html>
```

### 7.2 Scoped CSS

```astro
<style>
  h1 {
    @apply text-3xl font-bold tracking-tight;
  }
</style>
```

## 8. 环境变量

```typescript
// .env
PUBLIC_SITE_URL=https://mikuworld.online
SECRET_API_KEY=xxx

// 访问
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
```

## 9. 组件目录组织

```
src/components/
├── ui/                 # shadcn/ui 组件
├── layout/            # 布局组件
│   ├── header.astro
│   ├── footer.astro
│   ├── main-nav.astro
│   ├── sidebar-nav.astro
│   └── sheet-mobile-nav.tsx
├── sections/          # 页面区块
│   ├── hero-landing.astro
│   ├── features.astro
│   └── ...
├── cards/             # 卡片组件
│   ├── blog-card.astro
│   └── guide-card.astro
├── content/           # 内容展示
│   ├── mdx-components.tsx
│   └── mdx-image.astro
├── forms/             # 表单组件
│   └── waitlist-form.tsx
└── *.astro / *.tsx    # 其他组件
```

## 10. 开发命令

```bash
# 开发服务器
pnpm dev

# 本地构建 (不含搜索)
pnpm build-local

# 完整构建 + Pagefind
pnpm build

# 预览构建结果
pnpm preview

# 类型检查
pnpm astro check

# 同步 Content Collections 类型
pnpm astro sync
```

## 11. 常见问题

### 11.1 React 组件未渲染

确保添加了客户端指令：

```astro
<MyComponent client:load />
```

### 11.2 样式不生效

检查 Tailwind 是否正确导入：

```astro
---
import "../styles/globals.css";
---
```

### 11.3 类型错误

运行同步命令：

```bash
pnpm astro sync
```
