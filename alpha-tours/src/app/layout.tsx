import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Luxury Hospitality in Bogotá and Colombia`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Luxury Hospitality in Bogotá and Colombia`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Luxury Hospitality in Bogotá and Colombia`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#0F3D2E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: site.whatsappNumber,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.country,
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "RNT", value: site.rnt },
    { "@type": "PropertyValue", propertyID: "NIT", value: site.nit },
  ],
  sameAs: [],
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ivory-light text-charcoal antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          id="org-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
