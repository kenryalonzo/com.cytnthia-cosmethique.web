import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Typo de fond / signatures marque — éditoriale, volumineuse */
const cormorantSignature = Cormorant_Garamond({
  variable: "--font-cormorant-signature",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cynthia Cosmétique — L'art du rituel",
  description:
    "Sourcils, extensions de cils, maquillage permanent et soins d'esthétique à Douala, Cameroun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantSignature.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-blue-dark">
        {children}
      </body>
    </html>
  );
}
