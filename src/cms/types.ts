export type PermissionKey =
  | "articles.view"
  | "articles.create"
  | "articles.edit"
  | "articles.publish"
  | "articles.archive"
  | "events.view"
  | "events.create"
  | "events.edit"
  | "events.publish"
  | "events.archive"
  | "media.view"
  | "media.upload"
  | "media.edit"
  | "media.archive";

export type CmsUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role:
    | "superadmin"
    | "admin"
    | "editor"
    | "workshop_leader";
  passwordRequired: boolean;
  permissions: PermissionKey[];
};

export function hasCmsPermission(
  user: CmsUser | null,
  permission: PermissionKey,
): boolean {
  if (!user) {
    return false;
  }

  if (
    user.role === "admin" ||
    user.role === "superadmin"
  ) {
    return true;
  }

  return user.permissions.includes(permission);
}

export function isAdministrator(
  user: CmsUser | null,
): boolean {
  return (
    user?.role === "admin" ||
    user?.role === "superadmin"
  );
}
