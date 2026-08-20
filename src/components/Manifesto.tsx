"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AtSign } from "lucide-react";
import { manifesto, profile } from "@/data/content";

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(245,245,244,0.15)", "rgba(245,245,244,1)"]
  );

  return (
    <motion.span style={{ opacity, color }} className="mr-3 inline-block">
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section
      ref={ref}
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="relative bg-zinc-950 py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <h2
          id="manifesto-heading"
          className="mb-14 font-display text-outline text-5xl leading-none sm:text-7xl"
        >
          {manifesto.heading}
        </h2>

        <p className="font-display text-3xl leading-tight sm:text-5xl">
          {manifesto.words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={manifesto.words.length}
              progress={scrollYProgress}
            />
          ))}
        </p>

        <motion.a
          href={`mailto:${manifesto.email}`}
          data-cursor-hover
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          whileHover={{ scale: 1.05, skewX: -3, color: "#ff0844" }}
          className="mt-20 block break-words font-display text-[10vw] leading-none text-white transition-colors sm:text-8xl"
        >
          {manifesto.email}
        </motion.a>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-widest text-white/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <AtSign className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
