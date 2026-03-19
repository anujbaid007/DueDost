"use client";

import { useRef, useState, useCallback } from "react";
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
      "Settle outstanding credit card dues at 40-70% less than what you owe. Stop paying 42% interest rates.",
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
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <ConditionalLink href={service.href} className="block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            border: hovered
              ? "1.5px solid transparent"
              : "1.5px solid hsl(var(--border))",
            background: hovered
              ? `linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box,
                 linear-gradient(135deg, #1B5DAA, #3BAA35, #2E7DD6, #1B5DAA) border-box`
              : "hsl(var(--background))",
            boxShadow: hovered
              ? "0 0 24px rgba(27,93,170,0.25), 0 8px 32px rgba(59,170,53,0.15)"
              : "none",
          }}
        >
          {/* Mouse-tracked spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(27,93,170,0.1) 0%, transparent 55%)`,
            }}
          />

          {/* Card content */}
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

            {/* Learn more footer */}
            <div className="flex items-center gap-1.5 text-sm font-medium text-duedost-blue dark:text-duedost-green pt-3 border-t border-border/50">
              <span>{learnMoreLabel[service.href] ?? "Learn More"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
