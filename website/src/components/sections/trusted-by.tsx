"use client";

import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const partners = [
  {
    name: "HDFC Bank",
    logo: "https://cdn.simpleicons.org/hdfcbank",
  },
  {
    name: "ICICI Bank",
    logo: "https://cdn.simpleicons.org/icicibank",
  },
  {
    name: "SBI",
    logo: "https://cdn.simpleicons.org/sbi",
  },
  {
    name: "Axis Bank",
    logo: "https://cdn.simpleicons.org/axisbank",
  },
  {
    name: "Kotak Mahindra",
    logo: "https://cdn.simpleicons.org/kotakbank",
  },
  {
    name: "IndusInd Bank",
    logo: "https://www.vectorlogo.zone/logos/indusind/indusind-ar21.svg",
  },
  {
    name: "RBL Bank",
    logo: "https://www.vectorlogo.zone/logos/rblbank/rblbank-ar21.svg",
  },
  {
    name: "Yes Bank",
    logo: "https://www.vectorlogo.zone/logos/yesbank/yesbank-ar21.svg",
  },
  {
    name: "Bajaj Finserv",
    logo: "https://www.vectorlogo.zone/logos/bajaj_finserv/bajaj_finserv-ar21.svg",
  },
  {
    name: "Tata Capital",
    logo: "https://cdn.simpleicons.org/tata",
  },
];

function LogoCard({
  partner,
  className,
  children,
}: {
  partner: (typeof partners)[0];
  className?: string;
  children?: React.ReactNode;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-background px-6 py-8 md:p-12 transition-colors hover:bg-muted/40 group",
        className
      )}
    >
      {!imgError ? (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className={cn(
            "pointer-events-none select-none h-6 md:h-8 w-auto max-w-[130px] md:max-w-[180px] object-contain transition-all duration-300",
            "grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100",
            "dark:brightness-0 dark:invert dark:opacity-50 dark:group-hover:opacity-100"
          )}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[10px] md:text-xs font-bold tracking-tight text-foreground/30 select-none text-center leading-tight uppercase">
          {partner.name}
        </span>
      )}
      {children}
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-20 bg-muted/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] md:text-xs font-semibold text-muted-foreground/60 mb-16 tracking-[0.5em] uppercase"
        >
          We negotiate with India&apos;s leading banks &amp; NBFCs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group grid grid-cols-2 md:grid-cols-5 border-x border-border/40"
        >
          {/* Full-width top border */}
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-[200vw] border-t border-border/40" />

          {partners.map((partner, i) => {
            const isLastInRow1 = i === 4;
            const isLastInRow2 = i === 9;
            const isRow2 = i >= 5;

            return (
              <LogoCard
                key={partner.name}
                partner={partner}
                className={cn(
                  "border-b border-border/40",
                  // Mobile: right border on even indexes
                  i % 2 === 0 && "border-r border-border/40",
                  // Desktop: right border logic
                  !isLastInRow1 && !isLastInRow2 && "md:border-r",
                  isLastInRow1 && "md:border-r-0",
                  isLastInRow2 && "md:border-r-0",
                  // Desktop: no bottom border on second row
                  isRow2 && "md:border-b-0",
                  // Subtle alternating backgrounds
                  (i === 0 || i === 2 || i === 4 || i === 7 || i === 9) &&
                    "bg-muted/30 dark:bg-muted/10"
                )}
              >
                {/* Intersection plus icons */}
                {(i === 1 || i === 3 || i === 6 || i === 8) && (
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-4 text-border/40 hidden md:block"
                    strokeWidth={1}
                  />
                )}
              </LogoCard>
            );
          })}

          {/* Full-width bottom border */}
          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-[200vw] border-b border-border/40" />
        </motion.div>
      </div>
    </section>
  );
}
