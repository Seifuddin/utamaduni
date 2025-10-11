import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";
import AboutIntro from '@/components/Intro'
import PeopleWeHelp from "@/components/Helped";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <AboutIntro />
      <PeopleWeHelp />
      <About />
      <WhyWeExist />
    </main>
  );
}
