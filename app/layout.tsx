import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted at build time by next/font: no render-blocking request to
// fonts.googleapis.com and no layout shift when the webfont swaps in. The
// reference page loaded the same three families twice, once by @import in
// CSS and once by <link> here.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sveflare: SvelteKit on Cloudflare, with the eight gates already wired in",
  description:
    "A DeepSeek Harness bundle for SvelteKit on Cloudflare. Twelve skills, five slash commands and two hook bridges covering D1, KV, R2 and AI Gateway, plus a validator that catches the failures other bundles ship silently.",
  keywords: [
    "sveltekit",
    "cloudflare",
    "workers",
    "d1",
    "r2",
    "kv",
    "ai gateway",
    "deepseek harness",
    "dsh bundle",
    "agent skills",
  ],
  openGraph: {
    title: "sveflare: SvelteKit on Cloudflare, with the eight gates already wired in",
    description:
      "Twelve skills, five commands, two hook bridges, and a validator that catches the failures other bundles ship silently.",
    type: "website",
    url: "https://github.com/Jujubalandia/dsh-sveltekit-cloudflare",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${condensed.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
