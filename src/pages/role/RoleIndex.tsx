import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import TerminalMenu from "@/components/TerminalMenu";
import { useRole } from "@/contexts/RoleContext";
import { roleConfig } from "@/components/RoleLayout";
import { useParams } from "react-router-dom";

const RoleIndex = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { currentRole } = useRole();
  const { role } = useParams<{ role: "sde" | "fse" | "bi" | "da" | "ad" }>();

  // Use the role from URL params or fallback to context
  const activeRole = (role as "sde" | "fse" | "bi" | "da" | "ad") || currentRole || "sde";
  const roleInfo = roleConfig[activeRole];

  const menuItems = [
    { label: "experience", path: `/${activeRole}/experience`, delay: 100 },
    { label: "projects", path: `/${activeRole}/projects`, delay: 300 },
    { label: "articles", path: `/${activeRole}/articles`, delay: 400 },
    { label: "contact", path: `/${activeRole}/contact`, delay: 500 },
  ];

  useEffect(() => {
    // Simulate terminal startup sequence
    const timer = setTimeout(() => {
      document.body.classList.add("loaded");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
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
            visitor@terminal ~ /{activeRole}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="terminal-container min-h-[60vh] p-8">
          <div className="space-y-6 w-full max-w-xl mx-auto relative">
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
                  <h2 className="text-xl md:text-2xl lg:text-6xl text-terminal-foreground/80 mt-2 animate-fadeIn">
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
  );
};

export default RoleIndex;
