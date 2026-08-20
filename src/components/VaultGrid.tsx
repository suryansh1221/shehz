"use client";

import { motion } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";
import { vaultItems } from "@/data/content";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function VaultGrid() {
  return (
    <section
      id="vault"
      aria-labelledby="vault-heading"
      className="relative bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2
          id="vault-heading"
          className="mb-14 font-display text-outline text-5xl leading-none sm:text-8xl"
        >
          VIRAL VAULT
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {vaultItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.instagramUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: (i % 4) * 0.08 }}
              data-cursor-hover
              className={`group relative block cursor-pointer overflow-hidden rounded-md border border-white/10 bg-zinc-900 ${
                item.size === "large"
                  ? "col-span-2 row-span-2 aspect-[3/4]"
                  : "col-span-2 aspect-video sm:col-span-2"
              }`}
            >
              <motion.div
                className="absolute inset-0 z-10 rounded-md"
                initial={{ boxShadow: "0 0 0 0px rgba(255,8,68,0)" }}
                whileHover={{
                  boxShadow: [
                    "0 0 0 0px rgba(255,8,68,0)",
                    "0 0 0 3px rgba(255,8,68,0.9)",
                    "0 0 0 0px rgba(255,8,68,0)",
                    "0 0 0 2px rgba(255,8,68,0.7)",
                  ],
                }}
                transition={{ duration: 0.5, times: [0, 0.3, 0.6, 1] }}
              />
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-95"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-display text-lg leading-none text-white sm:text-2xl">
                  {item.title}
                </p>
                <p className="mt-1 flex items-center gap-2 font-mono text-xs text-gold">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.views} views
                  </span>
                  <span className="flex items-center gap-1 text-white/60">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    View on Instagram
                  </span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
