import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: "Antigravity Template",
    template: "%s | Antigravity Template",
  },
  description: "High-performance web template for professionals.",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Antigravity Template',
  }
};

import { SkipToContent, CookieConsent } from "@plantilla/shared";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipToContent />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <CookieConsent />
      </body>
    </html>
  );
}
