import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Refund Policy | Due Dost",
  description:
    "Due Dost LLC's refund policy for debt settlement and credit card settlement services. Understand when refunds apply and how to request one.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
  robots: { index: true, follow: true },
};

const nonRefundable = [
  "Once our team has initiated communication with your lender on your behalf",
  "After a case review or settlement strategy has been prepared for your account",
  "If a settlement offer has been received from the bank or NBFC",
  "Consultation fees charged for reviewing your case and advising on options",
];

const eligible = [
  "If no work has commenced on your case within 7 days of payment, you may request a full refund",
  "If Due Dost LLC is demonstrably unable to proceed due to reasons entirely on our end (e.g., inability to service your account type or region)",
  "Partial refunds may be considered at our discretion if work has begun but no lender contact has been made yet",
];

export default function RefundPolicyPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-duedost-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Refund Policy</span>
          </nav>
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            Legal
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Refund{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-muted-foreground">
            Last Updated: <span className="font-medium text-foreground">March 2025</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our fees reflect the expertise and active work put into each case. Here is exactly when refunds apply.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          {/* Overview */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Due Dost LLC provides professional debt settlement services. Our fees reflect the legal expertise, negotiation skills, and active effort invested in each case from the moment work begins. This policy clearly explains when refunds are available and when they are not.
            </p>
          </div>

          {/* Non-refundable */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Non-Refundable Situations</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Fees are non-refundable once any of the following has occurred:
            </p>
            <ul className="space-y-3">
              {nonRefundable.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligible */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Eligible for Refund</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Refunds may be available in these situations:
            </p>
            <ul className="space-y-3">
              {eligible.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settlement outcome */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Settlement Outcome Is Not a Refund Basis</h2>
            <p className="text-muted-foreground leading-relaxed">
              Due Dost LLC does not guarantee specific settlement amounts or percentage reductions. Settlement decisions rest entirely with the lender. Refunds are not available if the final settlement was less than expected, as this outcome is beyond our control and does not reflect a failure of service on our part.
            </p>
          </div>

          {/* How to request */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">How to Request a Refund</h2>
            <ol className="space-y-3 list-none">
              {[
                "Email support@duedost.com with subject line: \"Refund Request — [Your Name]\"",
                "Include your case reference number, the reason for your refund request, and payment details",
                "We will respond within 5 business days with a decision",
                "Approved refunds are processed within 7–10 business days to the original payment method",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-2xl font-black bg-gradient-to-b from-duedost-blue to-duedost-green bg-clip-text text-transparent shrink-0 leading-none pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Cancellation */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may cancel your engagement at any time by providing written notice to support@duedost.com. Cancellation does not automatically entitle you to a refund. Please refer to the eligibility sections above to determine whether a refund applies to your situation.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questions about refunds? Contact us at{" "}
              <a href="mailto:support@duedost.com" className="text-duedost-blue hover:underline">support@duedost.com</a>{" "}
              or call{" "}
              <a href="tel:+919289493265" className="text-duedost-blue hover:underline">+91 92894 93265</a>.
              Also see our{" "}
              <Link href="/terms" className="text-duedost-blue hover:underline">Terms & Conditions</Link> and{" "}
              <Link href="/disclaimer" className="text-duedost-blue hover:underline">Disclaimer</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
