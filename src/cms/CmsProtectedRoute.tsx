import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCmsAuth } from "./AuthContext";

export default function CmsProtectedRoute() {
  const { user, loading } = useCmsAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="rounded-3xl border bg-white px-8 py-7 shadow-lg">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            Učitavanje sustava…
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/iskra/prijava"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}
