import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shipyards Web Studio",
  description: "We create stunning websites for small businesses that build trust and get more clients. Based in North Vancouver.",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  manifest: '/favicon/site.webmanifest',
  // --- START: Open Graph & Twitter Metadata moved here ---
  openGraph: {
    title: 'Shipyards Web Studio',
    description: 'We build beautiful, effective websites for local businesses.',
    url: 'https://shipyardswebstudio.com',
    siteName: 'Shipyards Web Studio',
    images: [
      {
        url: 'https://shipyardswebstudio.com/images/og-image.png',
        width: 1200, // Recommended width for optimal display
        height: 630, // Recommended height for optimal display
        alt: 'Shipyards Web Studio Open Graph Image',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shipyards Web Studio',
    description: 'We build beautiful, effective websites for local businesses.',
    images: ['https://shipyardswebstudio.com/images/og-image.png'],
  },
  // --- END: Open Graph & Twitter Metadata ---
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shipyards Web Studio",
            "url": "https://shipyardswebstudio.com",
            // Corrected logo path to public/images/og-image.png
            // If you get a dedicated logo.png, update this URL accordingly.
            "logo": "https://shipyardswebstudio.com/images/og-image.png",
            "description": "Web design studio in North Vancouver that builds trust-building websites for local service businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Vancouver",
              "addressRegion": "BC",
              "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-778-323-4696",
              "contactType": "Customer Service"
            }
          })
        }} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
