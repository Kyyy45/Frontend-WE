export type UserRole = "member" | "admin" | "super_admin";

export const rolePermissions: Record<UserRole, string[]> = {
  member: [
    "view:dashboard",
    "view:pendaftaran",
    "view:courses",
    "view:certificates",
    "view:transactions",
    "edit:profile",
  ],
  admin: [
    // All member permissions
    "view:dashboard",
    "view:pendaftaran",
    "view:courses",
    "view:certificates",
    "view:transactions",
    // Admin specific
    "create:course",
    "edit:course",
    "delete:course",
    "manage:registrations",
    "manage:certificates",
    "manage:transactions",
    "manage:ai-training",
    "manage:recommendations",
    "view:analytics",
    "send:whatsapp",
  ],
  super_admin: [
    // All permissions
    "*",
  ],
};

export function hasPermission(userRole: UserRole, permission: string): boolean {
  const permissions = rolePermissions[userRole] || [];
  return permissions.includes("*") || permissions.includes(permission);
}

export function canAccessMenu(userRole: UserRole, requiredRole?: string): boolean {
  if (!requiredRole || requiredRole === "both") return true;
  return userRole === requiredRole;
}