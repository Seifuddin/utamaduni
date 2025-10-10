import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import AboutHero from "@/components/HeroAbout";
import WhyWeExist from "@/components/Why";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <About />
      <WhyWeExist />
    </main>
  );
}
