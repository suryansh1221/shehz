"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Eye, ExternalLink, X } from "lucide-react";
import { vaultItems, type VaultItem } from "@/data/content";
import InstagramEmbed from "./InstagramEmbed";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function VaultGrid() {
  const [activeItem, setActiveItem] = useState<VaultItem | null>(null);

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
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: (i % 4) * 0.08 }}
              data-cursor-hover
              className={`group relative block cursor-pointer overflow-hidden rounded-md border border-white/10 bg-zinc-900 text-left ${
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
                    Play reel
                  </span>
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={activeItem !== null}
        onOpenChange={(open) => !open && setActiveItem(null)}
      >
        <AnimatePresence>
          {activeItem && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-describedby={undefined}>
                <motion.div
                  className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md border border-white/10 bg-zinc-950"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={spring}
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <Dialog.Title className="font-display text-sm text-white">
                      {activeItem.title}
                    </Dialog.Title>
                    <Dialog.Close
                      data-cursor-hover
                      className="text-white/60 transition-colors hover:text-white"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </Dialog.Close>
                  </div>
                  <div className="max-h-[75vh] overflow-y-auto">
                    <InstagramEmbed url={activeItem.instagramUrl} />
                  </div>
                  <a
                    href={activeItem.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border-t border-white/10 py-3 font-mono text-xs text-gold transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Open on Instagram
                  </a>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}

