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
import WhatsAppButton from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt16 bg-amber-50">
      <Hero />
      <WhatsAppButton />
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
