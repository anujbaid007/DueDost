"use client";

import { motion } from "motion/react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Shield, Scale, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "100% Legal Process",
    description:
      "Every step follows RBI guidelines and Indian Banking Codes. Your settlement is backed by law.",
    evervaultText: "Legal",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Expert Negotiators",
    description:
      "Our legal team has settled with 50+ banks and NBFCs. We know exactly what works.",
    evervaultText: "Expert",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Resolution",
    description:
      "Most cases settled in 3-6 months. Single-bank settlements can close in just 30 days.",
    evervaultText: "Fast",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Your Dost Always",
    description:
      "Dedicated case manager, 24/7 support, and complete transparency throughout the journey.",
    evervaultText: "Dost",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 relative bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-green">
            Why Due Dost
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not Just Settlement,{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Complete Care
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We go beyond negotiation — providing legal support, emotional
            guidance, and a clear path to financial freedom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="border border-border/50 rounded-2xl flex flex-col md:flex-row items-start overflow-hidden bg-background hover:border-border transition-colors duration-300">
                {/* Evervault interactive area */}
                <div className="w-full md:w-48 h-48 md:h-auto md:min-h-[14rem] flex-shrink-0 border-b md:border-b-0 md:border-r border-border/30 relative">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground/20 z-10" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground/20 z-10" />
                  <EvervaultCard text={reason.evervaultText} />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-fit rounded-lg border border-border bg-muted p-2 text-duedost-blue dark:text-duedost-green">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
