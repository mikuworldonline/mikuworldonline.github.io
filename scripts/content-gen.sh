#!/bin/bash
# MikuWorld 内容生成器
# 自动添加新内容到项目

PROJECT_DIR="/Users/quanfengmini/.openclaw/workspace/projects/mikuworldonline.github.io"
DATE=$(date '+%Y-%m-%d')

cd "$PROJECT_DIR"

# 添加示例壁纸数据（后续可以扩展为抓取真实数据）
add_wallpaper_sample() {
    local file="src/data/wallpapers.json"
    mkdir -p src/data
    
    if [ ! -f "$file" ]; then
        echo '{
  "mobile": [],
  "desktop": []
}' > "$file"
    fi
    
    echo "[$DATE] 壁纸数据检查完成"
}

# 添加博客文章模板
add_blog_template() {
    local blog_dir="src/content/blog"
    local count=$(ls -1 "$blog_dir"/*.mdx 2>/dev/null | wc -l)
    
    if [ "$count" -lt 5 ]; then
        cat > "$blog_dir/auto-update-$DATE.mdx" << 'EOF'
---
title: "MikuWorld 自动更新"
description: "系统自动生成的内容更新"
cover: "https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/miku.png"
category: "更新"
pubDate: "'"$DATE"'"
---

## 今日更新

MikuWorld 正在持续完善中...

### 新增内容
- 更多初音未来资源
- 网站功能优化

EOF
        echo "[$DATE] 添加博客文章模板"
    fi
}

# 检查页面完整性
check_pages() {
    local pages=(
        "src/pages/pictures/wallpaper/mobile.astro"
        "src/pages/pictures/wallpaper/desktop.astro"
        "src/pages/animes.astro"
        "src/pages/about.astro"
    )
    
    for page in "${pages[@]}"; do
        if [ -f "$page" ]; then
            echo "✓ $page 存在"
        else
            echo "✗ $page 缺失"
        fi
    done
}

# 主函数
main() {
    echo "[$DATE] ====== 内容生成器启动 ======"
    add_wallpaper_sample
    add_blog_template
    check_pages
    echo "[$DATE] ====== 内容生成器完成 ======"
}

main
