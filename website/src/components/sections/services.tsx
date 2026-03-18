"use client";

import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  CreditCard,
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Credit Card Settlement",
    description:
      "Settle outstanding credit card dues at 40-70% less than what you owe. Stop paying 42% interest rates.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Anti-Harassment Service",
    description:
      "Legal protection against aggressive recovery agents. Know your rights under RBI & Supreme Court guidelines.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Loan Consolidation",
    description:
      "Combine multiple loans into one manageable EMI. Simplify your finances and reduce monthly burden.",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "Personal Loan Settlement",
    description:
      "Negotiate and settle personal loans with banks and NBFCs. One-time payment, lifetime freedom.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "App Loan Settlement",
    description:
      "Trapped by predatory app loans? We help settle digital lending dues and stop the harassment cycle.",
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    title: "Debt Closure & NOC",
    description:
      "Complete debt closure with official NOC. Car loans, home loans — we handle the entire process end to end.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-green">
            Our Services
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Every Debt Has a{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From credit cards to personal loans, we provide comprehensive debt
            resolution services tailored to your situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2.5 text-duedost-blue dark:text-duedost-green">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
