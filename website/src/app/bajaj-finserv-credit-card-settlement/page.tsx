import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bajaj Finserv EMI Card & Loan Settlement | Settle at 40-75% Less | Due Dost",
  description:
    "Settle your Bajaj Finserv EMI Network Card or personal loan dues at 40-75% less. Expert negotiation with Bajaj Finance collections team. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "Bajaj Finserv settlement",
    "Bajaj Finance EMI card settlement",
    "Bajaj Finserv personal loan settlement",
    "Bajaj Finance OTS",
    "Bajaj Finance recovery agent harassment",
    "Bajaj loan settlement India",
    "Bajaj Finance NPA settlement",
    "debt settlement company India",
  ],
  alternates: {
    canonical: `${SITE_URL}/bajaj-finserv-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/bajaj-finserv-credit-card-settlement`,
    siteName: "Due Dost",
    title: "Bajaj Finserv EMI Card & Loan Settlement | Due Dost",
    description:
      "Settle your Bajaj Finserv EMI Network Card or personal loan dues at 40-75% less. Expert negotiation. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost Bajaj Finserv Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Bajaj Finserv EMI Card & Loan Settlement",
      provider: {
        "@type": "FinancialService",
        name: "Due Dost",
        url: SITE_URL,
        telephone: "+919289493265",
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
        "Expert Bajaj Finserv EMI Network Card and personal loan settlement service. Negotiate outstanding dues at 40-75% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/bajaj-finserv-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "Bajaj Finserv Settlement", item: `${SITE_URL}/bajaj-finserv-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the Bajaj Finserv EMI Network Card a credit card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Bajaj Finserv EMI Network Card is not a traditional credit card. It is a pre-approved limit facility issued by Bajaj Finance Limited (an NBFC) that allows you to purchase products on no-cost or low-cost EMIs at partner stores. When you use this card and miss EMIs, you are effectively defaulting on a loan product — and settlement is handled the same way as any Bajaj Finance personal loan OTS.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my Bajaj Finance account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Bajaj Finance account individually, from early missed payments to accounts facing aggressive recovery. Our free consultation will tell you exactly where you stand.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does Bajaj Finance settle loans and EMI card dues for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bajaj Finance settles defaulted accounts — including EMI Network Card dues, personal loans, consumer durable loans, and Flexi Loans — typically at 35-70% of the total outstanding, depending on the account age, outstanding amount, and your repayment capacity. Interest and penalty waivers are the primary components of the reduction.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bajaj Finance send recovery agents and make excessive calls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Bajaj Finance is known for aggressive recovery practices — including frequent calls from collection agents, field visits, and notices. However, this behaviour is regulated by RBI guidelines applicable to all NBFCs. Once Due Dost initiates the settlement process on your behalf, all direct contact must route through us, and recovery harassment typically stops. If you are facing unlawful harassment, we can escalate to the RBI Ombudsman.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a Bajaj Finance OTS (One Time Settlement) take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bajaj Finance OTS timelines typically range from 30 to 90 days once the settlement request is formally initiated. Simple personal loan accounts at an early NPA stage tend to settle faster. EMI Network Card or Flexi Loan cases with larger outstanding amounts or extended delinquency may take 3–5 months. Our team follows up at every stage to keep the process moving.",
          },
        },
      ],
    },
  ],
};

export default function BajajFinservSettlementPage() {
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
          <span className="text-foreground font-medium">Bajaj Finserv Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            Bajaj Finserv EMI Card &amp; Loan Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Bajaj Finance Dues
            </span>{" "}
            at Up to 75% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with Bajaj Finserv EMI Network Card dues, personal loan, or Flexi Loan
            outstanding? Our expert team has helped 1,000+ clients settle directly with Bajaj
            Finance&apos;s collections department — and stop recovery agent harassment.
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

      {/* Why Bajaj Finance Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Bajaj Finance Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              Bajaj Finance Limited is India&apos;s largest Non-Banking Financial Company (NBFC),
              with millions of active borrowers across EMI Network Cards, personal loans, consumer
              durable loans, and Flexi Loans. Like banks, NBFCs are required to classify overdue
              accounts as Non-Performing Assets (NPAs) when EMIs go unpaid beyond 90 days — and
              NPAs on their books directly hurt their capital adequacy and profitability.
            </p>
            <p>
              RBI guidelines that govern NPA resolution apply equally to all NBFCs, including Bajaj
              Finance. These guidelines actively encourage lenders to resolve NPAs through One Time
              Settlement (OTS) programs rather than prolonged and costly legal recovery. Bajaj
              Finance runs internal OTS programs for defaulted accounts — covering both personal
              loans and EMI Network Card outstanding — but most borrowers do not know how to
              approach or negotiate these settlements effectively.
            </p>
            <p>
              Due Dost has direct experience navigating Bajaj Finance&apos;s OTS process, including
              the right escalation channels and documentation requirements. We take over all
              communication with Bajaj Finance&apos;s collections team, ensuring you are no longer
              subject to high-frequency recovery calls or field agent visits while the settlement
              is being negotiated.
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
            Our Bajaj Finance Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We review your Bajaj Finance account details — whether it is an EMI Network Card, personal loan, consumer durable loan, or Flexi Loan — and assess the NPA status, outstanding amount, and best settlement approach.",
              },
              {
                step: "02",
                title: "Initiate OTS with Bajaj Finance",
                desc: "We formally submit an OTS (One Time Settlement) application to Bajaj Finance's collections and NPA resolution team using established channels, taking over all communication on your behalf.",
              },
              {
                step: "03",
                title: "Negotiate the Settlement Amount",
                desc: "Our experts negotiate to minimise the lump-sum Bajaj Finance accepts — typically 30-65% of the total outstanding — by pushing for maximum waivers on accrued interest, late payment charges, and penalties.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once the settlement is approved, you pay the agreed amount in one go. Bajaj Finance issues an official settlement letter and No Objection Certificate (NOC), and the account is closed.",
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
              "Latest Bajaj Finance statement or loan summary showing outstanding balance",
              "Loan account number or EMI Network Card number",
              "Outstanding amount details (principal, accrued interest, penalties)",
              "Any communication from Bajaj Finance collections team, recovery agents, or legal notices",
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
            Bajaj Finserv Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is the Bajaj Finserv EMI Network Card a credit card?",
                a: "No. The Bajaj Finserv EMI Network Card is not a traditional credit card. It is a pre-approved limit facility issued by Bajaj Finance Limited (an NBFC) that allows you to purchase products on no-cost or low-cost EMIs at partner stores. When you use this card and miss EMIs, you are effectively defaulting on a loan product — and settlement is handled the same way as any Bajaj Finance personal loan OTS.",
              },
              {
                q: "How do I know if my Bajaj Finance account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We assess every Bajaj Finance account individually, from early missed payments to accounts facing aggressive recovery. Our free consultation will tell you exactly where you stand.",
              },
              {
                q: "What percentage does Bajaj Finance settle loans and EMI card dues for?",
                a: "Bajaj Finance settles defaulted accounts — including EMI Network Card dues, personal loans, consumer durable loans, and Flexi Loans — typically at 35-70% of the total outstanding, depending on the account age, outstanding amount, and your repayment capacity. Interest and penalty waivers are the primary components of the reduction.",
              },
              {
                q: "Does Bajaj Finance send recovery agents and make excessive calls?",
                a: "Yes, Bajaj Finance is known for aggressive recovery practices — including frequent calls from collection agents, field visits, and notices. However, this behaviour is regulated by RBI guidelines applicable to all NBFCs. Once Due Dost initiates the settlement process on your behalf, all direct contact must route through us, and recovery harassment typically stops. If you are facing unlawful harassment, we can escalate to the RBI Ombudsman.",
              },
              {
                q: "How long does a Bajaj Finance OTS take?",
                a: "Bajaj Finance OTS timelines typically range from 30 to 90 days once the settlement request is formally initiated. Simple personal loan accounts at an early NPA stage tend to settle faster. EMI Network Card or Flexi Loan cases with larger outstanding amounts or extended delinquency may take 3–5 months. Our team follows up at every stage to keep the process moving.",
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
              Ready to Settle Your Bajaj Finance Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review your Bajaj Finance
              account and tell you exactly how much you can save — and put an end to recovery calls.
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
            We negotiate settlements with all major Indian banks and NBFCs — not just Bajaj Finserv.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "HDFC Credit Card Settlement", href: "/hdfc-credit-card-settlement" },
              { label: "ICICI Credit Card Settlement", href: "/icici-credit-card-settlement" },
              { label: "SBI Credit Card Settlement", href: "/sbi-credit-card-settlement" },
              { label: "Axis Bank Credit Card Settlement", href: "/axis-bank-credit-card-settlement" },
              { label: "Kotak Credit Card Settlement", href: "/kotak-credit-card-settlement" },
              { label: "IndusInd Credit Card Settlement", href: "/indusind-credit-card-settlement" },
              { label: "RBL Credit Card Settlement", href: "/rbl-credit-card-settlement" },
              { label: "Yes Bank Credit Card Settlement", href: "/yes-bank-credit-card-settlement" },
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
