import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { apiRequest } from "./api";
import type { CmsUser } from "./types";

type AuthContextValue = {
  user: CmsUser | null;
  loading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<CmsUser>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<CmsUser | null>;
};

const AuthContext =
  createContext<AuthContextValue | null>(
    null,
  );

export function CmsAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<CmsUser | null>(null);
  const [loading, setLoading] =
    useState(true);

  const refreshUser = useCallback(
    async () => {
      try {
        const response = await apiRequest<{
          user: CmsUser;
        }>("/api/auth/me");

        setUser(response.user);
        return response.user;
      } catch {
        setUser(null);
        return null;
      }
    },
    [],
  );

  useEffect(() => {
    void refreshUser().finally(() =>
      setLoading(false),
    );
  }, [refreshUser]);

  const login = useCallback(
    async (
      email: string,
      password: string,
    ) => {
      const response = await apiRequest<{
        user: CmsUser;
      }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      setUser(response.user);
      return response.user;
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await apiRequest<{
        success: boolean;
      }>("/api/auth/logout", {
        method: "POST",
      });
    } finally {
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
      refreshUser,
    }),
    [
      user,
      loading,
      login,
      logout,
      refreshUser,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useCmsAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useCmsAuth must be used inside CmsAuthProvider.",
    );
  }

  return context;
}
