import ContactUs from '@/components/Contacts';
import ContactHero from '@/components/HeroContact';
import React from 'react';

// ✅ Contact Page SEO Metadata
export const metadata = {
  title: "Contact Us — Utamaduni Organization",
  description:
    "Get in touch with Utamaduni Organization for partnerships, donations, volunteering, or inquiries about our programs supporting orphans and communities in Kenya.",
  keywords: [
    "Utamaduni Organization contact",
    "charity contact Kenya",
    "volunteering Kenya",
    "donations",
    "orphan support",
    "community development",
    "outreach programs"
  ],
  alternates: {
    canonical: "https://utamaduniorganization.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Us — Utamaduni Organization",
    description:
      "Reach out to Utamaduni Organization to learn how you can support orphans, vulnerable children, and community development programs in Kenya.",
    url: "https://utamaduniorganization.vercel.app/contact",
    siteName: "Utamaduni Organization",
    images: ["/og-contact.jpg"], // upload this image to /public
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Utamaduni Organization",
    description:
      "Contact Utamaduni Organization for partnerships, donations, volunteering, or questions about our programs supporting children and communities.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <div className='overflow-x-hidden'>
      <ContactHero />
      <ContactUs />
    </div>
  );
}
