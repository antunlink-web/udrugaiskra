import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import JosipoveStanice from "./pages/JosipoveStanice.tsx";
import VoditeljiRadionica from "./pages/VoditeljiRadionica.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import Doniraj from "./pages/Doniraj.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/josipove-stanice" element={<JosipoveStanice />} />
          <Route path="/voditelji-radionica" element={<VoditeljiRadionica />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/doniraj" element={<Doniraj />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
