import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RBL Credit Card Settlement | Settle at 35-75% Less | Due Dost",
  description:
    "Settle your RBL Bank credit card outstanding dues at 35-75% less. Expert negotiation with RBL collections team. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "RBL credit card settlement",
    "RBL Bank settlement India",
    "RBL credit card dues",
    "RBL OTS",
    "RBL Bank credit card defaulter",
    "Ratnakar Bank settlement",
    "credit card settlement India",
    "debt settlement company India",
  ],
  alternates: {
    canonical: `${SITE_URL}/rbl-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/rbl-credit-card-settlement`,
    siteName: "Due Dost",
    title: "RBL Credit Card Settlement | Due Dost",
    description:
      "Settle your RBL Bank credit card outstanding dues at 35-75% less. Expert negotiation. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost RBL Credit Card Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RBL Credit Card Settlement",
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
        "Expert RBL Bank credit card settlement service. Negotiate outstanding dues at 35-75% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/rbl-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "RBL Bank Settlement", item: `${SITE_URL}/rbl-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my RBL Bank account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every RBL account individually, from early missed payments to long-standing defaults. Our legal team knows exactly how to handle RBL collections.",
          },
        },
        {
          "@type": "Question",
          name: "RBL Bank's collections team is very aggressive — can Due Dost help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. RBL Bank's collections department is known for its aggressive follow-up — including frequent calls, legal notices, and field visits. When you engage Due Dost, all collections communication is redirected to our legal team. We handle every interaction professionally, stopping harassment while we negotiate your settlement.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does RBL Bank settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RBL Bank typically settles credit card accounts at 30-65% of the total outstanding, waiving significant interest, penalties, and fees. RBL's NPA challenges in recent years have made them particularly motivated to resolve cases through OTS rather than litigation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does RBL credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RBL credit card settlements typically take 30-90 days once we initiate the OTS process. Accounts that have been delinquent for longer or are under legal proceedings may take up to 4-6 months. Our team keeps you updated throughout.",
          },
        },
        {
          "@type": "Question",
          name: "Does RBL credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your RBL account is already in default or NPA status, your score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit profile. Most clients see improvement within 12–18 months of settlement.",
          },
        },
      ],
    },
  ],
};

export default function RBLCreditCardSettlementPage() {
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
          <span className="text-foreground font-medium">RBL Bank Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            RBL Bank Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              RBL Credit Card
            </span>{" "}
            Dues at Up to 75% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with RBL Bank credit card outstanding? Our expert legal team has helped
            1,000+ clients negotiate settlements directly with RBL&apos;s collections department — and
            stop the aggressive follow-ups for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+919289493265"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20RBL%20credit%20card%20debt.%20Please%20help.
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

      {/* Why RBL Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why RBL Bank Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              RBL Bank (formerly Ratnakar Bank) aggressively expanded its credit card business
              across India, issuing popular products like the Shoprite, Platinum Maxima, World
              Safari, and Icon cards. However, between 2021 and 2023, the bank faced significant
              Non-Performing Asset (NPA) pressures in its credit card portfolio — a situation that
              continues to shape how RBL approaches overdue accounts today.
            </p>
            <p>
              RBI guidelines encourage banks to resolve NPAs through negotiated One Time Settlements
              (OTS) rather than prolonged litigation. RBL Bank actively pursues OTS arrangements,
              especially for accounts that are 90 or more days overdue. Their internal settlement
              program is designed to recover a portion of outstanding dues while closing the NPA —
              which means there is genuine room to negotiate significant reductions.
            </p>
            <p>
              Due Dost has direct experience navigating RBL Bank&apos;s collections hierarchy.
              We know the right channels, the correct documentation, and how to frame an OTS
              proposal that RBL will take seriously. We handle all communication on your behalf
              so you can stop fielding aggressive collection calls immediately.
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
            Our RBL Bank Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We analyze your RBL credit card account status, outstanding balance, and NPA classification to build a tailored settlement strategy.",
              },
              {
                step: "02",
                title: "Initiate OTS with RBL",
                desc: "We submit a formal One Time Settlement (OTS) request directly to RBL Bank's collections or recovery department through established legal channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts negotiate hard to reduce the lump-sum amount RBL accepts — targeting 30-65% less than the total outstanding including interest and penalties.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you pay the negotiated amount once and RBL Bank issues a settlement letter and No Objection Certificate (NOC). Your debt is closed.",
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
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              "Last RBL Bank credit card statement showing outstanding balance",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from RBL collections team or legal notices",
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
            RBL Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I know if my RBL Bank account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every RBL account individually, from early missed payments to long-standing defaults. Our legal team knows exactly how to handle RBL collections.",
              },
              {
                q: "RBL Bank's collections team is very aggressive — can Due Dost help?",
                a: "Yes. RBL Bank's collections department is known for its aggressive follow-up — including frequent calls, legal notices, and field visits. When you engage Due Dost, all collections communication is redirected to our legal team. We handle every interaction professionally, stopping harassment while we negotiate your settlement.",
              },
              {
                q: "What percentage does RBL Bank settle credit card debt for?",
                a: "RBL Bank typically settles credit card accounts at 30-65% of the total outstanding, waiving significant interest, penalties, and fees. RBL's NPA challenges in recent years have made them particularly motivated to resolve cases through OTS rather than litigation.",
              },
              {
                q: "How long does RBL credit card settlement take?",
                a: "RBL credit card settlements typically take 30-90 days once we initiate the OTS process. Accounts that have been delinquent for longer or are under legal proceedings may take up to 4-6 months. Our team keeps you updated throughout.",
              },
              {
                q: "Does RBL credit card settlement affect my CIBIL score?",
                a: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your RBL account is already in default or NPA status, your score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit profile. Most clients see improvement within 12–18 months of settlement.",
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
              Ready to Settle Your RBL Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review your RBL Bank account
              and tell you exactly how much you can save — and stop the collection calls today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-duedost-blue font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Call +91 92894 93265
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20RBL%20credit%20card%20debt.%20Please%20help.
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
            We negotiate settlements with all major Indian banks and NBFCs — not just RBL Bank.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "HDFC Credit Card Settlement", href: "/hdfc-credit-card-settlement" },
              { label: "ICICI Credit Card Settlement", href: "/icici-credit-card-settlement" },
              { label: "SBI Credit Card Settlement", href: "/sbi-credit-card-settlement" },
              { label: "Axis Bank Credit Card Settlement", href: "/axis-bank-credit-card-settlement" },
              { label: "Kotak Credit Card Settlement", href: "/kotak-credit-card-settlement" },
              { label: "IndusInd Credit Card Settlement", href: "/indusind-credit-card-settlement" },
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
