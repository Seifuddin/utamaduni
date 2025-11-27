import ProgramsHero from '@/components/HeroPrograms';
import Programs from '@/components/Programs';
import React from 'react';

// ✅ Programs Page SEO Metadata
export const metadata = {
  title: "Our Programs — Utamaduni Organization",
  description:
    "Explore Utamaduni Organization’s programs supporting orphans, vulnerable children, and communities through education, food distribution, donations, mentorship, and outreach initiatives.",
  keywords: [
    "Utamaduni Organization programs",
    "orphans support Kenya",
    "vulnerable children programs",
    "community development programs",
    "education support",
    "food donations",
    "volunteering Kenya",
    "charity outreach programs"
  ],
  alternates: {
    canonical: "https://utamaduniorganization.vercel.app/programs",
  },
  openGraph: {
    title: "Our Programs — Supporting Orphans & Communities",
    description:
      "Discover Utamaduni Organization’s initiatives and programs designed to empower orphans, vulnerable children, and local communities across Kenya.",
    url: "https://utamaduniorganization.vercel.app/programs",
    siteName: "Utamaduni Organization",
    images: ["/og-programs.jpg"], // upload this image to /public
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Programs — Utamaduni Organization",
    description:
      "Learn about Utamaduni Organization’s education, food, donations, and outreach programs supporting communities and children in Kenya.",
    images: ["/og-programs.jpg"],
  },
};

export default function ProgramsPage() {
  return (
    <div className='relative overflow-x-hidden'>
      <ProgramsHero />
      <Programs />
    </div>
  );
}
