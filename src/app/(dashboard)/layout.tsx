import type { Metadata } from "next";
import { ReactNode } from "react";
import DashboardLayoutClient from "./DashboardLayoutClient";

export const metadata: Metadata = {
  title: "Dashboard | Worldpedia Education",
  description: "Dashboard Member/Admin Worldpedia Education",
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}