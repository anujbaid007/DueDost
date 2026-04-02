import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Credit Card Settlement in India | Settle Dues at 40-75% Less | Due Dost",
  description:
    "Settle your credit card outstanding dues legally at 40-75% less than what you owe. Expert negotiation with HDFC, ICICI, SBI, Axis Bank. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    "credit card settlement India",
    "credit card dues settlement",
    "settle credit card debt",
    "credit card settlement company",
    "HDFC credit card settlement",
    "ICICI credit card settlement",
    "credit card OTS",
    "credit card defaulter help India",
  ],
  alternates: { canonical: `${SITE_URL}/credit-card-settlement` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/credit-card-settlement`,
    siteName: "Due Dost",
    title: "Credit Card Settlement in India | Due Dost",
    description:
      "Settle your credit card outstanding dues at 40-75% less. Expert legal team negotiates directly with banks. Free consultation.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Due Dost Credit Card Settlement",
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
      name: "Credit Card Settlement",
      provider: {
        "@type": "FinancialService",
        name: "Due Dost",
        url: SITE_URL,
        telephone: "+919289493265",
        email: "hello@duedost.com",
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
        "Legal credit card debt settlement service. Negotiate outstanding dues at 40-75% less with expert legal team.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/credit-card-settlement`,
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Credit Card Settlement",
          item: `${SITE_URL}/credit-card-settlement`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What happens if I don't pay my credit card bill in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you stop paying your credit card bill, the bank will first send payment reminders and late payment charges will accumulate. After 30–60 days, recovery calls begin. After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA) under RBI guidelines. The bank may then initiate legal proceedings or assign the account to a recovery agency. At this stage, credit card settlement (OTS) becomes a viable option to resolve the outstanding at a reduced amount.",
          },
        },
        {
          "@type": "Question",
          name: "Can I go to jail for not paying my credit card in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, you cannot go to jail simply for not paying a credit card bill in India. Credit card debt is a civil matter, not a criminal one. Banks can file a civil suit to recover the outstanding amount, but non-payment of a credit card dues is not a criminal offence. However, if you issue a cheque that bounces, that can lead to criminal proceedings under Section 138 of the Negotiable Instruments Act. Due Dost can help you settle your outstanding before legal proceedings escalate.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does a bank settle credit card debt for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Banks typically settle credit card debt for 30% to 70% of the total outstanding, depending on the account age, amount owed, bank's internal OTS policy, and the negotiation. HDFC, ICICI, SBI, and Axis Bank all have structured One Time Settlement (OTS) programs. Due Dost's legal team negotiates to get the maximum possible reduction on your principal, interest, and penalties.",
          },
        },
        {
          "@type": "Question",
          name: "Does credit card settlement affect my CIBIL score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, settlement does impact your CIBIL score — the account is marked 'Settled' rather than 'Closed'. However, if your account is already in default or NPA status, your CIBIL score has likely already dropped significantly. Settlement stops further damage, clears the liability, and allows you to begin rebuilding your credit profile. Most clients see meaningful CIBIL improvement within 12–18 months of settlement.",
          },
        },
        {
          "@type": "Question",
          name: "How long does 'Settled' status stay on my CIBIL report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 'Settled' account status typically remains on your CIBIL report for 7 years from the date of settlement. However, its negative impact on your credit score diminishes over time, especially as you add positive credit history. We provide guidance on rebuilding your credit after settlement to minimise the long-term impact.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a loan after credit card settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can get loans after a credit card settlement, though it may take some time. Most lenders require 12–24 months of positive credit behaviour after settlement before approving new credit. Secured loans (against FD or property) are often available sooner. We help clients understand the credit rebuilding path as part of our post-settlement support.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after 180 days of non-payment of a credit card in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After 180 days (6 months) of non-payment, a credit card account is typically written off by the bank as a bad debt (NPA). At this stage, the bank may sell the account to an Asset Reconstruction Company (ARC) or escalate to its legal team. However, settlement is still very much possible even at this stage — in fact, banks and ARCs are often more flexible with written-off accounts. Due Dost handles settlement negotiations even for accounts in advanced default.",
          },
        },
        {
          "@type": "Question",
          name: "Is it better to settle or pay credit card dues in full?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you can afford to pay the full outstanding amount, paying in full is always better for your CIBIL score — the account is marked 'Closed' rather than 'Settled'. However, if you are in financial distress and cannot pay the full amount, settlement is a practical and legal option that ends your liability at a reduced cost. Our experts will advise you on the best path based on your specific financial situation.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I save through credit card settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on your outstanding balance, overdue tenure, and the bank's internal OTS (One Time Settlement) policy, clients typically save between 40% to 75% of the total amount owed. This includes waiver on accumulated interest, late payment charges, and penalties. Our legal team negotiates the best possible terms for your specific case.",
          },
        },
        {
          "@type": "Question",
          name: "Is credit card settlement legal in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. Credit card settlement is 100% legal in India. Banks and NBFCs are guided by RBI's NPA (Non-Performing Asset) resolution framework, which encourages settlement of overdue accounts through mutual agreement. Our process is fully compliant with RBI guidelines and all applicable Indian laws.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the credit card settlement process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most credit card cases, the settlement process takes 45 to 90 days from initial assessment to final NOC. Complex multi-card or high-value cases may take up to 6 months. We keep you informed at every step and ensure the process moves as quickly as possible.",
          },
        },
        {
          "@type": "Question",
          name: "What documents do I need for credit card settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You will need: (1) Your latest credit card statements, (2) Identity proof (Aadhaar / PAN card), (3) Any communication received from the bank or recovery agents, and (4) Details of any previous payments made. Our team will guide you through the documentation process step by step.",
          },
        },
      ],
    },
  ],
};

// ─── Sub-components (server-safe, no client state) ───────────────────────────

function TrustBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 border border-border/60 text-sm font-medium text-foreground/80 shadow-sm">
      <span className="w-2 h-2 rounded-full bg-duedost-green inline-block" />
      {label}
    </span>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col gap-4 p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-duedost-blue to-duedost-green text-white font-bold text-lg shadow-md">
        {number}
      </div>
      <h3 className="font-bold text-lg tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function BankChip({ name, href }: { name: string; href?: string }) {
  const classes = "inline-flex items-center px-4 py-2 rounded-full border border-border/60 bg-background text-sm font-medium text-foreground/80 hover:border-duedost-blue hover:text-duedost-blue transition-colors duration-200";
  if (href) return <Link href={href} className={classes}>{name}</Link>;
  return <span className={classes}>{name}</span>;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreditCardSettlementPage() {
  const banks: { name: string; href?: string }[] = [
    { name: "HDFC Bank", href: "/hdfc-credit-card-settlement" },
    { name: "ICICI Bank", href: "/icici-credit-card-settlement" },
    { name: "SBI", href: "/sbi-credit-card-settlement" },
    { name: "Axis Bank", href: "/axis-bank-credit-card-settlement" },
    { name: "Kotak Mahindra Bank", href: "/kotak-credit-card-settlement" },
    { name: "IndusInd Bank", href: "/indusind-credit-card-settlement" },
    { name: "RBL Bank", href: "/rbl-credit-card-settlement" },
    { name: "Yes Bank", href: "/yes-bank-credit-card-settlement" },
    { name: "Bajaj Finserv", href: "/bajaj-finserv-credit-card-settlement" },
    { name: "Tata Neu Credit Card", href: "/tata-neu-credit-card-settlement" },
    { name: "IDFC First Bank" },
    { name: "AU Small Finance Bank" },
    { name: "All Major NBFCs" },
  ];

  const faqs = [
    {
      question: "What happens if I don't pay my credit card bill in India?",
      answer:
        "If you stop paying your credit card bill, the bank will first send payment reminders and late payment charges will accumulate. After 30–60 days, recovery calls begin. After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA) under RBI guidelines. The bank may then initiate legal proceedings or assign the account to a recovery agency. At this stage, credit card settlement (OTS) becomes a viable option to resolve the outstanding at a reduced amount.",
    },
    {
      question: "Can I go to jail for not paying my credit card in India?",
      answer:
        "No, you cannot go to jail simply for not paying a credit card bill in India. Credit card debt is a civil matter, not a criminal one. Banks can file a civil suit to recover the outstanding amount, but non-payment of credit card dues is not a criminal offence. However, if you issue a cheque that bounces, that can lead to criminal proceedings under Section 138 of the Negotiable Instruments Act. Due Dost can help you settle your outstanding before legal proceedings escalate.",
    },
    {
      question: "What percentage does a bank settle credit card debt for?",
      answer:
        "Banks typically settle credit card debt for 30% to 70% of the total outstanding, depending on the account age, amount owed, bank's internal OTS policy, and the negotiation. HDFC, ICICI, SBI, and Axis Bank all have structured One Time Settlement (OTS) programs. Due Dost's legal team negotiates to get the maximum possible reduction on your principal, interest, and penalties.",
    },
    {
      question: "Does credit card settlement affect my CIBIL score?",
      answer:
        "Yes, settlement does impact your CIBIL score — the account is marked 'Settled' rather than 'Closed'. However, if your account is already in default or NPA status, your CIBIL score has likely already dropped significantly. Settlement stops further damage, clears the liability, and allows you to begin rebuilding your credit profile. Most clients see meaningful CIBIL improvement within 12–18 months of settlement.",
    },
    {
      question: "How long does 'Settled' status stay on my CIBIL report?",
      answer:
        "A 'Settled' account status typically remains on your CIBIL report for 7 years from the date of settlement. However, its negative impact on your credit score diminishes over time, especially as you add positive credit history. We provide guidance on rebuilding your credit after settlement to minimise the long-term impact.",
    },
    {
      question: "Can I get a loan after credit card settlement?",
      answer:
        "Yes, you can get loans after a credit card settlement, though it may take some time. Most lenders require 12–24 months of positive credit behaviour after settlement before approving new credit. Secured loans (against FD or property) are often available sooner. We help clients understand the credit rebuilding path as part of our post-settlement support.",
    },
    {
      question:
        "What happens after 180 days of non-payment of a credit card in India?",
      answer:
        "After 180 days (6 months) of non-payment, a credit card account is typically written off by the bank as a bad debt (NPA). At this stage, the bank may sell the account to an Asset Reconstruction Company (ARC) or escalate to its legal team. However, settlement is still very much possible even at this stage — banks and ARCs are often more flexible with written-off accounts. Due Dost handles settlement negotiations even for accounts in advanced default.",
    },
    {
      question: "Is it better to settle or pay credit card dues in full?",
      answer:
        "If you can afford to pay the full outstanding amount, paying in full is always better for your CIBIL score — the account is marked 'Closed' rather than 'Settled'. However, if you are in financial distress and cannot pay the full amount, settlement is a practical and legal option that ends your liability at a reduced cost. Our experts will advise you on the best path based on your specific financial situation.",
    },
    {
      question: "How much can I save through credit card settlement?",
      answer:
        "Depending on your outstanding balance, overdue tenure, and the bank's internal OTS (One Time Settlement) policy, clients typically save between 40% to 75% of the total amount owed. This includes waiver on accumulated interest, late payment charges, and penalties. Our legal team negotiates the best possible terms for your specific case.",
    },
    {
      question: "Is credit card settlement legal in India?",
      answer:
        "Yes, absolutely. Credit card settlement is 100% legal in India. Banks and NBFCs are guided by RBI's NPA (Non-Performing Asset) resolution framework, which encourages settlement of overdue accounts through mutual agreement. Our process is fully compliant with RBI guidelines and all applicable Indian laws.",
    },
    {
      question: "What documents do I need for credit card settlement?",
      answer:
        "You will need: (1) Your latest credit card statements, (2) Identity proof (Aadhaar / PAN card), (3) Any communication received from the bank or recovery agents, and (4) Details of any previous payments made. Our team will guide you through the documentation process step by step.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative overflow-x-clip bg-background">
        <Navbar />

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-6">
            <nav aria-label="breadcrumb">
              <ol
                className="flex items-center gap-2 text-sm text-muted-foreground"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link
                    href="/"
                    className="hover:text-foreground transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 12l4-4-4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  aria-current="page"
                >
                  <span
                    className="text-foreground font-medium"
                    itemProp="name"
                  >
                    Credit Card Settlement
                  </span>
                  <meta itemProp="position" content="2" />
                  <link
                    itemProp="item"
                    href={`${SITE_URL}/credit-card-settlement`}
                  />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Eyebrow */}
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green mb-6">
              Credit Card Settlement
            </span>

            {/* H1 */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Settle Your Credit Card Dues at{" "}
              <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
                Up to 75% Less
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Drowning in credit card debt? Our expert legal team negotiates
              directly with banks to reduce what you owe — legally, ethically,
              and fast.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-2xl shadow-lg shadow-duedost-blue/20 hover:shadow-xl hover:shadow-duedost-blue/30 hover:opacity-95 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.26a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                Get Free Consultation
              </a>

              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20credit%20card%20debt.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-duedost-green border-2 border-duedost-green rounded-2xl hover:bg-duedost-green/5 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <TrustBadge label="1,000+ Cases Settled" />
              <TrustBadge label="RBI Compliant" />
              <TrustBadge label="100% Legal" />
            </div>
          </div>
        </section>

        {/* ── What is Credit Card Settlement ───────────────────────────── */}
        <section className="py-16 md:py-20" aria-labelledby="what-is-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
                Understanding the Process
              </span>
              <h2
                id="what-is-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What is Credit Card Settlement?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Credit card settlement — also known as{" "}
                  <strong className="text-foreground">
                    One Time Settlement (OTS)
                  </strong>{" "}
                  — is a legally recognised process where your credit card
                  issuer agrees to accept a reduced lump-sum payment to
                  consider your outstanding dues as fully resolved.
                </p>
                <p>
                  When a credit card account becomes overdue for 90+ days, it
                  is classified as a{" "}
                  <strong className="text-foreground">
                    Non-Performing Asset (NPA)
                  </strong>{" "}
                  under RBI guidelines. Banks, at this stage, often prefer
                  recovering a portion of the outstanding rather than pursuing
                  lengthy legal proceedings — which opens the door for
                  negotiated settlements.
                </p>
                <p>
                  Our expert legal team leverages this framework to negotiate
                  the best possible OTS amount on your behalf — directly with
                  the bank&apos;s recovery and legal departments — so you pay
                  significantly less and receive a clean{" "}
                  <strong className="text-foreground">
                    No Objection Certificate (NOC)
                  </strong>
                  .
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "✓",
                    title: "Applicable for overdue accounts",
                    desc: "Even if you've missed just one EMI, we can help. We assess every case individually — from a single missed payment to long-standing defaults.",
                  },
                  {
                    icon: "✓",
                    title: "Banks regularly offer OTS",
                    desc: "All major banks — HDFC, ICICI, SBI, Axis — have structured OTS programs for credit card defaulters.",
                  },
                  {
                    icon: "✓",
                    title: "Save 40–75% on your dues",
                    desc: "Interest, penalties, and late fees can often be waived entirely or reduced substantially.",
                  },
                  {
                    icon: "✓",
                    title: "Receive a written settlement letter",
                    desc: "The bank issues a formal written offer before you pay a single rupee.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl border border-border/50 bg-card"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-duedost-green/10 text-duedost-green flex items-center justify-center text-sm font-bold">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Settle ────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-muted/30"
          aria-labelledby="process-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
                Our Process
              </span>
              <h2
                id="process-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Settle Your Credit Card Debt
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A structured, transparent 4-step process — from assessment to
                closure, we handle everything.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StepCard
                number="1"
                title="Free Case Assessment"
                description="We review your outstanding credit card amount, interest accrued, overdue tenure, and lender policies to determine your settlement eligibility and potential savings."
              />
              <StepCard
                number="2"
                title="Strategy & Negotiation"
                description="Our legal team contacts the bank's settlement department directly and negotiates the One Time Settlement (OTS) amount on your behalf — aiming for the maximum possible reduction."
              />
              <StepCard
                number="3"
                title="Settlement Agreement"
                description="The bank issues a formal written settlement offer letter specifying the agreed amount. You review and approve before any payment is made. No surprises."
              />
              <StepCard
                number="4"
                title="NOC & Closure"
                description="You pay the settled amount directly to the bank. The bank then issues a No Objection Certificate (NOC) confirming full resolution of your credit card dues."
              />
            </div>
          </div>
        </section>

        {/* ── Banks We Work With ───────────────────────────────────────── */}
        <section
          className="py-16 md:py-20"
          aria-labelledby="banks-heading"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
              Our Network
            </span>
            <h2
              id="banks-heading"
              className="text-3xl md:text-4xl font-bold mt-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Banks &amp; NBFCs We Work With
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We have established settlement relationships with all major
              banks and NBFCs across India.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {banks.map((bank) => (
                <BankChip key={bank.name} name={bank.name} href={bank.href} />
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Don&apos;t see your bank listed?{" "}
              <a
                href="tel:+919289493265"
                className="text-duedost-blue hover:underline font-medium"
              >
                Call us
              </a>{" "}
              — we work with virtually all lenders in India.
            </p>

            {/* Bank-specific page links */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
                Bank-Specific Settlement Guides
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
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
            </div>
          </div>
        </section>

        {/* ── Why Choose Due Dost ──────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-muted/30"
          aria-labelledby="why-us-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
                Why Due Dost
              </span>
              <h2
                id="why-us-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                India&apos;s Most Trusted Credit Card
                <br className="hidden md:block" /> Settlement Partner
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Expert Legal Team",
                  description:
                    "Our lawyers and financial experts have years of experience negotiating with banks. We know exactly what levers to pull to get you the best settlement.",
                  accent: "from-duedost-blue/10 to-duedost-blue/5",
                  border: "border-duedost-blue/20",
                },
                {
                  title: "100% RBI Compliant",
                  description:
                    "Every step of our process strictly follows RBI guidelines and Indian law. You are fully protected — legally and ethically — throughout the settlement.",
                  accent: "from-duedost-green/10 to-duedost-green/5",
                  border: "border-duedost-green/20",
                },
                {
                  title: "Success-Based Fee",
                  description:
                    "We charge a fee only after successfully settling your dues. If we don't save you money, you don't pay us. Our incentives are fully aligned with yours.",
                  accent: "from-duedost-blue/10 to-duedost-blue/5",
                  border: "border-duedost-blue/20",
                },
                {
                  title: "Anti-Harassment Protection",
                  description:
                    "Facing calls from recovery agents? We send legal notices on your behalf to stop harassment immediately, as mandated by RBI and Supreme Court directives.",
                  accent: "from-duedost-green/10 to-duedost-green/5",
                  border: "border-duedost-green/20",
                },
                {
                  title: "Full Transparency",
                  description:
                    "We share the bank's settlement offer letter with you before any payment. You stay in control of every decision — no hidden steps, no fine print surprises.",
                  accent: "from-duedost-blue/10 to-duedost-blue/5",
                  border: "border-duedost-blue/20",
                },
                {
                  title: "NOC Guaranteed",
                  description:
                    "After you pay the settled amount, we ensure the bank issues a proper No Objection Certificate (NOC). This is your legal proof of closure.",
                  accent: "from-duedost-green/10 to-duedost-green/5",
                  border: "border-duedost-green/20",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl border ${item.border} bg-gradient-to-br ${item.accent} hover:shadow-md transition-shadow duration-300`}
                >
                  <h3 className="font-bold text-lg tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to know about credit card settlement in
                India.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-border/60 bg-background overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-sm md:text-base hover:bg-muted/40 transition-colors duration-200 select-none">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-duedost-blue via-duedost-blue to-duedost-green opacity-95" />
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Take the First Step
            </span>
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Stop the Interest Clock.
              <br />
              Settle Your Credit Card Debt Today.
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join 1,000+ Indians who trusted Due Dost to negotiate their
              credit card settlement. Free, no-obligation consultation. Your
              details are 100% confidential.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919289493265"
                className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-duedost-blue bg-white rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-black/20 whitespace-nowrap"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.26a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call Now: +91 92894 93265
                <svg
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20want%20to%20settle%20my%20credit%20card%20debt.%20Please%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/50 text-sm">
              <span>100% Confidential</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
              <span>No Obligation</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
              <span>Expert Legal Guidance</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
              <span>RBI Compliant</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
