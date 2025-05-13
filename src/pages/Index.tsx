import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import TerminalMenu from "@/components/TerminalMenu";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Terminal,
  Cloud,
  Shield,
  FileCode,
  Book,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [showCerts, setShowCerts] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const menuItems = [
    { label: "experience", path: "/experience", delay: 50 },
    { label: "projects", path: "/projects", delay: 100 },
    { label: "contact", path: "/contact", delay: 150 },
  ];

  const roleItems = [
    { label: "senior data engineer", path: "/sde", delay: 50 },
    { label: "full stack software engineer", path: "/fse", delay: 100 },
    { label: "data analyst", path: "/da", delay: 50 },
    { label: "data architect", path: "/ad", delay: 50 },
    { label: "business intelligence analyst", path: "/bia", delay: 50 },
  ];

  const certifications = [
    {
      name: "AWS Certified Data Engineer",
      iconLink:
        "https://images.credly.com/size/680x680/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",

      link: "https://www.credly.com/badges/5c5d495a-bbcf-4597-85f5-d6d343e24c6b/public_url",
      icon: <Cloud className="text-amber-400" />,
      color: "terminal-container border-amber-500/30",
    },
    {
      name: "AWS Certified Solutions Architect",
      iconLink:
        "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      link: "https://www.credly.com/badges/d9296dc7-ac7a-4186-9427-e2bad6aba69b/public_url",
      icon: <Cloud className="text-amber-400" />,
      color: "terminal-container border-amber-500/30",
    },
    {
      name: "GCP Professional Data Engineer",
      link: "#",
      iconLink:
        "https://images.credly.com/size/680x680/images/2d613ff8-8879-430b-b2d8-925fa29785e8/image.png",
      icon: <Terminal className="text-blue-400" />,
      color: "terminal-container border-blue-500/30",
    },
    {
      name: "GCP Associate Cloud Engineer",
      link: "#",
      iconLink:
        "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      icon: <Terminal className="text-blue-400" />,
      color: "terminal-container border-blue-500/30",
    },
  ];

  // Latest experience
  const lastExperience = {
    company: "Google (Mandiant Cybersecurity)",
    position: "Senior Data Engineer",
    period: "September 2021 - Present",
    icon: <Briefcase className="text-green-400" />,
    color: "terminal-container border-green-500/30",
    description:
      "Developed internal data pipelines for automating cybersecurity client onboarding workflows using AWS Databrew, reducing onboarding time by 40%. ",
  };

  // Featured project
  const featuredProject = {
    name: "Real-Time Retail Analytics with Kafka, BigQuery & Looker Studio",
    description: "From Checkout to Chart",
    icon: <FileCode className="text-green-400" />,
    color: "terminal-container border-green-500/30",
    tags: ["Python", "AWS", "ETL"],
  };

  useEffect(() => {
    // Simulate terminal startup sequence - make it almost instant
    document.body.classList.add("loaded");

    // Show title immediately
    setShowTitle(true);

    // Show subtitle after a very short delay
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 50);

    // Show menu and all other elements almost immediately
    const menuTimer = setTimeout(() => {
      setShowMenu(true);
      setShowCerts(true);
      setShowExperience(true);
      setShowProjects(true);
      setShowRoles(true);
    }, 100);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(menuTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <TerminalHeader />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto my-8">
          {/* Top Section: Terminal and Certifications */}
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Main Terminal */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
                {/* Terminal Title Bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500">
                    visitor@terminal ~ /portfolio
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="terminal-container min-h-[60vh] p-8 terminal-container">
                  <div className="space-y-6 w-full max-w-xl mx-auto relative">
                    <div className="mb-8">
                      <TerminalPrompt
                        text="$ whoami"
                        className="text-terminal-accent-alt text-lg mb-2"
                        onComplete={() => setShowTitle(true)}
                        showCursor={false}
                      />

                      {showTitle && (
                        <div className=" p-4 rounded-lg backdrop-blur-sm">
                          <pre className="text-[7px]  text-white">
                            <TerminalPrompt
                              text={`
░██████╗███████╗███╗░░░███╗███████╗░█████╗░███╗░░██╗  ██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░░█████╗░
██╔════╝██╔════╝████╗░████║██╔════╝██╔══██╗████╗░██║  ██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗██╔══██╗
╚█████╗░█████╗░░██╔████╔██║█████╗░░██║░░██║██╔██╗██║  ██║░░██║███████║░╚██╗████╗██╔╝█████╗░░██████╔╝███████║
░╚═══██╗██╔══╝░░██║╚██╔╝██║██╔══╝░░██║░░██║██║╚████║  ██║░░██║██╔══██║░░████╔═████║░██╔══╝░░██╔══██╗██╔══██║
██████╔╝███████╗██║░╚═╝░██║███████╗╚█████╔╝██║░╚███║  ██████╔╝██║░░██║░░╚██╔╝░╚██╔╝░███████╗██║░░██║██║░░██║
╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚══════╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝`}
                              typingDelay={0}
                              showCursor={false}
                              onComplete={() => {}}
                            />
                          </pre>
                        </div>
                      )}

                      {showSubtitle && (
                        <>
                          <h2 className="text-xl md:text-2xl lg:text-4xl text-terminal-foreground/80 mt-4 animate-fadeIn">
                            <TerminalPrompt
                              text="Senior Data Engineer"
                              typingDelay={0}
                              showCursor={false}
                              onComplete={() => {}}
                            />
                          </h2>
                          <h2 className="text-xl md:text-md text-terminal-foreground/80 mt-2 animate-fadeIn">
                            <TerminalPrompt
                              text="I specialize in creating data pipelines. My experience extends to cloud services, programming, databases, data modeling and Reporting with industry experience in Cybersecurity (Google Cloud), Retail (Kohls), Energy (AtSite) and Education (2U). "
                              typingDelay={0}
                              onComplete={() => {}}
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

                    <div className={`space-y-8 `}>
                      {/* Contact Information Card */}
                      <Card className="bg-terminal-background border-terminal-accent/30">
                        <CardContent className="space-y-4 pt-8">
                          <div className="grid gap-4 md:grid-cols-2">
                            <a
                              href="tel:571-234-1672"
                              className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                            >
                              <Phone size={18} />
                              <span>571-234-1672</span>
                            </a>
                            <a
                              href="mailto:semeon.dawera@gmail.com"
                              className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                            >
                              <Mail size={18} />
                              <span>semeon.dawera@gmail.com</span>
                            </a>
                            <a
                              href="https://github.com/dawcurious"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                            >
                              <Github size={18} />
                              <span>GitHub Profile</span>
                            </a>
                            <a
                              href="https://www.semeon.work/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                              </svg>
                              <span>www.semeon.work</span>
                            </a>
                            <a
                              href="https://linkedin.com/in/semeondawera"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-terminal-foreground hover:text-terminal-accent"
                            >
                              <Linkedin size={18} />
                              <span>LinkedIn Profile</span>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Containers */}
            <div className="w-full md:w-1/2 space-y-6">
              {/* Certification Terminals */}
              {showCerts && (
                <div>
                  <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">
                    $ certifications --list
                  </h3>
                  <div className="space-y-4">
                    <TooltipProvider>
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className={`animate-fadeIn`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div
                                className={`${cert.color} z-50 p-3 rounded-lg shadow-lg border flex items-center gap-3 w-full relative group cursor-pointer transition-all duration-300 hover:shadow-terminal-accent/20 hover:translate-x-[-5px]`}
                                onClick={() => window.open(cert.link, "_blank")}
                              >
                                <div className="flex-shrink-0 text-terminal-accent p-2  rounded-full">
                                  <img className="h-20" src={cert.iconLink} />
                                </div>
                                <div className="flex-1 text-sm text-terminal-foreground">
                                  <span className="font-bold text-terminal-accent">
                                    {cert.name}
                                  </span>
                                  <div className="text-xs text-terminal-foreground/70">
                                    $ certified --status=active
                                  </div>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="terminal-container text-terminal-accent text-xs"
                                >
                                  <Shield size={10} className="mr-1" /> verified
                                </Badge>
                              </div>
                            </HoverCardTrigger>
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
                  <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">
                    $ last-experience --get
                  </h3>
                  <div className="animate-fadeIn">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div
                          className={`${lastExperience.color} p-3 rounded-lg shadow-lg border flex items-center gap-3 w-full relative group cursor-pointer transition-all duration-300 hover:shadow-terminal-accent/20 hover:translate-x-[-5px]`}
                        >
                          <div className="flex-shrink-0 text-terminal-accent p-2 b-zin-[#1A1F2C]/40 rounded-full">
                            {lastExperience.icon}
                          </div>
                          <div className="flex-1 text-sm text-terminal-foreground">
                            <span className="font-bold text-terminal-accent">
                              {lastExperience.company}
                            </span>
                            <div className="text-xs text-terminal-foreground/70">
                              {lastExperience.position}
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-terminal-background/50 text-terminal-accent-alt text-xs"
                          >
                            <Calendar size={10} className="mr-1" />{" "}
                            {lastExperience.period}
                          </Badge>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 bg-[#1A1F2C] border border-terminal-accent/20 text-terminal-foreground p-4 shadow-xl">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-terminal-accent">
                            {lastExperience.company}
                          </h4>
                          <p className="text-xs font-medium text-terminal-accent-alt">
                            {lastExperience.position}
                          </p>
                          <div className="text-xs text-terminal-foreground/70 mt-2">
                            <p>{lastExperience.description}</p>
                            <p className="text-terminal-accent-alt font-mono mt-2 p-1 bg-[#121212] rounded-sm">
                              $ show experience --company=
                              {lastExperience.company
                                .toLowerCase()
                                .replace(/\s+/g, "-")}
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <div className="mt-4 text-xs text-terminal-foreground/50 text-right">
                    <Link
                      to="/experience"
                      className="text-terminal-accent-alt hover:underline"
                    >
                      $ view --all-experience
                    </Link>
                  </div>
                  <div
                    className="w-full animate-fadeIn"
                    style={{ animationDelay: "100ms" }}
                  >
                    <h3 className="text-terminal-accent-alt mb-4 font-mono text-sm">
                      $ featured-project --get
                    </h3>
                    <Card
                      className={`${featuredProject.color} border border-terminal-accent/20 terminal-container/80 shadow-xl hover:shadow-terminal-accent/10 transition-all duration-300`}
                    >
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="flex-shrink-0 text-terminal-accent p-3  rounded-full">
                          {featuredProject.icon}
                        </div>
                        <div>
                          <CardTitle className="text-terminal-accent text-xl">
                            {featuredProject.name}
                          </CardTitle>
                          <CardDescription className="text-terminal-foreground/70">
                            {featuredProject.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {featuredProject.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-terminal-background/50 text-terminal-accent-alt text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-6 text-xs text-terminal-foreground/50 text-right">
                          <Link
                            to="/projects"
                            className="text-terminal-accent-alt hover:underline"
                          >
                            $ view --project-details
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
