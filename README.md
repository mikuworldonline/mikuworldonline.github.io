# MikuWorld

[![Website](https://img.shields.io/badge/Website-mikuworld.online-blue)](https://mikuworld.online)
[![Astro](https://img.shields.io/badge/Astro-v4-orange)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENCE.md)

**MikuWorld** 是一个分享与探索初音未来相关内容的平台，包括图片、音乐、视频、游戏、周边和各类精彩网站。

![MikuWorld](public/og.jpg)

## ✨ 功能

### 内容分类

- **🖼️ 图片**
  - 手机壁纸
  - 桌面壁纸
  - 头像
  - 表情包

- **🎬 影音**
  - 精选视频
  - 音乐分享

- **🎮 游戏**
  - 初音未来相关游戏推荐

- **🛍️ 周边**
  - 手办
  - 吧唧
  - 立牌
  - 色纸

- **🔗 网站推荐**
  - 精选相关网站

### 技术特性

- ⚡ **高性能** - 基于 Astro v4 的静态站点生成
- 🎨 **精美 UI** - 使用 shadcn/ui + Tailwind CSS
- 🌙 **深色模式** - 支持亮色/暗色主题切换
- 📱 **响应式设计** - 完美适配各种设备
- 📝 **Markdown 支持** - 使用 MDX 编写内容
- 🔍 **搜索功能** - 基于 Pagefind 的全站搜索
- 📰 **RSS 订阅** - 支持 RSS Feed
- 🗺️ **站点地图** - 自动生成 sitemap

## 🚀 本地开发

### 环境要求

- Node.js 18+
- pnpm (推荐)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run dev
```

### 构建生产版本

```bash
pnpm run build
```

### 预览生产构建

```bash
pnpm run preview
```

## 📁 项目结构

```
├── public/              # 静态资源
├── src/
│   ├── components/      # UI 组件
│   │   ├── ui/         # shadcn/ui 组件
│   │   ├── sections/   # 页面区块组件
│   │   ├── layout/     # 布局组件
│   │   └── cards/      # 卡片组件
│   ├── content/        # 内容集合 (Markdown/MDX)
│   │   ├── blog/       # 博客文章
│   │   ├── docs/       # 文档
│   │   ├── guides/     # 指南
│   │   └── releases/   # 更新日志
│   ├── config/         # 配置文件
│   ├── layouts/        # 页面布局
│   ├── pages/          # 页面路由
│   ├── styles/         # 样式文件
│   └── types/          # TypeScript 类型
├── astro.config.mjs    # Astro 配置
├── tailwind.config.cjs # Tailwind 配置
└── package.json
```

## 📄 内容集合

### Blog

博客文章位于 `src/content/blog/`，使用 Markdown/MDX 格式。

Frontmatter 格式：

```yaml
---
title: 文章标题
description: 文章描述
cover: 封面图片 URL
category: 分类
pubDate: 2024-01-01
---
```

### Docs

文档位于 `src/content/docs/`，使用 Markdown/MDX 格式。

### Guides

指南位于 `src/content/guides/`。

### Releases

更新日志位于 `src/content/releases/`。

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) v4
- **UI 库**: [React](https://react.dev/) 18
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **组件库**: [shadcn/ui](https://ui.shadcn.com/)
- **图标**: [Astro Icon](https://www.astroicon.dev/) + Lucide Icons
- **表单**: [React Hook Form](https://react-hook-form.com/) + Zod
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **搜索**: [Pagefind](https://pagefind.app/)

## 📝 待办事项

- [x] 深色模式
- [x] Markdown & MDX 支持
- [x] 移动端导航
- [x] 更新日志页面
- [x] 等待列表表单
- [x] 邮件订阅
- [ ] 博客搜索功能
- [ ] SEO 组件 & 元数据
- [ ] OG 图片生成
- [ ] Astro DB 集成

## 📜 许可证

[MIT](./LICENCE.md) © MikuWorld

---

Made with 💙 for Hatsune Miku fans
