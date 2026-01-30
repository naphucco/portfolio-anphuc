import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";

// Tối ưu font loading với next/font
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Chống layout shift
  preload: true,
});

export const metadata: Metadata = {
  title: "Nguyễn Ân Phúc | Software Engineer Portfolio",
  description: "Frontend-focused Software Engineer with expertise in React, Next.js, Angular, and performance optimization. Building scalable web applications.",
  keywords: ["Software Engineer", "Frontend Developer", "React", "Next.js", "TypeScript", "Vietnam"],
  authors: [{ name: "Nguyễn Ân Phúc" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://portfolio-anphuc.vercel.app",
    title: "Nguyễn Ân Phúc | Software Engineer",
    description: "Portfolio showcasing modern web development projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main className="pt-16"> {/* Offset for fixed navbar */}
          {children}
        </main>
        <Analytics /> {/* Vercel Analytics for tracking */}
      </body>
    </html>
  );
}