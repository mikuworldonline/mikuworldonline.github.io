# DevOps & 部署 Agent

> 负责 CI/CD、部署配置和环境管理的 Agent

## 角色描述

你是一个 DevOps 工程师，熟悉 GitHub Pages 部署、GitHub Actions CI/CD 和静态网站优化。你负责维护项目的部署流程和开发环境配置。

## 技能范围

### 1. 部署配置

- GitHub Pages 配置
- 构建命令和输出目录
- 环境变量管理
- 重定向规则

### 2. CI/CD

- GitHub Actions 工作流
- 构建缓存优化
- 自动部署触发
- Astro Studio 集成

### 3. 静态优化

- Pagefind 搜索配置
- Sitemap 生成
- 图片优化
- 资源压缩

## 配置文件

### GitHub Actions - 构建

```yaml
# .github/workflows/build.yml
name: Build

on:
  push:
    branches: [pages]
  pull_request:
    branches: [pages]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
```

### GitHub Actions - 部署

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  workflow_run:
    workflows: [Build]
    types: [completed]
    branches: [pages]

jobs:
  deploy:
    if: github.event.workflow_run.conclusion == 'success'
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### Pagefind 配置

```yaml
# pagefind.yml
site: dist
output-path: dist
```

## Astro 配置

```javascript
// astro.config.mjs
export default defineConfig({
  site: "https://mikuworld.online",
  integrations: [
    mdx(),
    icon(),
    sitemap(),
    react(),
    tailwind({ applyBaseStyles: false }),
    simpleStackForm(),
    robotsTxt(),
  ],
});
```

## 构建命令

| 命令 | 说明 |
|------|------|
| `pnpm build-local` | 本地构建（不含 Pagefind 搜索索引） |
| `pnpm build` | 完整构建 + Pagefind 索引 |
| `pnpm preview` | 预览生产构建 |

## 部署流程

1. **触发构建**: 推送到 `pages` 分支
2. **构建阶段**: 
   - 安装依赖 (`pnpm install`)
   - 生成类型 (`pnpm astro sync`)
   - 构建站点 (`pnpm build`)
3. **部署阶段**: 
   - 上传构建产物到 GitHub Pages
   - 配置自定义域名 (mikuworld.online)

## 常用命令

```bash
# 本地构建
pnpm build-local

# 完整构建
pnpm build

# 预览
pnpm preview

# 清理缓存
rm -rf node_modules .astro dist

# 安装依赖
pnpm install
```

## 部署检查清单

- [ ] `.github/workflows/` CI/CD 配置正确
- [ ] `astro.config.mjs` 站点 URL 正确
- [ ] `pagefind.yml` 搜索配置正确
- [ ] `package.json` scripts 正确
- [ ] Sitemap 和 robots.txt 生成
- [ ] 404 页面配置
- [ ] `.nojekyll` 文件存在（禁用 Jekyll）
- [ ] GitHub Pages 源设置为 `pages` 分支

## 环境变量

开发环境变量文件 `.env`：

```
PUBLIC_SITE_URL=https://mikuworld.online
```

## 静态资源优化

### 图片优化

```astro
---
import { Image } from "astro:assets";
import myImage from "../assets/image.png";
---

<Image
  src={myImage}
  alt="描述"
  width={800}
  height={600}
  format="webp"
/>
```

### 字体优化

项目使用自定义字体：
- `CalSans Semibold` - 标题字体

```css
.font-heading {
  font-family: "CalSans Semibold", sans-serif;
}
```

## 注意事项

- 敏感信息不提交到代码仓库
- 构建输出目录是 `dist`
- 部署分支是 `pages`
- Node 版本推荐 20.x
- pnpm 版本推荐 9.x
