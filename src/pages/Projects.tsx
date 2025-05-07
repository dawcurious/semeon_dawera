import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [showContent, setShowContent] = useState(false);

  const projects = [
    {
      title: "From Checkout to Chart: Real-Time Retail Analytics",
      description:
        "A real-time data pipeline for retail analytics using Kafka, BigQuery & Looker Studio",
      tags: ["Kafka", "BigQuery", "Looker Studio", "Debezium", "Real-time"],
      link: "#",
      repo: "#",
      featured: true,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <TerminalHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            {/* Terminal Title Bar */}
            <div className="bg-gray-100 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-500">
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
                  <div
                    className={`mt-4 transition-opacity duration-500 ${
                      showContent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Projects
                  </div>
                </h1>
                <p
                  className={`text-gray-600 transition-opacity duration-500 delay-100 ${
                    showContent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  A showcase of my technical work and achievements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {showContent &&
                  projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn p-8"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <h3 className="text-xl font-semibold text-terminal-accent-alt mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-terminal-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-auto pt-2">
                        <a
                          href={project.link}
                          className="text-terminal-accent relative group overflow-hidden inline-flex items-center text-sm"
                        >
                          <span className="pr-6 relative z-10 group-hover:translate-x-[-2px] transition-transform">
                            Demo
                          </span>
                          <span className="absolute inset-0 z-0 bg-terminal-accent/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
                          <ExternalLink
                            size={14}
                            className="absolute right-1 z-10 group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                        <a
                          href={project.repo}
                          className="text-terminal-accent relative group overflow-hidden inline-flex items-center text-sm"
                        >
                          <span className="pr-6 relative z-10 group-hover:translate-x-[-2px] transition-transform">
                            Code
                          </span>
                          <span className="absolute inset-0 z-0 bg-terminal-accent/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
                          <Github
                            size={14}
                            className="absolute right-1 z-10 group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm relative inline-block group cursor-pointer">
                  <span className="text-terminal-accent-alt pr-5">
                    Run 'project --detail [name]' for more information
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="inline-block ml-1 text-terminal-accent-alt absolute top-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
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
