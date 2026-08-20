"use client";

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

/**
 * Renders a muted, looping, chromeless YouTube video as a full-bleed
 * background using the standard "oversized iframe" cover technique.
 */
export default function YouTubeBackground({
  videoId,
  className,
}: YouTubeBackgroundProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    showinfo: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    playsinline: "1",
    rel: "0",
    disablekb: "1",
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-zinc-900 ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Thumbnail fallback — always visible, even if the embed is blocked by the uploader */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
        title="Background video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[130%] w-[177.78vh] min-w-[130%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
