# 项目代码约定和风格指南

> 本文件定义了项目的代码规范和最佳实践，所有 AI Agent 在处理本项目时必须遵循。

## 1. 项目概述

- **项目名称**: mikuworld
- **项目类型**: Astro 静态网站，支持 React 组件混合
- **站点 URL**: https://mikuworld.online
- **包管理**: pnpm 9.12.3
- **类型检查**: TypeScript

## 2. 技术栈

| 类别 | 技术 |
|------|------|
| 核心框架 | Astro v4.16.19 |
| UI 框架 | React 18.3.1 |
| 样式方案 | Tailwind CSS 3.4.19 |
| 组件库 | shadcn/ui (基于 Radix UI) |
| 内容管理 | Astro Content Collections (MDX) |
| 表单验证 | React Hook Form 7.69.0 + Zod 3.25.76 |
| 动画 | Framer Motion 11.18.2 |
| 图标 | Lucide React + Astro Icon |
| 主题 | next-themes (暗色模式) |
| 搜索 | Pagefind 1.4.0 |
| 构建优化 | Sharp 0.33.5 |

## 3. 目录结构

```
src/
├── components/
│   ├── ui/              # shadcn/ui 基础组件
│   ├── sections/         # 页面区块 (Hero, Features等)
│   ├── layout/           # 布局组件 (Header, Footer, Nav)
│   ├── cards/            # 卡片组件 (Blog, Guide)
│   ├── content/          # MDX 内容组件
│   └── forms/            # 表单组件
├── config/               # 配置文件 (nav-menu, site, landing等)
├── content/               # Content Collections (MDX)
│   ├── blog/             # 博客文章
│   ├── docs/             # 文档
│   ├── guides/           # 指南
│   └── releases/         # 更新日志
├── layouts/              # Astro 页面布局
├── lib/                  # 工具函数 (utils, graphql, fetchers)
├── pages/                # 路由页面
│   ├── api/              # API 端点
│   ├── blog/             # 博客
│   ├── docs/             # 文档
│   ├── guides/           # 指南
│   ├── pictures/         # 图片 (壁纸)
│   └── releases/         # 更新日志
├── styles/               # 全局样式
├── hooks/                # React Hooks
├── icons/                # 自定义图标
├── types/                # TypeScript 类型
└── data/                 # 静态数据
```

## 4. 路径别名

使用 `@/` 作为 `src/` 目录的别名：

```typescript
// tsconfig.json
"paths": {
  "@/*": ["./src/*"]
}
```

## 5. 类名处理

使用 `lib/utils.ts` 中的 `cn()` 函数合并类名：

```typescript
import { cn } from "@/lib/utils";

const classes = cn("base-class", condition && "conditional-class");
```

## 6. 组件规范

### 6.1 UI 组件 (shadcn/ui)

位于 `src/components/ui/` 目录。

### 6.2 组件文件命名

| 类型 | 命名规范 | 示例 |
|------|----------|------|
| Astro 组件 | `kebab-case.astro` | `blog-card.astro` |
| React 组件 | `PascalCase.tsx` | `BlogCard.tsx` |
| 工具函数 | `camelCase.ts` | `formatDate.ts` |
| 配置文件 | `kebab-case.ts` | `site-config.ts` |

### 6.3 React 组件使用

在 Astro 中使用 React 组件需要添加客户端指令：

```astro
---
import MyComponent from '../components/MyComponent.tsx';
---

<MyComponent client:load />
```

| 指令 | 说明 |
|------|------|
| `client:load` | 页面加载时立即加载 |
| `client:idle` | 页面空闲时加载 |
| `client:visible` | 组件可见时加载 |
| `client:only="react"` | 仅客户端渲染 |

## 7. 样式规范

### 7.1 Tailwind CSS

使用 Tailwind CSS 进行样式开发，遵循：
- 移动优先设计
- 使用设计令牌（CSS 变量）
- 避免内联样式

### 7.2 CSS 变量

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --muted: 0 0% 92%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 92%;
  --border: 0 0% 92%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 93%;
  --muted: 0 0% 12%;
  --primary: 0 0% 93%;
  --secondary: 0 0% 12%;
  --border: 0 0% 12%;
}
```

### 7.3 字体

- 正文字体: Inter
- 标题字体: CalSans Semibold (通过 font-heading 类使用)

### 7.4 暗色模式

使用 `next-themes` 的 `ThemeSwitch` 组件：

```tsx
import { ThemeSwitch } from "@/components/theme-toggle";
```

切换机制：在 `<html>` 元素上添加 `.dark` 类

## 8. 内容管理 (Content Collections)

### 8.1 定义集合 (`src/content/config.ts`)

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

export const collections = { blog, docs, guides, releases };
```

### 8.2 内容查询

```typescript
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
const post = posts.find((p) => p.slug === slug);
const { Content } = await render(post);
```

## 9. 表单处理

使用 React Hook Form + Zod：

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const form = useForm({
  resolver: zodResolver(formSchema),
});
```

## 10. 动画

使用 Framer Motion 处理动画：

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

## 11. 导航配置

导航菜单在 `src/config/nav-menu.ts` 中配置：

```typescript
navMenuConfig: {
  picturesNav: [...],  // 图像分类
  videosNav: [...],   // 影音分类
  websitesNav: [...], // 网站分类
  gamesNav: [...],    // 游戏分类
  goodsNav: [...]     // 周边分类
}
```

## 12. 工具函数 (`lib/utils.ts`)

```typescript
export function cn(...inputs: ClassValue[])      // 合并类名
export function wait(ms: number)                  // 延迟
export function formatDate(date: Date)           // 格式化日期
export function extractSegmentURL(path: string)  // 提取 URL 段
export function capitalizer(text: string)        // 首字母大写
export function getSeasonInfo()                  // 获取季度信息
```

## 13. 构建命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build-local` | 本地构建（不含搜索索引） |
| `pnpm build` | 完整构建 + Pagefind 索引 |
| `pnpm preview` | 预览生产构建 |
| `pnpm astro check` | 类型检查 |

## 14. 禁止事项

- ❌ 不要修改 `astro.config.mjs` 中的核心配置
- ❌ 不要删除 `components/ui/` 中的基础组件
- ❌ 不要使用 `!important` 覆盖样式
- ❌ 不要使用内联样式（除非动态值）
- ❌ 不要提交 `node_modules/` 或 `dist/` 目录
