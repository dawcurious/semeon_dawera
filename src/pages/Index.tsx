import { useState, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalPrompt from "@/components/TerminalPrompt";
import TerminalMenu from "@/components/TerminalMenu";
import { Link } from "react-router-dom";

const Index = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  const menuItems = [
    { label: "experience", path: "/experience", delay: 100 },
    { label: "projects", path: "/projects", delay: 300 },
    { label: "contact", path: "/contact", delay: 500 },
  ];

  const roleItems = [
    { label: "senior data engineer", path: "/sde", delay: 100 },
    { label: "full stack software engineer", path: "/fse", delay: 300 },
    { label: "data analyst", path: "/da", delay: 100 },
    { label: "data architect", path: "/ad", delay: 100 },
    { label: "business intelligence analyst", path: "/bia", delay: 100 },
  ];

  useEffect(() => {
    // Simulate terminal startup sequence
    const timer = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-terminal-background text-terminal-foreground">
      <TerminalHeader />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl mx-auto my-8">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-terminal-accent/20">
            {/* Terminal Title Bar */}
            <div className="bg-[#2D2D2D] px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">
                visitor@terminal ~ /portfolio
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-container min-h-[60vh] p-8">
              <div className=" space-y-6 w-full max-w-xl mx-auto relative">
                <div className="mb-8">
                  <TerminalPrompt
                    text="$ whoami"
                    className="text-terminal-accent-alt text-lg mb-2"
                    onComplete={() => setShowTitle(true)}
                    showCursor={false}
                  />

                  {showTitle && (
                    <div className="">
                      <pre className="text-[8px] ">
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
                          onComplete={() => setShowSubtitle(true)}
                        />
                      </pre>
                    </div>
                  )}

                  {showSubtitle && (
                    <>
                      <h2 className="text-xl md:text-2xl  lg:text-6xl text-terminal-foreground/80 mt-2 animate-fadeIn">
                        <TerminalPrompt
                          text="semeon dawera"
                          typingDelay={50}
                          showCursor={false}
                          onComplete={() => setShowMenu(true)}
                        />
                      </h2>
                      <h2 className="text-xl md:text-2xl text-terminal-foreground/80 mt-2 animate-fadeIn">
                        <TerminalPrompt
                          text="portfolio"
                          typingDelay={50}
                          onComplete={() => {
                            setShowMenu(true);
                            setTimeout(() => setShowRoles(true), 1000);
                          }}
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

                {/* {showRoles && (
                  <div className="mt-12 animate-fadeIn">
                    <p className="text-terminal-accent text-sm mb-2">
                      $ roles --list
                    </p>
                    <TerminalMenu items={roleItems} />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
