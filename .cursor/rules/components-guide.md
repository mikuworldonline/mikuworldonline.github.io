# React + shadcn/ui 组件开发指南

> 本文件定义了 React 组件和 shadcn/ui 组件的使用规范。

## 1. shadcn/ui 组件位置

所有基础 UI 组件位于 `src/components/ui/`：

| 组件 | 文件 | 说明 |
|------|------|------|
| Button | `button.tsx` | 多变体按钮 |
| Card | `card.tsx` | 卡片容器 |
| Tabs | `tabs.tsx` | 标签页 |
| Accordion | `accordion.tsx` | 手风琴 |
| Badge | `badge.tsx` | 标签徽章 |
| Form | `form.tsx` | 表单容器 |
| Input | `input.tsx` | 输入框 |
| Label | `label.tsx` | 标签 |
| Select | `select.tsx` | 下拉选择 |
| Sheet | `sheet.tsx` | 侧边抽屉 |
| ScrollArea | `scroll-area.tsx` | 滚动区域 |
| NavigationMenu | `navigation-menu.tsx` | 导航菜单 |
| Dialog | `dialog.tsx` | 对话框 |
| Sonner | `sonner.tsx` | Toast 通知 |

## 2. 组件导入方式

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```

## 3. Button 组件

### 3.1 变体

```typescript
import { Button } from "@/components/ui/button";

// 变体: default, destructive, outline, secondary, ghost, link
<Button variant="destructive">删除</Button>

// 尺寸: default, sm, lg, icon
<Button size="lg">大按钮</Button>
<Button size="icon">图标</Button>
```

### 3.2 使用示例

```tsx
<Button
  variant="default"
  size="default"
  onClick={handleClick}
  disabled={isLoading}
  className="w-full"
>
  {isLoading ? "加载中..." : "提交"}
</Button>
```

## 4. Card 组件

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>卡片描述文字</CardDescription>
  </CardHeader>
  <CardContent>
    <p>卡片内容</p>
  </CardContent>
  <CardFooter>
    <Button>操作</Button>
  </CardFooter>
</Card>
```

## 5. Tabs 组件

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">账户</TabsTrigger>
    <TabsTrigger value="password">密码</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>账户设置内容</p>
  </TabsContent>
  <TabsContent value="password">
    <p>密码设置内容</p>
  </TabsContent>
</Tabs>
```

## 6. Accordion 组件

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>问题 1</AccordionTrigger>
    <AccordionContent>
      答案内容
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## 7. Sheet 组件 (侧边抽屉)

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

<Sheet>
  <SheetTrigger asChild>
    <Button>打开</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>标题</SheetTitle>
      <SheetDescription>描述</SheetDescription>
    </SheetHeader>
    <div className="py-4">内容</div>
  </SheetContent>
</Sheet>
```

## 8. Form 组件 (React Hook Form + Zod)

### 8.1 基本结构

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "名字至少2个字符"),
  email: z.string().email("请输入有效的邮箱"),
});

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>名字</FormLabel>
              <FormControl>
                <Input placeholder="请输入名字" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
}
```

### 8.2 表单配置 (components.json)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.cjs",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 9. Dialog 组件

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog>
  <DialogTrigger asChild>
    <Button>打开对话框</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>对话框标题</DialogTitle>
      <DialogDescription>描述文字</DialogDescription>
    </DialogHeader>
    <div className="py-4">内容</div>
  </DialogContent>
</Dialog>
```

## 10. 类名合并 (cn 工具)

```tsx
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}
```

## 11. Framer Motion 动画

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  内容
</motion.div>
```

## 12. Toast 通知 (Sonner)

```tsx
import { toast } from "sonner";

toast.success("操作成功!");
toast.error("操作失败，请重试。");
toast("这是一条普通通知");
```

## 13. 主题切换 (ThemeSwitch)

```tsx
import { ThemeSwitch } from "@/components/theme-toggle";

// 使用组件
<ThemeSwitch />
```

## 14. 移动端导航 (SheetMobileNav)

```tsx
import { SheetMobileNav } from "@/components/layout/sheet-mobile-nav";
import { navMenuConfig } from "@/config/nav-menu";

<SheetMobileNav navMenuConfig={navMenuConfig} />
```

## 15. 组件组合模式

```tsx
// 组合多个 shadcn/ui 组件
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

export function PostCard({ title, excerpt, tags, date }: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <time className="text-sm text-muted-foreground">{date}</time>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
```

## 16. 创建新组件

### 16.1 使用 shadcn-ui CLI

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### 16.2 手动创建

1. 在 `src/components/ui/` 创建文件
2. 使用 CVA 管理变体
3. 导出组件和变体函数

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // ... 其他变体
      },
      size: {
        default: "h-10 px-4 py-2",
        // ... 其他尺寸
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```
