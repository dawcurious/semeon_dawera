
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="terminal-container max-w-md w-full text-center py-10 px-6">
          <div className="text-terminal-accent text-sm font-mono mb-4">
            $ error --type=404
          </div>
          
          <h1 className="text-4xl font-bold text-terminal-accent mb-4">404</h1>
          <p className="text-terminal-foreground/80 mb-6">
            The requested file could not be found. The path may be incorrect or the file has been moved.
          </p>
          
          <div className="text-terminal-accent-alt text-sm font-mono mb-6">
            $ path: {location.pathname}
          </div>
          
          <pre className="bg-terminal-background/50 p-4 rounded-md border border-terminal-accent/20 text-left mb-6 overflow-x-auto">
            <code className="text-terminal-foreground/70">
              {'>>> Error traceback:\n'}
              {'File not found in directory\n'}
              {'RouteNotFoundError: No matches for location "' + location.pathname + '"'}
            </code>
          </pre>
          
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-terminal-accent text-terminal-background hover:bg-terminal-accent-alt transition-colors rounded-md"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
