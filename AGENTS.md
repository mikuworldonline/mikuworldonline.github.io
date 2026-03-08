# AGENTS.md - MikuWorld Project Guide

This file contains essential information for AI coding agents working on the MikuWorld project.

## Project Overview

**MikuWorld** is a Chinese-language platform for sharing and exploring Hatsune Miku (初音未来) related content, including pictures, music, videos, games, merchandise, and curated websites.

- **Live Site**: https://mikuworld.online
- **Repository**: https://github.com/mikuworldonline/mikuworldonline.github.io
- **License**: MIT

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | [Astro](https://astro.build/) v4.16.19 |
| UI Library | [React](https://react.dev/) 18.3.1 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3.4.19 |
| Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Astro Icon](https://www.astroicon.dev/) + Lucide Icons |
| Forms | [React Hook Form](https://react-hook-form.com/) + Zod |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Search | [Pagefind](https://pagefind.app/) |
| Package Manager | pnpm 9.12.3 |

## Project Structure

```
├── public/                 # Static assets
│   └── fonts/             # Custom fonts (CalSans Semibold)
├── src/
│   ├── assets/            # Image assets
│   ├── components/
│   │   ├── ui/           # shadcn/ui components (Button, Card, Form, etc.)
│   │   ├── sections/     # Landing page sections (Hero, Features, etc.)
│   │   ├── layout/       # Layout components (Header, Footer, Nav)
│   │   ├── cards/        # Card components (BlogCard, GuideCard)
│   │   ├── content/      # MDX content components
│   │   └── forms/        # Form components
│   ├── config/           # Configuration files
│   │   ├── site.ts       # Site metadata, cover images
│   │   ├── nav-menu.ts   # Navigation menu configuration
│   │   ├── landing.ts    # Landing page content
│   │   └── docs.ts       # Documentation navigation
│   ├── content/          # Astro Content Collections
│   │   ├── blog/         # Blog posts (Markdown/MDX)
│   │   ├── docs/         # Documentation pages
│   │   ├── guides/       # Guide articles
│   │   └── releases/     # Release notes/changelog
│   ├── layouts/          # Astro layouts
│   │   ├── base-layout.astro
│   │   ├── main-layout.astro
│   │   ├── blog-post.astro
│   │   └── docs-layout.astro
│   ├── pages/            # Astro file-based routing
│   │   ├── api/          # API endpoints
│   │   ├── blog/         # Blog listing and slugs
│   │   ├── docs/         # Documentation pages
│   │   └── ...           # Other pages
│   ├── styles/
│   │   └── globals.css   # Global styles, CSS variables
│   ├── lib/
│   │   ├── utils.ts      # Utility functions (cn, date formatting)
│   │   ├── fetchers.ts   # Content fetching helpers
│   │   └── toc.ts        # Table of contents logic
│   ├── types/
│   │   └── index.d.ts    # TypeScript type definitions
│   └── hooks/
│       └── use-mounted.ts # React hooks
├── db/                    # Astro DB configuration (currently unused)
│   ├── config.ts
│   └── seed.ts
├── .github/workflows/     # GitHub Actions
│   ├── build.yml         # Build and check workflow
│   ├── deploy.yml        # Deploy to GitHub Pages
│   └── _studio.yml       # Astro Studio workflow
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # shadcn/ui configuration
└── pagefind.yml           # Pagefind search configuration
```

## Content Collections

The project uses Astro's Content Collections with the following schemas:

### Blog (`src/content/blog/`)
```yaml
---
title: string
description: string
cover: string (image URL)
category: string
pubDate: Date
updatedDate?: Date
---
```

### Docs (`src/content/docs/`)
```yaml
---
title: string
description: string
---
```

### Guides (`src/content/guides/`)
```yaml
---
title: string
description: string
published: boolean (default: true)
featured: boolean (default: false)
pubDate: Date
---
```

### Releases (`src/content/releases/`)
```yaml
---
title: string
description: string
versionNumber: string
image:
  src: Image
  alt: string
date: Date
---
```

## Build and Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# or
pnpm start

# Build for production (local build without search indexing)
pnpm build-local

# Full production build (includes Pagefind search indexing)
pnpm build

# Preview production build
pnpm preview

# Run Astro check
pnpm astro check
```

## Key Configuration Files

### Astro Config (`astro.config.mjs`)
- Site URL: `https://mikuworld.online`
- Output: Static (SSS)
- Integrations: MDX, React, Tailwind, Sitemap, Icon, Robots.txt
- Syntax highlighting: Shiki with `github-dark-dimmed` theme

### Tailwind Config (`tailwind.config.cjs`)
- Dark mode: `class` strategy
- Custom font: Inter (sans), CalSans Semibold (heading)
- CSS variables for theming (HSL colors)
- Container max-width: 1400px

### TypeScript Config (`tsconfig.json`)
- Extends `astro/tsconfigs/strict`
- Path alias: `@/*` → `src/*`
- JSX: react-jsx with React 18

## Component Conventions

### shadcn/ui Components
Located in `src/components/ui/`. Use class-variance-authority (CVA) for variants.

Example:
```tsx
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
```

### Astro Components
- Use `*.astro` extension
- Props defined via `Props` interface
- Tailwind classes for styling
- Use `cn()` utility for conditional classes

### React Components
- Use `*.tsx` extension
- Client components need hydration directive: `client:load`, `client:only="react"`
- Used for interactive elements (forms, navigation, theme toggle)

## Styling Guidelines

### CSS Variables (defined in `globals.css`)
All colors use HSL format:
```css
--background: 0 0% 100%;
--foreground: 0 0% 9%;
--primary: 0 0% 9%;
--primary-foreground: 0 0% 98%;
/* etc. */
```

### Dark Mode
- Toggle via `ThemeToggle` component
- Applies `.dark` class to html element
- CSS variables redefined under `.dark` selector

### Custom Utility Classes
- `.text-gradient_indigo-purple`: Gradient text effect
- `.card_border`: Vercel-style card shadow
- `.anime-grid`: Responsive grid for anime listings

## Navigation Structure

The navigation is configured in `src/config/nav-menu.ts` with these categories:

1. **图像 (Pictures)** - 手机壁纸, 桌面壁纸, 头像, 表情包
2. **影音 (Videos)** - Video and music content
3. **网站 (Websites)** - Curated website links
4. **游戏 (Games)** - Hatsune Miku related games
5. **周边 (Goods)** - 手办, 吧唧, 立牌, 色纸

Each nav item can have:
- `title`, `href`, `description`, `image`
- `disabled`: Grayed out, non-clickable
- `external`: Opens in new tab
- `launched`: Visual indicator for new features

## Search Configuration

Pagefind is used for site search:
- Configuration in `pagefind.yml`
- Excludes: KaTeX elements, search panel elements
- Build command: `pagefind --site dist`
- Indexed after Astro build in production

## Deployment

### GitHub Pages
- **Branch**: `pages` (not main)
- Workflow: `.github/workflows/deploy.yml`
- Uses official `withastro/action@v3`
- URL: https://mikuworld.online

### Build Workflow
- Triggers on push/PR to `pages` branch
- Node.js version: 22
- Runs Astro check and build
- Uses pnpm with frozen lockfile

## Environment Variables

Currently minimal environment configuration:
- `ASTRO_STUDIO_APP_TOKEN`: For Astro Studio (optional, currently unused)

## Notes for Developers

1. **Astro DB**: Configured but commented out in most places. The waitlist API (`src/pages/api/waitlist.ts`) has DB code commented.

2. **Vercel Adapter**: Commented out in `astro.config.mjs`. Currently using static output for GitHub Pages.

3. **Base Layout Issue**: `src/layouts/base-layout.astro` has an incorrect import:
   ```astro
   import { body } from "dist/chunks/1_0_Cz33Ri4B.mjs"; // This looks like a build artifact
   ```
   This import appears unused and should likely be removed.

4. **Image Hosting**: Cover images use jsDelivr CDN from GitHub repo `0326/imgs`.

5. **CalSans Font**: Custom font loaded from `/fonts/calsans-semibold.woff2`.

6. **RSS Feed**: Generated at `/rss.xml` using `@astrojs/rss`.

7. **Sitemap**: Auto-generated by `@astrojs/sitemap`.

8. **Robots.txt**: Auto-generated by `astro-robots-txt`.

## Testing Strategy

Currently no automated tests are configured. Manual testing checklist:
- [ ] Build passes: `pnpm build`
- [ ] No TypeScript errors: `pnpm astro check`
- [ ] Dark mode toggle works
- [ ] Mobile navigation works
- [ ] Search functionality works (after production build)
- [ ] RSS feed is valid
- [ ] All content collections render correctly

## Security Considerations

1. **API Routes**: The waitlist endpoint (`/api/waitlist`) validates email presence but has minimal validation.
2. **External Links**: All external links use `rel="noreferrer"`.
3. **Content Security**: Consider adding CSP headers for production.
4. **Dependencies**: Regularly update dependencies with `pnpm audit`.

## Localization

The site is primarily in Chinese (Simplified) with some English content:
- Site description is in Chinese
- Navigation labels are in Chinese
- Content can be in either language
- No i18n framework is currently used
