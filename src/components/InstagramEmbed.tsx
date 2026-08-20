"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

/**
 * Renders an official Instagram post/reel embed using Instagram's public
 * embed.js widget. This is the only ToS-compliant way to show real Instagram
 * media without scraping or authenticating.
 */
export default function InstagramEmbed({ url, className }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function loadEmbed() {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }
      const existing = document.getElementById("instagram-embed-script");
      if (existing) return;
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    loadEmbed();
    const timeout = setTimeout(() => window.instgrm?.Embeds.process(), 500);
    return () => clearTimeout(timeout);
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`flex h-full w-full items-center justify-center overflow-hidden bg-zinc-900 ${className ?? ""}`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", background: "transparent" }}
      />
    </div>
  );
}
