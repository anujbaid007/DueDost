import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Policy | Due Dost",
  description:
    "Learn how Due Dost LLC collects, uses, and protects your personal and financial information in compliance with Indian data protection laws.",
  alternates: { canonical: "https://duedost.com/privacy-policy" },
  robots: { index: true, follow: true },
};

// ─── Section data ──────────────────────────────────────────────────────────────

const sections = [
  {
    id: "introduction",
    heading: "1. Introduction",
    content: (
      <>
        <p>
          Due Dost LLC (&ldquo;Due Dost&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is
          committed to protecting the privacy and confidentiality of your
          personal information. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit{" "}
          <a
            href="https://duedost.com"
            className="text-duedost-blue dark:text-duedost-green underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            duedost.com
          </a>{" "}
          or engage our debt settlement services.
        </p>
        <p className="mt-4">
          This policy is prepared in compliance with the{" "}
          <strong>Information Technology Act, 2000</strong> and the{" "}
          <strong>
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011
          </strong>{" "}
          (&ldquo;SPDI Rules 2011&rdquo;) issued by the Government of India, along with
          any applicable amendments. By using our website or services, you
          consent to the practices described in this policy.
        </p>
        <p className="mt-4">
          Please read this policy carefully. If you do not agree with any part
          of this policy, please do not use our website or services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    content: (
      <>
        <p>
          We collect only the information necessary to provide our debt
          settlement and financial advisory services. This includes:
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2 text-foreground">
          2.1 Personal Information
        </h3>
        <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
          <li>Full name</li>
          <li>Phone number and email address</li>
          <li>Residential or correspondence address</li>
          <li>
            Identity documents (Aadhaar, PAN) where required for service
            delivery
          </li>
        </ul>

        <h3 className="text-base font-semibold mt-6 mb-2 text-foreground">
          2.2 Financial Information (Sensitive Personal Data)
        </h3>
        <p className="mb-2">
          The following constitutes Sensitive Personal Data or Information
          (SPDI) under Indian law and is collected only with your explicit
          consent:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
          <li>Credit card or loan account numbers and outstanding balances</li>
          <li>
            Bank communications, demand notices, or settlement letters you
            share with us voluntarily
          </li>
          <li>Information about your lenders and overdue amounts</li>
          <li>
            Financial hardship details relevant to your settlement case
          </li>
        </ul>

        <h3 className="text-base font-semibold mt-6 mb-2 text-foreground">
          2.3 Technical &amp; Usage Data
        </h3>
        <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
          <li>IP address and approximate geographic location</li>
          <li>Browser type, version, and operating system</li>
          <li>Pages visited, time spent, and navigation patterns</li>
          <li>Cookie identifiers and session data (see Section 5)</li>
          <li>Referral URLs and search terms that led you to our website</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    content: (
      <>
        <p>
          We use the information we collect for the following purposes only:
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          {[
            {
              label: "Service Delivery",
              desc: "To assess your debt situation, develop a settlement strategy, and provide personalised debt settlement, credit card settlement, personal loan settlement, and anti-harassment services.",
            },
            {
              label: "Lender Communication",
              desc: "To communicate, negotiate, and correspond with your lenders, banks, or NBFCs on your behalf as your authorised representative.",
            },
            {
              label: "Service Updates & Follow-ups",
              desc: "To send you updates on the status of your settlement case, request additional documents, or follow up on pending actions.",
            },
            {
              label: "Legal & Regulatory Compliance",
              desc: "To comply with applicable laws, court orders, government directives, or regulatory requirements under Indian law.",
            },
            {
              label: "Website Improvement",
              desc: "To analyse usage patterns, improve website functionality, and enhance user experience using aggregated, anonymised data.",
            },
          ].map(({ label, desc }) => (
            <li key={label} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-duedost-green" />
              <span>
                <strong className="text-foreground">{label}: </strong>
                {desc}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-duedost-green/5 border border-duedost-green/20">
          <span className="mt-0.5 flex-shrink-0 text-duedost-green">
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <p className="text-sm font-medium text-foreground">
            We do <strong>not</strong> sell, rent, or trade your personal or
            financial data to any third party, marketer, or data broker — ever.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "data-sharing",
    heading: "4. Data Sharing & Disclosure",
    content: (
      <>
        <p>
          We share your information only in the following strictly limited
          circumstances:
        </p>

        <div className="mt-5 space-y-4">
          {[
            {
              title: "Lenders & Banks",
              icon: "🏦",
              desc: "We share relevant financial details with your lenders, banks, or NBFCs exclusively for the purpose of negotiating a settlement on your behalf. This is done under your explicit authorisation.",
            },
            {
              title: "Legal Advisors & Advocates",
              icon: "⚖️",
              desc: "In cases requiring legal representation or where legal proceedings have been initiated, we may share information with empanelled advocates or legal advisors. All such parties are bound by professional confidentiality obligations.",
            },
            {
              title: "Government & Regulatory Bodies",
              icon: "🏛️",
              desc: "We may disclose information to government authorities, courts, or regulators when legally required to do so — for example, pursuant to a court order, subpoena, or statutory obligation under Indian law.",
            },
            {
              title: "Service Providers",
              icon: "🔧",
              desc: "We engage limited, vetted service providers (such as secure cloud hosting and communication platforms) who process data strictly on our behalf under confidentiality agreements. They are not permitted to use your data for any other purpose.",
            },
          ].map(({ title, icon, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-4 rounded-xl border border-border/60 bg-card"
            >
              <span
                className="text-xl flex-shrink-0 mt-0.5"
                role="img"
                aria-label={title}
              >
                {icon}
              </span>
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          We <strong>never</strong> share your data with advertising networks,
          data brokers, or marketing companies.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "5. Cookies & Tracking Technologies",
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to improve
          your browsing experience and to understand how visitors interact with
          our content.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              name: "Essential Cookies",
              purpose:
                "Required for the website to function correctly. These cannot be disabled.",
            },
            {
              name: "Analytics Cookies (Google Analytics)",
              purpose:
                "Help us understand which pages are most visited, how long users stay, and how they navigate our site. Data is aggregated and anonymised. You can opt out via the Google Analytics Opt-out Browser Add-on.",
            },
            {
              name: "Preference Cookies",
              purpose:
                "Remember your settings (such as theme preference) to improve your experience on return visits.",
            },
          ].map(({ name, purpose }) => (
            <div
              key={name}
              className="p-4 rounded-xl border border-border/60 bg-muted/30"
            >
              <p className="font-semibold text-sm text-foreground">{name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{purpose}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-muted-foreground">
          You may disable cookies at any time through your browser settings.
          Please note that disabling cookies may affect the functionality of
          certain parts of the website. For more information, refer to your
          browser&rsquo;s help documentation.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "6. Data Security",
    content: (
      <>
        <p>
          We take the security of your personal and financial information
          seriously. We implement industry-standard safeguards including:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          {[
            "TLS/SSL encryption for all data transmitted between your browser and our servers",
            "Access controls ensuring only authorised personnel can access client data",
            "Secure storage of sensitive documents with restricted access logs",
            "Regular review of our data handling practices and security measures",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-duedost-green"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 text-sm text-amber-800 dark:text-amber-300">
          <strong>Please note:</strong> No method of data transmission over the
          internet or electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your information, we cannot
          guarantee absolute security. In the event of a data breach that is
          likely to affect your rights and interests, we will notify you as
          required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "7. Data Retention",
    content: (
      <>
        <p>
          We retain your personal and financial data only for as long as
          necessary to fulfil the purposes for which it was collected, or as
          required by law.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {[
            {
              label: "Active Clients",
              detail:
                "Data is retained for the full duration of your engagement with Due Dost.",
            },
            {
              label: "Post-Settlement",
              detail:
                "Following successful settlement, records are retained for 3 years to satisfy legal and regulatory compliance obligations.",
            },
            {
              label: "Website Enquiries",
              detail:
                "Contact form submissions and enquiry data are retained for up to 12 months or until the enquiry is resolved.",
            },
            {
              label: "Secure Deletion",
              detail:
                "Upon expiry of the applicable retention period, data is securely deleted or permanently anonymised.",
            },
          ].map(({ label, detail }) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-border/60 bg-card"
            >
              <p className="font-semibold text-sm text-foreground">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "8. Your Rights",
    content: (
      <>
        <p>
          Under applicable Indian data protection law, including the SPDI Rules
          2011, you have the following rights with respect to your personal
          data:
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          {[
            {
              right: "Right to Access",
              desc: "You may request a copy of the personal data we hold about you at any time.",
            },
            {
              right: "Right to Correction",
              desc: "You may request that we correct any inaccurate or incomplete information we hold about you.",
            },
            {
              right: "Right to Withdrawal of Consent",
              desc: "You may withdraw your consent to the processing of your Sensitive Personal Data at any time, subject to the condition that withdrawal may affect our ability to continue providing services to you.",
            },
            {
              right: "Right to Deletion",
              desc: "You may request deletion of your personal data, subject to our legal obligations to retain certain records.",
            },
            {
              right: "Right to Grievance Redressal",
              desc: "If you believe your privacy rights have been violated, you may raise a complaint with us. We are committed to addressing all concerns promptly and fairly.",
            },
          ].map(({ right, desc }) => (
            <li key={right} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-duedost-blue dark:bg-duedost-green" />
              <span>
                <strong className="text-foreground">{right}: </strong>
                {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          To exercise any of these rights, please contact us in writing at{" "}
          <a
            href="mailto:support@duedost.com"
            className="text-duedost-blue dark:text-duedost-green underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            support@duedost.com
          </a>
          . We will acknowledge your request within 72 hours and respond fully
          within <strong>30 days</strong>.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    heading: "9. Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to external websites, including lender
          portals, government resources, and informational articles. These
          third-party sites are not operated by Due Dost and have their own
          independent privacy policies.
        </p>
        <p className="mt-4">
          We have no control over, and assume no responsibility for, the
          content, privacy practices, or security of any third-party websites.
          We encourage you to review the privacy policy of every website you
          visit before providing any personal information.
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    heading: "10. Changes to This Policy",
    content: (
      <>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time to reflect changes in our practices, services, or applicable
          law. When we make material changes, we will:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
          <li>Post the updated policy on this page with a revised &ldquo;Last Updated&rdquo; date</li>
          <li>
            Notify active clients via email or SMS where the changes are
            significant
          </li>
        </ul>
        <p className="mt-4">
          Your continued use of our website or services after any changes are
          posted constitutes your acceptance of the revised policy. We encourage
          you to review this page periodically.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "11. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal data, please contact
          us through any of the following channels:
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {[
            {
              label: "Email",
              value: "support@duedost.com",
              href: "mailto:support@duedost.com",
            },
            {
              label: "Phone",
              value: "+91 96014 43663",
              href: "tel:+919601443663",
            },
            {
              label: "Address",
              value: "Sector 2, Noida, Uttar Pradesh 201301, India",
              href: null,
            },
            {
              label: "Website",
              value: "duedost.com",
              href: "https://duedost.com",
            },
          ].map(({ label, value, href }) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-border/60 bg-card"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm font-medium text-duedost-blue dark:text-duedost-green hover:opacity-80 transition-opacity"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground">{value}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          We aim to respond to all privacy-related queries within{" "}
          <strong className="text-foreground">30 working days</strong>. For
          urgent concerns, please call us directly.
        </p>
      </>
    ),
  },
];

// ─── Table of Contents ─────────────────────────────────────────────────────────

function TableOfContents() {
  const items = sections.map(({ id, heading }) => ({ id, heading }));
  return (
    <nav
      aria-label="Table of contents"
      className="p-5 rounded-2xl border border-border/60 bg-card mb-10"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Contents
      </p>
      <ol className="space-y-1.5">
        {items.map(({ id, heading }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-sm text-muted-foreground hover:text-duedost-blue dark:hover:text-duedost-green transition-colors"
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  return (
    <>
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
                    Privacy Policy
                  </span>
                  <meta itemProp="position" content="2" />
                  <link itemProp="item" href={`${SITE_URL}/privacy-policy`} />
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-duedost-blue dark:text-duedost-green mb-4">
              Legal &amp; Compliance
            </span>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy Policy
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Due Dost LLC is committed to protecting your personal and
              financial information. This policy describes exactly what data we
              collect, how we use it, and your rights under Indian law.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-border/60 text-sm text-muted-foreground shadow-sm">
              <svg
                className="w-4 h-4 text-duedost-green"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                />
              </svg>
              Last Updated: March 2025
            </div>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Compliance callout */}
          <div className="flex items-start gap-3 p-4 mb-10 rounded-2xl border border-duedost-blue/20 bg-duedost-blue/5">
            <svg
              className="w-5 h-5 mt-0.5 flex-shrink-0 text-duedost-blue dark:text-duedost-green"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-foreground/80">
              This Privacy Policy is compliant with the{" "}
              <strong>Information Technology Act, 2000</strong> and the{" "}
              <strong>SPDI Rules, 2011</strong> (Government of India). Due Dost
              LLC treats all Sensitive Personal Data or Information (SPDI) with
              the highest level of care and confidentiality.
            </p>
          </div>

          {/* Table of Contents */}
          <TableOfContents />

          {/* Policy sections */}
          <article className="prose-custom space-y-0">
            {sections.map(({ id, heading, content }) => (
              <section
                key={id}
                id={id}
                className="scroll-mt-24 border-b border-border/40 pb-10 mb-2 last:border-0"
              >
                <h2 className="text-xl font-semibold mt-10 mb-4 text-foreground">
                  {heading}
                </h2>
                <div className="text-muted-foreground leading-relaxed">
                  {content}
                </div>
              </section>
            ))}
          </article>

          {/* Bottom CTA */}
          <div className="mt-14 p-6 rounded-2xl bg-gradient-to-br from-duedost-blue/5 to-duedost-green/5 border border-border/60 text-center">
            <p className="text-base font-semibold text-foreground mb-1">
              Have questions about your privacy?
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Our team is here to help. Reach out at any time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:support@duedost.com"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl shadow-md hover:opacity-95 transition-opacity"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+919601443663"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-duedost-blue dark:text-duedost-green border border-duedost-blue/40 dark:border-duedost-green/40 rounded-xl hover:bg-duedost-blue/5 dark:hover:bg-duedost-green/5 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +91 96014 43663
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
