import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import FSEIndex from "./pages/fse/Index";
import FSEExperience from "./pages/fse/Experience";
import FSEProjects from "./pages/fse/Projects";
import FSEProjectDetail from "./pages/fse/ProjectDetail";
import FSEArticles from "./pages/fse/Articles";
import FSEContact from "./pages/fse/Contact";
import NotFound from "./pages/NotFound";
import RoleLayout from "./components/RoleLayout";
import RoleIndex from "./pages/role/RoleIndex";
import RoleExperience from "./pages/role/RoleExperience";
import RoleProjects from "./pages/role/RoleProjects";
import RoleArticles from "./pages/role/RoleArticles";
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
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />

            {/* FSE specific routes */}
            <Route path="/fse" element={<FSEIndex />} />
            <Route path="/fse/experience" element={<FSEExperience />} />
            <Route path="/fse/projects" element={<FSEProjects />} />
            <Route path="/fse/projects/:projectId" element={<FSEProjectDetail />} />
            <Route path="/fse/articles" element={<FSEArticles />} />
            <Route path="/fse/contact" element={<FSEContact />} />

            {/* Role-specific routes using RoleLayout */}
            <Route path="/:role" element={<RoleLayout />}>
              <Route index element={<RoleIndex />} />
              <Route path="experience" element={<RoleExperience />} />
              <Route path="projects" element={<RoleProjects />} />
              <Route path="articles" element={<RoleArticles />} />
              <Route path="contact" element={<RoleContact />} />
            </Route>

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RoleProvider>
  </QueryClientProvider>
);

export default App;
