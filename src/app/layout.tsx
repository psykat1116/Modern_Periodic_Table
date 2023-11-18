import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Satisfy } from "next/font/google";
import ThemeProvider from "@/context/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-poppins",
});

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-satisfy",
});

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
        <body className={`${poppins.variable} ${satisfy.variable}`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
