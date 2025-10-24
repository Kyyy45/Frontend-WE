import {
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  Award,
  CreditCard,
  Brain,
  Zap,
  BarChart3,
  Settings,
  Database,
} from "lucide-react";

// MEMBER MENU
const SIDEBAR_MEMBER = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Pendaftaran",
    href: "/dashboard/member/pendaftaran",
    icon: <ClipboardList />,
  },
  {
    label: "Courses",
    href: "/dashboard/member/courses",
    icon: <BookOpen />,
  },
  {
    label: "Sertifikat",
    href: "/dashboard/member/certificates",
    icon: <Award />,
  },
  {
    label: "Transaksi",
    href: "/dashboard/member/transactions",
    icon: <CreditCard />,
  },
  {
    label: "Profile",
    href: "/dashboard/member/profile",
    icon: <Settings />,
  },
];

// ADMIN MENU
const SIDEBAR_ADMIN = [
  {
    label: "Dashboard",
    href: "/dashboard/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Manajemen",
    href: "#",
    icon: <Database />,
    children: [
      {
        label: "Pendaftaran",
        href: "/dashboard/admin/registrations",
        icon: <ClipboardList />,
      },
      {
        label: "Courses",
        href: "/dashboard/admin/courses",
        icon: <BookOpen />,
      },
      {
        label: "Sertifikat",
        href: "/dashboard/admin/certificates",
        icon: <Award />,
      },
      {
        label: "Transaksi",
        href: "/dashboard/admin/transactions",
        icon: <CreditCard />,
      },
    ],
  },
  {
    label: "AI & Otomasi",
    href: "#",
    icon: <Brain />,
    children: [
      {
        label: "AI Training",
        href: "/dashboard/admin/ai-training",
        icon: <Database />,
      },
      {
        label: "Rekomendasi",
        href: "/dashboard/admin/recommendations",
        icon: <Zap />,
      },
      {
        label: "WhatsApp",
        href: "/dashboard/admin/whatsapp-notifications",
        icon: <Zap />,
      },
    ],
  },
  {
    label: "Analytics",
    href: "/dashboard/admin/analytics",
    icon: <BarChart3 />,
  },
  {
    label: "Pengaturan",
    href: "/dashboard/admin/profile/settings",
    icon: <Settings />,
  },
];

export {SIDEBAR_MEMBER, SIDEBAR_ADMIN}