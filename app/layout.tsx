import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STILLMA | Experience less. Live more.",
  description:
    "Minimalist wellness retreats and boutique suites inspired by Japanese aesthetics. Coming to Czech Republic & Germany.",
  keywords: ["wellness", "retreat", "minimalism", "japan", "stillma", "boutique", "suites"],
  openGraph: {
    title: "STILLMA | Experience less. Live more.",
    description:
      "Minimalist wellness retreats and boutique suites inspired by Japanese aesthetics.",
    type: "website",
    locale: "en_US",
    url: "https://stillma.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "STILLMA – Experience less. Live more.",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
