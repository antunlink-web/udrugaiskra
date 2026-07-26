import { useState } from "react";
import {
  CalendarDays,
  FileText,
  Home,
  Images,
  LogOut,
  Menu,
  Newspaper,
  Users,
  X,
} from "lucide-react";
import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
import logo from "@/assets/iskra-logo.png";
import { Button } from "@/components/ui/button";
import { useCmsAuth } from "./AuthContext";
import {
  hasCmsPermission,
  isAdministrator,
} from "./types";

export default function CmsLayout() {
  const { user, logout } = useCmsAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] =
    useState(false);

  if (!user) {
    return null;
  }

  const items = [
    {
      label: "Početna",
      path: "/iskra",
      icon: Home,
      visible: true,
    },
    {
      label: "Novosti",
      path: "/iskra/novosti",
      icon: Newspaper,
      visible: hasCmsPermission(
        user,
        "articles.view",
      ),
    },
    {
      label: "Događaji",
      path: "/iskra/dogadjaji",
      icon: CalendarDays,
      visible: hasCmsPermission(
        user,
        "events.view",
      ),
    },
    {
      label: "Stranice",
      path: "/iskra/stranice",
      icon: FileText,
      visible:
        user.role === "editor" ||
        isAdministrator(user),
    },
    {
      label: "Mediji",
      path: "/iskra/mediji",
      icon: Images,
      visible: hasCmsPermission(
        user,
        "media.view",
      ),
    },
    {
      label: "Korisnici",
      path: "/iskra/korisnici",
      icon: Users,
      visible: isAdministrator(user),
    },
  ].filter((item) => item.visible);

  async function handleLogout() {
    await logout();

    navigate("/iskra/prijava", {
      replace: true,
    });
  }

  const navigation = (
    <>
      <div className="flex h-24 items-center justify-between border-b px-5">
        <a href="/">
          <img
            src={logo}
            alt="Iskra Svjetlosti"
            className="h-16 w-auto object-contain"
          />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="rounded-xl p-2 text-muted-foreground lg:hidden"
          aria-label="Zatvori izbornik"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/iskra"}
              onClick={() =>
                setMobileOpen(false)
              }
              className={({ isActive }) =>
                [
                  "flex h-12 items-center gap-3 rounded-2xl px-4 font-semibold transition",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-primary",
                ].join(" ")
              }
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="mb-3 rounded-2xl bg-muted p-4">
          <p className="font-bold">
            {user.firstName} {user.lastName}
          </p>

          <p className="mt-1 truncate text-xs text-muted-foreground">
            {user.email}
          </p>
        </div>

        <Button
          type="button"
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start rounded-2xl text-muted-foreground hover:text-destructive"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Odjava
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-muted/60">
      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col border-r bg-white lg:flex">
        {navigation}
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileOpen(false)
            }
            className="absolute inset-0 bg-black/40"
            aria-label="Zatvori pozadinu izbornika"
          />

          <aside className="relative flex h-full w-72 flex-col bg-white shadow-2xl">
            {navigation}
          </aside>
        </div>
      ) : null}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setMobileOpen(true)
                }
                className="rounded-2xl border p-3 lg:hidden"
                aria-label="Otvori izbornik"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Iskra CMS
                </p>

                <h1 className="mt-1 text-2xl font-extrabold">
                  Upravljanje sadržajem
                </h1>
              </div>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border bg-white px-4 py-2 text-sm font-bold hover:text-primary sm:block"
            >
              Otvori web stranicu
            </a>
          </div>
        </header>

        <main className="p-5 sm:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
