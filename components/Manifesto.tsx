"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ManifestoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Manifesto({ isOpen, onClose }: ManifestoProps) {
  const manifestoText = `Fibonacci persists because markets repeat themselves like a simulation running familiar code. Ratios appear, not by chance, but because flow organizes in patterns. What looks like noise is often structure waiting to be recognized. Our task is to build an instrument that sees this structure early, when decisions are still flexible and inexpensive.

Every token is an experiment. We begin with observation: who enters, who exits, where momentum holds, where it fades. We mark the natural moves and filter out the staged ones. The first small bends matter most; they signal the larger turns to come. As the landscape shifts, we shift with it. The instrument updates; so do we.

We refine the record. We cut out distortions and keep what stands after inspection. Then we let tomorrow inform today. We simulate credible paths and track the footprints they would leave in the present. When those prints appear, we act. When they do not, we wait.

This work is visible. The Retrocausality Lab shows flow as it happens — live pulses, branching paths, updates unfolding in real time. Every view is open. Every change of stance is logged. Confidence comes from what can be checked, not what can be shouted.

This is not prediction in the mystical sense. It is practice. Observe, refine, simulate, compare — then act when the picture is sharp and still early. We choose discipline over noise, transparency over obscurity, and reversibility over pride. Certainty is never offered. Clarity is. And clarity, before consensus, is enough.`;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[50] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-default"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-black/90 border border-[#FFD700]/20 rounded-lg p-4 max-w-6xl w-full mx-2 relative cursor-default"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: 'VT323, monospace',
              maxHeight: 'calc(100vh - 2rem)',
            }}
          >
            {/* Manifesto content */}
            <div className="text-white leading-relaxed">
              <div className="flex justify-between items-center mb-6 border-b border-[#FFD700]/20 pb-3">
                <h1 className="text-2xl font-bold">
                  MANIFESTO
                </h1>
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-xl ml-4 cursor-pointer"
                  aria-label="Close manifesto"
                >
                  ×
                </button>
              </div>
              
              <div className="text-base space-y-3 leading-tight">
                {manifestoText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/90">
                          {paragraph}
                        </p>
                ))}
              </div>
              
              {/* Powered by section */}
              <div className="mt-8 pt-6 border-t border-[#FFD700]/20">
                <div className="flex items-center justify-center space-x-6">
                  <span className="text-white/60 text-sm font-mono">Powered by</span>
                  <div className="flex items-center space-x-4">
                    <img 
                      src="/OPENAI.png" 
                      alt="OpenAI" 
                      className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                    />
                    <img 
                      src="/GEMENI.png" 
                      alt="Gemini" 
                      className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                    />
                    <img 
                      src="/PERP.png" 
                      alt="Perplexity" 
                      className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                    </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
