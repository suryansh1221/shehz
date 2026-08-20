"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Ticket } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import YouTubeBackground from "@/components/YouTubeBackground";
import { heroVideoCredit, profile } from "@/data/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const marqueeItems = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section
      ref={ref}
      aria-label="Hero introduction"
      className="relative flex h-screen min-h-[720px] w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 opacity-40">
        <YouTubeBackground videoId={profile.heroYouTubeId} />
      </motion.div>

      {/* Vignette + gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-black/60 to-black/70" />
      <div className="absolute inset-0 z-0 [box-shadow:inset_0_0_200px_120px_rgba(0,0,0,0.9)]" />

      {/* Marquee-style overflowing headline */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex w-full flex-col items-center gap-6"
      >
        <div className="w-[110vw] overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          >
            {marqueeItems.map((i) => (
              <span
                key={i}
                className="font-display text-outline mx-4 text-[13vw] leading-none sm:text-[9vw]"
              >
                {profile.marqueeText}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-gold sm:text-sm"
        >
          {profile.tourTag} // {profile.followers}
        </motion.p>

        <motion.a
          href={heroVideoCredit.url}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/70 backdrop-blur transition-colors hover:border-accent hover:text-accent sm:text-xs"
        >
          <Play className="h-3.5 w-3.5" aria-hidden="true" />
          Watch "{heroVideoCredit.title}" — {heroVideoCredit.views} views
        </motion.a>
      </motion.div>

      {/* Glassmorphic floating ticket CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
        className="absolute bottom-16 z-20"
      >
        <Magnetic strength={0.25}>
          <a
            href="#tour"
            data-cursor-hover
            className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors hover:border-accent hover:text-accent sm:text-sm"
          >
            <Ticket className="h-5 w-5 text-accent" aria-hidden="true" />
            Join the Next Workshop
          </a>
        </Magnetic>
      </motion.div>
    </section>
  );
}
