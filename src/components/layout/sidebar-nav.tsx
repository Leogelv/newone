"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Workflow,
  BarChart2,
  FileText,
  Calendar,
  Settings,
  FolderKanban,
  Contact,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Дашборд", icon: LayoutDashboard },
  { href: "/players", label: "Игроки", icon: Users },
  { href: "/segments", label: "Сегменты", icon: FolderKanban },
  { href: "/builder", label: "Сценарии", icon: Workflow },
  { href: "/analytics", label: "Аналитика", icon: BarChart2 },
  { href: "/reports", label: "Отчёты", icon: FileText },
  { href: "/calendar", label: "Календарь кампаний", icon: Calendar },
  { href: "/settings", label: "Настройки", icon: Settings },
];

export default function SidebarNav({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="grid gap-1 px-2 py-4">
        {navItems.map((item) =>
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant={pathname.startsWith(item.href) && item.href !== '/' || pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed && "h-10 w-10 justify-center"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
                    <span className={cn(isCollapsed ? "sr-only" : "")}>
                      {item.label}
                    </span>
                  </Link>
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right" sideOffset={5}>
                  {item.label}
                </TooltipContent>
              )}
            </Tooltip>
        )}
      </nav>
    </TooltipProvider>
  );
}
