import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ScrollVideoSection } from "@/components/sections/scroll-video-section";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { CoverageSection } from "@/components/sections/coverage";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <HeroSection />
      <ScrollVideoSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <StatsSection />
      <CoverageSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
