"use client";

import { ReactNode, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/AppSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./sidebar/menu-data";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: ReactNode;
  type?: "admin" | "member";
}

export default function DashboardLayoutClient({ children, type = "admin" }: DashboardLayoutProps) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarProvider>
      <AppSidebar
        sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
        isOpen={open}
      />

      <main
        className={cn(
          inter.className,
          "flex flex-1 flex-col min-h-screen bg-gray-50 ml-[var(--sidebar-width)]"
        )}
      >
        <SidebarTrigger onClick={() => setOpen(!open)} className="m-2" />
        {children}
      </main>
    </SidebarProvider>
  );
}
