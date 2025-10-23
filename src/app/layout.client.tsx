"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { SessionProvider } from "next-auth/react";

export function RootLayoutClient({
  children,
  fontClassName,
}: {
  children: React.ReactNode;
  fontClassName: string;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontClassName}
    >
      <body
        className={cn(
          "antialiased min-h-screen bg-background",
          fontClassName
        )}
      >
        <SessionProvider>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}