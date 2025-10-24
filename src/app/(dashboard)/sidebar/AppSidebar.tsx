"use client";

import React from "react";
import { LogOut, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavItems } from "./NavItems";

interface SidebarItemType {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItemType[];
}

interface AppSidebarProps {
  sidebarItems: SidebarItemType[];
}

export function AppSidebar({ sidebarItems }: AppSidebarProps) {
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    // TODO: Implement settings navigation
    console.log("Settings clicked");
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      {/* Header - Logo/Branding */}
      <SidebarHeader>
        <div className="flex items-center justify-center py-2">
          <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            WE
          </span>
        </div>
      </SidebarHeader>

      {/* Main Content - Navigation Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavItems items={sidebarItems} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer - User Actions */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Settings"
              onClick={handleSettings}
              className="[&>svg]:size-4 [&>svg]:shrink-0"
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              onClick={handleLogout}
              className="[&>svg]:size-4 [&>svg]:shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};