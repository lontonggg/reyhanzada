import { useState, useEffect } from "react";

export const TypingAnimation: React.FC<{ 
  text: string; 
  delay: number; 
  className: string;
  speed?: number;
}> = ({ text, delay, className, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, speed); 

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, hasAnimated, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!hasAnimated && <span className="animate-pulse">|</span>}
    </span>
  );
};