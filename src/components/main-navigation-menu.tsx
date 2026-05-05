import * as React from "react";

import { cn } from "@/lib/utils";
import { navMenuConfig } from "@/config/nav-menu";

export function MainNavigationMenu() {
  return (
    <nav className="flex items-center gap-1">
      {/* 图像 */}
      <NavLink href="/pictures/wallpaper/mobile">
        图像
      </NavLink>

      {/* 影音 */}
      <NavLink href="/videos/music">
        影音
      </NavLink>

      {/* 游戏 */}
      <NavLink href="/games">
        游戏
      </NavLink>

      {/* 网站 */}
      <NavLink href="/websites">
        网站
      </NavLink>

      {/* 周边 */}
      <NavLink href="/merchandise">
        周边
      </NavLink>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function NavLink({ href, children, external }: NavLinkProps) {
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-lg",
        "text-muted-foreground",
        "hover:text-foreground hover:bg-accent",
        "transition-colors duration-200"
      )}
    >
      {children}
    </a>
  );
}
