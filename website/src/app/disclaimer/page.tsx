import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Disclaimer | Due Dost",
  description:
    "Important disclaimers regarding Due Dost LLC's debt settlement services, information accuracy, and limitations of liability under Indian law.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "General Disclaimer",
    content:
      "The information provided on duedost.com is for general informational purposes only. It does not constitute legal advice, financial advice, or professional counsel of any kind. Every debt situation is unique, and the information on this website may not apply to your specific circumstances. We strongly encourage you to seek professional guidance tailored to your situation.",
  },
  {
    title: "No Guarantee of Settlement",
    content:
      "Due Dost LLC facilitates negotiation between you and your lender. We do not guarantee any specific settlement amount, reduction percentage, or timeline. All settlement decisions are made exclusively by the respective lender based on their internal policies, RBI guidelines, and account-specific factors. Past settlement outcomes for other clients do not guarantee similar results for your case.",
  },
  {
    title: "Not a Law Firm",
    content:
      "Due Dost LLC is not a law firm. While legal professionals are part of our team, the information on this website does not constitute legal advice and does not create an attorney-client relationship. For specific legal advice regarding your debt situation or any legal proceedings, please consult a qualified advocate registered under the Bar Council of India.",
  },
  {
    title: "CIBIL / Credit Score Impact",
    content:
      "Debt settlement may negatively affect your CIBIL score and credit report. A settled account is typically marked as 'Settled' rather than 'Closed' on your credit report, which lenders may view less favourably than a 'Closed' status. We advise all clients to fully understand this impact before proceeding. Due Dost LLC does not guarantee any improvement to your credit score following settlement.",
  },
  {
    title: "Accuracy of Information",
    content:
      "While we strive to keep all content on duedost.com accurate and current, banking policies, RBI regulations, settlement norms, and legal provisions change frequently. Information on this website may not always reflect the most recent developments. Always verify critical information with the respective lender, RBI guidelines, or a qualified financial/legal professional before making decisions.",
  },
  {
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites, resources, or services. Due Dost LLC does not endorse, control, or take responsibility for the content, accuracy, privacy practices, or availability of those external websites. Accessing third-party links is at your own risk.",
  },
  {
    title: "Results May Vary",
    content:
      "Case studies, testimonials, settlement percentages, and savings figures mentioned on this website or in our communications represent past results achieved for specific clients. These are shared for illustrative purposes only and are not a guarantee or prediction of future results. Individual outcomes will vary based on the specifics of each case.",
  },
  {
    title: "RBI Compliance Note",
    content:
      "Due Dost LLC operates in compliance with applicable RBI guidelines for debt resolution and recovery agent conduct. However, banking policies and RBI guidelines are subject to change, and nothing on this website constitutes an official representation by any bank, NBFC, or financial institution. All lender communications are handled in accordance with current RBI Fair Practices Code.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this disclaimer or our services, please contact us at support@duedost.com or call +91 92894 93265. Our office is located at WeWork, Two Horizon Center, Gurugram, Haryana 122002, India.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-duedost-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Disclaimer</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green">
              Legal
            </p>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Disclaimer
            </span>
          </h1>
          <p className="text-muted-foreground">
            Last Updated: <span className="font-medium text-foreground">March 2025</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Please read these disclaimers carefully before relying on any information provided on this website or by our team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-background rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This disclaimer is part of our legal framework. Also read our{" "}
              <Link href="/terms" className="text-duedost-blue hover:underline">Terms & Conditions</Link>,{" "}
              <Link href="/privacy-policy" className="text-duedost-blue hover:underline">Privacy Policy</Link>, and{" "}
              <Link href="/refund-policy" className="text-duedost-blue hover:underline">Refund Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
