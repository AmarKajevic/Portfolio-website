import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amar-kajevic.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amar Kajević — Full-Stack Software Engineer",
    template: "%s — Amar Kajević",
  },
  description:
    "Portfolio of Amar Kajević, a full-stack engineer with 5+ years of experience building with TypeScript, React, Next.js, Node.js, NestJS, Kafka, and Docker.",
  authors: [{ name: "Amar Kajević" }],
  creator: "Amar Kajević",
  openGraph: {
    title: "Amar Kajević — Full-Stack Software Engineer",
    description:
      "Selected work: the multi-vendor marketplace Vendora, the real-time platform Chatty, and the multi-tenant AI document analyzer DocAI.",
    url: siteUrl,
    siteName: "Amar Kajević",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Kajević — Full-Stack Software Engineer",
    description:
      "Selected work: the multi-vendor marketplace Vendora, the real-time platform Chatty, and the multi-tenant AI document analyzer DocAI.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
