"use client";

import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const partners = [
  {
    name: "HDFC Bank",
    logo: "https://cdn.simpleicons.org/hdfcbank",
    isSimple: true,
  },
  {
    name: "ICICI Bank",
    logo: "https://cdn.simpleicons.org/icicibank",
    isSimple: true,
  },
  {
    name: "SBI Cards",
    logo: "https://cdn.simpleicons.org/sbi",
    isSimple: true,
  },
  {
    name: "Axis Bank",
    logo: "https://cdn.simpleicons.org/axisbank",
    isSimple: true,
  },
  {
    name: "Kotak Mahindra",
    logo: "https://cdn.simpleicons.org/kotakbank",
    isSimple: true,
  },
  {
    name: "IndusInd Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/IndusInd_Bank_SVG_Logo.svg",
    isSimple: false,
  },
  {
    name: "RBL Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/RBL_Bank_SVG_Logo.svg",
    isSimple: false,
  },
  {
    name: "Yes Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Yes_Bank_SVG_Logo.svg",
    isSimple: false,
  },
  {
    name: "Bajaj Finserv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Bajaj_Finserv_Logo.svg",
    isSimple: false,
  },
  {
    name: "Tata Capital",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    isSimple: false,
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
        "relative flex items-center justify-center bg-background px-6 py-8 md:p-10 transition-colors hover:bg-muted/40",
        className
      )}
    >
      {!imgError ? (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className={cn(
            "pointer-events-none select-none h-6 md:h-8 w-auto max-w-[120px] md:max-w-[150px] object-contain",
            // Simple icons are black SVGs — invert them in dark mode to white
            partner.isSimple
              ? "dark:invert"
              : "dark:brightness-0 dark:invert opacity-70 dark:opacity-90"
          )}
          onError={() => setImgError(true)}
        />
      ) : (
        // Fallback: styled text when image fails
        <span className="text-sm md:text-base font-bold tracking-tight text-foreground/40 select-none text-center leading-tight">
          {partner.name}
        </span>
      )}
      {children}
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold text-muted-foreground mb-8 tracking-[0.3em] uppercase"
        >
          We negotiate with India&apos;s leading banks &amp; NBFCs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 md:grid-cols-5 border-x border-border/40"
        >
          {/* Full-width top border */}
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border/40" />

          {partners.map((partner, i) => {
            // Border logic for 5-col grid
            const isLastInRow1 = i === 4; // col 5 on desktop — no right border
            const isLastInRow2 = i === 9; // col 5 on desktop row 2 — no right border
            const isRow2 = i >= 5; // second row — no bottom border on desktop

            return (
              <LogoCard
                key={partner.name}
                partner={partner}
                className={cn(
                  "border-b border-border/40",
                  // Mobile: right border on even cols (col 1 of 2)
                  i % 2 === 0 && "border-r border-border/40",
                  // Desktop: right border on all but last col of each row
                  !isLastInRow1 && !isLastInRow2 && "md:border-r",
                  isLastInRow1 && "md:border-r-0",
                  isLastInRow2 && "md:border-r-0",
                  // Desktop: no bottom border on second row
                  isRow2 && "md:border-b-0",
                  // Alternate subtle backgrounds
                  (i === 0 || i === 2 || i === 4 || i === 7 || i === 9) &&
                    "bg-muted/40 dark:bg-muted/20"
                )}
              >
                {/* + icon at intersections */}
                {(i === 1 || i === 3 || i === 6 || i === 8) && (
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-5 text-border/60 hidden md:block"
                    strokeWidth={1}
                  />
                )}
              </LogoCard>
            );
          })}

          {/* Full-width bottom border */}
          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border/40" />
        </motion.div>
      </div>
    </section>
  );
}
