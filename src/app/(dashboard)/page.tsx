"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }

    // Redirect based on role
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userRole = (session.user as any)?.role || "member";
    if (userRole === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/member/dashboard");
    }
  }, [session, router]);

  return null;
}