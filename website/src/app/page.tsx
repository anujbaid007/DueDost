import dynamic from "next/dynamic";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ScrollVideoSection } from "@/components/sections/scroll-video-section";

// Below-fold sections are dynamically imported — their JS is split into separate
// chunks and only downloaded when needed, shrinking the initial bundle significantly.
const TrustedBySection = dynamic(() =>
  import("@/components/sections/trusted-by").then((m) => ({ default: m.TrustedBySection }))
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((m) => ({ default: m.ServicesSection }))
);
const WhyChooseUsSection = dynamic(() =>
  import("@/components/sections/why-choose-us").then((m) => ({ default: m.WhyChooseUsSection }))
);
const HowItWorksSection = dynamic(() =>
  import("@/components/sections/how-it-works").then((m) => ({ default: m.HowItWorksSection }))
);
const StatsSection = dynamic(() =>
  import("@/components/sections/stats").then((m) => ({ default: m.StatsSection }))
);
const CoverageSection = dynamic(() =>
  import("@/components/sections/coverage").then((m) => ({ default: m.CoverageSection }))
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.TestimonialsSection }))
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq").then((m) => ({ default: m.FAQSection }))
);
const CTASection = dynamic(() =>
  import("@/components/sections/cta").then((m) => ({ default: m.CTASection }))
);
const Footer = dynamic(() =>
  import("@/components/sections/footer").then((m) => ({ default: m.Footer }))
);

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
