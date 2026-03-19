import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kotak Credit Card Settlement | Settle at 40-70% Less | Due Dost",
  description:
    "Settle your Kotak Mahindra Bank credit card outstanding dues at 40-70% less. Expert negotiation with Kotak's recovery team. RBI compliant. Free consultation. Call +91 96014 43663.",
  keywords: [
    "Kotak credit card settlement",
    "Kotak Mahindra bank settlement",
    "Kotak credit card dues",
    "Kotak OTS",
    "Kotak Mahindra credit card defaulter India",
    "Kotak credit card settlement process India",
    "credit card settlement India",
    "debt settlement company India",
  ],
  alternates: { canonical: `${SITE_URL}/kotak-credit-card-settlement` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/kotak-credit-card-settlement`,
    siteName: "Due Dost",
    title: "Kotak Mahindra Credit Card Settlement | Due Dost",
    description:
      "Settle your Kotak Mahindra Bank credit card outstanding dues at 40-70% less. Expert negotiation. Free consultation.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Due Dost Kotak Mahindra Credit Card Settlement",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Kotak Mahindra Credit Card Settlement",
      provider: {
        "@type": "FinancialService",
        name: "Due Dost",
        url: SITE_URL,
        telephone: "+919601443663",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sector 2",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN",
        },
      },
      description:
        "Expert Kotak Mahindra credit card settlement service. Negotiate outstanding dues at 40-70% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/kotak-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Credit Card Settlement",
          item: `${SITE_URL}/credit-card-settlement`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kotak Mahindra Settlement",
          item: `${SITE_URL}/kotak-credit-card-settlement`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my Kotak credit card account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Kotak account individually, from early missed payments to long-standing defaults. Our free consultation will tell you exactly where you stand.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does Kotak Mahindra Bank settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kotak Mahindra Bank regularly settles NPA credit card accounts at substantially reduced amounts — typically accepting 30-60% of the principal outstanding, waiving a significant portion of accumulated interest and penalties.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Kotak credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kotak Mahindra credit card settlements typically take 30-90 days once we initiate the OTS process. Accounts in early NPA stages may resolve faster; accounts with ongoing legal proceedings can take up to 4-6 months.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kotak credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your Kotak account is already in default, settlement stops further deterioration. Most clients see meaningful CIBIL improvement within 12-18 months of settlement.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kotak handle collections internally or through third-party agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kotak Mahindra Bank manages a large part of its NPA recovery process internally through its own recovery team, in addition to working with authorised collection agencies. Due Dost has experience engaging Kotak's internal recovery hierarchy directly, which often leads to faster and more favourable settlement outcomes.",
          },
        },
      ],
    },
  ],
};

export default function KotakCreditCardSettlementPage() {
  return (
    <main className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-2">
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
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
          <span className="text-foreground font-medium">
            Kotak Mahindra Settlement
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            Kotak Mahindra Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Kotak Credit Card
            </span>{" "}
            Dues at Up to 70% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with Kotak Mahindra Bank credit card outstanding? Our
            expert legal team has helped thousands negotiate settlements directly
            with Kotak&apos;s internal recovery department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+919601443663"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919601443663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-duedost-green text-duedost-green font-semibold text-lg hover:bg-duedost-green hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            10,000+ Cases Settled &nbsp;|&nbsp; RBI Compliant &nbsp;|&nbsp;
            100% Legal
          </p>
        </div>
      </section>

      {/* Why Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Kotak Mahindra Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              Kotak Mahindra Bank is one of India&apos;s largest private sector
              banks with a massive credit card portfolio spanning cards like
              Kotak 811, Kotak Royale Signature, Kotak Zen Signature, and Kotak
              Essentia Platinum. Like all RBI-regulated banks, Kotak classifies
              overdue credit card accounts as Non-Performing Assets (NPAs) after
              90 days of non-payment.
            </p>
            <p>
              Once an account reaches NPA status, carrying the full outstanding
              on their books adversely affects Kotak&apos;s financial metrics.
              RBI guidelines actively encourage banks to resolve NPAs through
              negotiated One Time Settlements (OTS) rather than drawn-out legal
              proceedings. Kotak Mahindra Bank runs structured OTS programs for
              NPA accounts — and these programs are particularly active during
              year-end quarters when banks work to clean up their balance sheets.
            </p>
            <p>
              A key advantage with Kotak is that a significant portion of
              recovery is handled internally by Kotak&apos;s own recovery team,
              not just outsourced third-party agencies. Due Dost has direct
              experience engaging Kotak&apos;s internal recovery hierarchy and
              knows exactly how to initiate, negotiate, and close an OTS at the
              lowest possible amount for you.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-blue-50/40 dark:bg-blue-950/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Kotak Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We analyze your Kotak credit card account status, outstanding amount, and NPA classification to build a targeted settlement strategy.",
              },
              {
                step: "02",
                title: "Engage Kotak Recovery Team",
                desc: "We initiate an OTS (One Time Settlement) request directly with Kotak Mahindra Bank's internal recovery department through established channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts work to minimise the lump-sum amount Kotak accepts — typically securing settlements at 30-60% less than the total outstanding.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you make a single negotiated payment and Kotak issues a settlement letter and No Objection Certificate (NOC). Debt closed.",
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
              "Last Kotak credit card statement showing outstanding balance",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from Kotak collections team or legal notices",
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
            Kotak Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I know if my Kotak credit card account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Kotak account individually, from early missed payments to long-standing defaults. Our free consultation will tell you exactly where you stand.",
              },
              {
                q: "Will Kotak Mahindra Bank settle for less than the outstanding?",
                a: "Yes. Kotak Mahindra Bank regularly settles NPA credit card accounts at substantially reduced amounts — typically accepting 30-60% of the principal outstanding, waiving a significant portion of accumulated interest and penalties.",
              },
              {
                q: "How long does Kotak credit card settlement take?",
                a: "Kotak Mahindra credit card settlements typically take 30-90 days once we initiate the OTS process. Accounts in early NPA stages may resolve faster, while accounts with ongoing legal notices can take up to 4-6 months.",
              },
              {
                q: "Does Kotak handle collections internally or through agencies?",
                a: "Kotak Mahindra Bank manages a significant portion of its NPA recovery internally through its own recovery team, in addition to working with authorised collection agencies. Due Dost has direct experience engaging Kotak's internal recovery hierarchy, which often results in faster and more favourable outcomes.",
              },
              {
                q: "Does Kotak credit card settlement affect my CIBIL score?",
                a: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your Kotak account is already in default, settlement stops further deterioration. Most clients see meaningful CIBIL improvement within 12–18 months of settlement.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-background rounded-2xl p-6 border border-border"
              >
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
              Ready to Settle Your Kotak Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review
              your Kotak account and tell you exactly how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919601443663"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-duedost-blue font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Call +91 96014 43663
              </a>
              <a
                href="https://wa.me/919601443663"
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
            We negotiate settlements with all major Indian banks and NBFCs — not just Kotak Mahindra Bank.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "HDFC Credit Card Settlement", href: "/hdfc-credit-card-settlement" },
              { label: "ICICI Credit Card Settlement", href: "/icici-credit-card-settlement" },
              { label: "SBI Credit Card Settlement", href: "/sbi-credit-card-settlement" },
              { label: "Axis Bank Credit Card Settlement", href: "/axis-bank-credit-card-settlement" },
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
