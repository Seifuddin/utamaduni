import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";
import AboutIntro from '@/components/Intro';
import PeopleWeHelp from "@/components/Helped";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import Steps from "@/components/Steps";
import Abouts from "@/components/about";
import CEOSection from "@/components/Dimore";
import Challenges from "@/components/Challenges";
import StoriesAndTestimonials from "@/components/Testimonials";
import OurStory from "@/components/Story";
import Mission from "@/components/Mission";
import PastEvents from "@/components/Past";

// ✅ About Page SEO Metadata
export const metadata = {
  title: "About Us — Utamaduni Organization",
  description:
    "Learn about Utamaduni Organization’s mission to support orphans, empower vulnerable children, and strengthen communities through sustainable charity programs in Kenya.",
  keywords: [
    "Utamaduni Organization",
    "about Utamaduni",
    "orphans support Kenya",
    "community development",
    "charity programs Kenya",
    "education support",
    "food donations",
    "volunteering Kenya"
  ],
  alternates: {
    canonical: "https://utamaduniorganization.vercel.app/about",
  },
  openGraph: {
    title: "About Utamaduni Organization — Supporting Orphans & Communities",
    description:
      "Discover how Utamaduni Organization empowers orphans, vulnerable children, and communities through education, food, donations, and development programs.",
    url: "https://utamaduniorganization.vercel.app/about",
    siteName: "Utamaduni Organization",
    images: ["/og-about.jpg"], // upload this image to /public
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Utamaduni Organization",
    description:
      "Learn about Utamaduni Organization’s mission and programs supporting orphans and communities across Kenya.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <Abouts />
      <CTA />
      <OurStory />
      <Challenges />
      <PastEvents />
      <StoriesAndTestimonials />
      <CEOSection />
      <Leadership />
    </main>
  );
}
