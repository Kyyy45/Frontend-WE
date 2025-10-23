import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Auth | Worldpedia Education",
  description:
    "Login, Register, or Activate your account on Worldpedia Education.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        inter.className,
        "bg-auth-pattern flex min-h-screen flex-col",
      )}
    >
      {children}
    </div>
  );
}
