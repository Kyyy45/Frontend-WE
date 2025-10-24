"use client";

import { ReactNode } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/AppSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./sidebar/menu-data";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: ReactNode;
  type?: "admin" | "member";
}

export default function DashboardLayoutClient({
  children,
  type = "admin",
}: DashboardLayoutProps) {
  const sidebarItems = type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER;

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar sidebarItems={sidebarItems} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center justify-between">
            <h1 className={cn(inter.className, "text-2xl font-bold")}>
              Dashboard
            </h1>
          </div>
        </header>
        <main className={cn(inter.className, "flex-1 overflow-auto p-4")}>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}