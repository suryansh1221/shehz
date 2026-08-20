"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { merchItems } from "@/data/content";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function MerchDrop() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      id="merch"
      aria-labelledby="merch-heading"
      className="relative border-y border-white/10 bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2
          id="merch-heading"
          className="mb-14 font-display text-outline-gold text-5xl leading-none sm:text-8xl"
        >
          MERCH DROP
        </h2>
      </div>

      <div className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-8">
        {merchItems.map((item, i) => {
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...spring, delay: i * 0.08 }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              data-cursor-hover
              className="relative w-[70vw] shrink-0 snap-start overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:w-80"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isActive ? "action" : "flat"}
                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                    exit={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${isActive ? item.actionImage : item.flatImage})`,
                    }}
                  />
                </AnimatePresence>

                <span className="absolute left-3 top-3 rounded-full border border-accent/60 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur">
                  {item.badge}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-4">
                <p className="font-display text-lg leading-none text-white">
                  {item.name}
                </p>
                <p className="font-mono text-sm text-gold">{item.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
