import UpcomingEvents from "@/components/Events";
import Hero from "../components/Hero";
import PastEvents from "@/components/Past";
import ImpactsStats from "@/components/Impacts";
import VolunteerWithUs from "@/components/Volunteer";
import Programs from "@/components/Programs";
import GetInvolvedPage from "@/components/Involved";
import AboutUs from "@/components/about";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutUs />
      <ImpactsStats />
      <Programs />
      <PastEvents />
      <GetInvolvedPage />
    </main>
  );
}
