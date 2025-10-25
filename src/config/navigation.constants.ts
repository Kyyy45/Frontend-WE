import {
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  BarChart3,
  Settings,
  Users,
  BookOpen,
  CreditCard,
  FileText,
  Bell,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavItem[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

// ADMIN NAVIGATION
export const SIDEBAR_ADMIN: NavGroup[] = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        title: "Pendaftaran",
        url: "/admin/registrations",
        icon: FileText,
        items: [
          {
            title: "Data Pendaftar",
            url: "/admin/registrations/list",
          },
          {
            title: "Verifikasi",
            url: "/admin/registrations/verification",
          },
          {
            title: "Status Pembayaran",
            url: "/admin/registrations/payment-status",
          },
        ],
      },
      {
        title: "Program Belajar",
        url: "/admin/programs",
        icon: BookOpen,
        items: [
          {
            title: "Daftar Program",
            url: "/admin/programs/list",
          },
          {
            title: "Tambah Program",
            url: "/admin/programs/create",
          },
          {
            title: "Kelola Kelas",
            url: "/admin/programs/classes",
          },
        ],
      },
      {
        title: "Siswa",
        url: "/admin/students",
        icon: Users,
        items: [
          {
            title: "Data Siswa",
            url: "/admin/students/list",
          },
          {
            title: "Progress Belajar",
            url: "/admin/students/progress",
          },
        ],
      },
    ],
  },
  {
    label: "Intelligence & Automation",
    items: [
      {
        title: "AI Chatbot",
        url: "/admin/chatbot",
        icon: MessageSquare,
        items: [
          {
            title: "Percakapan",
            url: "/admin/chatbot/conversations",
          },
          {
            title: "Knowledge Base",
            url: "/admin/chatbot/knowledge-base",
          },
          {
            title: "Escalation",
            url: "/admin/chatbot/escalations",
          },
          {
            title: "Analytics",
            url: "/admin/chatbot/analytics",
          },
        ],
      },
      {
        title: "Rekomendasi Sistem",
        url: "/admin/recommendations",
        icon: Sparkles,
        items: [
          {
            title: "Konfigurasi",
            url: "/admin/recommendations/settings",
          },
          {
            title: "Riwayat Rekomendasi",
            url: "/admin/recommendations/history",
          },
          {
            title: "Performa Model",
            url: "/admin/recommendations/performance",
          },
        ],
      },
      {
        title: "Notifikasi WhatsApp",
        url: "/admin/notifications",
        icon: Bell,
        items: [
          {
            title: "Template Pesan",
            url: "/admin/notifications/templates",
          },
          {
            title: "Riwayat Pengiriman",
            url: "/admin/notifications/history",
          },
          {
            title: "Konfigurasi",
            url: "/admin/notifications/settings",
          },
        ],
      },
    ],
  },
  {
    label: "Analytics & Reports",
    items: [
      {
        title: "Analytics Dashboard",
        url: "/admin/analytics",
        icon: BarChart3,
        items: [
          {
            title: "Tren Pendaftaran",
            url: "/admin/analytics/registration-trends",
          },
          {
            title: "Status Pembayaran",
            url: "/admin/analytics/payment-status",
          },
          {
            title: "Demografi Siswa",
            url: "/admin/analytics/student-demographics",
          },
          {
            title: "Program Performance",
            url: "/admin/analytics/program-performance",
          },
        ],
      },
      {
        title: "Laporan",
        url: "/admin/reports",
        icon: FileText,
        items: [
          {
            title: "Laporan Bulanan",
            url: "/admin/reports/monthly",
          },
          {
            title: "Export Data",
            url: "/admin/reports/export",
          },
        ],
      },
    ],
  },
  {
    label: "Administration",
    items: [
      {
        title: "Pengaturan",
        url: "/admin/settings",
        icon: Settings,
        items: [
          {
            title: "Profil Lembaga",
            url: "/admin/settings/institution",
          },
          {
            title: "Manajemen User",
            url: "/admin/settings/users",
          },
          {
            title: "Integrasi",
            url: "/admin/settings/integrations",
          },
          {
            title: "Keamanan",
            url: "/admin/settings/security",
          },
        ],
      },
    ],
  },
];

// MEMBER NAVIGATION
export const SIDEBAR_MEMBER: NavGroup[] = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/member/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Pembelajaran",
    items: [
      {
        title: "Program Saya",
        url: "/member/my-programs",
        icon: BookOpen,
        items: [
          {
            title: "Program Aktif",
            url: "/member/my-programs/active",
          },
          {
            title: "Riwayat Program",
            url: "/member/my-programs/history",
          },
        ],
      },
      {
        title: "Rekomendasi Program",
        url: "/member/recommendations",
        icon: Sparkles,
        items: [
          {
            title: "Untuk Anda",
            url: "/member/recommendations/personalized",
          },
          {
            title: "Program Populer",
            url: "/member/recommendations/popular",
          },
        ],
      },
    ],
  },
  {
    label: "Transaksi",
    items: [
      {
        title: "Pembayaran",
        url: "/member/payments",
        icon: CreditCard,
        items: [
          {
            title: "Riwayat Pembayaran",
            url: "/member/payments/history",
          },
          {
            title: "Invoice",
            url: "/member/payments/invoices",
          },
        ],
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        title: "Bantuan & FAQ",
        url: "/member/support/faq",
        icon: MessageSquare,
      },
      {
        title: "Hubungi Kami",
        url: "/member/support/contact",
        icon: Bell,
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        title: "Profil Saya",
        url: "/member/profile",
        icon: Users,
        items: [
          {
            title: "Edit Profil",
            url: "/member/profile/edit",
          },
          {
            title: "Ubah Password",
            url: "/member/profile/change-password",
          },
        ],
      },
      {
        title: "Pengaturan",
        url: "/member/settings",
        icon: Settings,
        items: [
          {
            title: "Notifikasi",
            url: "/member/settings/notifications",
          },
          {
            title: "Privasi",
            url: "/member/settings/privacy",
          },
        ],
      },
    ],
  },
];
