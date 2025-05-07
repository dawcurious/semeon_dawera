
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Mail, Home, ArrowLeft } from "lucide-react";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";

const TerminalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentRole } = useRole();
  const location = useLocation();

  // Check if we're in a role-specific route
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isRoleRoute = pathParts.length > 0 && (pathParts[0] === 'sde' || pathParts[0] === 'fse');
  const activeRole = isRoleRoute ? pathParts[0] as 'sde' | 'fse' : currentRole;

  // Get role title if we're in a role route
  const roleTitle = activeRole ? roleConfig[activeRole]?.title : null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="terminal-header sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-terminal-accent text-xl flex items-center">
            <Home size={18} className="mr-2" />
            ~/semeon_dawera
          </Link>
          {isRoleRoute && (
            <span className="ml-2 text-terminal-foreground/60">
              / {activeRole} {roleTitle ? ` (${roleTitle})` : ''}
            </span>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 transition-colors relative z-[1001]"
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {isRoleRoute ? (
            // Role-specific navigation
            <>
              <Link to={`/${activeRole}/experience`} className="menu-item inline-block">
                Experience
              </Link>
              <Link to={`/${activeRole}/projects`} className="menu-item inline-block">
                Projects
              </Link>

              <Link to={`/${activeRole}/contact`} className="menu-item inline-block">
                Contact
              </Link>
            </>
          ) : (
            // Default navigation
            <>
              <Link to="/experience" className="menu-item inline-block">
                Experience
              </Link>
              <Link to="/projects" className="menu-item inline-block">
                Projects
              </Link>

              <Link to="/contact" className="menu-item inline-block">
                Contact
              </Link>
            </>
          )}
          <Button
            variant="outline"
            className="border-terminal-accent text-terminal-accent hover:bg-terminal-accent hover:text-terminal-background"
            size="sm"
            onClick={() => window.open(isRoleRoute ? '/Semeon Dawera FSE 2025.pdf' : '/Semeon Dawera SDE 2025.pdf', '_blank')}
          >
            <FileText className="mr-2 h-4 w-4" /> Resume
          </Button>
          <Button
            className="bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt"
            size="sm"
            onClick={() => window.location.href = isRoleRoute ? `/${activeRole}/contact` : '/contact'}
          >
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-gray-100/95 backdrop-blur-md animate-fadeIn">
          <div className="relative h-full overflow-y-auto">
            {/* Close button at the top right */}
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile menu header */}
            <div className="pt-16 px-6 pb-4 border-b border-terminal-accent/20">
              <Link to="/" className="font-bold text-terminal-accent text-xl flex items-center" onClick={toggleMenu}>
                <Home size={18} className="mr-2" />
                ~/semeon_dawera
              </Link>
              {isRoleRoute && (
                <span className="ml-2 text-terminal-foreground/60 block mt-2">
                  / {activeRole} {roleTitle ? ` (${roleTitle})` : ''}
                </span>
              )}
            </div>

            {/* Navigation items */}
            <nav className="flex flex-col space-y-4 p-6">
              {/* Back button */}
              <Link
                to={location.pathname !== "/" ? "/" : "#"}
                className="flex items-center text-terminal-accent hover:text-terminal-accent-alt mb-4"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                  } else {
                    toggleMenu();
                  }
                }}
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Link>

              {isRoleRoute ? (
                // Role-specific mobile navigation
                <>
                  <Link
                    to={`/${activeRole}/experience`}
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Experience
                  </Link>
                  <Link
                    to={`/${activeRole}/projects`}
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>

                  <Link
                    to={`/${activeRole}/contact`}
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </>
              ) : (
                // Default mobile navigation
                <>
                  <Link
                    to="/experience"
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Experience
                  </Link>
                  <Link
                    to="/projects"
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="menu-item text-xl"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </>
              )}
              <div className="flex flex-col space-y-3 mt-6 border-t border-terminal-accent/20 pt-6">
                <Button
                  variant="outline"
                  className="border-terminal-accent text-terminal-accent hover:bg-terminal-accent hover:text-terminal-background w-full"
                  onClick={() => window.open(isRoleRoute ? '/Semeon Dawera FSE 2025.pdf' : '/Semeon Dawera SDE 2025.pdf', '_blank')}
                >
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </Button>
                <Button
                  className="bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt w-full"
                  onClick={() => {
                    window.location.href = isRoleRoute ? `/${activeRole}/contact` : '/contact';
                    toggleMenu();
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-terminal-accent/20">
                  <a
                    href="https://github.com/semeondawera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/semeondawera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-terminal-accent/10 text-terminal-accent hover:bg-terminal-accent/20 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default TerminalHeader;
