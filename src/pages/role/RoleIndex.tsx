
import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import TerminalMenu from "@/components/TerminalMenu";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";
import { useParams } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Terminal, Cloud, Shield, FileCode, Book, Calendar, Briefcase } from "lucide-react"; 
import { Badge } from "@/components/ui/badge";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RoleIndex = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const { currentRole } = useRole();
  const { role } = useParams<{ role: "sde" | "fse" }>();

  // Use the role from URL params or fallback to context
  const activeRole = (role as "sde" | "fse") || currentRole || "sde";
  const roleInfo = roleConfig[activeRole];

  const menuItems = [
    { label: "experience", path: `/${activeRole}/experience`, delay: 100 },
    { label: "projects", path: `/${activeRole}/projects`, delay: 300 },
    { label: "contact", path: `/${activeRole}/contact`, delay: 500 },
  ];

  const certifications = [
    { 
      name: "AWS Certified Data Engineer", 
      icon: <Cloud className="text-amber-400" />,
      color: "bg-zinc-900 border-amber-500/30" 
    },
    { 
      name: "AWS Certified Solutions Architect", 
      icon: <Cloud className="text-amber-400" />,
      color: "bg-zinc-900 border-amber-500/30"
    },
    { 
      name: "GCP Professional Data Engineer", 
      icon: <Terminal className="text-blue-400" />,
      color: "bg-zinc-900 border-blue-500/30"
    },
    { 
      name: "GCP Associate Cloud Engineer", 
      icon: <Terminal className="text-blue-400" />,
      color: "bg-zinc-900 border-blue-500/30"
    }
  ];

  // Last experience by role
  const lastExperience = {
    sde: {
      company: "DataStream Technologies",
      position: "Senior Data Engineer",
      period: "2020 - Present",
      icon: <Briefcase className="text-green-400" />,
      color: "bg-zinc-900 border-green-500/30",
      description: "Leading ETL pipeline development and optimization for enterprise data solutions",
    },
    fse: {
      company: "WebFront Solutions",
      position: "Fullstack Software Engineer",
      period: "2019 - Present",
      icon: <Briefcase className="text-purple-400" />,
      color: "bg-zinc-900 border-purple-500/30",
      description: "Building responsive web applications with React, Node.js and TypeScript",
    }
  };

  // Role-specific featured project (just one per role)
  const featuredProjects = {
    sde: {
      name: "DataFlow Engine",
      description: "High-performance ETL system for enterprise data processing with automated validation and monitoring",
      icon: <FileCode className="text-green-400" />,
      color: "bg-zinc-900 border-green-500/30",
      tags: ["Python", "AWS", "ETL"]
    },
    fse: {
      name: "E-commerce UI",
      description: "Modern, responsive e-commerce interface with real-time inventory management and payment processing",
      icon: <FileCode className="text-purple-400" />,
      color: "bg-zinc-900 border-purple-500/30",
      tags: ["React", "TypeScript", "Node.js"]
    }
  };

  // Get the appropriate experience and featured project
  const experience = lastExperience[activeRole];
  const featuredProject = featuredProjects[activeRole];

  useEffect(() => {
    // Simulate terminal startup sequence
    const timer = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show certifications, experience and projects with delays
    if (showMenu) {
      const certTimer = setTimeout(() => {
        setShowCerts(true);
      }, 800);
      
      const expTimer = setTimeout(() => {
        setShowExperience(true);
      }, 1200);
      
      const projectTimer = setTimeout(() => {
        setShowProjects(true);
      }, 1600);
      
      return () => {
        clearTimeout(certTimer);
        clearTimeout(expTimer);
        clearTimeout(projectTimer);
      };
    }
  }, [showMenu]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto my-8 px-4">
      {/* Main Terminal */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
            {/* Terminal Title Bar */}
            <div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">
                visitor@terminal ~ /{activeRole}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-container min-h-[60vh] p-8 bg-gradient-to-b from-[#121212] to-[#1A1F2C]">
              <div className="space-y-6 w-full max-w-xl mx-auto relative">
                <div className="mb-8">
                  <TerminalPrompt
                    text="$ whoami"
                    className="text-terminal-accent-alt text-lg mb-2"
                    onComplete={() => setShowTitle(true)}
                    showCursor={false}
                  />

                  {showTitle && (
                    <div className="bg-[#1A1F2C]/40 p-4 rounded-lg backdrop-blur-sm">
                      <pre className="text-[8px] md:text-xs text-white">
                        <TerminalPrompt
                          text={`
░██████╗███████╗███╗░░░███╗███████╗░█████╗░███╗░░██╗
██╔════╝██╔════╝████╗░████║██╔════╝██╔══██╗████╗░██║
╚█████╗░█████╗░░██╔████╔██║█████╗░░██║░░██║██╔██╗██║
░╚═══██╗██╔══╝░░██║╚██╔╝██║██╔══╝░░██║░░██║██║╚████║
██████╔╝███████╗██║░╚═╝░██║███████╗╚█████╔╝██║░╚███║
╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚══════╝░╚════╝░╚═╝░░╚══╝`}
                          typingDelay={0}
                          showCursor={false}
                          onComplete={() => setShowSubtitle(true)}
                        />
                      </pre>
                    </div>
                  )}

                  {showSubtitle && (
                    <>
                      <h2 className="text-xl md:text-2xl lg:text-6xl text-terminal-foreground/80 mt-4 animate-fadeIn">
                        <TerminalPrompt
                          text="semeon dawera"
                          typingDelay={50}
                          showCursor={false}
                          onComplete={() => setShowMenu(true)}
                        />
                      </h2>
                      <h2 className="text-xl md:text-2xl text-terminal-foreground/80 mt-2 animate-fadeIn">
                        <TerminalPrompt
                          text={roleInfo.title}
                          typingDelay={50}
                          onComplete={() => setShowMenu(true)}
                        />
                      </h2>
                    </>
                  )}
                </div>

                {showMenu && (
                  <div className="mt-12 animate-fadeIn">
                    <p className="text-terminal-accent text-sm mb-2">
                      $ navigation --list
                    </p>
                    <TerminalMenu items={menuItems} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Containers */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Certification Terminals */}
          {showCerts && (
            <div>
              <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">$ certifications --list</h3>
              <div className="space-y-4">
                <TooltipProvider>
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`animate-fadeIn`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className={`${cert.color} p-3 rounded-lg shadow-lg border flex items-center gap-3 w-full relative group cursor-pointer transition-all duration-300 hover:shadow-terminal-accent/20 hover:translate-x-[-5px]`}>
                            <div className="flex-shrink-0 text-terminal-accent p-2 bg-[#1A1F2C]/40 rounded-full">
                              {cert.icon}
                            </div>
                            <div className="flex-1 text-sm text-terminal-foreground">
                              <span className="font-bold text-terminal-accent">{cert.name}</span>
                              <div className="text-xs text-terminal-foreground/70">$ certified --status=active</div>
                            </div>
                            <Badge variant="outline" className="bg-terminal-background/50 text-terminal-accent text-xs">
                              <Shield size={10} className="mr-1" /> verified
                            </Badge>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-[#1A1F2C] border border-terminal-accent/20 text-terminal-foreground p-4 shadow-xl">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-terminal-accent">{cert.name}</h4>
                              <div className="text-xs text-terminal-foreground/70">
                                <p>Active & Validated</p>
                                <p className="text-terminal-accent-alt font-mono mt-2 p-1 bg-[#121212] rounded-sm">$ show certificate --id=sec_19a84f</p>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          )}
        
          {/* Latest Experience */}
          {showExperience && (
            <div>
              <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">$ last-experience --get</h3>
              <div className="animate-fadeIn">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className={`${experience.color} p-3 rounded-lg shadow-lg border flex items-center gap-3 w-full relative group cursor-pointer transition-all duration-300 hover:shadow-terminal-accent/20 hover:translate-x-[-5px]`}>
                      <div className="flex-shrink-0 text-terminal-accent p-2 bg-[#1A1F2C]/40 rounded-full">
                        {experience.icon}
                      </div>
                      <div className="flex-1 text-sm text-terminal-foreground">
                        <span className="font-bold text-terminal-accent">{experience.company}</span>
                        <div className="text-xs text-terminal-foreground/70">{experience.position}</div>
                      </div>
                      <Badge variant="outline" className="bg-terminal-background/50 text-terminal-accent-alt text-xs">
                        <Calendar size={10} className="mr-1" /> {experience.period}
                      </Badge>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-[#1A1F2C] border border-terminal-accent/20 text-terminal-foreground p-4 shadow-xl">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-terminal-accent">{experience.company}</h4>
                      <p className="text-xs font-medium text-terminal-accent-alt">{experience.position}</p>
                      <div className="text-xs text-terminal-foreground/70 mt-2">
                        <p>{experience.description}</p>
                        <p className="text-terminal-accent-alt font-mono mt-2 p-1 bg-[#121212] rounded-sm">$ show experience --company={experience.company.toLowerCase().replace(/\s+/g, '-')}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="mt-4 text-xs text-terminal-foreground/50 text-right">
                <Link to={`/${activeRole}/experience`} className="text-terminal-accent-alt hover:underline">
                  $ view --all-experience
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Featured Project */}
      {showProjects && (
        <div className="w-full animate-fadeIn" style={{ animationDelay: "900ms" }}>
          <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">$ featured-project --get</h3>
          <Card className={`${featuredProject.color} border border-terminal-accent/20 bg-zinc-900/80 shadow-xl hover:shadow-terminal-accent/10 transition-all duration-300`}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex-shrink-0 text-terminal-accent p-3 bg-[#1A1F2C]/40 rounded-full">
                {featuredProject.icon}
              </div>
              <div>
                <CardTitle className="text-terminal-accent text-xl">{featuredProject.name}</CardTitle>
                <CardDescription className="text-terminal-foreground/70">{featuredProject.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {featuredProject.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-terminal-background/50 text-terminal-accent-alt text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 text-xs text-terminal-foreground/50 text-right">
                <Link to={`/${activeRole}/projects`} className="text-terminal-accent-alt hover:underline">
                  $ view --project-details
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RoleIndex;
