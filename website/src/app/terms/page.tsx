import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Terms & Conditions | Due Dost",
  description:
    "Read Due Dost LLC's Terms & Conditions for debt settlement, credit card settlement, and loan settlement services in India.",
  alternates: { canonical: "https://duedost.com/terms" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/terms#webpage`,
      url: `${SITE_URL}/terms`,
      name: "Terms & Conditions | Due Dost",
      description:
        "Terms & Conditions governing the use of Due Dost LLC's debt settlement, credit card settlement, and loan settlement services.",
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/terms#breadcrumb`,
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
          name: "Terms & Conditions",
          item: `${SITE_URL}/terms`,
        },
      ],
    },
  ],
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mt-10 mb-4 text-foreground flex items-center gap-3">
      <span className="inline-block w-1 h-6 rounded-full bg-gradient-to-b from-duedost-blue to-duedost-green flex-shrink-0" />
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-border/50 my-2" />;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export function TermsPage() {
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
          <div className="max-w-4xl mx-auto px-6">
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
                    Terms &amp; Conditions
                  </span>
                  <meta itemProp="position" content="2" />
                  <link itemProp="item" href={`${SITE_URL}/terms`} />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Eyebrow */}
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
              Legal
            </span>

            {/* H1 */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Terms &amp; Conditions
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using the Due Dost
              platform or engaging our services.
            </p>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {/* Last updated + quick notice */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 rounded-2xl bg-muted/60 border border-border/60">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Last Updated:
              </span>{" "}
              March 2025
            </p>
            <p className="text-sm text-muted-foreground">
              Effective for all engagements from March 2025 onwards.
            </p>
          </div>

          {/* ── 1. Introduction ────────────────────────────────────────── */}
          <SectionHeading>1. Introduction</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to <strong className="text-foreground">Due Dost LLC</strong>{" "}
            (&ldquo;Due Dost&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;). Due Dost LLC is a professional debt settlement
            and financial advisory firm incorporated in India, with its principal
            place of business at WeWork, Two Horizon Center, Gurugram, Haryana 122002, India.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
            access to and use of our website located at{" "}
            <a
              href="https://duedost.com"
              className="text-duedost-blue dark:text-duedost-green hover:underline font-medium"
            >
              duedost.com
            </a>{" "}
            (the &ldquo;Website&rdquo;) and all services offered by Due Dost
            LLC, including but not limited to debt settlement, credit card
            settlement, personal loan settlement, and anti-harassment services
            (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            By accessing our Website, submitting an enquiry, or entering into an
            engagement agreement with us, you acknowledge that you have read,
            understood, and agree to be bound by these Terms in their entirety.
            If you do not agree to these Terms, please refrain from using our
            Website or Services.
          </p>

          <Divider />

          {/* ── 2. Services Described ──────────────────────────────────── */}
          <SectionHeading>2. Services Described</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Due Dost LLC provides the following categories of services:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  Debt Settlement &amp; Negotiation:
                </strong>{" "}
                We act as intermediaries between you (the debtor) and your
                lenders to negotiate a mutually acceptable one-time settlement
                (OTS) or structured resolution of outstanding debts.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  Credit Card Settlement:
                </strong>{" "}
                Expert negotiation with banks and NBFCs to settle outstanding
                credit card dues in accordance with the lender&rsquo;s internal
                OTS policies and RBI guidelines.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  Personal Loan Settlement:
                </strong>{" "}
                Advisory and negotiation services to resolve outstanding personal
                loan EMIs and principal dues with banks, NBFCs, and digital
                lending platforms.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  Anti-Harassment Service:
                </strong>{" "}
                Legal guidance and representation to protect clients from
                unlawful recovery agent conduct, in accordance with RBI&rsquo;s
                Fair Practices Code and applicable Indian law.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important clarification:</strong>{" "}
            Due Dost LLC is a financial advisory and intermediary firm. We are{" "}
            <em>not</em> a bank, non-banking financial company (NBFC), or
            moneylender. We do not disburse loans, accept deposits, or hold
            client funds. All settlement payments are made directly by the client
            to the lender.
          </p>

          <Divider />

          {/* ── 3. No Guarantee of Results ─────────────────────────────── */}
          <SectionHeading>3. No Guarantee of Results</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Due Dost LLC commits to applying its best professional efforts in
            negotiating settlement terms on your behalf. However, settlement
            outcomes depend on a range of factors outside our control, including:
          </p>
          <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              The lender&rsquo;s internal One Time Settlement (OTS) policy and
              prevailing approval criteria at the time of negotiation.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Reserve Bank of India (RBI) guidelines and regulatory directives
              applicable to the lender.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              The age and classification of the outstanding account (NPA status,
              write-off date, etc.).
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              The accuracy and completeness of the information provided by the
              client.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              No specific reduction percentage, settlement amount, or timeline is
              guaranteed.
            </strong>{" "}
            Any indicative figures mentioned on our Website or in our
            communications represent typical outcomes based on historical
            experience and should not be construed as promises or warranties of
            future performance.
          </p>

          <Divider />

          {/* ── 4. Fees & Payment ──────────────────────────────────────── */}
          <SectionHeading>4. Fees &amp; Payment</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Due Dost LLC charges fees for the provision of its Services. The
            specific fee structure, payment schedule, and engagement terms will
            be communicated to you and agreed upon in writing at the time of
            onboarding, prior to commencement of any settlement work.
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  Non-Refundable Once Work Commences:
                </strong>{" "}
                Fees paid are non-refundable once active work on your case has
                commenced, including but not limited to lender correspondence,
                documentation preparation, or negotiation calls. Please refer to
                our{" "}
                <Link
                  href="/refund-policy"
                  className="text-duedost-blue dark:text-duedost-green hover:underline font-medium"
                >
                  Refund Policy
                </Link>{" "}
                for full details.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">Service Fees Only:</strong>{" "}
                Our fees are charged solely for advisory and negotiation
                services. Settlement amounts payable to lenders are entirely
                separate and are the client&rsquo;s sole responsibility.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              <span>
                <strong className="text-foreground">Taxes:</strong> All
                applicable taxes (including GST) will be charged in addition to
                the agreed service fee as per prevailing rates.
              </span>
            </li>
          </ul>

          <Divider />

          {/* ── 5. Client Obligations ──────────────────────────────────── */}
          <SectionHeading>5. Client Obligations</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            As a condition of engaging our Services, you agree to:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Provide complete, accurate, and up-to-date information regarding
              your outstanding debts, lender details, account statements, and
              financial position.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Promptly inform us of any direct communications received from your
              lenders, recovery agents, or courts in relation to the debts under
              our management.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Refrain from independently negotiating or making payments to
              lenders with respect to debts we are actively managing, without
              prior written notification to Due Dost LLC.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Co-operate fully with our team and provide required documents
              within reasonable timelines.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Withholding material information, providing false or misleading data,
            or acting contrary to the above obligations may adversely affect your
            settlement outcome. In such circumstances, Due Dost LLC shall be
            indemnified from any resulting loss and may, at its discretion,
            terminate the engagement without refund.
          </p>

          <Divider />

          {/* ── 6. Confidentiality ─────────────────────────────────────── */}
          <SectionHeading>6. Confidentiality</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Due Dost LLC treats all client financial information with the utmost
            confidentiality. We commit to:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Using your personal and financial data exclusively for the purpose
              of negotiating your debt settlement and delivering related services.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Not selling, renting, or disclosing your information to third
              parties for marketing or commercial purposes.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Sharing information with lenders and their representatives only to
              the extent strictly necessary for settlement negotiations.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Complying with applicable data protection laws, including the
              Information Technology Act, 2000 and rules framed thereunder.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            For a full description of how we collect, store, and use your data,
            please read our{" "}
            <Link
              href="/privacy-policy"
              className="text-duedost-blue dark:text-duedost-green hover:underline font-medium"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <Divider />

          {/* ── 7. Intellectual Property ───────────────────────────────── */}
          <SectionHeading>7. Intellectual Property</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            All content on this Website — including but not limited to text,
            graphics, logos, icons, images, audio clips, digital downloads, and
            software — is the exclusive property of Due Dost LLC or its content
            licensors and is protected under applicable Indian and international
            intellectual property laws.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            You may not reproduce, duplicate, copy, sell, resell, or exploit any
            portion of the Website or its content without the express prior
            written permission of Due Dost LLC. Unauthorised use may give rise to
            a claim for damages and may constitute a criminal offence under the
            Information Technology Act, 2000 and the Copyright Act, 1957.
          </p>

          <Divider />

          {/* ── 8. Limitation of Liability ─────────────────────────────── */}
          <SectionHeading>8. Limitation of Liability</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by applicable law, Due Dost
            LLC&rsquo;s total aggregate liability arising out of or in connection
            with these Terms or the Services shall be limited to the total fees
            actually paid by you to Due Dost LLC in the three (3) months
            immediately preceding the event giving rise to the claim.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Due Dost LLC shall not be liable for any:
          </p>
          <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Decisions made by lenders, banks, NBFCs, or Asset Reconstruction
              Companies (ARCs) in response to settlement proposals.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Changes to your CIBIL score, credit rating, or credit report
              resulting from settlement, default, or any other credit event.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Actions taken by third parties including recovery agents, law firms
              engaged by lenders, or courts.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Indirect, incidental, consequential, or punitive damages of any
              kind arising from your use of our Services or Website.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-duedost-blue dark:bg-duedost-green flex-shrink-0" />
              Loss of income, business opportunity, or financial loss arising
              from reliance on information published on this Website.
            </li>
          </ul>

          <Divider />

          {/* ── 9. Governing Law & Jurisdiction ────────────────────────── */}
          <SectionHeading>9. Governing Law &amp; Jurisdiction</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            These Terms and any dispute or claim arising out of or in connection
            with them (including any non-contractual disputes or claims) shall be
            governed by and construed in accordance with the laws of India,
            without regard to its conflict of law provisions.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Any disputes arising under or in relation to these Terms or the
            Services shall be subject to the exclusive jurisdiction of the
            competent courts located in Noida, Uttar Pradesh, India. By engaging
            our Services, you irrevocably submit to this jurisdiction.
          </p>

          <Divider />

          {/* ── 10. Amendments ─────────────────────────────────────────── */}
          <SectionHeading>10. Amendments to These Terms</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Due Dost LLC reserves the right to revise, update, or replace any
            part of these Terms at any time at our sole discretion. Changes will
            be effective immediately upon posting to this page, with the
            &ldquo;Last Updated&rdquo; date revised accordingly.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your continued use of the Website or our Services after any changes
            are posted constitutes your acceptance of the revised Terms. It is
            your responsibility to periodically review this page for updates. If
            you do not agree to the amended Terms, you must cease using our
            Services and notify us at{" "}
            <a
              href="mailto:hello@duedost.com"
              className="text-duedost-blue dark:text-duedost-green hover:underline font-medium"
            >
              hello@duedost.com
            </a>
            .
          </p>

          <Divider />

          {/* ── 11. Contact ────────────────────────────────────────────── */}
          <SectionHeading>11. Contact Us</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions, concerns, or requests regarding these
            Terms &amp; Conditions, please contact us through any of the
            following channels:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email card */}
            <a
              href="mailto:hello@duedost.com"
              className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue/40 hover:shadow-sm transition-all duration-200"
            >
              <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-duedost-blue dark:text-duedost-green">
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-duedost-blue dark:group-hover:text-duedost-green transition-colors">
                  Email Support
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  hello@duedost.com
                </p>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+919289493265"
              className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue/40 hover:shadow-sm transition-all duration-200"
            >
              <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-duedost-blue dark:text-duedost-green">
                <svg
                  className="w-4.5 h-4.5"
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
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:text-duedost-blue dark:group-hover:text-duedost-green transition-colors">
                  Phone / WhatsApp
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  +91 92894 93265
                </p>
              </div>
            </a>

            {/* Address card */}
            <div className="sm:col-span-2 flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card">
              <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-duedost-blue dark:text-duedost-green">
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Registered Address
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Due Dost LLC, WeWork, Two Horizon Center, Gurugram, Haryana 122002, India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed text-center border-t border-border/50 pt-8">
            By using our Services, you confirm that you have read and agree to
            these Terms &amp; Conditions. For related policies, see our{" "}
            <Link
              href="/privacy-policy"
              className="text-duedost-blue dark:text-duedost-green hover:underline"
            >
              Privacy Policy
            </Link>
            ,{" "}
            <Link
              href="/refund-policy"
              className="text-duedost-blue dark:text-duedost-green hover:underline"
            >
              Refund Policy
            </Link>
            , and{" "}
            <Link
              href="/disclaimer"
              className="text-duedost-blue dark:text-duedost-green hover:underline"
            >
              Disclaimer
            </Link>
            .
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default TermsPage;
