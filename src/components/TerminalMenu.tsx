import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  delay: number;
}

interface TerminalMenuProps {
  items: MenuItem[];
  onMenuLoaded?: () => void;
}

const TerminalMenu: React.FC<TerminalMenuProps> = ({ items, onMenuLoaded }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Load each menu item with its specified delay
    const timers: NodeJS.Timeout[] = [];

    items.forEach((item, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);

        // If this is the last item, call the onMenuLoaded callback
        if (index === items.length - 1 && onMenuLoaded) {
          setTimeout(onMenuLoaded, 300);
        }
      }, item.delay);

      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [items, onMenuLoaded]);

  return (
    <nav className="flex flex-col space-y-2 py-4">
      {items.map((item, index) => (
        <div
          key={item.path}
          className={`transition-all duration-500 ${
            visibleItems.includes(index)
              ? "opacity-100 text-terminal-accent transform translate-y-4"
              : "opacity-100 text-terminal-accent transform translate-y-4"
          }`}
        >
          <Link to={item.path} className="menu-item text-lg md:text-xl">
            {"> "}
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default TerminalMenu;
