"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { tourStops, type TourStop } from "@/data/content";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function TourList() {
  const [hovered, setHovered] = useState<TourStop | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    x.set(e.clientX + 24);
    y.set(e.clientY + 24);
  }

  return (
    <section
      id="tour"
      aria-labelledby="tour-heading"
      className="relative border-y border-white/10 bg-zinc-950 py-24"
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2
          id="tour-heading"
          className="mb-14 font-display text-outline-gold text-5xl leading-none sm:text-8xl"
        >
          GLOBAL WORKSHOP TOUR
        </h2>

        <ul>
          {tourStops.map((stop, i) => (
            <motion.li
              key={stop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(stop)}
              onMouseLeave={() => setHovered(null)}
              data-cursor-hover
              className="group grid cursor-pointer grid-cols-2 items-center gap-2 border-t border-white/15 py-6 transition-colors last:border-b hover:bg-white/5 sm:grid-cols-[1fr_2fr_2fr_auto] sm:gap-6 sm:py-10"
            >
              <span className="font-mono text-xs text-white/50 sm:text-sm">
                {stop.date}
              </span>

              <span className="font-display text-3xl leading-none text-white transition-colors group-hover:text-accent sm:text-6xl">
                {stop.city}
              </span>

              <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-white/50 sm:col-span-1 sm:text-sm">
                {stop.song}
              </span>

              <ArrowUpRight
                className="hidden h-8 w-8 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block"
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Cursor-following preview */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{ left: springX, top: springY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={spring}
            className="pointer-events-none fixed z-40 hidden h-48 w-36 overflow-hidden rounded-lg border border-white/20 shadow-2xl md:block"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${hovered.preview})` }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
