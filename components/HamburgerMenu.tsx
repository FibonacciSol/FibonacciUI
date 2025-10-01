"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HamburgerMenuProps {
  isNavigationHubOpen: boolean;
  setIsNavigationHubOpen: (open: boolean) => void;
  isScopeOpen: boolean;
  setIsScopeOpen: (open: boolean) => void;
  isOracleHubOpen: boolean;
  setIsOracleHubOpen: (open: boolean) => void;
  isManifestoOpen: boolean;
  setIsManifestoOpen: (open: boolean) => void;
}

export default function HamburgerMenu({
  isNavigationHubOpen,
  setIsNavigationHubOpen,
  isScopeOpen,
  setIsScopeOpen,
  isOracleHubOpen,
  setIsOracleHubOpen,
  isManifestoOpen,
  setIsManifestoOpen,
}: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(id);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(null);
  };

  const menuItems = [
    {
      id: "retrocausal",
      label: "Retrocausal Lab",
      onClick: () => setIsNavigationHubOpen(true),
      tooltip: "Wallet movements, buyer and seller volume, and trading patterns all feed into one predictive model — explained through the retrocausal lens of the quantum eraser.",
    },
    {
      id: "scope",
      label: "Scope",
      onClick: () => setIsScopeOpen(true),
      tooltip: "Watch new tokens emerge in real time. Predictions are drawn from wallet flows, trading volume, and market patterns, modeled through retrocausal logic of the quantum eraser.",
    },
    {
      id: "oracle",
      label: "Oracle",
      onClick: () => setIsOracleHubOpen(true),
      tooltip: "Retrocausality made conversational. AI agents debate trades as if tomorrow already happened, weaving time-bent insights into a market outlook.",
    },
    {
      id: "manifesto",
      label: "Manifesto",
      onClick: () => setIsManifestoOpen(true),
      tooltip: "Our philosophy on markets, simulation, and the tools we build to cut through the noise and find the truth.",
    },
  ];

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-[30] flex items-center space-x-3">
      {/* Top-right social links (Twitter/X, GitHub, Document placeholder) */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => window.open('https://x.com/IllusioAI', '_blank')}
          className="w-10 h-10 flex items-center justify-center hover:scale-110 hover:drop-shadow-lg transition-all duration-200"
          title="Twitter/X"
          aria-label="Twitter/X"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        <button
          onClick={() => window.open('https://github.com/IllusioAI/Illusio', '_blank')}
          className="w-10 h-10 flex items-center justify-center hover:scale-110 hover:drop-shadow-lg transition-all duration-200"
          title="GitHub"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </button>

        <div className="relative group">
          <div className="w-10 h-10 flex items-center justify-center text-white/60">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
            Coming soon
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </div>
      </div>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-black/80 border border-[#FFD700]/30 hover:border-[#FFD700]/50 flex items-center justify-center transition-all duration-300"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-[#FFD700] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-[#FFD700] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-[#FFD700] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-56 bg-black/95 border border-[#FFD700]/30 rounded-lg overflow-visible shadow-xl"
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative group hover:bg-white/5"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <button
                    onClick={() => handleItemClick(item.onClick)}
                    className="w-full px-4 py-2.5 text-left text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.label}
                  </button>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-[calc(100%+10px)] top-0 w-64 bg-black/95 border border-[#FFD700]/30 rounded-lg p-4 pointer-events-none z-[100] shadow-lg"
                        style={{ fontFamily: "VT323, monospace" }}
                      >
                        <div className="text-sm text-white/90 leading-relaxed">
                          {item.tooltip}
                        </div>
                        {/* Arrow pointing to menu item */}
                        <div className="absolute right-[-6px] top-[18px] w-3 h-3 bg-black/95 border-t border-r border-[#FFD700]/30 transform rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}