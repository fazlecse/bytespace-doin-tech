import CoursesSection from "@/components/sections/CoursesSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <CoursesSection />
    </main>
  );
}
