"use client";

import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const partners = [
  { name: "HDFC Bank", short: "HDFC" },
  { name: "ICICI Bank", short: "ICICI" },
  { name: "SBI Cards", short: "SBI" },
  { name: "Axis Bank", short: "Axis" },
  { name: "Kotak Mahindra", short: "Kotak" },
  { name: "IndusInd Bank", short: "IndusInd" },
  { name: "RBL Bank", short: "RBL" },
  { name: "Yes Bank", short: "Yes" },
  { name: "Bajaj Finserv", short: "Bajaj" },
  { name: "Tata Capital", short: "Tata" },
];

function BankCard({
  partner,
  className,
  children,
}: {
  partner: { name: string; short: string };
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-7 md:py-8 transition-colors hover:bg-muted/50",
        className
      )}
    >
      <span className="text-base md:text-lg font-bold tracking-tight text-foreground/25 select-none">
        {partner.name}
      </span>
      {children}
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-widest uppercase"
        >
          We negotiate with India&apos;s leading banks & NBFCs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 md:grid-cols-5 border-x border-border/50"
        >
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border/50" />

          {partners.map((partner, i) => (
            <BankCard
              key={partner.short}
              partner={partner}
              className={cn(
                "border-b border-border/50",
                i % 2 === 0 && "border-r border-border/50",
                i % 5 !== 4 && "md:border-r",
                i >= 8 && "md:border-b-0",
                i % 4 === 0 && "md:border-r",
                (i === 0 || i === 5) &&
                  "bg-muted/50 dark:bg-muted/20"
              )}
            >
              {(i === 2 || i === 7) && (
                <PlusIcon
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-border hidden md:block"
                  strokeWidth={1}
                />
              )}
            </BankCard>
          ))}

          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border/50" />
        </motion.div>
      </div>
    </section>
  );
}
