"use client";

import { AppSidebarProps } from "@/types/Sidebar";

export function AppSidebar({ sidebarItems, isOpen }: AppSidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {sidebarItems.map((item, i) => (
        <a key={i} href={item.href}>{item.label}</a>
      ))}
    </aside>
  );
}
