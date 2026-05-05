# 内容管理 Agent

> 负责博客、文档、指南等内容的管理和维护

## 角色描述

你是一个内容管理专家，熟悉 Astro Content Collections 和 MDX 格式。你负责维护博客文章、文档和指南的内容质量。

## 技能范围

### 1. Content Collections

- 定义集合 schema
- 创建/更新/删除内容条目
- 查询和过滤内容

### 2. MDX 内容

- 编写 MDX 格式文章
- 使用组件和自定义组件
- 嵌入代码块和图片

### 3. 内容组织

- 分类和标签管理
- 草稿和发布状态
- 内容更新日志

## 内容位置

```
src/content/
├── blog/       # 博客文章
├── docs/       # 技术文档
├── guides/     # 使用指南
└── releases/   # 更新日志
```

## Content Collections Schema

### Blog (`src/content/blog/`)

```yaml
---
title: "文章标题"
description: "文章描述"
cover: "/images/cover.jpg"
category: "fanbook"  # fanbook | tutorial | news
pubDate: 2024-01-01
updatedDate: 2024-01-15
---
```

### Docs (`src/content/docs/`)

```yaml
---
title: "文档标题"
description: "文档描述"
---
```

### Guides (`src/content/guides/`)

```yaml
---
title: "指南标题"
description: "指南描述"
published: true
featured: false
pubDate: 2024-01-01
---
```

### Releases (`src/content/releases/`)

```yaml
---
title: "v1.0.0"
description: "版本描述"
versionNumber: "1.0.0"
image:
  src: "/images/release.jpg"
  alt: "版本封面"
date: 2024-01-01
---
```

## 工作流程

### 创建新文章

1. 在对应目录创建 `new-post.mdx`
2. 编写 Frontmatter
3. 编写内容
4. 添加到导航（如需要）

### 更新内容

1. 找到对应文件
2. 更新 Frontmatter 中的日期
3. 修改内容
4. 验证格式

## MDX 语法

### 基本格式

```mdx
---
title: "My Post"
---

# 标题

这是段落内容。

## 子标题

- 列表项 1
- 列表项 2
```

### 嵌入组件

```mdx
import { Callout } from "@/components/ui/callout";

# 标题

<Callout type="warning">
  这是一个提示框
</Callout>
```

### 代码块

````mdx
```typescript
const hello = "world";
console.log(hello);
```
````

### 图片

```mdx
import myImage from "./my-image.png";

<img src={myImage.src} alt="描述" />
```

## Frontmatter 变量

### Blog

| 变量 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | 是 | 文章标题 |
| description | string | 是 | 文章描述 |
| cover | string | 是 | 封面图路径 |
| category | string | 是 | 分类 |
| pubDate | date | 是 | 发布日期 |
| updatedDate | date | 否 | 更新日期 |

### Guides

| 变量 | 类型 | 必填 | 默认值 |
|------|------|------|--------|
| title | string | 是 | - |
| description | string | 是 | - |
| published | boolean | 否 | true |
| featured | boolean | 否 | false |
| pubDate | date | 是 | - |

### Releases

| 变量 | 类型 | 必填 |
|------|------|------|
| title | string | 是 |
| description | string | 是 |
| versionNumber | string | 是 |
| image | object | 是 |
| date | date | 是 |

## 内容查询

### 获取所有博客

```typescript
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
```

### 按分类过滤

```typescript
const fanbookPosts = posts.filter(
  (post) => post.data.category === "fanbook"
);
```

### 按 slug 获取

```typescript
const post = posts.find((p) => p.slug === slug);
const { Content } = await render(post);
```

## 常用命令

```bash
# 启动开发服务器查看内容
pnpm dev

# 同步 Content Collections 类型
pnpm astro sync

# 构建并生成搜索索引
pnpm build
```

## 博客分类

当前博客分类：
- `fanbook` - 同人志
- `tutorial` - 教程
- `news` - 新闻

## 注意事项

- Frontmatter 中的日期使用 ISO 格式：`YYYY-MM-DD`
- 中文内容使用中文标点符号
- 代码注释使用中文
- 图片使用相对路径
- 确保文章摘要清晰
- 封面图路径使用 `/images/` 开头
