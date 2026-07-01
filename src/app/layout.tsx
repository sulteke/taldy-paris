import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/i18n/provider";
import { CartProvider } from "@/cart/provider";
import { BookingProvider } from "@/booking/provider";
import { BookingDrawer } from "@/components/BookingDrawer";
import { DEFAULT_LANG } from "@/i18n/config";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.taglineFull}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Taldy-Paris — семейный ресторан восточной и европейской кухни в Талдыкоргане. " +
    "Большое меню, банкеты, VIP-кабины, детская комната, намазхана и летняя терраса.",
  keywords: [
    "ресторан Талдыкорган",
    "семейный ресторан Каратал",
    "Taldy-Paris",
    "банкет Талдыкорган",
    "восточная кухня",
    "европейская кухня",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: `${site.name} — ${site.taglineFull}`,
    description:
      "Семейный ресторан восточной и европейской кухни в Талдыкоргане.",
    url: site.siteUrl,
    images: [
      {
        url: "/og-image.png", // {{OG_IMAGE}} — supply 1200×630 share image
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.taglineFull}`,
    description:
      "Семейный ресторан восточной и европейской кухни в Талдыкоргане.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1C6B64",
  width: "device-width",
  initialScale: 1,
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.taglineFull,
  servesCuisine: ["Eastern", "European", "Kazakh"],
  priceRange: site.priceRangeSchema,
  telephone: site.phone.display,
  url: site.siteUrl,
  menu: `${site.siteUrl}/menu`,
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  // geo + openingHoursSpecification intentionally omitted —
  // not present in source material (see launch checklist).
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_LANG} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <CartProvider>
            <BookingProvider>
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-900 focus:px-5 focus:py-2.5 focus:text-white"
              >
                Перейти к содержимому
              </a>
              <Header />
              <main id="main">{children}</main>
              <Footer />
              <BookingDrawer />
            </BookingProvider>
          </CartProvider>
        </LanguageProvider>
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
      </body>
    </html>
  );
}
