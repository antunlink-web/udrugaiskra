import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ONama from "./pages/ONama.tsx";
import StoRadimo from "./pages/StoRadimo.tsx";
import Novosti from "./pages/Novosti.tsx";
import Volontiraj from "./pages/Volontiraj.tsx";
import Radionice from "./pages/Radionice.tsx";
import RadionicaDetail from "./pages/RadionicaDetail.tsx";
import JosipoveStanice from "./pages/JosipoveStanice.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import ScrollToTop from "./components/ScrollToTop";

import { CmsAuthProvider } from "./cms/AuthContext";
import CmsProtectedRoute from "./cms/CmsProtectedRoute";
import CmsLogin from "./cms/CmsLogin";
import CmsLayout from "./cms/CmsLayout";
import CmsDashboard from "./cms/CmsDashboard";
import CmsModulePage from "./cms/CmsModulePage";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <CmsAuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/sto-radimo" element={<StoRadimo />} />
            <Route path="/radionice" element={<Radionice />} />
            <Route
              path="/radionice/:slug"
              element={<RadionicaDetail />}
            />
            <Route path="/novosti" element={<Novosti />} />
            <Route
              path="/novosti/:slug"
              element={<BlogArticle />}
            />
            <Route path="/volontiraj" element={<Volontiraj />} />
            <Route
              path="/doniraj"
              element={
                <ExternalRedirect to="https://iskrasvjetlosti.com/doniraj" />
              }
            />
            <Route
              path="/josipove-stanice"
              element={<JosipoveStanice />}
            />

            <Route
              path="/iskra/prijava"
              element={<CmsLogin />}
            />

            <Route element={<CmsProtectedRoute />}>
              <Route path="/iskra" element={<CmsLayout />}>
                <Route index element={<CmsDashboard />} />
                <Route
                  path="novosti"
                  element={<CmsModulePage module="novosti" />}
                />
                <Route
                  path="dogadjaji"
                  element={<CmsModulePage module="dogadjaji" />}
                />
                <Route
                  path="stranice"
                  element={<CmsModulePage module="stranice" />}
                />
                <Route
                  path="mediji"
                  element={<CmsModulePage module="mediji" />}
                />
                <Route
                  path="korisnici"
                  element={<CmsModulePage module="korisnici" />}
                />
              </Route>
            </Route>

            <Route
              path="/blog"
              element={<Navigate to="/novosti" replace />}
            />
            <Route
              path="/blog/:slug"
              element={<Navigate to="/novosti" replace />}
            />
            <Route
              path="/voditelji-radionica"
              element={<Navigate to="/o-nama" replace />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CmsAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
