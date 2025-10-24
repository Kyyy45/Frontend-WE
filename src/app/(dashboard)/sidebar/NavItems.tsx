"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface SidebarItemType {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItemType[];
}

interface NavItemsProps {
  items: SidebarItemType[];
}

export function NavItems({ items }: NavItemsProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  const renderItems = (menuItems: SidebarItemType[] = []) => {
    return menuItems.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.includes(item.label);
      const active = isActive(item.href);

      if (hasChildren) {
        return (
          <Collapsible
            key={item.label}
            open={isExpanded}
            onOpenChange={() => toggleItem(item.label)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.label}
                  className="flex items-center justify-between"
                  data-active={active}
                >
                  <div className="flex items-center gap-2">
                    <span className="[&>svg]:size-4 [&>svg]:shrink-0">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isExpanded && "rotate-90"
                    )}
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {renderItems(item.children)}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      }

      return (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton
            asChild
            tooltip={item.label}
            className="[&>svg]:size-4 [&>svg]:shrink-0"
            data-active={active}
          >
            <Link href={item.href}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return <>{renderItems(items)}</>;
}