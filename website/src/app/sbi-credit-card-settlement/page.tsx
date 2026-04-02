import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SBI Credit Card Settlement | Settle at 40-75% Less | Due Dost",
  description:
    "Settle your SBI credit card outstanding dues at 40-75% less. Expert negotiation with State Bank of India. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "SBI credit card settlement",
    "SBI card settlement",
    "State Bank of India credit card dues",
    "SBI OTS",
    "SBI credit card settlement process",
    "credit card settlement India",
    "debt settlement company India",
    "credit card defaulter India",
  ],
  alternates: {
    canonical: `${SITE_URL}/sbi-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/sbi-credit-card-settlement`,
    siteName: "Due Dost",
    title: "SBI Credit Card Settlement | Due Dost",
    description:
      "Settle your SBI credit card outstanding dues at 40-75% less. Expert negotiation. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost SBI Credit Card Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SBI Credit Card Settlement",
      provider: {
        "@type": "FinancialService",
        name: "Due Dost",
        url: SITE_URL,
        telephone: "+919289493265",
        address: {
          "@type": "PostalAddress",
          streetAddress: "WeWork, Two Horizon Center",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122002",
          addressCountry: "IN",
        },
      },
      description:
        "Expert SBI credit card settlement service. Negotiate outstanding dues at 40-75% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/sbi-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "SBI Credit Card Settlement", item: `${SITE_URL}/sbi-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my SBI account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every SBI account individually, from early missed payments to long-standing NPAs and those eligible for SBI's periodic OTS schemes. Our free consultation will tell you exactly where you stand.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does SBI settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBI regularly settles NPA credit card accounts — particularly SBI Cards accounts — at amounts significantly lower than the total outstanding. The settlement typically covers the principal with major waivers on interest and penalties.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SBI credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBI credit card settlements typically take 60-120 days. As a public sector bank, SBI follows a structured internal approval process. Our team manages all documentation and follow-ups to keep the process moving efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Does SBI credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your SBI account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit. Most clients see meaningful improvement within 12–18 months.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum settlement amount SBI accepts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBI evaluates settlement amounts based on RBI NPA resolution guidelines and the specific account details. Public sector banks often have structured OTS policies that determine the minimum acceptable amount. Our experts negotiate within these frameworks to minimize what you pay.",
          },
        },
      ],
    },
  ],
};

export default function SBICreditCardSettlementPage() {
  return (
    <main className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-2">
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-duedost-blue transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/credit-card-settlement"
            className="hover:text-duedost-blue transition-colors"
          >
            Credit Card Settlement
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">SBI Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            SBI Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              SBI Credit Card
            </span>{" "}
            Dues at Up to 75% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with SBI credit card outstanding? Our expert legal team has helped 1,000+ clients
            negotiate settlements directly with State Bank of India&apos;s collections department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+919289493265"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919289493265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-duedost-green text-duedost-green font-semibold text-lg hover:bg-duedost-green hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            1,000+ Cases Settled &nbsp;|&nbsp; RBI Compliant &nbsp;|&nbsp; 100% Legal
          </p>
        </div>
      </section>

      {/* Why SBI Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why SBI Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              State Bank of India (SBI), as a public sector bank, is subject to strict RBI
              guidelines on NPA resolution. SBI Credit Cards — operated through SBI Cards and
              Payment Services — classify overdue accounts as Non-Performing Assets (NPAs) after 90
              days of default.
            </p>
            <p>
              The RBI actively mandates public sector banks like SBI to pursue settlement of NPAs
              to clean up their books. SBI has a formal OTS (One Time Settlement) policy that is
              periodically reviewed and allows eligible borrowers to settle for a fraction of the
              total outstanding by waiving accumulated interest and penalties.
            </p>
            <p>
              Due Dost has navigated the SBI OTS process for numerous clients. We understand SBI
              Cards&apos; approval process, documentation requirements, and negotiation timelines
              — giving you the best chance of a maximum waiver.
            </p>
          </div>
        </div>
      </section>

      {/* Settlement Process */}
      <section className="py-16 bg-blue-50/40 dark:bg-blue-950/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our SBI Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We analyze your SBI credit card account status, outstanding amount, and NPA classification to build your settlement strategy.",
              },
              {
                step: "02",
                title: "Contact SBI Collections",
                desc: "We initiate an OTS (One Time Settlement) request directly with SBI Cards&apos; collections department using established channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts work to minimize the lump-sum amount SBI accepts — typically 30-70% less than the total outstanding.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you pay the negotiated amount once and SBI issues a settlement letter and No Objection Certificate (NOC). Debt closed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-background rounded-2xl p-6 border border-border shadow-sm flex gap-4"
              >
                <span className="text-4xl font-black bg-gradient-to-b from-duedost-blue to-duedost-green bg-clip-text text-transparent shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p
                    className="text-muted-foreground text-sm"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What You Need to Get Started
          </h2>
          <ul className="space-y-4">
            {[
              "Last SBI credit card statement showing outstanding balance",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from SBI collections team or legal notices",
              "Your ID proof (Aadhaar / PAN card)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-blue-50/40 dark:bg-blue-950/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SBI Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I know if my SBI account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every SBI account individually, from early missed payments to long-standing NPAs and those eligible for SBI's periodic OTS schemes. Our free consultation will tell you exactly where you stand.",
              },
              {
                q: "Will SBI settle for less than the outstanding?",
                a: "Yes. SBI regularly settles NPA credit card accounts — particularly SBI Cards accounts — at amounts significantly lower than the total outstanding. The settlement typically covers the principal with major waivers on interest and penalties.",
              },
              {
                q: "How long does SBI credit card settlement take?",
                a: "SBI credit card settlements typically take 60-120 days. As a public sector bank, SBI follows a structured internal approval process. Our team manages all documentation and follow-ups to keep the process moving efficiently.",
              },
              {
                q: "What is the minimum settlement amount SBI accepts?",
                a: "SBI evaluates settlement amounts based on RBI NPA resolution guidelines and the specific account details. Public sector banks often have structured OTS policies that determine the minimum acceptable amount. Our experts negotiate within these frameworks to minimize what you pay.",
              },
              {
                q: "Does SBI credit card settlement affect my CIBIL score?",
                a: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your SBI account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit. Most clients see meaningful improvement within 12–18 months.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-duedost-blue to-duedost-green p-10 md:p-14 text-white text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Settle Your SBI Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review your SBI account and
              tell you exactly how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-duedost-blue font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Call +91 92894 93265
              </a>
              <a
                href="https://wa.me/919289493265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Bank Settlement Guides */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Credit Card Dues With Other Banks
          </h2>
          <p className="mt-2 mb-8 text-muted-foreground">
            We negotiate settlements with all major Indian banks and NBFCs — not just SBI.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "HDFC Credit Card Settlement", href: "/hdfc-credit-card-settlement" },
              { label: "ICICI Credit Card Settlement", href: "/icici-credit-card-settlement" },
              { label: "Axis Bank Credit Card Settlement", href: "/axis-bank-credit-card-settlement" },
              { label: "Kotak Credit Card Settlement", href: "/kotak-credit-card-settlement" },
              { label: "IndusInd Credit Card Settlement", href: "/indusind-credit-card-settlement" },
              { label: "RBL Credit Card Settlement", href: "/rbl-credit-card-settlement" },
              { label: "Yes Bank Credit Card Settlement", href: "/yes-bank-credit-card-settlement" },
              { label: "Bajaj Finserv Settlement", href: "/bajaj-finserv-credit-card-settlement" },
              { label: "Tata Neu Credit Card Settlement", href: "/tata-neu-credit-card-settlement" },
            ].map((bank) => (
              <Link
                key={bank.href}
                href={bank.href}
                className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 bg-background text-sm font-medium text-duedost-blue hover:border-duedost-blue hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors duration-200"
              >
                {bank.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/credit-card-settlement"
              className="text-sm text-duedost-blue hover:underline font-medium"
            >
              View all credit card settlement services →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Related Debt Resolution Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/personal-loan-settlement"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Personal Loan Settlement
              </h3>
              <p className="text-sm text-muted-foreground">
                Settle personal loan outstanding at up to 60% less with expert legal negotiation.
              </p>
            </Link>
            <Link
              href="/recovery-agent-harassment"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Anti-Harassment Service
              </h3>
              <p className="text-sm text-muted-foreground">
                Stop aggressive recovery agent calls and protect your rights under RBI guidelines.
              </p>
            </Link>
            <Link
              href="/credit-card-settlement"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Credit Card Settlement Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn how credit card settlement works in India and what to expect.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
