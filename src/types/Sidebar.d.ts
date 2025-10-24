import { ReactNode } from "react";

export interface SidebarItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface AppSidebarProps {
  sidebarItems: SidebarItem[];
  isOpen?: boolean;
}
