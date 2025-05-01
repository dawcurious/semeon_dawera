import React, { useState, useEffect } from "react";

interface TerminalPromptProps {
  text: string;
  typingDelay?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  text,
  typingDelay = 50,
  showCursor = true,
  className = "",
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingDelay);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, typingDelay, onComplete]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-terminal-accent">{displayText}</span>
      {(isTyping || showCursor) && (
        <span className="inline-block w-2 h-4 bg-terminal-accent animate-blink ml-0.5"></span>
      )}
    </div>
  );
};

export default TerminalPrompt;
