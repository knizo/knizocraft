import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZenFlow Yoga Studio | Transform Your Mind, Body & Spirit",
  description: "Discover inner peace and wellness at ZenFlow Yoga Studio. Expert-led classes for all levels including Hatha, Vinyasa Flow, and Power Yoga. Join our welcoming community today.",
  keywords: "yoga, meditation, wellness, fitness, mindfulness, San Francisco, yoga studio, hatha yoga, vinyasa flow, power yoga",
  authors: [{ name: "ZenFlow Yoga Studio" }],
  openGraph: {
    title: "ZenFlow Yoga Studio | Transform Your Mind, Body & Spirit",
    description: "Discover inner peace and wellness at ZenFlow Yoga Studio. Expert-led classes for all levels.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenFlow Yoga Studio",
    description: "Transform your mind, body & spirit through yoga",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
