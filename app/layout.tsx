import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { AmbientMesh } from "@/components/layout/ambient-mesh";
import { DotPattern } from "@/components/layout/dot-pattern";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reynaldsampelo.com"),
  title: {
    default: "Reynald Sampelo — Full-Stack Developer",
    template: "%s — Reynald Sampelo",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, .NET, and modern web technologies. I build polished, scalable, and accessible web applications.",
  keywords: [
    "Reynald Sampelo",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "C#",
    "Tailwind CSS",
    "Supabase",
    "Web Developer",
    "Cebu",
  ],
  authors: [{ name: "Reynald Sampelo" }],
  creator: "Reynald Sampelo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Reynald Sampelo",
    title: "Reynald Sampelo — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, TypeScript, .NET, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sempitrnalsh8",
    creator: "@sempitrnalsh8",
    title: "Reynald Sampelo — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, TypeScript, .NET, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/binary-code.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jbMono.variable} font-sans antialiased`}
      >
        <AmbientMesh />
        <DotPattern />
        <GrainOverlay />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
