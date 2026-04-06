"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  CreditCard,
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Credit Card Settlement",
    description:
      "Settle outstanding credit card dues at 40-75% less than what you owe. Stop paying 42% interest rates.",
    href: "/credit-card-settlement",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Anti-Harassment Service",
    description:
      "Legal protection against aggressive recovery agents. Know your rights under RBI & Supreme Court guidelines.",
    href: "/recovery-agent-harassment",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Loan Consolidation",
    description:
      "Combine multiple loans into one manageable EMI. Simplify your finances and reduce monthly burden.",
    href: "/#contact",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "Personal Loan Settlement",
    description:
      "Negotiate and settle personal loans with banks and NBFCs. One-time payment, lifetime freedom.",
    href: "/personal-loan-settlement",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "App Loan Settlement",
    description:
      "Trapped by predatory app loans? We help settle digital lending dues and stop the harassment cycle.",
    href: "/#contact",
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    title: "Debt Closure & NOC",
    description:
      "Complete debt closure with official NOC. Car loans, home loans — we handle the entire process end to end.",
    href: "/#contact",
  },
];

const learnMoreLabel: Record<string, string> = {
  "/#contact": "Get in Touch",
};

function ConditionalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return <Link href={href} className={className}>{children}</Link>;
}

function ServiceCard({ service, i }: { service: typeof services[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--spot-x", `${x}%`);
    card.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group transition-transform duration-300 md:hover:scale-[1.03]"
    >
      <ConditionalLink href={service.href} className="block h-full">
        <div
          className="relative h-full overflow-hidden rounded-2xl bg-border p-[1.5px] transition-all duration-300 md:group-hover:bg-[linear-gradient(135deg,#1B5DAA,#3BAA35,#2E7DD6,#1B5DAA)] md:group-hover:shadow-[0_0_24px_rgba(27,93,170,0.25),0_8px_32px_rgba(59,170,53,0.15)]"
        >
          <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            className="relative h-full rounded-[calc(1rem-1.5px)] bg-background"
            style={{
              ["--spot-x" as string]: "50%",
              ["--spot-y" as string]: "50%",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[calc(1rem-1.5px)] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(27,93,170,0.1) 0%, transparent 55%)",
              }}
            />

            <div className="relative flex h-full flex-col justify-between gap-6 p-6">
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-border bg-muted p-2.5 text-duedost-blue dark:text-duedost-green">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-medium text-duedost-blue dark:text-duedost-green pt-3 border-t border-border/50">
                <span>{learnMoreLabel[service.href] ?? "Learn More"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 md:group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </ConditionalLink>
    </motion.div>
  );
}

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
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
