import About from "@/components/AboutUs";
import ChildSleepSection from "@/components/Ask";
import WhyWeExist from "@/components/Why";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <ChildSleepSection />
      <About />
      <WhyWeExist />
    </main>
  );
}
