import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Satisfy, Lora } from "next/font/google";
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

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Modern Periodic Table of Elements",
  description:
    "Elemental Explorer is an innovative and interactive platform that reimagines the traditional periodic table for the digital age. With an intuitive interface and comprehensive details on each element, this modern periodic table provides an engaging educational experience for students, educators, and science enthusiasts. Explore atomic properties, electron configurations, historical data, and practical applications with ease. Elemental Explorer brings chemistry to life, making the study of elements more accessible and fascinating than ever before.",
  keywords: [
    "Next JS",
    "Tailwind CSS",
    "Periodic Table of Elements",
    "Modern Periodic Table",
    "Chemistry",
    "Science",
    "Education",
    "Properties of Elements",
    "Atomic Properties",
    "Electron Configurations",
    "Practical Applications",
    "Interactive Periodic Table",
    "Educational Platform",
    "Atomic Structure",
    "Thermodynamic Properties",
    "Material Properties",
    "Neutron Properties",
    "Health & Safety",
    "Prevalence",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://modern-periodic-table.vercel.app/",
    siteName: "Modern Periodic Table of Elements",
    title: "Modern Periodic Table of Elements",
    description:
      "Elemental Explorer is an innovative and interactive platform that reimagines the traditional periodic table for the digital age. With an intuitive interface and comprehensive details on each element, this modern periodic table provides an engaging educational experience for students, educators, and science enthusiasts. Explore atomic properties, electron configurations, historical data, and practical applications with ease. Elemental Explorer brings chemistry to life, making the study of elements more accessible and fascinating than ever before.",
    images: [
      {
        src: "https://github.com/psykat1116/Modern_Periodic_Table/blob/master/public/OpenGraph.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Modern Periodic Table of Elements",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${satisfy.variable} ${lora.variable}`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
