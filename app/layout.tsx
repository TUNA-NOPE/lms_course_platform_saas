import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Courselly Platform",
    template: "%s | Courselly Platform",
  },
  description: "Courselly - Your comprehensive learning platform for online courses, interactive content, and skill development. Start your learning journey today.",
  keywords: ["online learning", "courses", "education", "e-learning", "skill development", "Courselly"],
  authors: [{ name: "Courselly" }],
  creator: "Courselly",
  publisher: "Courselly",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.critters.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Courselly Platform",
    title: "Courselly Platform - Online Learning Made Easy",
    description: "Courselly - Your comprehensive learning platform for online courses, interactive content, and skill development.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Courselly Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courselly Platform - Online Learning Made Easy",
    description: "Courselly - Your comprehensive learning platform for online courses, interactive content, and skill development.",
    images: ["/logo.svg"],
    creator: "@courselly",
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
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
