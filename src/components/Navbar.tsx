"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Tour", href: "#tour" },
  { label: "Vault", href: "#vault" },
  { label: "Merch", href: "#merch" },
  { label: "Manifesto", href: "#manifesto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#" className="font-display text-xl tracking-widest">
          S<span className="text-accent">K</span>
        </a>

        <ul className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/70 sm:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className="group relative inline-block py-1 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-white sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="mt-1.5 block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="mt-1.5 block h-0.5 w-6 bg-white"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-black/95 sm:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm uppercase tracking-wider text-white/80 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
