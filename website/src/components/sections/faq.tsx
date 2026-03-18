"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is debt settlement?",
    answer:
      "Debt settlement is a legal process where we negotiate with your lenders to reduce the total amount you owe. Instead of paying the full outstanding balance (including inflated interest and penalties), you pay a mutually agreed-upon lump sum that is significantly lower — often 30-70% less than the original amount.",
  },
  {
    question: "Is debt settlement legal in India?",
    answer:
      "Absolutely. Debt settlement is 100% legal in India. Banks and NBFCs regularly settle outstanding loans through negotiated agreements. RBI guidelines support resolution of non-performing assets (NPAs) through settlement. Our team follows all legal protocols and ensures full compliance.",
  },
  {
    question: "Will my CIBIL score be affected?",
    answer:
      "If you're already in default, your CIBIL score is likely already impacted. Settlement marks the account as 'settled' rather than 'closed,' which has a temporary impact. However, being debt-free allows you to rebuild your credit over 12-18 months. We also guide you through the credit rebuilding process.",
  },
  {
    question: "How long does the settlement process take?",
    answer:
      "Typically, the entire process takes 3-12 months depending on the complexity of your case, the number of creditors, and the total amount involved. Simple single-bank settlements can be resolved in as little as 30-60 days.",
  },
  {
    question: "Can recovery agents harass me during settlement?",
    answer:
      "No. Under RBI guidelines and Supreme Court directives, recovery agents cannot harass, threaten, or use abusive language. Our anti-harassment service provides legal protection. We send legal notices to stop harassment and can represent you if needed.",
  },
  {
    question: "What types of debts can be settled?",
    answer:
      "We handle credit card dues, personal loans, business loans, app-based loans, NBFC loans, and more. Essentially, any unsecured debt can be negotiated for settlement. For secured loans (car/home), we help with closure and NOC processes.",
  },
  {
    question: "Do I get an NOC after settlement?",
    answer:
      "Yes. Once the settlement amount is paid, the bank issues a No Objection Certificate (NOC) confirming that the debt has been resolved. We ensure you receive this document as it's crucial for your financial records.",
  },
  {
    question: "How much does Due Dost charge?",
    answer:
      "Our fees are transparent and success-based. We charge a percentage of the amount we save you — so you only pay when we deliver results. The exact fee depends on your case complexity. Get a free consultation to know the exact terms.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
            FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Got Questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find answers to the most common questions about debt settlement.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 rounded-xl border border-border/50 bg-background hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <span className="font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
