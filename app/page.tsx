import CoursesSection from "@/components/sections/CoursesSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ProfessionalGrowth from "@/components/sections/ProfessionalGrowth";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <CoursesSection />
      <ProfessionalGrowth />
    </main>
  );
}
