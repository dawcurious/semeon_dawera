import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [showContent, setShowContent] = useState(false);
  
  // Sample projects data
  const projects = [
    {
      title: "DataFlow Engine",
      description: "High-performance ETL system built with Python and SQL",
      tags: ["SQL", "Python", "AWS", "ETL"],
      link: "#",
      repo: "#"
    },
    {
      title: "SQL Query Optimizer",
      description: "Tool for automatically optimizing complex SQL queries for better performance",
      tags: ["SQL", "Optimization", "Database", "Performance"],
      link: "#",
      repo: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Dashboard for visualizing streaming data using modern web technologies",
      tags: ["SQL", "React", "Streaming", "Visualization"],
      link: "#",
      repo: "#"
    },
    {
      title: "Database Migration Tool",
      description: "Utility for seamlessly migrating between different database systems",
      tags: ["SQL", "Migration", "Databases", "CLI"],
      link: "#",
      repo: "#"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
            {/* Terminal Title Bar */}
            <div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">
                visitor@terminal ~ /projects
              </div>
            </div>

          <div className="terminal-container p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                <TerminalPrompt 
                  text="$ ls -la projects/" 
                  className="text-terminal-accent-alt text-lg mb-3"
                />
                <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  Projects
                </div>
              </h1>
              <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                A showcase of my technical work and achievements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {showContent && projects.map((project, index) => (
                <div 
                  key={index}
                  className="terminal-container border-terminal-accent/30 hover:border-terminal-accent transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-semibold text-terminal-accent-alt mb-2">
                    {project.title}
                  </h3>
                  <p className="text-terminal-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-md bg-terminal-background border border-terminal-accent/40 text-terminal-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pt-2">
                    <a 
                      href={project.link}
                      className="text-terminal-accent hover:text-terminal-accent-alt flex items-center text-sm"
                    >
                      <ExternalLink size={14} className="mr-1" /> Demo
                    </a>
                    <a 
                      href={project.repo}
                      className="text-terminal-accent hover:text-terminal-accent-alt flex items-center text-sm"
                    >
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-terminal-accent/20 text-center">
              <p className="text-terminal-muted text-sm">
                Run 'project --detail [name]' for more information
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
};

export default Projects;
