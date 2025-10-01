"use client";
import React, { useEffect, useState } from "react";

const PHRASES = [
  "/ Scanning context and inferring the next task...",
  "/ Initiating autonomous task discovery.",
  "/ I will infer objectives and act without prompting.",
  "/ Observing signals, selecting the next optimal operation.",
  "/ Prioritizing actions based on evidence and impact.",
  "/ Signals are data; I translate them into steps.",
  "/ Every decision echoes backward.",

  "/ Trade the echo, not the news.",
  "/ Time doesn't move. We do.",
  "/ Probability is the new price.",
  "/ We don't predict. We interfere.",
  "/ Edges live between cause and effect.",
  "/ Entangle with the market.",
  "/ Hindsight is a setting, not a constraint.",
  "/ Outrun the present.",
  "/ Patterns are agreements the market forgot it made.",
  "/ Alpha hides in interference.",
  "/ Tomorrow keeps editing yesterday.",
  "/ The chart is a laboratory.",
  "/ Every order is a photon.",
  "/ We trade the experiment, not the outcome.",
  "/ Causality is optional.",
  "/ The signal arrived before the event.",
  "/ Forecasts are memories from the other direction.",
  "/ Price is a shadow of information.",
  "/ Retrocausality is data, not dogma.",
  "/ Cross the line where models blur.",
  "/ Hold the wave, not the tick.",
  "/ Maps of time, drawn in light.",
  "/ Bet on the interference, not the candle.",
  "/ Your edge: reversible time.",
  "/ Markets breathe. Breathe with them.",
  "/ See the pattern that looks back."
];

export default function LeftTypewriter() {
  const [visibleIdx, setVisibleIdx] = useState(0);

  // animation timing (ms)
  const DURATION = 3000; // total time per phrase: faster continuous zoom and fade

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisibleIdx((i) => (i + 1) % PHRASES.length);
    }, DURATION);
    setVisibleIdx(0);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none select-none fixed left-[4vw] md:left-[8vw] top-1/2 -translate-y-1/2 z-50 max-w-[44ch] text-left"
      style={{
        textShadow: "0 0 6px rgba(255,255,255,.55), 0 0 16px rgba(255,255,255,.35)",
        fontFamily: "'CustomFont', monospace",
      }}
      aria-live="polite"
    >
      <style jsx>{`
        @font-face {
          font-family: 'CustomFont';
          src: url('/VT323-Regular.ttf') format('truetype');
          font-display: swap;
        }

        /* Continuous linear zoom with steady speed and quick fade-in/out */
        .fade-zoom {
          /* use linear timing to ensure constant scale speed */
          animation: zoomFade ${DURATION}ms linear forwards;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        @keyframes zoomFade {
          /* linear scale from 1 -> 1.9 across the whole duration */
          0% {
            opacity: 0;
            transform: scale(1);
          }

          /* become visible quickly but don't alter the scale curve */
          8% {
            opacity: 1;
          }

          /* remain fully visible while scaling continues linearly */
          92% {
            opacity: 1;
          }

          /* fade out at the end while scale reaches the final value */
          100% {
            opacity: 0;
            transform: scale(1.9);
          }
        }
      `}</style>

      <h1 className={`text-white/95 font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl fade-zoom`} key={visibleIdx}>
        {PHRASES[visibleIdx]}
      </h1>
    </div>
  );
}

