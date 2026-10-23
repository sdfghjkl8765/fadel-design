import type { Metadata } from "next";
import { Cairo, Geist_Mono, Manrope } from "next/font/google";
import { SITE_CONFIG } from "./siteData";
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
  title: "Fadel Design | فاضل ديزاين",
  description:
    "فاضل ديزاين استوديو عراقي للتصميم والتطوير الرقمي، يقدم تصميم المواقع والتطبيقات والعروض التقديمية ومشاريع التخرج في العراق وحول العالم.",
  applicationName: "Fadel Design | فاضل ديزاين",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fadel Design | فاضل ديزاين",
    description:
      "استوديو عراقي للتصميم والتطوير الرقمي — مواقع، تطبيقات، عروض تقديمية ومشاريع تخرج.",
    siteName: "Fadel Design | فاضل ديزاين",
    locale: "ar_IQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadel Design | فاضل ديزاين",
    description:
      "استوديو عراقي للتصميم والتطوير الرقمي — مواقع، تطبيقات، عروض تقديمية ومشاريع تخرج.",
  },
  verification: {
    google: "1ZMsSKjdyOTPHT4mlbNeI6RyZSqMIyXNR0XuMVaYvtk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${metadataBase.toString()}#website`,
      url: metadataBase.toString(),
      name: "Fadel Design | فاضل ديزاين",
      alternateName: ["Fadel Design", "فاضل ديزاين"],
      inLanguage: "ar-IQ",
    },
    {
      "@type": "Organization",
      "@id": `${metadataBase.toString()}#organization`,
      name: "Fadel Design",
      alternateName: "فاضل ديزاين",
      url: metadataBase.toString(),
      description:
        "استوديو عراقي للتصميم والتطوير الرقمي، يقدم تصميم المواقع والتطبيقات والعروض التقديمية ومشاريع التخرج.",
      areaServed: ["Iraq", "Worldwide"],
      sameAs: [
        "https://www.instagram.com/fx5_0/",
        SITE_CONFIG.tiktokUrl,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${SITE_CONFIG.whatsappNumber}`,
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
