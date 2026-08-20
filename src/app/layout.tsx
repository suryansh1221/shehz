import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Outfit } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shehzaan Khan | The National Patiala Boy",
  description:
    "Official site of Shehzaan Khan — viral Bollywood choreographer, Forbes 30 Under 30, and Diluminati Tour performer. Join the next workshop.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
