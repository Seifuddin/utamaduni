import OurGallery from '@/components/Gallery';
import GalleryHero from '@/components/HeroGlallery';
import React from 'react';

// ✅ Gallery Page SEO Metadata
export const metadata = {
  title: "Gallery — Utamaduni Organization",
  description:
    "View photos and highlights of Utamaduni Organization’s charity events, community outreach, programs for orphans, and other initiatives across Kenya.",
  keywords: [
    "Utamaduni Organization gallery",
    "charity events Kenya",
    "community outreach",
    "orphans programs photos",
    "volunteer activities",
    "impact stories",
    "social programs Kenya"
  ],
  alternates: {
    canonical: "https://utamaduniorganization.vercel.app/gallery",
  },
  openGraph: {
    title: "Gallery — Utamaduni Organization",
    description:
      "Explore Utamaduni Organization’s events and programs through our photo gallery, showcasing outreach, education, food donations, and community development.",
    url: "https://utamaduniorganization.vercel.app/gallery",
    siteName: "Utamaduni Organization",
    images: ["/og-gallery.jpg"], // upload this image to /public
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Utamaduni Organization",
    description:
      "See highlights of Utamaduni Organization’s community programs, charity events, and activities supporting orphans and vulnerable children in Kenya.",
    images: ["/og-gallery.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className='overflow-x-hidden'>
      <GalleryHero />
      <OurGallery />
    </div>
  );
}
