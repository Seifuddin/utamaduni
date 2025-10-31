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

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-16">
      <AboutHero />
      <Abouts />
      <About />
      <Steps />
      <CTA />
      <CEOSection />
      <Leadership />
      <WhyWeExist />
    </main>
  );
}
