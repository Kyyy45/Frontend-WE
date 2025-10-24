"use client";

import { Sidebar } from "@/components/sidebar/sidebar";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main
                className={cn(
                    inter.className,
                    "bg-auth-pattern flex min-h-screen flex-col overflow-auto pt-16 md:pt-0",
                )}
            >
                {children}
            </main>
        </div>
    );
}