import type { Metadata } from "next";
import { Cairo, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
});

const manrope = Manrope({
  variable: "--font-english",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fadel Design | Digital Design & Development",
  description:
    "Fadel Design creates thoughtful websites, mobile apps, presentations, and graduation project experiences in Iraq and worldwide.",
  verification: {
    google: "1ZMsSKjdyOTPHT4mlbNeI6RyZSqMIyXNR0XuMVaYvtk",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
