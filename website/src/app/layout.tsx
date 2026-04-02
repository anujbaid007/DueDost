import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://duedost.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Due Dost | Aapke Dues Ka Dost – Debt Settlement Experts India",
    template: "%s | Due Dost",
  },
  description:
    "India's most trusted debt settlement partner. Settle credit card dues, personal loans & EMI at up to 75% less. Expert legal team. RBI compliant. Free consultation. Call +91 92894 93265.",
  keywords: [
    // High-volume primary
    "credit card settlement",
    "loan settlement",
    "debt settlement India",
    "personal loan settlement",
    "one time settlement OTS",
    "credit card debt settlement India",
    "debt relief India",
    "debt settlement company India",
    "loan settlement company India",
    "NBFC loan settlement",
    "credit card defaulter India",
    "unable to pay credit card bill India",
    // Long-tail high-intent
    "how to settle credit card debt India",
    "best debt settlement company India",
    "HDFC credit card settlement",
    "ICICI credit card settlement",
    "SBI credit card settlement",
    "Axis Bank credit card settlement",
    "loan settlement 70 percent waiver India",
    "debt settlement without affecting CIBIL",
    "recovery agent harassment India",
    "anti harassment service debt India",
    "credit card settlement legal India",
    // Local
    "debt settlement Noida",
    "loan settlement Delhi NCR",
    "credit card settlement Delhi",
    "debt settlement company Noida",
    // Hindi transliterations
    "karz mukt",
    "loan settlement kaise hota hai",
    "EMI nahi bhar sakta",
    "karj mafi India",
    // Brand
    "due dost",
    "due dost debt settlement",
    "aapke dues ka dost",
    // Service-specific
    "app loan settlement",
    "loan closure NOC",
    "debt consolidation India",
    "credit card waiver India",
    "RBI compliant debt settlement",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Due Dost",
    title: "Due Dost | Aapke Dues Ka Dost – Debt Settlement Experts India",
    description:
      "Settle your credit card dues & personal loans at up to 75% less. India's most trusted debt settlement partner. Expert legal team. Free consultation.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Due Dost – Aapke Dues Ka Dost | Debt Settlement Experts India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Due Dost | Debt Settlement Experts India",
    description:
      "Settle credit card dues & personal loans at up to 75% less. RBI compliant. Free consultation.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Due Dost",
      description:
        "India's most trusted debt settlement partner. Settle credit card dues, personal loans & EMI at up to 75% less.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["FinancialService", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Due Dost",
      alternateName: "Aapke Dues Ka Dost",
      description:
        "India's most trusted debt settlement partner. We help you negotiate and settle credit card dues, personal loans, and more at up to 75% less than the original amount.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.webp`,
        width: 160,
        height: 48,
      },
      image: `${SITE_URL}/og-image.webp`,
      telephone: ["+919289493265", "+911204894731"],
      email: "support@duedost.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "WeWork, Two Horizon Center",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.5706,
        longitude: 77.3272,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      priceRange: "Success-based fee",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Debt Settlement Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Credit Card Settlement",
              description:
                "Negotiate and settle credit card outstanding dues at up to 75% less than the outstanding amount.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Loan Settlement",
              description:
                "Settle personal loans by negotiating directly with banks and NBFCs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "App Loan Settlement",
              description:
                "Resolve and settle app-based loans through legal negotiation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Anti-Harassment Service",
              description:
                "Legal protection from recovery agent harassment under RBI guidelines and Supreme Court directives.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Loan Consolidation",
              description:
                "Consolidate multiple loans into a single manageable payment plan.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Debt Closure & NOC",
              description:
                "Complete loan closure and obtain No Objection Certificate (NOC) from lenders.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is debt settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debt settlement is a legal process where we negotiate with your lenders to reduce the total amount you owe. Instead of paying the full outstanding balance (including inflated interest and penalties), you pay a mutually agreed-upon lump sum that is significantly lower — often 30-75% less than the original amount.",
          },
        },
        {
          "@type": "Question",
          name: "Is debt settlement legal in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Debt settlement is 100% legal in India. Banks and NBFCs regularly settle outstanding loans through negotiated agreements. RBI guidelines support resolution of non-performing assets (NPAs) through settlement. Our team follows all legal protocols and ensures full compliance.",
          },
        },
        {
          "@type": "Question",
          name: "Will my CIBIL score be affected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're already in default, your CIBIL score is likely already impacted. Settlement marks the account as 'settled' rather than 'closed,' which has a temporary impact. However, being debt-free allows you to rebuild your credit over 12-18 months. We also guide you through the credit rebuilding process.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the settlement process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically, the entire process takes 3-12 months depending on the complexity of your case, the number of creditors, and the total amount involved. Simple single-bank settlements can be resolved in as little as 30-60 days.",
          },
        },
        {
          "@type": "Question",
          name: "Can recovery agents harass me during settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Under RBI guidelines and Supreme Court directives, recovery agents cannot harass, threaten, or use abusive language. Our anti-harassment service provides legal protection. We send legal notices to stop harassment and can represent you if needed.",
          },
        },
        {
          "@type": "Question",
          name: "What types of debts can be settled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We handle credit card dues, personal loans, business loans, app-based loans, NBFC loans, and more. Essentially, any unsecured debt can be negotiated for settlement. For secured loans (car/home), we help with closure and NOC processes.",
          },
        },
        {
          "@type": "Question",
          name: "Do I get an NOC after settlement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Once the settlement amount is paid, the bank issues a No Objection Certificate (NOC) confirming that the debt has been resolved. We ensure you receive this document as it's crucial for your financial records.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Due Dost charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our fees are transparent and success-based. We charge a percentage of the amount we save you — so you only pay a fraction to save a huge amount on your dues. The exact fee depends on your case complexity. Get a free consultation to know the exact terms.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased grain-overlay`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
