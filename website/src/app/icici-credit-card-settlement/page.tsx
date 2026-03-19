import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ICICI Credit Card Settlement | Settle at 40-70% Less | Due Dost",
  description:
    "Settle your ICICI Bank credit card outstanding dues at 40-70% less. Expert negotiation with ICICI collections. RBI compliant. Free consultation. Call +91 96014 43663.",
  keywords: [
    "ICICI credit card settlement",
    "ICICI bank credit card dues",
    "ICICI OTS settlement",
    "ICICI credit card settlement process India",
    "credit card settlement India",
    "debt settlement company India",
    "credit card defaulter India",
    "one time settlement OTS",
  ],
  alternates: {
    canonical: `${SITE_URL}/icici-credit-card-settlement`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/icici-credit-card-settlement`,
    siteName: "Due Dost",
    title: "ICICI Credit Card Settlement | Due Dost",
    description:
      "Settle your ICICI Bank credit card outstanding dues at 40-70% less. Expert negotiation. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Due Dost ICICI Credit Card Settlement" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "ICICI Credit Card Settlement",
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
        "Expert ICICI credit card settlement service. Negotiate outstanding dues at 40-70% less.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/icici-credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Credit Card Settlement", item: `${SITE_URL}/credit-card-settlement` },
        { "@type": "ListItem", position: 3, name: "ICICI Credit Card Settlement", item: `${SITE_URL}/icici-credit-card-settlement` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my ICICI account is eligible for settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICICI accounts that are 90+ days overdue (classified as NPA) are generally eligible for OTS. Even accounts referred to collections agencies or with legal notices can often be settled. Our free consultation will assess your eligibility immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does ICICI Bank settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICICI Bank regularly settles credit card accounts at reduced amounts — typically accepting a waiver on accumulated interest and penalties, with the negotiated amount being 30-70% of the total outstanding. The exact figure depends on case specifics.",
          },
        },
        {
          "@type": "Question",
          name: "How long does ICICI credit card settlement take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICICI credit card settlements typically take 45-90 days once the OTS process is initiated. Cases where the account has been in default for longer may require more negotiation time, but we work to close every case as efficiently as possible.",
          },
        },
        {
          "@type": "Question",
          name: "Does ICICI credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your ICICI account is already in default, your score has already been affected. Settlement halts further deterioration and allows you to rebuild your credit profile over 12–18 months.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum settlement amount ICICI accepts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ICICI evaluates each account individually. There is no fixed minimum — factors like outstanding principal, duration of default, and repayment capacity all influence the final figure. Our team negotiates based on what you can realistically pay.",
          },
        },
      ],
    },
  ],
};

export default function ICICICreditCardSettlementPage() {
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
          <span className="text-foreground font-medium">ICICI Settlement</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
            ICICI Credit Card Settlement
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Settle Your{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              ICICI Credit Card
            </span>{" "}
            Dues at Up to 70% Less
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Struggling with ICICI credit card outstanding? Our expert legal team has helped thousands
            negotiate settlements directly with ICICI Bank&apos;s collections department.
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
            10,000+ Cases Settled &nbsp;|&nbsp; RBI Compliant &nbsp;|&nbsp; 100% Legal
          </p>
        </div>
      </section>

      {/* Why ICICI Settlement Is Possible */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why ICICI Credit Card Settlement is Possible
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p>
              ICICI Bank classifies overdue credit card accounts as Non-Performing Assets (NPAs)
              after 90 days of non-payment. Once an account reaches NPA status, carrying the full
              outstanding — bloated with interest and penalties — becomes a liability for the bank.
            </p>
            <p>
              RBI guidelines encourage banks to resolve NPAs through negotiated settlements, and
              ICICI Bank has an internal OTS (One Time Settlement) framework that allows eligible
              defaulters to pay a reduced lump sum and close the account. Without knowing the right
              process, most people never access this option.
            </p>
            <p>
              Due Dost has negotiated hundreds of ICICI credit card settlements. We understand
              ICICI&apos;s internal escalation paths, the OTS committee criteria, and how to
              present your case to maximize the waiver on interest and penalties.
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
            Our ICICI Settlement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Free Case Review",
                desc: "We analyze your ICICI credit card account status, outstanding amount, and NPA classification to build your settlement strategy.",
              },
              {
                step: "02",
                title: "Contact ICICI Collections",
                desc: "We initiate an OTS (One Time Settlement) request directly with ICICI Bank&apos;s collections department using established channels.",
              },
              {
                step: "03",
                title: "Negotiate Settlement Amount",
                desc: "Our experts work to minimize the lump-sum amount ICICI accepts — typically 30-70% less than the total outstanding.",
              },
              {
                step: "04",
                title: "Settlement Letter & NOC",
                desc: "Once agreed, you pay the negotiated amount once and ICICI issues a settlement letter and No Objection Certificate (NOC). Debt closed.",
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
              "Last ICICI credit card statement showing outstanding balance",
              "Outstanding amount details (principal, interest, penalties)",
              "Any communication from ICICI collections team or legal notices",
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
            ICICI Credit Card Settlement — FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I know if my ICICI account is eligible for settlement?",
                a: "ICICI accounts that are 90+ days overdue (classified as NPA) are generally eligible for OTS. Even accounts referred to collections agencies or with legal notices can often be settled. Our free consultation will assess your eligibility immediately.",
              },
              {
                q: "Will ICICI Bank settle for less than the outstanding?",
                a: "Yes. ICICI Bank regularly settles credit card accounts at reduced amounts — typically accepting a waiver on accumulated interest and penalties, with the negotiated amount being 30-70% of the total outstanding. The exact figure depends on case specifics.",
              },
              {
                q: "How long does ICICI credit card settlement take?",
                a: "ICICI credit card settlements typically take 45-90 days once the OTS process is initiated. Cases where the account has been in default for longer may require more negotiation time, but we work to close every case as efficiently as possible.",
              },
              {
                q: "What is the minimum settlement amount ICICI accepts?",
                a: "ICICI evaluates each account individually. There is no fixed minimum — factors like outstanding principal, duration of default, and repayment capacity all influence the final figure. Our team negotiates based on what you can realistically pay.",
              },
              {
                q: "Does ICICI credit card settlement affect my CIBIL score?",
                a: "Yes, the account will be marked 'Settled' rather than 'Closed' on your CIBIL report. However, if your ICICI account is already in default, your score has already been affected. Settlement halts further deterioration and allows you to rebuild your credit profile over 12–18 months of positive credit behaviour.",
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
              Ready to Settle Your ICICI Credit Card Dues?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation consultation. Our experts will review your ICICI account and
              tell you exactly how much you can save.
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

      <Footer />
    </main>
  );
}
