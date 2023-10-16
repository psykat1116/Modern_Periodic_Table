import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/context/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Modern Periodic Table of Elements",
  description:
    "Modern Next JS 13 Website build with Tailwind CSS for Periodic Table of Elements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
