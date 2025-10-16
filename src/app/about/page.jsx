import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";
import AboutIntro from '@/components/Intro'
import PeopleWeHelp from "@/components/Helped";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import Steps from "@/components/Steps";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-16">
      <AboutHero />
      <About />
      <Steps />
      <CTA />
      <Leadership />
    </main>
  );
}
