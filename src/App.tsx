
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RoleLayout from "./components/RoleLayout";
import RoleIndex from "./pages/role/RoleIndex";
import RoleExperience from "./pages/role/RoleExperience";
import RoleProjects from "./pages/role/RoleProjects";
import RoleContact from "./pages/role/RoleContact";
import { RoleProvider } from "./contexts/RoleContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RoleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Original routes */}
            <Route path="/" element={<Index />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Role-specific routes */}
            <Route path="/:role" element={<RoleLayout />}>
              <Route index element={<RoleIndex />} />
              <Route path="experience" element={<RoleExperience />} />
              <Route path="projects" element={<RoleProjects />} />
              <Route path="contact" element={<RoleContact />} />
            </Route>

            {/* Redirects for specific roles (these are handled by the /:role route above) */}

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;
