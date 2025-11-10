import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";
import AboutIntro from '@/components/Intro'
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

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt16">
      <AboutHero />
      <Abouts />
      <Mission />
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
