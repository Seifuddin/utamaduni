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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <ImpactStats />
      <DidYouKnow />
      <Programs />
      <SponsorProgram />
      <GetInvolvedPage />
      <PastEvents />
    </main>
  );
}
