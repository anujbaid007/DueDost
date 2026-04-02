import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tata Neu Credit Card Settlement | Settle at 40-75% Less | Due Dost",
  description:
    "Settle your Tata Neu HDFC or Tata Neu SBI credit card outstanding dues at 40-75% less. Expert negotiation with HDFC Bank and SBI Card collections teams. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "Tata Neu credit card settlement",
    "Tata Neu HDFC credit card settlement",
    "Tata Neu SBI credit card settlement",
    "Tata Neu credit card OTS",
    "Tata credit card defaulter India",
    "Tata Neu card dues",
    "credit card settlement India",
    "debt settlement company India",
  ],
  alternates: {
    canonical: `${SITE_URL}/tata-neu-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/tata-neu-credit-card-settlement`,
    siteName: "Due Dost",
    title: "Tata Neu Credit Card Settlement | Due Dost",
    description:
      "Settle your Tata Neu credit card outstanding dues at 40-75% less. Expert negotiation with HDFC Bank or SBI Card. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost Tata Neu Credit Card Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Tata Neu Credit Card Settlement",
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
        "Expert Tata Neu credit card settlement service. Negotiate outstanding dues with HDFC Bank or SBI Card at 40-75% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/tata-neu-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "Tata Neu Credit Card Settlement", item: `${SITE_URL}/tata-neu-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the actual issuer of the Tata Neu credit card — is it Tata or a bank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tata Neu does not issue credit cards directly. The Tata Neu credit card is a co-branded product issued in partnership with either HDFC Bank (Tata Neu HDFC Bank Credit Card) or SBI Card (Tata Neu SBI Card). This means your settlement is negotiated with the underlying bank — either HDFC Bank or SBI Card — not with Tata. Due Dost works directly with whichever bank issued your specific card.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my Tata Neu credit card account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We work directly with the issuing bank (HDFC Bank or SBI Card) to negotiate the best settlement for your Tata Neu credit card outstanding.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does HDFC Bank or SBI Card settle Tata Neu credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both HDFC Bank and SBI Card have structured OTS programs for delinquent credit card accounts. Settlements are typically reached at 30-70% of the total outstanding, with significant waivers on accumulated interest and late payment charges. The exact reduction depends on the account age, outstanding balance, and the negotiation conducted by our experts.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a Tata Neu credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tata Neu credit card settlement follows the OTS timelines of the issuing bank — typically 30 to 90 days for HDFC Bank and SBI Card once the formal settlement process is initiated. Accounts in early NPA stages settle faster; those with extended delinquency or pending legal notices may take up to 4-6 months. Our team actively follows up to avoid delays.",
          },
        },
        {
          "@type": "Question",
          name: "Does settling my Tata Neu credit card affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be reported as 'Settled' rather than 'Closed' on your CIBIL report — a distinction that HDFC Bank or SBI Card reports to the credit bureaus. However, if your Tata Neu card account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further deterioration and allows you to begin rebuilding your credit. Most clients see meaningful CIBIL improvement within 12–18 months of completing the settlement.",
          },
        },
      ],
    },
  ],
};

export default function TataNeuCreditCardSettlementPage() {
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
          <span className="text-foreground font-medium">Tata Neu Credit Card Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            Tata Neu Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Tata Neu Credit Card
            </span>{" "}
            Dues at Up to 75% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with Tata Neu credit card outstanding? Whether your card is issued by HDFC
            Bank or SBI Card, our expert team negotiates directly with the issuing bank to settle
            your dues at the lowest possible amount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+919289493265"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20Tata%20Neu%20credit%20card%20debt.%20Please%20help."
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

      {/* Why Tata Neu Credit Card Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Tata Neu Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              The Tata Neu credit card is a co-branded card offered under Tata Group&apos;s
              super-app ecosystem. However, Tata itself is not the card issuer — the card is
              issued in partnership with either HDFC Bank (Tata Neu HDFC Bank Credit Card) or SBI
              Card (Tata Neu SBI Card). This distinction matters enormously when it comes to
              settlement: your dues are owed to the underlying bank, and your settlement is
              negotiated with that bank&apos;s collections and NPA resolution team.
            </p>
            <p>
              Both HDFC Bank and SBI Card are two of India&apos;s largest credit card issuers and
              both maintain structured One Time Settlement (OTS) programs for delinquent accounts,
              in line with RBI guidelines that encourage banks to resolve NPAs rather than pursue
              prolonged legal recovery. When a Tata Neu card account goes into default, it enters
              the same OTS process as any other HDFC or SBI credit card — with the same waiver
              potential on accumulated interest, late payment charges, and over-limit fees.
            </p>
            <p>
              Due Dost has extensive experience handling settlements with both HDFC Bank and SBI
              Card. We identify which bank holds your Tata Neu account, engage the right
              collections team, and navigate their OTS process to secure the maximum possible
              reduction in your outstanding dues.
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
            Our Tata Neu Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We identify whether your Tata Neu card is issued by HDFC Bank or SBI Card, then review the account status, outstanding amount, and NPA classification to build the right settlement strategy.",
              },
              {
                step: "02",
                title: "Contact the Issuing Bank",
                desc: "We initiate an OTS (One Time Settlement) request directly with HDFC Bank or SBI Card's collections team — whichever bank issued your Tata Neu card — using established channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts work to minimise the lump-sum the bank accepts — typically 30-70% less than the total outstanding — by pushing for maximum waivers on interest and late payment penalties.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you pay the negotiated amount in one payment. The issuing bank (HDFC Bank or SBI Card) issues an official settlement letter and No Objection Certificate (NOC). Debt closed.",
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
              "Last Tata Neu credit card statement showing outstanding balance",
              "Card variant details (Tata Neu HDFC Bank or Tata Neu SBI Card)",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from the collections team or legal notices",
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
            Tata Neu Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Who is the actual issuer of the Tata Neu credit card — is it Tata or a bank?",
                a: "Tata Neu does not issue credit cards directly. The Tata Neu credit card is a co-branded product issued in partnership with either HDFC Bank (Tata Neu HDFC Bank Credit Card) or SBI Card (Tata Neu SBI Card). This means your settlement is negotiated with the underlying bank — either HDFC Bank or SBI Card — not with Tata. Due Dost works directly with whichever bank issued your specific card.",
              },
              {
                q: "How do I know if my Tata Neu credit card account is eligible for settlement?",
                a: "You don't need to be 90 days overdue — even if you've missed a single EMI, we can help. We work directly with the issuing bank (HDFC Bank or SBI Card) to negotiate the best settlement for your Tata Neu credit card outstanding.",
              },
              {
                q: "What percentage does HDFC Bank or SBI Card settle Tata Neu credit card debt for?",
                a: "Both HDFC Bank and SBI Card have structured OTS programs for delinquent credit card accounts. Settlements are typically reached at 30-70% of the total outstanding, with significant waivers on accumulated interest and late payment charges. The exact reduction depends on the account age, outstanding balance, and the negotiation conducted by our experts.",
              },
              {
                q: "How long does a Tata Neu credit card settlement take?",
                a: "Tata Neu credit card settlement follows the OTS timelines of the issuing bank — typically 30 to 90 days for HDFC Bank and SBI Card once the formal settlement process is initiated. Accounts in early NPA stages settle faster; those with extended delinquency or pending legal notices may take up to 4-6 months. Our team actively follows up to avoid delays.",
              },
              {
                q: "Does settling my Tata Neu credit card affect my CIBIL score?",
                a: "Yes, the account will be reported as 'Settled' rather than 'Closed' on your CIBIL report — a distinction that HDFC Bank or SBI Card reports to the credit bureaus. However, if your Tata Neu card account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further deterioration and allows you to begin rebuilding your credit. Most clients see meaningful CIBIL improvement within 12–18 months of completing the settlement.",
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
              Ready to Settle Your Tata Neu Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will identify your issuing bank,
              review your account, and tell you exactly how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-duedost-blue font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Call +91 92894 93265
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20Tata%20Neu%20credit%20card%20debt.%20Please%20help."
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
            We negotiate settlements with all major Indian banks and NBFCs — not just Tata Neu.
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
              { label: "Bajaj Finserv Settlement", href: "/bajaj-finserv-credit-card-settlement" },
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
