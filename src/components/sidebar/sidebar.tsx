"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminMenuItems, memberMenuItems } from "@/lib/menu-config";
import { Button } from "@/components/ui/button";

type MenuItemType = {
  label: string;
  href?: string;
  icon: React.ReactNode;
  children?: MenuItemType[];
  description?: string;
};

export function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Determine user role from session
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userRole = (session?.user as any)?.role || "member";
  const menuItems = userRole === "admin" ? adminMenuItems : memberMenuItems;

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const renderMenuItem = (item: MenuItemType, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.href);
    const isExpanded = expandedItems.includes(item.label);

    const handleClick = () => {
      if (hasChildren) {
        toggleExpand(item.label);
      }
      // Close sidebar on mobile when clicking a link
      if (item.href && !hasChildren) {
        setIsOpen(false);
      }
    };

    const content = (
      <button
        onClick={handleClick}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-all",
          "hover:bg-accent hover:text-accent-foreground",
          active
            ? "bg-amber-400/10 text-amber-400 border-l-4 border-amber-400 pl-3"
            : "text-muted-foreground"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            {item.icon}
          </span>
          <span className="truncate">{item.label}</span>
        </div>
        {hasChildren && (
          <ChevronDown
            className={cn("w-4 h-4 transition-transform flex-shrink-0", isExpanded && "rotate-180")}
          />
        )}
      </button>
    );

    return (
      <div key={item.label} className={cn("space-y-1", depth > 0 && "pl-2")}>
        {item.href && !hasChildren ? (
          <Link href={item.href}>{content}</Link>
        ) : (
          content
        )}

        {hasChildren && isExpanded && (
          <div className="space-y-1">
            {item.children!.map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-card border-r border-border shadow-lg z-40",
          "transition-transform duration-300 ease-in-out",
          "md:relative md:translate-x-0 md:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo & Branding */}
          <div className="p-6 border-b border-border space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-sm font-bold text-white group-hover:shadow-lg transition-shadow">
                WE
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">
                  Worldpedia
                </span>
                <span className="text-xs text-muted-foreground">Education</span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {menuItems.map((item) => renderMenuItem(item))}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-border space-y-3">
            {/* User Info Card */}
            <div className="flex items-center gap-3 px-4 py-3 bg-accent/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                {(session?.user?.name?.[0] || "U").toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {session?.user?.name || "User"}
                </p>
                <p className="text-xs text-muted-foreground truncate capitalize">
                  {userRole}
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block md:w-64 flex-shrink-0" />
    </>
  );
}