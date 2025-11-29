import UpcomingEvents from "@/components/Events";
import Hero from "../components/Hero";
import PastEvents from "@/components/Past";
import ImpactsStats from "@/components/Impacts";
import VolunteerWithUs from "@/components/Volunteer";
import Programs from "@/components/Programs";
import GetInvolvedPage from "@/components/Involved";
import AboutUs from "@/components/about";
import SponsorProgram from "@/components/Sponsor";
import WhyWeExist from "@/components/Why";
import DidYouKnow from "@/components/Know";
import ImpactStats from "@/components/Impacts";
import ChildSleepSection from "@/components/Ask";
import FAQ from "@/components/Faq";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import EventGallerySlider from "@/components/Events";
import VideoHighlights from "@/components/Youtube";

// ✅ Homepage SEO Metadata
export const metadata = {
  title: "Utamaduni Organization — Supporting Orphans & Vulnerable Children",
  description:
    "Utamaduni Organization empowers orphans, vulnerable children, and communities through education, food support, donations, and outreach programs across Kenya.",
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
  alternates: {
    canonical: "https://utamaduniorganization.vercel.app/",
  },
  openGraph: {
    title: "Utamaduni Organization — Supporting Orphans & Communities",
    description:
      "Empowering orphans, vulnerable children, and communities through education, food support, donations, and outreach programs.",
    url: "https://utamaduniorganization.vercel.app",
    siteName: "Utamaduni Organization",
    images: ["/og-image.jpg"], // upload this later
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
};

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-amber-50">
      <Hero />
      <SponsorProgram />
      <ImpactStats />
      <EventGallerySlider />
      <DidYouKnow />
      <Programs />
      <CTA />
      <FAQ />
      <VideoHighlights />
    </main>
  );
}
