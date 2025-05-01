import { useEffect, useState } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";

const Experience = () => {
  const [showContent, setShowContent] = useState(false);
  
  // Sample experience data
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: [
        "Designed and implemented data pipelines processing over 500TB of data",
        "Optimized SQL queries resulting in 40% performance improvement",
        "Led a team of 5 engineers in building a real-time analytics platform"
      ]
    },
    {
      title: "Data Engineer",
      company: "DataSystems Ltd.",
      period: "2017 - 2020",
      description: [
        "Developed ETL processes using SQL and Python",
        "Created data warehousing solutions on cloud platforms",
        "Implemented data quality checks and monitoring systems"
      ]
    },
    {
      title: "Database Developer",
      company: "InnovateTech",
      period: "2015 - 2017",
      description: [
        "Designed relational database schemas for enterprise applications",
        "Wrote complex SQL queries and stored procedures",
        "Performed database performance tuning and optimization"
      ]
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
              visitor@terminal ~ /experience
            </div>
          </div>

          <div className="terminal-container p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-terminal-accent mb-2">
                <TerminalPrompt 
                  text="$ cat experience.md" 
                  className="text-terminal-accent-alt text-lg mb-3"
                />
                <div className={`mt-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  Career Experience
                </div>
              </h1>
              <p className={`text-terminal-foreground/70 transition-opacity duration-500 delay-100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                A timeline of my professional journey
              </p>
            </div>
            
            <div className="space-y-8 mt-10">
              {showContent && experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`border-l-2 border-terminal-accent pl-4 py-2 transition-all duration-500 animate-fadeIn`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-terminal-accent-alt">
                      {exp.title} <span className="text-terminal-foreground/70">@ {exp.company}</span>
                    </h3>
                    <span className="text-sm text-terminal-muted">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-terminal-foreground/90 mt-2 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-terminal-accent/20 text-center">
              <p className="text-terminal-muted text-sm">
                Type 'help' for more commands or navigate using the menu
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
};

export default Experience;
