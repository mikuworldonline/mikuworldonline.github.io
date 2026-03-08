#!/bin/bash
# MikuWorld 自动开发脚本
# 每小时执行：检查、更新、构建、部署

set -e

PROJECT_DIR="/Users/quanfengmini/.openclaw/workspace/projects/mikuworldonline.github.io"
LOG_FILE="/Users/quanfengmini/.openclaw/workspace/projects/mikuworldonline.github.io/.auto-dev.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] ====== 开始自动开发任务 ======" >> "$LOG_FILE"

cd "$PROJECT_DIR"

# 1. 拉取最新代码
echo "[$DATE] 拉取最新代码..." >> "$LOG_FILE"
git pull origin pages || true

# 2. 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "[$DATE] 发现有未提交更改，先提交..." >> "$LOG_FILE"
    git add -A
    git commit -m "auto: 保存工作区更改 $(date '+%Y-%m-%d %H:%M')" || true
fi

# 3. 安装依赖
echo "[$DATE] 检查依赖..." >> "$LOG_FILE"
if [ ! -d "node_modules" ]; then
    pnpm install
fi

# 4. 本地构建测试
echo "[$DATE] 本地构建测试..." >> "$LOG_FILE"
if ! pnpm run build-local 2>&1 | tee -a "$LOG_FILE"; then
    echo "[$DATE] ❌ 构建失败，终止部署" >> "$LOG_FILE"
    exit 1
fi

# 5. 如果有更改，提交并推送
echo "[$DATE] 检查是否有新内容..." >> "$LOG_FILE"
git add -A
if git diff --cached --quiet; then
    echo "[$DATE] ℹ️ 没有新内容需要提交" >> "$LOG_FILE"
else
    git commit -m "auto: 自动更新内容 $(date '+%Y-%m-%d %H:%M')"
    git push origin pages
    echo "[$DATE] ✅ 已推送到 GitHub Pages" >> "$LOG_FILE"
    
    # 6. 等待部署完成并验证
    echo "[$DATE] 等待部署完成 (60秒)..." >> "$LOG_FILE"
    sleep 60
    
    # 7. 验证网站可用性
    if curl -s -o /dev/null -w "%{http_code}" https://mikuworld.online | grep -q "200"; then
        echo "[$DATE] ✅ 网站验证通过" >> "$LOG_FILE"
    else
        echo "[$DATE] ⚠️ 网站可能未完全部署，请手动检查" >> "$LOG_FILE"
    fi
fi

echo "[$DATE] ====== 自动开发任务完成 ======" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
