"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fibSeq = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

type Particle = {
  id: string;
  num: number;
  left: number; // percent
  top: number; // percent
  dx: number; // px offset to animate to
  dy: number; // px offset to animate to
  size: number; // px font size
  duration: number; // seconds
};

export default function FibonacciAnimation() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Spawn immediately and then at a steady rate
    spawnParticle();
    const spawnIntervalMs = 900; // spawn a new particle every 900ms
    intervalRef.current = window.setInterval(() => {
      spawnParticle();
    }, spawnIntervalMs) as unknown as number;

    return () => {
      // cleanup
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      timeoutsRef.current.forEach((t) => window.clearTimeout(t));
      timeoutsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function spawnParticle() {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const num = fibSeq[Math.floor(Math.random() * fibSeq.length)];
    // spawn within 10%..90% to avoid clipping
    const left = 8 + Math.random() * 84;
    const top = 8 + Math.random() * 84;
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 160; // px
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance * -1; // bias upward slightly
    const size = 14 + Math.random() * 28;
    const duration = 5 + Math.random() * 4; // seconds (smooth and slow)

    const p: Particle = { id, num, left, top, dx, dy, size, duration };
    setParticles((prev) => [...prev, p]);

    // Remove particle after its duration
    const t = window.setTimeout(() => {
      setParticles((prev) => prev.filter((x) => x.id !== id));
    }, duration * 1000 + 200);
    timeoutsRef.current.push(t as unknown as number);
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1, 0.6],
              x: p.dx,
              y: p.dy,
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: p.duration, ease: "easeInOut" }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}px`,
            }}
            className="absolute text-white font-bold pointer-events-none select-none"
          >
            {p.num}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
