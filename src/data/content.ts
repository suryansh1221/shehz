// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT
// Replace with Shehzaan Khan's real bio, tour dates, media, and merch.
// Image/video URLs are placeholders — swap them for real assets.
// ---------------------------------------------------------------------------

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE_PATH}${path}`;

const PLACEHOLDER = asset("/images/placeholder.svg");

export const profile = {
  name: "SHEHZAAN KHAN",
  title: "The National Patiala Boy",
  marqueeText: "SHEHZAAN KHAN // NATIONAL PATIALA BOY",
  followers: "1.5M+ Followers",
  tourTag: "Diluminati Tour Performer",
  // Background video: rendered via the YouTube embed in Hero.tsx (see heroYouTubeId).
  heroVideo:
    "https://assets.mixkit.co/videos/preview/mixkit-hip-hop-dancer-performing-on-a-rooftop-42527-large.mp4",
  // https://youtu.be/wJJk4Gxarsw
  heroYouTubeId: "wJJk4Gxarsw",
  instagramUrl: "https://www.instagram.com/isshehzaannkhan/",
};

export const heroVideoCredit = {
  title: "Laung Da Lashkara Dance — Janhavi X Shehzaan",
  views: "75M+",
  url: "https://www.youtube.com/shorts/ziy75XQ09y4",
};

export type TourStop = {
  id: number;
  date: string;
  city: string;
  country: string;
  song: string;
  preview: string;
};

export const tourStops: TourStop[] = [
  {
    id: 1,
    date: "2026.09.14",
    city: "LONDON",
    country: "UK",
    song: "Laung Da Lashkara",
    preview: PLACEHOLDER,
  },
  {
    id: 2,
    date: "2026.10.02",
    city: "MUMBAI",
    country: "IN",
    song: "Kesariya",
    preview: PLACEHOLDER,
  },
  {
    id: 3,
    date: "2026.10.21",
    city: "ADELAIDE",
    country: "AU",
    song: "Shiddat",
    preview: PLACEHOLDER,
  },
  {
    id: 4,
    date: "2026.11.08",
    city: "DUBAI",
    country: "AE",
    song: "Ranjha",
    preview: PLACEHOLDER,
  },
  {
    id: 5,
    date: "2026.11.29",
    city: "TORONTO",
    country: "CA",
    song: "Excuses",
    preview: PLACEHOLDER,
  },
];

export type VaultItem = {
  id: number;
  title: string;
  size: "large" | "small";
  orientation: "portrait" | "landscape";
  thumbnail: string;
  views: string;
  instagramUrl: string;
  // Optional YouTube video ID — when present, the reel plays as a real
  // embedded video (same technique as the hero background) instead of
  // opening the Instagram embed widget.
  youtubeId?: string;
};

export const vaultItems: VaultItem[] = [
  {
    id: 1,
    title: "Laung Da Lashkara",
    size: "large",
    orientation: "portrait",
    thumbnail: asset("/images/vault-1.png"),
    views: "75M+",
    instagramUrl: "https://www.instagram.com/p/DX8ZMZBva7Q/",
    youtubeId: "ziy75XQ09y4",
  },
  {
    id: 2,
    title: "Viral Reel",
    size: "small",
    orientation: "landscape",
    thumbnail: asset("/images/vault-2.png"),
    views: "10M+",
    instagramUrl: "https://www.instagram.com/reel/C4XTeQyMr3q/",
  },
  {
    id: 3,
    title: "Viral Reel",
    size: "large",
    orientation: "portrait",
    thumbnail: asset("/images/vault-3.png"),
    views: "8M+",
    instagramUrl: "https://www.instagram.com/reel/CsYjZQttHn8/",
  },
];

export type MerchItem = {
  id: number;
  name: string;
  price: string;
  badge: string;
  flatImage: string;
  actionImage: string;
};

export const merchItems: MerchItem[] = [
  {
    id: 1,
    name: "PATIALA BOY OVERSIZED HOODIE",
    price: "$78",
    badge: "[ LIMITED RUN ]",
    flatImage: PLACEHOLDER,
    actionImage: PLACEHOLDER,
  },
  {
    id: 2,
    name: "DILUMINATI TOUR TEE",
    price: "$42",
    badge: "[ DROPPING SOON ]",
    flatImage: PLACEHOLDER,
    actionImage: PLACEHOLDER,
  },
  {
    id: 3,
    name: "NATIONAL PATIALA CAP",
    price: "$36",
    badge: "[ LIMITED RUN ]",
    flatImage: PLACEHOLDER,
    actionImage: PLACEHOLDER,
  },
  {
    id: 4,
    name: "LASHKARA VARSITY JACKET",
    price: "$140",
    badge: "[ ALMOST SOLD OUT ]",
    flatImage: PLACEHOLDER,
    actionImage: PLACEHOLDER,
  },
];

export const manifesto = {
  heading: "THE MANIFESTO",
  words:
    "From a background dancer in Stree to the National Patiala Boy — every step was earned in empty studios and sold-out arenas. Forbes 30 Under 30. Diluminati Tour. Millions of screens. One relentless obsession with the craft.".split(
      " "
    ),
  email: "booking@shehzaankhan.com",
};
