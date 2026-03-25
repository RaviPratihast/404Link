import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SITE_LOGO_URL } from "@/constants/logo-path";
import { SITE_OG_IMAGE } from "@/constants/og-image";
import { SITE_KEYWORDS } from "@/constants/seo";
import { SITE_METADATA } from "@/constants/site";
import { getSiteOrigin, siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  applicationName: SITE_METADATA.name,
  title: {
    default: SITE_METADATA.name,
    template: `%s — ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_METADATA.name, url: siteUrl("/") }],
  creator: SITE_METADATA.name,
  publisher: SITE_METADATA.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_METADATA.name,
    title: SITE_METADATA.name,
    description: SITE_METADATA.description,
    locale: "en_US",
    url: getSiteOrigin(),
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.name,
    description: SITE_METADATA.description,
    images: [SITE_OG_IMAGE.url],
  },
  category: "business",
  icons: {
    icon: [{ url: SITE_LOGO_URL, type: SITE_OG_IMAGE.type }],
    apple: [{ url: SITE_LOGO_URL, type: SITE_OG_IMAGE.type }],
    shortcut: SITE_LOGO_URL,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-svh flex-col"
        suppressHydrationWarning
      >
        <SiteJsonLd />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
