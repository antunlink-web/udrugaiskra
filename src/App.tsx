import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ONama from "./pages/ONama.tsx";
import StoRadimo from "./pages/StoRadimo.tsx";
import Novosti from "./pages/Novosti.tsx";
import Volontiraj from "./pages/Volontiraj.tsx";
import Radionice from "./pages/Radionice.tsx";
import RadionicaDetail from "./pages/RadionicaDetail.tsx";
import Doniraj from "./pages/Doniraj.tsx";
import JosipoveStanice from "./pages/JosipoveStanice.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/sto-radimo" element={<StoRadimo />} />
          <Route path="/radionice" element={<Radionice />} />
          <Route path="/radionice/:slug" element={<RadionicaDetail />} />
          <Route path="/novosti" element={<Novosti />} />
          <Route path="/novosti/:slug" element={<BlogArticle />} />
          <Route path="/volontiraj" element={<Volontiraj />} />
          <Route path="/doniraj" element={<Doniraj />} />
          <Route path="/josipove-stanice" element={<JosipoveStanice />} />
          {/* Legacy redirects */}
          <Route path="/blog" element={<Navigate to="/novosti" replace />} />
          <Route path="/blog/:slug" element={<Navigate to="/novosti" replace />} />
          <Route path="/voditelji-radionica" element={<Navigate to="/o-nama" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
