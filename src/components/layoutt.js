import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Inter, Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import WhatsAppButton from './WhatsApp';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Utamaduni Organization | Supporting Orphans & Vulnerable Children',
  description: 'Utamaduni Organization supports orphans, vulnerable children, and communities through education, food programs, donations, and development projects across Kenya.',
  keywords: ['Utamaduni Organization', 'orphans support Kenya', 'vulnerable children', 'community development', 'charity Kenya', 'food donations'],
  authors: [{ name: 'Utamaduni Organization', url: 'https://utamaduniorganization.vercel.app' }],
  openGraph: {
    title: 'Utamaduni Organization | Supporting Orphans & Vulnerable Children',
    description: 'Utamaduni Organization supports orphans, vulnerable children, and communities through education, food programs, donations, and development projects across Kenya.',
    url: 'https://utamaduniorganization.vercel.app',
    siteName: 'Utamaduni Organization',
    locale: 'en_KE',
    type: 'website',
    images: [{ url: 'https://utamaduniorganization.vercel.app/og-image.jpg', width: 1200, height: 630, alt: 'Utamaduni Organization | Supporting Orphans & Vulnerable Children' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Empowering orphans, vulnerable children, and communities through education, food support, donations, and outreach programs." />
        <meta name="keywords" content="orphans support Kenya, charity Kenya, food donations" />
        <meta property="og:title" content="Utamaduni Organization | Supporting Orphans & Vulnerable Children" />
        <meta property="og:description" content="Supporting orphans, vulnerable children, and communities across Kenya..." />
        <meta property="og:image" content="https://utamaduniorganization.vercel.app/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" as="style" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <WhatsAppButton />
        <main>{children}</main>
        <Footer />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7HS1PK0F12"
          async
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7HS1PK0F12');
            `,
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Utamaduni Organization",
              url: "https://utamaduniorganization.vercel.app",
              logo: "https://utamaduniorganization.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254 704 337 351",
                contactType: "Customer Support",
                areaServed: "KE",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Utamaduni Organization — Supporting Orphans & Vulnerable Children",
    template: "%s | Utamaduni Organization",
  },

  description:
    "Utamaduni Organization supports orphans, vulnerable children, and communities through education, food programs, donations, and development projects across Kenya.",

  keywords: [
    "Utamaduni Organization",
    "orphans support Kenya",
    "vulnerable children",
    "community development",
    "charity Kenya",
    "education programs",
    "food donations",
    "outreach programs"
  ],

  metadataBase: new URL("https://utamaduniorganization.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Utamaduni Organization — Supporting Orphans & Communities",
    description:
      "Empowering orphans, vulnerable children, and communities through education, food support, donations, and outreach programs.",
    url: "https://utamaduniorganization.vercel.app",
    siteName: "Utamaduni Organization",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utamaduni Organization",
    description:
      "Supporting orphans, vulnerable children, and communities across Kenya.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "images/favicon.ico",
    shortcut: "images/favicon.ico",
    apple: "images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-7HS1PK0F12`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7HS1PK0F12', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <WhatsAppButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsApp";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://utamaduniorganization.vercel.app"),

  title: "Utamaduni Organization | Supporting Orphans & Vulnerable Children",
  description:
    "Utamaduni Organization supports orphans, vulnerable children, and communities through education, food programs, donations, and development projects across Kenya.",

  keywords: [
    "Utamaduni Organization",
    "orphans support Kenya",
    "vulnerable children",
    "community development",
    "charity Kenya",
    "food donations",
  ],

  authors: [
    {
      name: "Utamaduni Organization",
      url: "https://utamaduniorganization.vercel.app",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Utamaduni Organization | Supporting Orphans & Vulnerable Children",
    description:
      "Utamaduni Organization supports orphans, vulnerable children, and communities across Kenya.",
    url: "https://utamaduniorganization.vercel.app",
    siteName: "Utamaduni Organization",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // relative path (BEST PRACTICE)
        width: 1200,
        height: 630,
        alt: "Utamaduni Organization | Supporting Orphans & Vulnerable Children",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <WhatsAppButton />

        <main>{children}</main>

        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HS1PK0F12"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7HS1PK0F12');
            `,
          }}
        />

        {/* Schema.org structured data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Utamaduni Organization",
              url: "https://utamaduniorganization.vercel.app",
              logo: "https://utamaduniorganization.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254704337351",
                contactType: "Customer Support",
                areaServed: "KE",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
