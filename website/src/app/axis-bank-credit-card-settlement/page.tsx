import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Axis Bank Credit Card Settlement | Settle at 40-75% Less | Due Dost",
  description:
    "Settle your Axis Bank credit card outstanding dues at 40-75% less. Expert negotiation with Axis Bank collections team. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "Axis Bank credit card settlement",
    "Axis credit card dues settlement",
    "Axis Bank OTS",
    "Axis Bank credit card settlement process India",
    "credit card settlement India",
    "debt settlement company India",
    "credit card defaulter India",
    "one time settlement OTS",
  ],
  alternates: {
    canonical: `${SITE_URL}/axis-bank-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/axis-bank-credit-card-settlement`,
    siteName: "Due Dost",
    title: "Axis Bank Credit Card Settlement | Due Dost",
    description:
      "Settle your Axis Bank credit card outstanding dues at 40-75% less. Expert negotiation. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost Axis Bank Credit Card Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Axis Bank Credit Card Settlement",
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
        "Expert Axis Bank credit card settlement service. Negotiate outstanding dues at 40-75% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/axis-bank-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "Axis Bank Credit Card Settlement", item: `${SITE_URL}/axis-bank-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my Axis Bank account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Axis Bank account individually, from early missed payments to accounts referred to collection agencies or with legal notices. Our free consultation will assess your situation immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does Axis Bank settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Axis Bank routinely settles NPA credit card accounts at reduced amounts — generally accepting a significant waiver on interest and late charges. The final negotiated amount depends on your outstanding balance, the duration of default, and the negotiation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Axis Bank credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Axis Bank credit card settlements typically take 45-90 days from the time we initiate the OTS request. The timeline depends on the account status, outstanding amount, and Axis Bank's internal approval process. Our team follows up consistently to avoid delays.",
          },
        },
        {
          "@type": "Question",
          name: "Does Axis Bank credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your Axis Bank account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit over 12–18 months.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum settlement amount Axis Bank accepts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Axis Bank determines settlement amounts on a case-by-case basis, taking into account the outstanding principal, the length of delinquency, and the borrower's repayment capacity. Our negotiators present your case in the strongest possible light to minimize the settlement figure.",
          },
        },
      ],
    },
  ],
};

export default function AxisBankCreditCardSettlementPage() {
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
          <span className="text-foreground font-medium">Axis Bank Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            Axis Bank Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Axis Bank Credit Card
            </span>{" "}
            Dues at Up to 75% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with Axis Bank credit card outstanding? Our expert legal team has helped
            1,000+ clients negotiate settlements directly with Axis Bank&apos;s collections department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+919289493265"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20Axis%20Bank%20credit%20card%20debt.%20Please%20help.
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

      {/* Why Axis Bank Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Axis Bank Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              Axis Bank, one of India&apos;s largest private sector banks, classifies overdue credit
              card accounts as Non-Performing Assets (NPAs) after 90 days of non-payment. Like all
              major banks, Axis Bank actively works to resolve NPAs because unresolved overdue
              accounts affect the bank&apos;s profitability and regulatory standing.
            </p>
            <p>
              RBI guidelines encourage banks to adopt settlement-based resolution for NPAs, and
              Axis Bank maintains an internal OTS (One Time Settlement) program that allows
              defaulting borrowers to clear their dues at a significantly reduced amount — typically
              by waiving accumulated interest and late fees. Most borrowers are unaware of this
              option or how to navigate it.
            </p>
            <p>
              Due Dost has successfully negotiated Axis Bank credit card settlements for hundreds of
              clients. We know Axis Bank&apos;s OTS approval criteria, the right escalation
              channels, and how to structure your case to achieve the maximum possible reduction.
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
            Our Axis Bank Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We analyze your Axis Bank credit card account status, outstanding amount, and NPA classification to build your settlement strategy.",
              },
              {
                step: "02",
                title: "Contact Axis Bank Collections",
                desc: "We initiate an OTS (One Time Settlement) request directly with Axis Bank&apos;s collections department using established channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts work to minimize the lump-sum amount Axis Bank accepts — typically 30-70% less than the total outstanding.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you pay the negotiated amount once and Axis Bank issues a settlement letter and No Objection Certificate (NOC). Debt closed.",
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
              "Last Axis Bank credit card statement showing outstanding balance",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from Axis Bank collections team or legal notices",
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
            Axis Bank Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I know if my Axis Bank account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Axis Bank account individually, from early missed payments to accounts referred to collection agencies or with legal notices. Our free consultation will assess your situation immediately.",
              },
              {
                q: "Will Axis Bank settle for less than the outstanding?",
                a: "Yes. Axis Bank routinely settles NPA credit card accounts at reduced amounts — generally accepting a significant waiver on interest and late charges. The final negotiated amount depends on your outstanding balance, the duration of default, and the negotiation.",
              },
              {
                q: "How long does Axis Bank credit card settlement take?",
                a: "Axis Bank credit card settlements typically take 45-90 days from the time we initiate the OTS request. The timeline depends on the account status, outstanding amount, and Axis Bank's internal approval process. Our team follows up consistently to avoid delays.",
              },
              {
                q: "What is the minimum settlement amount Axis Bank accepts?",
                a: "Axis Bank determines settlement amounts on a case-by-case basis, taking into account the outstanding principal, the length of delinquency, and the borrower's repayment capacity. Our negotiators present your case in the strongest possible light to minimize the settlement figure.",
              },
              {
                q: "Does Axis Bank credit card settlement affect my CIBIL score?",
                a: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your Axis Bank account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further damage and allows you to begin rebuilding your credit over 12–18 months of positive credit behaviour.",
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
              Ready to Settle Your Axis Bank Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review your Axis Bank account
              and tell you exactly how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-duedost-blue font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Call +91 92894 93265
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20Axis%20Bank%20credit%20card%20debt.%20Please%20help.
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
            We negotiate settlements with all major Indian banks and NBFCs — not just Axis Bank.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "HDFC Credit Card Settlement", href: "/hdfc-credit-card-settlement" },
              { label: "ICICI Credit Card Settlement", href: "/icici-credit-card-settlement" },
              { label: "SBI Credit Card Settlement", href: "/sbi-credit-card-settlement" },
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
