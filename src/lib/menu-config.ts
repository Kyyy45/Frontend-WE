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
  LogOut,
  Plus,
  Database,
} from "lucide-react";

export type MenuItemType = {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  children?: MenuItemType[];
  requiredRole?: "member" | "admin" | "both";
  description?: string;
};

// MEMBER MENU
export const memberMenuItems: MenuItemType[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    label: "Pendaftaran",
    href: "/dashboard/member/pendaftaran",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    label: "Courses",
    href: "/dashboard/member/courses",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "Sertifikat",
    href: "/dashboard/member/certificates",
    icon: <Award className="w-5 h-5" />,
  },
  {
    label: "Transaksi",
    href: "/dashboard/member/transactions",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    label: "Profile",
    href: "/dashboard/member/profile",
    icon: <Settings className="w-5 h-5" />,
    children: [
      {
        label: "Settings",
        href: "/dashboard/member/profile/settings",
        icon: <Settings className="w-5 h-5" />,
      },
    ],
  },
];

// ADMIN MENU
export const adminMenuItems: MenuItemType[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },

  // MANAGEMENT SECTION
  {
    label: "Manajemen",
    icon: <Database className="w-5 h-5" />,
    children: [
      {
        label: "Pendaftaran",
        href: "/dashboard/admin/registrations",
        icon: <ClipboardList className="w-5 h-5" />,
      },
      {
        label: "Courses",
        href: "/dashboard/admin/courses",
        icon: <BookOpen className="w-5 h-5" />,
        children: [
          {
            label: "Buat Course Baru",
            href: "/dashboard/admin/courses/create",
            icon: <Plus className="w-5 h-5" />,
          },
        ],
      },
      {
        label: "Sertifikat",
        href: "/dashboard/admin/certificates",
        icon: <Award className="w-5 h-5" />,
        children: [
          {
            label: "Buat Sertifikat",
            href: "/dashboard/admin/certificates/create",
            icon: <Plus className="w-5 h-5" />,
          },
        ],
      },
      {
        label: "Transaksi",
        href: "/dashboard/admin/transactions",
        icon: <CreditCard className="w-5 h-5" />,
      },
    ],
  },

  // AI & AUTOMATION SECTION
  {
    label: "AI & Otomasi",
    icon: <Brain className="w-5 h-5" />,
    children: [
      {
        label: "AI Training Data",
        href: "/dashboard/admin/ai-training",
        icon: <Database className="w-5 h-5" />,
        description: "Manage FAQ & chatbot knowledge base",
        children: [
          {
            label: "Upload Data Baru",
            href: "/dashboard/admin/ai-training/create",
            icon: <Plus className="w-5 h-5" />,
          },
        ],
      },
      {
        label: "Rekomendasi Program",
        href: "/dashboard/admin/recommendations",
        icon: <Zap className="w-5 h-5" />,
        description: "Manage recommendation rules & filters",
        children: [
          {
            label: "Buat Rule Baru",
            href: "/dashboard/admin/recommendations/create",
            icon: <Plus className="w-5 h-5" />,
          },
        ],
      },
      {
        label: "WhatsApp Notifikasi",
        href: "/dashboard/admin/whatsapp-notifications",
        icon: <Zap className="w-5 h-5" />,
        description: "Configure WA automation",
      },
    ],
  },

  // ANALYTICS SECTION
  {
    label: "Analytics",
    href: "/dashboard/admin/analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Real-time data visualization & reports",
  },

  // SETTINGS
  {
    label: "Pengaturan",
    href: "/dashboard/admin/profile/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];