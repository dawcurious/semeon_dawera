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
  typingDelay = 10,
  showCursor = true,
  className = "",
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Instead of typing character by character, display the entire text at once
    // with just a small delay to simulate the appearance of typing
    const timeout = setTimeout(() => {
      setDisplayText(text);
      setIsTyping(false);
      if (onComplete) onComplete();
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [text, typingDelay, onComplete]);

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
