"use client";

import PageTransition from "@/components/PageTransition";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import YMetrica from "@/external/YMetrica";
import { Suspense } from "react";
import YMetrircaHit from "@/external/YMetrircaHit";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="ru">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <YMetrica />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Header />
            <main>
              <fieldset>
                <legend>Main layout</legend>
                {children}
              </fieldset>
            </main>
            <Footer />
          </PageTransition>
        </AnimatePresence>

        <Suspense fallback={<></>}>
          <YMetrircaHit />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
