import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Personal Loan Settlement in India | Reduce Outstanding | Due Dost",
  description:
    "Settle your personal loan at up to 60% less than the outstanding amount. Expert legal team negotiates directly with banks and NBFCs. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "personal loan settlement India",
    "personal loan settlement",
    "personal loan OTS",
    "how to settle personal loan India",
    "personal loan defaulter help",
    "NBFC loan settlement",
    "bank loan settlement India",
    "EMI nahi bhar sakta",
    "personal loan settlement HDFC",
    "personal loan settlement ICICI",
    "personal loan NPA settlement",
    "one time settlement personal loan",
  ],
  alternates: { canonical: `${SITE_URL}/personal-loan-settlement` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/personal-loan-settlement`,
    siteName: "Due Dost",
    title: "Personal Loan Settlement in India | Due Dost",
    description:
      "Settle your personal loan at up to 60% less. Expert legal team negotiates with banks and NBFCs. Free consultation.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Due Dost Personal Loan Settlement",
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
      "@id": `${SITE_URL}/personal-loan-settlement#service`,
      name: "Personal Loan Settlement",
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
        "Legal personal loan settlement service. Negotiate outstanding EMI dues at 40-60% less with expert legal team.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/personal-loan-settlement`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/personal-loan-settlement#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Personal Loan Settlement",
          item: `${SITE_URL}/personal-loan-settlement`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/personal-loan-settlement#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What happens if I stop paying personal loan EMI in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you stop paying personal loan EMIs, the lender will initially send payment reminders and follow-up calls. After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA) and your CIBIL score drops significantly. The lender may initiate legal proceedings or assign the account to a recovery agency. At this stage, settlement becomes a viable option — Due Dost can negotiate a reduced one-time settlement with your lender.",
          },
        },
        {
          "@type": "Question",
          name: "Can I settle a personal loan for less than the principal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases it is possible to settle a personal loan for less than or close to the principal outstanding amount. Banks and NBFCs are often willing to waive off interest, penalties, and sometimes part of the principal for NPA accounts in exchange for a lump-sum payment. Due Dost's expert legal team negotiates to get you the best possible settlement amount.",
          },
        },
        {
          "@type": "Question",
          name: "How does NBFC loan settlement work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NBFC (Non-Banking Financial Company) loan settlement works similarly to bank settlements. If your loan is overdue or classified as NPA, we approach the NBFC with a one-time settlement (OTS) proposal. NBFCs are often more flexible than banks and can settle accounts at 40-60% of the outstanding dues. We handle all negotiations, documentation, and ensure you receive the settlement letter and NOC.",
          },
        },
        {
          "@type": "Question",
          name: "Will settlement affect my future loan eligibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A settled account is reported as 'settled' on your CIBIL report, which does temporarily affect your credit score and future loan eligibility. However, if you are already in default, your credit score is already impacted. Settlement stops the damage, clears your liability, and allows you to begin rebuilding your credit. Many clients start getting loan offers within 12-24 months after settlement.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between loan settlement and loan waiver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A loan settlement is a negotiated agreement where the borrower pays a mutually agreed reduced amount (typically 40-60% of outstanding dues) to close the account. A loan waiver is where the entire outstanding amount is forgiven, usually granted by governments for specific categories of loans (e.g., agricultural loan waivers). Due Dost specialises in loan settlements — we negotiate with banks and NBFCs to reduce what you owe.",
          },
        },
        {
          "@type": "Question",
          name: "Does loan settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, a loan settlement marks the account as 'Settled' on your CIBIL report, which is viewed less favourably than 'Closed'. However, if your account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further deterioration and gives you a clean start to rebuild your credit. Most clients see meaningful improvement within 12–18 months of settlement.",
          },
        },
        {
          "@type": "Question",
          name: "How long does 'Settled' status stay on my CIBIL report after loan settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 'Settled' status typically remains on your CIBIL report for 7 years from the date of settlement. Its negative impact reduces over time as you build positive credit history. We provide guidance on improving your CIBIL score post-settlement as part of our service.",
          },
        },
        {
          "@type": "Question",
          name: "How to improve CIBIL score after loan settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After loan settlement, you can improve your CIBIL score by: (1) Getting a secured credit card against a fixed deposit and using it responsibly, (2) Taking a small secured loan and repaying it on time, (3) Ensuring all other active accounts are paid on time, (4) Monitoring your CIBIL report regularly and disputing any errors. Most clients see significant improvement within 12–24 months of following this approach.",
          },
        },
        {
          "@type": "Question",
          name: "Can an NBFC sue me for not paying a loan in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, an NBFC (Non-Banking Financial Company) can file a civil suit against you for non-payment of a loan. However, NBFCs are often more flexible than banks and prefer settlement over litigation. If your NBFC loan is overdue or classified as NPA, Due Dost can negotiate a one-time settlement (OTS) to resolve it at a significantly reduced amount — avoiding legal proceedings entirely.",
          },
        },
        {
          "@type": "Question",
          name: "Is it better to settle or pay a personal loan in full?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you can afford to pay the full outstanding amount, paying in full is always better — the account is marked 'Closed' and has a minimal impact on your CIBIL score. However, if you are in financial distress and cannot repay the full amount, settlement is a legitimate legal option that resolves your liability at a reduced cost. Our experts will advise you on the best approach for your specific situation.",
          },
        },
      ],
    },
  ],
};

// ─── Static data ────────────────────────────────────────────────────────────

const situations = [
  {
    icon: "💼",
    title: "Job Loss / Salary Cut",
    description:
      "Sudden unemployment or salary reduction making monthly EMIs unaffordable. We negotiate a settlement based on your current financial situation.",
  },
  {
    icon: "🏥",
    title: "Medical Emergency",
    description:
      "Unexpected medical expenses draining your savings and leaving nothing for EMI payments. We help you settle and start fresh.",
  },
  {
    icon: "📉",
    title: "Business Failure",
    description:
      "Business losses wiping out income and making personal loan repayment impossible. Our team understands your situation and negotiates accordingly.",
  },
  {
    icon: "🔗",
    title: "Multiple Loans / Debt Trap",
    description:
      "Juggling multiple loans with combined EMIs exceeding your monthly income. We consolidate and settle to give you breathing room.",
  },
  {
    icon: "📈",
    title: "EMI Hike After Rate Increase",
    description:
      "Floating rate loans where EMIs jumped significantly after RBI rate hikes, making repayment unaffordable.",
  },
  {
    icon: "🚨",
    title: "NPA / Loan Account in Default",
    description:
      "Account already classified as Non-Performing Asset (NPA) or with recovery agents calling. We act fast to settle and stop harassment.",
  },
];

const steps = [
  {
    number: "01",
    title: "Case Analysis",
    description:
      "We review your complete loan profile — outstanding amount, EMI history, tenure, lender type (bank or NBFC), and your current financial situation. This helps us determine the best settlement strategy and realistic reduction percentage.",
  },
  {
    number: "02",
    title: "Negotiation with Lender",
    description:
      "Our expert legal team contacts your bank or NBFC directly and presents a One-Time Settlement (OTS) proposal. We leverage our knowledge of lender policies and RBI NPA resolution frameworks to negotiate the maximum reduction.",
  },
  {
    number: "03",
    title: "Settlement Letter",
    description:
      "Once the lender agrees to a settlement amount, we ensure you receive a formal, legally valid settlement offer letter in writing before any payment is made. This protects your interests completely.",
  },
  {
    number: "04",
    title: "Closure & NOC",
    description:
      "You pay the agreed settlement amount and we ensure the lender issues a No Objection Certificate (NOC) confirming the loan is closed. We also follow up to ensure the CIBIL update reflects the settlement correctly.",
  },
];

const lenders = [
  "HDFC Bank",
  "ICICI Bank",
  "SBI",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Bajaj Finance",
  "Fullerton India",
  "Tata Capital",
  "IndusInd Bank",
  "Yes Bank",
  "IDFC First Bank",
  "Muthoot Finance",
  "Shriram Finance",
  "L&T Finance",
  "Aditya Birla Finance",
  "Hero FinCorp",
  "CreditBee",
  "MoneyTap",
  "KreditBee",
  "Navi",
  "Poonawalla Fincorp",
  "Manappuram Finance",
];

const faqs = [
  {
    question: "What happens if I stop paying personal loan EMI in India?",
    answer:
      "If you stop paying personal loan EMIs, the lender will initially send payment reminders and follow-up calls. After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA) and your CIBIL score drops significantly. The lender may initiate legal proceedings or assign the account to a recovery agency. At this stage, settlement becomes a viable option — Due Dost can negotiate a reduced one-time settlement with your lender.",
  },
  {
    question: "Can I settle a personal loan for less than the principal?",
    answer:
      "Yes, in many cases it is possible to settle a personal loan for less than or close to the principal outstanding amount. Banks and NBFCs are often willing to waive off interest, penalties, and sometimes part of the principal for NPA accounts in exchange for a lump-sum payment. Due Dost's expert legal team negotiates to get you the best possible settlement amount.",
  },
  {
    question: "How does NBFC loan settlement work?",
    answer:
      "NBFC (Non-Banking Financial Company) loan settlement works similarly to bank settlements. If your loan is overdue or classified as NPA, we approach the NBFC with a one-time settlement (OTS) proposal. NBFCs are often more flexible than banks and can settle accounts at 40-60% of the outstanding dues. We handle all negotiations, documentation, and ensure you receive the settlement letter and NOC.",
  },
  {
    question: "Will settlement affect my future loan eligibility?",
    answer:
      "A settled account is reported as 'settled' on your CIBIL report, which does temporarily affect your credit score and future loan eligibility. However, if you are already in default, your credit score is already impacted. Settlement stops the damage, clears your liability, and allows you to begin rebuilding your credit. Many clients start getting loan offers within 12-24 months after settlement.",
  },
  {
    question:
      "What is the difference between loan settlement and loan waiver?",
    answer:
      "A loan settlement is a negotiated agreement where the borrower pays a mutually agreed reduced amount (typically 40-60% of outstanding dues) to close the account. A loan waiver is where the entire outstanding amount is forgiven, usually granted by governments for specific categories of loans (e.g., agricultural loan waivers). Due Dost specialises in loan settlements — we negotiate with banks and NBFCs to reduce what you owe.",
  },
  {
    question: "Does loan settlement affect my CIBIL score?",
    answer:
      "Yes, a loan settlement marks the account as 'Settled' on your CIBIL report, which is viewed less favourably than 'Closed'. However, if your account is already in default or NPA status, your CIBIL score has already been impacted. Settlement stops further deterioration and gives you a clean start to rebuild your credit. Most clients see meaningful improvement within 12–18 months of settlement.",
  },
  {
    question:
      "How long does 'Settled' status stay on my CIBIL report after loan settlement?",
    answer:
      "A 'Settled' status typically remains on your CIBIL report for 7 years from the date of settlement. Its negative impact reduces over time as you build positive credit history. We provide guidance on improving your CIBIL score post-settlement as part of our service.",
  },
  {
    question: "How to improve CIBIL score after loan settlement?",
    answer:
      "After loan settlement, you can improve your CIBIL score by: (1) Getting a secured credit card against a fixed deposit and using it responsibly, (2) Taking a small secured loan and repaying it on time, (3) Ensuring all other active accounts are paid on time, (4) Monitoring your CIBIL report regularly and disputing any errors. Most clients see significant improvement within 12–24 months of following this approach.",
  },
  {
    question: "Can an NBFC sue me for not paying a loan in India?",
    answer:
      "Yes, an NBFC (Non-Banking Financial Company) can file a civil suit against you for non-payment of a loan. However, NBFCs are often more flexible than banks and prefer settlement over litigation. If your NBFC loan is overdue or classified as NPA, Due Dost can negotiate a one-time settlement (OTS) to resolve it at a significantly reduced amount — avoiding legal proceedings entirely.",
  },
  {
    question: "Is it better to settle or pay a personal loan in full?",
    answer:
      "If you can afford to pay the full outstanding amount, paying in full is always better — the account is marked 'Closed' and has minimal impact on your CIBIL score. However, if you are in financial distress and cannot repay the full amount, settlement is a legitimate legal option that resolves your liability at a reduced cost. Our experts will advise you on the best approach for your specific situation.",
  },
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function PersonalLoanSettlementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative overflow-x-clip">
        <Navbar />

        {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav
          aria-label="breadcrumb"
          className="pt-24 pb-0 px-4 max-w-6xl mx-auto"
        >
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="hover:text-duedost-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted-foreground/50">
              /
            </li>
            <li className="text-duedost-blue font-medium" aria-current="page">
              Personal Loan Settlement
            </li>
          </ol>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* Eyebrow */}
            <p
              className="text-sm font-semibold tracking-widest uppercase text-duedost-blue mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Personal Loan Settlement
            </p>

            {/* H1 */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Settle Your Personal Loan{" "}
              <span className="text-duedost-blue">at Up to 60% Less</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              Lost your job? Unable to pay EMIs? Our expert legal team
              negotiates with banks and NBFCs to settle your personal loan for a
              fraction of the outstanding amount.
            </p>

            {/* Hindi line */}
            <p className="text-base md:text-lg font-medium text-duedost-green mb-10">
              EMI नहीं भर सकते? हम आपकी मदद करेंगे।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-duedost-blue to-duedost-green text-white font-semibold text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Free Consultation — Call Now
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20personal%20loan.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.873L0 24l6.304-1.515A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.371l-.359-.213-3.722.895.93-3.607-.234-.372A9.818 9.818 0 1112 21.818z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: "✅", text: "RBI Compliant Process" },
                { icon: "🔒", text: "100% Legal & Confidential" },
                { icon: "📋", text: "Written Settlement Letter" },
                { icon: "🏆", text: "1000+ Cases Resolved" },
                { icon: "📞", text: "Free Consultation" },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="flex items-center gap-1.5 bg-white dark:bg-white/5 rounded-full px-4 py-2 shadow-sm border border-border"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Common Situations ──────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-duedost-green mb-3">
                Who We Help
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Common Situations We Help With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Financial hardship can happen to anyone. Whether you are facing
                a temporary setback or a prolonged crisis, we are here to help
                you resolve your personal loan burden legally and efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {situations.map((s) => (
                <div
                  key={s.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-duedost-blue/30 transition-all duration-200"
                >
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ───────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue mb-3">
                Our Process
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How Personal Loan Settlement Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A transparent, step-by-step process handled entirely by our
                expert legal team — so you can focus on rebuilding your
                financial life.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line (desktop) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-0.5 bg-gradient-to-r from-duedost-blue to-duedost-green z-10"
                      aria-hidden="true"
                    />
                  )}
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-200">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-duedost-blue to-duedost-green flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Banks & NBFCs ──────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-duedost-green mb-3">
                Coverage
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Banks &amp; NBFCs We Settle With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have successfully negotiated personal loan settlements with
                all major banks and NBFCs across India. If your lender is not
                listed here, contact us — we likely have experience with them
                too.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {lenders.map((lender) => (
                <span
                  key={lender}
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-duedost-blue hover:text-duedost-blue hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-150"
                >
                  {lender}
                </span>
              ))}
              <span className="px-5 py-2.5 bg-gradient-to-r from-duedost-blue to-duedost-green rounded-full text-sm font-medium text-white">
                + All Major Lenders
              </span>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ───────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-green-50/30 to-background dark:from-green-950/10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue mb-3">
                Know Your Options
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Personal Loan Settlement vs Full Closure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the difference helps you make an informed
                decision. Our experts will recommend the best path based on your
                specific situation.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-duedost-blue to-duedost-green text-white">
                    <th className="px-6 py-4 text-left font-semibold w-1/3">
                      Factor
                    </th>
                    <th className="px-6 py-4 text-left font-semibold w-1/3">
                      Loan Settlement (OTS)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold w-1/3">
                      Full Loan Closure
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      factor: "Amount Paid",
                      settlement: "40-60% of outstanding dues",
                      closure: "100% of outstanding dues",
                    },
                    {
                      factor: "CIBIL Reporting",
                      settlement: 'Marked "Settled"',
                      closure: 'Marked "Closed" (better)',
                    },
                    {
                      factor: "Time to Resolve",
                      settlement: "30-90 days typically",
                      closure: "Immediate (on full payment)",
                    },
                    {
                      factor: "Future Loan Eligibility",
                      settlement:
                        "Temporary impact; rebuilds in 12-24 months",
                      closure: "Minimal impact; better for credit",
                    },
                    {
                      factor: "NOC from Lender",
                      settlement: "Yes, after settlement payment",
                      closure: "Yes, immediately on payment",
                    },
                    {
                      factor: "Legal Proceedings Risk",
                      settlement: "Halted on OTS acceptance",
                      closure: "No risk if paid in full",
                    },
                    {
                      factor: "Best For",
                      settlement:
                        "Financial distress, NPA accounts, default situations",
                      closure:
                        "Borrowers who can afford full payment, better credit priority",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.factor}
                      className={
                        i % 2 === 0
                          ? "bg-card"
                          : "bg-muted/30 dark:bg-muted/10"
                      }
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.factor}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.settlement}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {row.closure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              <span className="font-medium text-duedost-green">
                Our Recommendation:
              </span>{" "}
              If you are currently in financial distress and your account is
              overdue or in NPA status, settlement is the fastest and most
              practical path to becoming debt-free. We will advise you based on
              your unique case in the free consultation. If you also have
              outstanding{" "}
              <Link
                href="/credit-card-settlement"
                className="text-duedost-blue hover:underline font-medium"
              >
                credit card dues
              </Link>
              , we can settle those simultaneously.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-duedost-blue mb-3">
                FAQs
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about personal loan settlement in
                India. Still have questions? Call us for a free consultation.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-duedost-blue/30 transition-colors duration-200"
                >
                  <h3 className="text-base font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-duedost-blue to-duedost-green text-white text-xs font-bold flex items-center justify-center mt-0.5"
                      aria-hidden="true"
                    >
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-duedost-blue to-duedost-green">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Settle Your Personal Loan?
            </h2>
            <p className="text-white/85 text-lg mb-4 max-w-2xl mx-auto">
              Get a free consultation with our expert legal team. We will
              analyse your case and tell you exactly how much you can save — at
              no upfront cost.
            </p>
            <p className="text-white/90 font-medium text-base mb-10">
              कर्ज से मुक्ति पाएं — आज ही हमसे बात करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-duedost-blue font-semibold text-base shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call +91 92894 93265
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20personal%20loan.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.873L0 24l6.304-1.515A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.371l-.359-.213-3.722.895.93-3.607-.234-.372A9.818 9.818 0 1112 21.818z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/70 text-sm mt-8">
              Mon – Sat, 9 AM – 7 PM &nbsp;|&nbsp; support@duedost.com
              &nbsp;|&nbsp; WeWork, Two Horizon Center, Gurugram, Haryana 122002
            </p>
          </div>
        </section>

      {/* Related Services */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Related Debt Resolution Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/credit-card-settlement"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Credit Card Settlement
              </h3>
              <p className="text-sm text-muted-foreground">
                Settle credit card outstanding dues at 40–75% less. Expert negotiation with all major banks.
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
                Stop aggressive recovery agent calls and protect your rights under RBI and Supreme Court guidelines.
              </p>
            </Link>
            <Link
              href="/hdfc-credit-card-settlement"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Bank-Specific Settlement Guides
              </h3>
              <p className="text-sm text-muted-foreground">
                Dedicated settlement guides for HDFC, ICICI, SBI, Axis, Kotak, and more.
              </p>
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/credit-card-settlement"
              className="text-sm text-duedost-blue hover:underline font-medium"
            >
              View credit card settlement services →
            </Link>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}
