import * as React from "react";

import { cn } from "@/lib/utils";
import { navMenuConfig } from "@/config/nav-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { MenuItem, SidebarNavItem } from "@/types";

// 顶栏一级类目：标签 + 对应配置组
const categories: { label: string; groups: SidebarNavItem[] }[] = [
  { label: "图像", groups: navMenuConfig.picturesNav },
  { label: "影音", groups: navMenuConfig.videosNav },
  { label: "游戏", groups: navMenuConfig.gamesNav },
  { label: "网站", groups: navMenuConfig.websitesNav },
  { label: "周边", groups: navMenuConfig.goodsNav },
  { label: "更多", groups: navMenuConfig.extraNav },
];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => {
          const items = category.groups
            .flatMap((group) => group.items ?? [])
            .filter((item) => !item.disabled);

          if (items.length === 0) return null;

          // 单项类目直接做成链接，避免多余的下拉
          if (items.length === 1) {
            const single = items[0];
            return (
              <NavigationMenuItem key={category.label}>
                <NavigationMenuLink
                  href={single.href}
                  target={single.external ? "_blank" : undefined}
                  rel={single.external ? "noopener noreferrer" : undefined}
                  className={navigationMenuTriggerStyle()}
                >
                  {category.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={category.label}>
              <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-3 md:w-[420px] md:grid-cols-2">
                  {items.map((item) => (
                    <ListItem key={item.href} item={item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ item }: { item: MenuItem }) {
  return (
    <li>
      <NavigationMenuLink
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={cn(
          "flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            className="size-10 shrink-0 rounded-md object-cover"
          />
        ) : null}
        <div className="space-y-1">
          <div className="text-sm font-medium leading-none">{item.title}</div>
          {item.description ? (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          ) : null}
        </div>
      </NavigationMenuLink>
    </li>
  );
}
