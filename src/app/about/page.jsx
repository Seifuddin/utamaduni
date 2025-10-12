import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";
import AboutIntro from '@/components/Intro'
import PeopleWeHelp from "@/components/Helped";
import Leadership from "@/components/Leadership";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <AboutIntro />
      <About />
      <PeopleWeHelp />
      <Leadership />
      <WhyWeExist />
    </main>
  );
}
