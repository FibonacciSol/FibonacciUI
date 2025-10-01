"use client";
import { useEffect, useState } from "react";

interface CornerLogoProps {
  size?: number;
  isVisible?: boolean;
}

export default function CornerLogo({ size = 64, isVisible = true }: CornerLogoProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  // Glitch effect timer - triggers every 10 seconds (keeps previous behavior)
  useEffect(() => {
    if (!isVisible) return;

    const glitchInterval = window.setInterval(() => {
      setIsGlitching(true);

      // Glitch duration - random between 200-500ms
      const glitchDuration = 200 + Math.random() * 300;

      const t = window.setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);

      // clear the short timeout if component unmounts early
      return () => clearTimeout(t);
    }, 10000); // Every 10 seconds

    return () => window.clearInterval(glitchInterval);
  }, [isVisible]);

  return (
    <div
      className={`fixed top-6 left-6 z-[40] pointer-events-none transition-opacity duration-300 ease-in-out flex items-center gap-3 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src="/fiblogo.png"
        alt="Fibonacci logo"
        draggable={false}
        style={{ width: size, height: size, objectFit: 'contain' }}
        className={`${isGlitching ? 'fibonacci-glitch-effect' : ''}`}
      />

      <span
        className={`text-white text-2xl font-bold tracking-wider transition-all duration-75 ${
          isGlitching ? 'fibonacci-glitch-effect' : ''
        }`}
        style={{
          fontFamily: 'VT323, monospace',
          textShadow: isGlitching
            ? '2px 0 0 #ff0000, -2px 0 0 #00ffff, 0 2px 0 #00ff00, 0 -2px 0 #ffff00'
            : '0 0 10px rgba(255, 255, 255, 0.5)',
          filter: isGlitching
            ? 'hue-rotate(90deg) saturate(2) contrast(1.5)'
            : 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))',
          transform: isGlitching
            ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`
            : 'translate(0, 0)'
        }}
      >
        FIBONACCI
      </span>
    </div>
  );
}
