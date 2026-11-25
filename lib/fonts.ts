import { Archivo, Geist_Mono, Inter } from "next/font/google";

export const archivoFont = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
