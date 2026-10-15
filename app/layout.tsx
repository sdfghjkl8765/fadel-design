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

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "https://fadel-design.vercel.app";
const metadataBase = new URL(
  configuredSiteUrl.startsWith("http")
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`,
);

export const metadata: Metadata = {
  metadataBase,
  title: "Fadel Design | Digital Design & Development",
  description:
    "Fadel Design creates thoughtful websites, mobile apps, presentations, and graduation project experiences in Iraq and worldwide.",
  openGraph: {
    title: "Fadel Design | تصميم وتطوير رقمي",
    description: "استوديو تصميم وتطوير رقمي في العراق — مواقع، تطبيقات، وعروض تقديمية.",
    siteName: "Fadel Design",
    locale: "ar_IQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadel Design | تصميم وتطوير رقمي",
    description: "استوديو تصميم وتطوير رقمي في العراق — مواقع، تطبيقات، وعروض تقديمية.",
  },
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
