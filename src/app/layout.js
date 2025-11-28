import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
