import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import {
  Phone,
  MessageCircle,
  Shield,
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Clock,
  Ban,
  Users,
  Home,
  Megaphone,
  Fingerprint,
  ClipboardList,
  Building2,
  Gavel,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Recovery Agent Harassment India | Know Your Rights | Stop Harassment | Due Dost",
  description:
    "Recovery agents cannot threaten, abuse or harass you. Know your RBI rights. Due Dost provides legal protection against illegal recovery agent harassment. Free consultation. Call +91 92894 93265.",
  keywords: [
    "recovery agent harassment India",
    "recovery agent rights India",
    "how to stop recovery agent harassment",
    "RBI guidelines recovery agents",
    "bank recovery agent harassment complaint",
    "रिकवरी एजेंट से कैसे बचें",
    "loan recovery agent illegal",
    "anti harassment service debt India",
  ],
  alternates: { canonical: `${SITE_URL}/recovery-agent-harassment` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/recovery-agent-harassment`,
    siteName: "Due Dost",
    title: "Stop Recovery Agent Harassment | Know Your Rights | Due Dost",
    description:
      "Recovery agents cannot harass, threaten or abuse you. Know your RBI rights and get legal protection. Free consultation.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Anti-Harassment Service",
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
        "Legal protection against recovery agent harassment. RBI compliant anti-harassment service for loan defaulters in India.",
      areaServed: { "@type": "Country", name: "India" },
      url: `${SITE_URL}/recovery-agent-harassment`,
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
          name: "Recovery Agent Harassment",
          item: `${SITE_URL}/recovery-agent-harassment`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can recovery agents come to my home in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but with restrictions. A recovery agent can visit your home only during permissible hours (7 AM to 7 PM) and should give prior notice. They cannot enter your premises forcibly, create a public scene, or use threats. If an agent shows up unannounced and causes disturbance, you can file a complaint with the bank's grievance cell and the RBI Ombudsman. You also have the right to refuse entry.",
          },
        },
        {
          "@type": "Question",
          name: "What are my rights against recovery agents in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under RBI guidelines and Supreme Court directives, you have the right to: (1) Not be contacted before 7 AM or after 7 PM, (2) Not be subjected to abusive, threatening or intimidating language, (3) Have agents identify themselves clearly, (4) Request written communication of your outstanding dues, (5) Not have agents contact your family, colleagues or neighbors without your consent. Violations are actionable under the Consumer Protection Act, 2019 and the RBI Integrated Ombudsman Scheme, 2021.",
          },
        },
        {
          "@type": "Question",
          name: "How to file a complaint against a bank recovery agent in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Step 1: Collect evidence — call recordings, screenshots, written notes of incidents with dates and times. Step 2: File a written complaint with the bank's Grievance Redressal Officer (details on the bank's website) via email and registered post. Step 3: If unresolved within 30 days, file with the RBI Integrated Ombudsman at cms.rbi.org.in — it's free and requires no lawyer. Step 4: Contact Due Dost for expert assistance throughout this process.",
          },
        },
        {
          "@type": "Question",
          name: "Can a recovery agent come to my home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but with restrictions. A recovery agent can visit your home only during permissible hours (7 AM to 7 PM) and should give prior notice. They cannot enter your premises forcibly, create a public scene, or use threats. If an agent shows up unannounced and causes disturbance, you can file a complaint with the bank's grievance cell and the RBI Ombudsman. You also have the right to refuse entry.",
          },
        },
        {
          "@type": "Question",
          name: "What can I do if a recovery agent threatens me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Immediately document the threat — record the call or note the exact words, date, and time. Then: (1) File a written complaint with the bank's nodal officer by email and registered post. (2) File a police complaint under IPC Section 506 (criminal intimidation) if the threat is serious. (3) File with the RBI Ombudsman at cms.rbi.org.in. (4) Contact Due Dost — we'll send a legal notice to the bank within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Can I record recovery agent calls as evidence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In India, recording a phone call for your own personal use or to protect your rights is generally considered legal under the right to self-defense, provided you are a party to the conversation. Courts have accepted call recordings as evidence in harassment cases. We strongly recommend recording all interactions with recovery agents for your protection.",
          },
        },
        {
          "@type": "Question",
          name: "How to file a complaint against a bank's recovery agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Step 1: Collect evidence — call recordings, screenshots, written notes of incidents with dates and times. Step 2: File a written complaint with the bank's Grievance Redressal Officer (details on the bank's website) via email and registered post. Step 3: If unresolved within 30 days, file with the RBI Integrated Ombudsman at cms.rbi.org.in — it's free and requires no lawyer. Step 4: Contact Due Dost for expert assistance throughout this process.",
          },
        },
        {
          "@type": "Question",
          name: "Will stopping recovery agents affect my debt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stopping harassment is about stopping illegal behavior — it does not erase your debt. However, once harassment stops, you're in a far better position to negotiate a fair settlement. Due Dost works on both fronts: stopping the harassment immediately through legal channels, and then negotiating your debt with the bank to reach a sustainable settlement. The goal is permanent resolution, not just temporary relief.",
          },
        },
        {
          "@type": "Question",
          name: "Can recovery agents contact my family or colleagues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This is explicitly prohibited under RBI guidelines. Recovery agents cannot call or visit your family members, friends, neighbors, or employer to disclose your debt status, pressure them to influence you, or embarrass you socially — without your express written consent. If this is happening to you, it is a serious violation. Document every such contact and file an immediate complaint. This type of harassment typically leads to the highest compensation awards by the RBI Ombudsman.",
          },
        },
      ],
    },
  ],
};

// ─── Data ────────────────────────────────────────────────────────────────────

const prohibitedActions = [
  {
    icon: Clock,
    title: "No Calls Before 7 AM or After 7 PM",
    description:
      "Recovery agents are strictly prohibited from calling or visiting between 7 PM and 7 AM. Any contact outside these hours is a direct violation of RBI guidelines.",
  },
  {
    icon: Ban,
    title: "No Abusive or Threatening Language",
    description:
      "Agents cannot use abusive, threatening, intimidating, or humiliating language — in person, over phone, or in writing. This constitutes criminal harassment under IPC.",
  },
  {
    icon: Users,
    title: "Cannot Contact Your Family or Colleagues",
    description:
      "Recovery agents cannot contact your family members, neighbors, friends, or employer to disclose your debt or pressure them — without your express written consent.",
  },
  {
    icon: Home,
    title: "No Unannounced Home Visits",
    description:
      "Agents must give prior notice before visiting your home. Showing up unannounced to create public embarrassment or pressure is an illegal recovery tactic.",
  },
  {
    icon: Megaphone,
    title: "Cannot Misrepresent the Debt Amount",
    description:
      "Inflating the outstanding amount, adding hidden charges, or misrepresenting what you owe is fraudulent and actionable under the Consumer Protection Act, 2019.",
  },
  {
    icon: Gavel,
    title: "Cannot Threaten False Arrest or Legal Action",
    description:
      "Agents cannot threaten you with arrest, police action, or court cases unless such proceedings have actually been initiated. False threats are legally punishable.",
  },
  {
    icon: Fingerprint,
    title: "Must Identify Themselves",
    description:
      "Every recovery agent must clearly state their name, the bank or NBFC they represent, and the purpose of the call or visit. Anonymity or impersonation is a violation.",
  },
  {
    icon: ClipboardList,
    title: "Must Provide Written Communication on Request",
    description:
      "If you request written communication, the agent must provide details of the outstanding debt in writing. You have the right to written proof of every claim they make.",
  },
];

const actionSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Document Everything",
    description:
      "Record all calls (permitted in India for personal use), save WhatsApp and SMS messages, note the date, time, and content of every interaction. This evidence is critical for legal action.",
    tip: "Use your phone's built-in call recorder or apps like ACR. Screenshots of messages are admissible evidence.",
  },
  {
    step: "02",
    icon: Building2,
    title: "File Complaint with the Bank's Nodal Officer",
    description:
      "Every bank is required to have a Nodal Officer under RBI guidelines. Lodge a formal written complaint about the agent's behavior. Banks are responsible for actions of their recovery agents.",
    tip: "Send complaints via registered post and email to create a paper trail. Banks must respond within 30 days.",
  },
  {
    step: "03",
    icon: Scale,
    title: "File with RBI Ombudsman",
    description:
      "If the bank doesn't resolve your complaint within 30 days, escalate to the RBI Ombudsman at cms.rbi.org.in. This is a free service — no fees, no lawyer required.",
    tip: "The RBI Ombudsman can direct banks to pay compensation for mental harassment caused by recovery agents.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Contact Due Dost for Immediate Legal Action",
    description:
      "We send formal legal notices to banks and recovery agencies, file RBI complaints on your behalf, and negotiate your debt to stop the harassment permanently — not just temporarily.",
    tip: "Most harassment stops within 48–72 hours of a formal legal notice from our team.",
  },
];

const dueDostServices = [
  {
    icon: FileText,
    title: "Legal Notice",
    color: "duedost-blue",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800/40",
    iconColor: "text-duedost-blue",
    description:
      "We send a formal legal notice to the bank and/or recovery agency on your behalf, citing specific RBI guideline violations. This immediately puts legal accountability on the lender.",
    outcome: "Harassment typically stops within 48–72 hours",
  },
  {
    icon: Scale,
    title: "RBI Complaint",
    color: "duedost-green",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800/40",
    iconColor: "text-duedost-green",
    description:
      "We file a comprehensive complaint with the RBI Integrated Ombudsman Scheme citing Fair Practice Code violations. Banks face regulatory scrutiny and compensation orders.",
    outcome: "Formal regulatory pressure on the lender",
  },
  {
    icon: Gavel,
    title: "Debt Settlement",
    color: "duedost-blue",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800/40",
    iconColor: "text-duedost-blue",
    description:
      "We negotiate your outstanding debt directly with the bank, often achieving 40–60% reduction. Once settled, the recovery process ends permanently — no more agents, no more calls.",
    outcome: "Permanent resolution of the underlying debt",
  },
];

const legalRights = [
  {
    icon: Gavel,
    title: "Supreme Court of India Guidelines",
    source: "Citibank N.A. vs. Santosh Pradeep Kumar Kaw & Others",
    description:
      "The Supreme Court has held that recovery agents cannot use coercive methods to recover loans. Banks are vicariously liable for the conduct of their agents. Harassment during recovery is not only unethical but legally actionable.",
  },
  {
    icon: Building2,
    title: "RBI Master Circular — Fair Practice Code",
    source: "RBI Circular DBOD.No.Leg.BC.55/09.07.005/2003-04",
    description:
      "RBI's Master Circular on Fair Practice Code for lenders mandates that banks must ensure recovery agents do not resort to intimidation, harassment, or other activities that interfere with the borrower's normal life. Banks that fail to comply face regulatory action.",
  },
  {
    icon: Shield,
    title: "Consumer Protection Act, 2019",
    source: "Section 2(46) — Unfair Trade Practice",
    description:
      "Harassment during debt recovery constitutes an unfair trade practice under the Consumer Protection Act, 2019. Consumers can approach the District Consumer Forum for compensation for mental agony, harassment, and costs incurred.",
  },
  {
    icon: BookOpen,
    title: "RBI Integrated Ombudsman Scheme, 2021",
    source: "Applicable to all RBI-regulated entities",
    description:
      "Under this scheme, any customer can file a complaint against banks and NBFCs for recovery agent harassment — at no cost. Ombudsman orders can include monetary compensation for harassment and mental distress.",
  },
];

const faqs = [
  {
    question: "Can a recovery agent come to my home?",
    answer:
      "Yes, but with restrictions. A recovery agent can visit your home only during permissible hours (7 AM to 7 PM) and should give prior notice. They cannot enter your premises forcibly, create a public scene, or use threats. If an agent shows up unannounced and causes disturbance, you can file a complaint with the bank's grievance cell and the RBI Ombudsman. You also have the right to refuse entry.",
  },
  {
    question: "What can I do if a recovery agent threatens me?",
    answer:
      "Immediately document the threat — record the call or note the exact words, date, and time. Then: (1) File a written complaint with the bank's nodal officer by email and registered post. (2) File a police complaint under IPC Section 506 (criminal intimidation) if the threat is serious. (3) File with the RBI Ombudsman at cms.rbi.org.in. (4) Contact Due Dost — we'll send a legal notice to the bank within 24 hours.",
  },
  {
    question: "Can I record recovery agent calls as evidence?",
    answer:
      "Yes. In India, recording a phone call for your own personal use or to protect your rights is generally considered legal under the right to self-defense, provided you are a party to the conversation. Courts have accepted call recordings as evidence in harassment cases. We strongly recommend recording all interactions with recovery agents for your protection.",
  },
  {
    question: "How to file a complaint against a bank's recovery agent?",
    answer:
      "Step 1: Collect evidence — call recordings, screenshots, written notes of incidents with dates and times. Step 2: File a written complaint with the bank's Grievance Redressal Officer (details on the bank's website) via email and registered post. Step 3: If unresolved within 30 days, file with the RBI Integrated Ombudsman at cms.rbi.org.in — it's free and requires no lawyer. Step 4: Contact Due Dost for expert assistance throughout this process.",
  },
  {
    question: "Will stopping recovery agents affect my debt?",
    answer:
      "Stopping harassment is about stopping illegal behavior — it does not erase your debt. However, once harassment stops, you're in a far better position to negotiate a fair settlement. Due Dost works on both fronts: stopping the harassment immediately through legal channels, and then negotiating your debt with the bank to reach a sustainable settlement. The goal is permanent resolution, not just temporary relief.",
  },
  {
    question: "Can recovery agents contact my family or colleagues?",
    answer:
      "No. This is explicitly prohibited under RBI guidelines. Recovery agents cannot call or visit your family members, friends, neighbors, or employer to disclose your debt status, pressure them to influence you, or embarrass you socially — without your express written consent. If this is happening to you, it is a serious violation. Document every such contact and file an immediate complaint. This type of harassment typically leads to the highest compensation awards by the RBI Ombudsman.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function RecoveryAgentHarassmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-x-clip">
        <Navbar />

        {/* ── BREADCRUMB ──────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="pt-24 pb-0 px-6 max-w-6xl mx-auto"
        >
          <ol
            className="flex items-center gap-2 text-xs text-muted-foreground"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
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
            <li aria-hidden="true" className="text-muted-foreground/40">
              /
            </li>
            <li
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <span className="text-foreground font-medium" itemProp="name">
                Recovery Agent Harassment
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-red-50/40 to-background dark:from-red-950/10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/40 mb-6">
              <Shield className="h-3.5 w-3.5 text-duedost-blue" />
              <span className="text-xs font-semibold tracking-widest uppercase text-duedost-blue">
                Anti-Harassment Service
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Recovery Agents{" "}
              <span className="text-red-600 dark:text-red-400">
                Cannot Harass You
              </span>{" "}
              — Know Your Rights
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              Under RBI guidelines and Supreme Court directives, recovery agents
              have strict limits on what they can and cannot do. If they&apos;re
              threatening, abusing, or calling at odd hours —{" "}
              <strong className="text-foreground">that&apos;s illegal</strong>.
              We&apos;ll stop them.
            </p>


            {/* Alert bar */}
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 mb-10">
              <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-700 dark:text-red-300 font-medium text-left">
                Threats, abusive calls, and contacting your family are{" "}
                <strong>illegal</strong>. You don&apos;t have to tolerate this.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-duedost-blue to-[#1B5DAA]/80 rounded-2xl hover:shadow-xl hover:shadow-duedost-blue/25 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Phone className="h-4 w-4" />
                Get Legal Protection Now
              </a>
              <a
                href="https://wa.me/919289493265?text=Hi%2C%20I%20need%20help%20with%20recovery%20agent%20harassment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-duedost-green bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40 rounded-2xl hover:bg-green-100 dark:hover:bg-green-950/50 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust note */}
            <p className="mt-6 text-xs text-muted-foreground">
              Free consultation · Confidential · RBI Compliant · Available Mon–Sat 9 AM – 7 PM
            </p>
          </div>
        </section>

        {/* ── WHAT RECOVERY AGENTS CANNOT DO ──────────────────────── */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800/40 mb-4">
                <XCircle className="h-3.5 w-3.5 text-red-600" />
                <span className="text-xs font-semibold tracking-widest uppercase text-red-600">
                  RBI Guidelines
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                What Recovery Agents{" "}
                <span className="text-red-600 dark:text-red-400">
                  CANNOT Do
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The Reserve Bank of India has issued clear guidelines under the
                Fair Practice Code. Violations of these rules make banks legally
                liable and give you actionable recourse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-800/50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                        <h3 className="font-semibold text-sm text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-amber-800 dark:text-amber-300 mb-1">
                    Important: Banks are responsible for their agents
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Under RBI guidelines, banks and NBFCs are held vicariously
                    liable for the conduct of their recovery agents. You can
                    file complaints against the bank directly, even if the
                    agent is a third party. The bank cannot escape accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU CAN DO ─────────────────────────────────────── */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/40 mb-4">
                <CheckCircle2 className="h-3.5 w-3.5 text-duedost-blue" />
                <span className="text-xs font-semibold tracking-widest uppercase text-duedost-blue">
                  Take Action
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                What <span className="text-duedost-blue">YOU Can Do</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You are not powerless. Here are the four concrete steps to stop
                harassment and protect yourself legally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative p-6 rounded-2xl bg-background border border-border/60 hover:border-duedost-blue/40 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-duedost-blue to-[#1B5DAA]/70 flex items-center justify-center shadow-lg shadow-duedost-blue/20">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-duedost-blue/60 tracking-widest">
                            STEP {item.step}
                          </span>
                        </div>
                        <h3 className="font-bold text-base mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                          <p className="text-xs text-duedost-blue font-medium">
                            💡 {item.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW DUE DOST STOPS HARASSMENT ───────────────────────── */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/40 mb-4">
                <Shield className="h-3.5 w-3.5 text-duedost-green" />
                <span className="text-xs font-semibold tracking-widest uppercase text-duedost-green">
                  How We Help
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                How Due Dost{" "}
                <span className="text-duedost-green">Stops Harassment</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We don&apos;t just give advice — we take direct legal action.
                Our approach combines immediate intervention with permanent
                resolution of the underlying debt — whether it&apos;s a{" "}
                <Link
                  href="/personal-loan-settlement"
                  className="text-duedost-blue hover:underline font-medium"
                >
                  personal loan
                </Link>{" "}
                or{" "}
                <Link
                  href="/credit-card-settlement"
                  className="text-duedost-blue hover:underline font-medium"
                >
                  credit card outstanding
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dueDostServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`p-6 rounded-2xl ${service.bgColor} border ${service.borderColor} flex flex-col`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-background border ${service.borderColor} flex items-center justify-center mb-5 shadow-sm`}
                    >
                      <Icon className={`h-5 w-5 ${service.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                      <CheckCircle2
                        className={`h-4 w-4 ${service.iconColor} flex-shrink-0`}
                      />
                      <p className={`text-xs font-semibold ${service.iconColor}`}>
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a
                href="tel:+919289493265"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-2xl hover:shadow-xl hover:shadow-duedost-green/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call Now for Free Consultation
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                Also explore our{" "}
                <Link
                  href="/credit-card-settlement"
                  className="text-duedost-blue hover:underline font-medium"
                >
                  Credit Card Settlement
                </Link>{" "}
                and{" "}
                <Link
                  href="/personal-loan-settlement"
                  className="text-duedost-blue hover:underline font-medium"
                >
                  Personal Loan Settlement
                </Link>{" "}
                services to permanently resolve your underlying debt.
              </p>
            </div>
          </div>
        </section>

        {/* ── YOUR LEGAL RIGHTS ────────────────────────────────────── */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/40 mb-4">
                <Scale className="h-3.5 w-3.5 text-duedost-blue" />
                <span className="text-xs font-semibold tracking-widest uppercase text-duedost-blue">
                  Legal Framework
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Your <span className="text-duedost-blue">Legal Rights</span>{" "}
                Under Indian Law
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple layers of legal protection exist to shield you from
                abusive debt collection. Understanding them puts power back in
                your hands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {legalRights.map((right) => {
                const Icon = right.icon;
                return (
                  <div
                    key={right.title}
                    className="p-6 rounded-2xl bg-background border border-border/60 hover:border-duedost-blue/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Icon className="h-4.5 w-4.5 text-duedost-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-base mb-1 text-foreground">
                          {right.title}
                        </h3>
                        <p className="text-xs text-duedost-blue font-medium mb-2">
                          {right.source}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RBI Ombudsman CTA card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-duedost-blue/5 to-duedost-green/5 border border-duedost-blue/20">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    File with RBI Ombudsman — It&apos;s Free
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The RBI Integrated Ombudsman Scheme allows any customer to
                    file a complaint against a bank or NBFC for free. You don&apos;t
                    need a lawyer. Complaints can be filed online at{" "}
                    <strong>cms.rbi.org.in</strong> or by calling the toll-free
                    number <strong>14448</strong>. The Ombudsman can award
                    compensation for harassment and mental distress up to{" "}
                    <strong>₹20 lakhs</strong>.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-duedost-blue bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    RBI CMS Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border/60 mb-4">
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  FAQ
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Answers to the most common questions about recovery agent
                harassment and your rights in India.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border/60 bg-card overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="p-5 md:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-duedost-blue/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-duedost-blue">
                          Q
                        </span>
                      </div>
                      <h3
                        className="font-bold text-base text-foreground"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className="pl-9"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-duedost-green/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-duedost-green">
                            A
                          </span>
                        </div>
                        <p
                          className="text-sm text-muted-foreground leading-relaxed"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA BANNER ──────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-duedost-green/10 via-background to-duedost-blue/10 border border-duedost-green/30 p-8 md:p-12 text-center">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-duedost-green/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-duedost-blue/5 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/40 mb-6">
                  <div className="w-2 h-2 rounded-full bg-duedost-green animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-duedost-green">
                    Free Consultation Available
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Stop the Harassment Today.
                  <br className="hidden sm:block" />
                  <span className="text-duedost-green">
                    {" "}
                    One Call Is All It Takes.
                  </span>
                </h2>

                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  You don&apos;t have to endure threatening calls, late-night
                  messages, or agents showing up at your home. Our team will
                  take immediate legal action — and begin resolving your debt
                  permanently.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <a
                    href="tel:+919289493265"
                    className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-2xl hover:shadow-xl hover:shadow-duedost-green/30 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    +91 92894 93265
                  </a>
                  <a
                    href="https://wa.me/919289493265?text=Hi%2C%20I%20need%20help%20with%20recovery%20agent%20harassment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#25D366] hover:bg-[#22c05d] rounded-2xl hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-duedost-green" />
                    100% Confidential
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-duedost-green" />
                    No Hidden Fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-duedost-green" />
                    RBI Compliant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-duedost-green" />
                    Available Mon–Sat
                  </span>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Or email us at{" "}
                  <a
                    href="mailto:support@duedost.com"
                    className="text-duedost-blue hover:underline"
                  >
                    support@duedost.com
                  </a>
                </p>
              </div>
            </div>
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
                Resolve your credit card dues permanently at 40–75% less so the calls stop for good.
              </p>
            </Link>
            <Link
              href="/personal-loan-settlement"
              className="group flex flex-col gap-2 p-5 rounded-2xl border border-border/60 bg-card hover:border-duedost-blue hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-duedost-blue transition-colors">
                Personal Loan Settlement
              </h3>
              <p className="text-sm text-muted-foreground">
                Settle personal loan outstanding at up to 60% less and end recovery pressure permanently.
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
                Detailed settlement guides for HDFC, ICICI, SBI, Axis, Kotak, and all major lenders.
              </p>
            </Link>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}
