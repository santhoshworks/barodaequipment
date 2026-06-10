import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Baroda Equipment & Vessels Pvt. Ltd. — Precision Heavy Metal Engineering",
  description: "Custom pressure vessels, heat exchangers, storage tanks, and process equipment designed to international standards.",
  openGraph: {
    title: "Baroda Equipment & Vessels Pvt. Ltd.",
    description: "Heavy metal engineering and precision equipment manufacturing since 1990.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <link rel="preload" as="image" href="/nav-bg.jpg" />
        <link rel="preload" as="image" href="/hero-bg.jpg" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
