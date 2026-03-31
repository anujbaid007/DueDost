"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import Link from "next/link";

type Logo = { src: string; alt: string; className?: string; href?: string };

const logos: Logo[] = [
  { alt: "HDFC Bank",      src: "/logos/hdfc.svg",      href: "/hdfc-credit-card-settlement" },
  { alt: "ICICI Bank",     src: "/logos/icici.svg",     href: "/icici-credit-card-settlement" },
  { alt: "SBI",            src: "/logos/sbi.svg",       href: "/sbi-credit-card-settlement",  className: "h-7 max-w-[78px]" },
  { alt: "Axis Bank",      src: "/logos/axis.svg",      href: "/axis-bank-credit-card-settlement" },
  { alt: "Kotak Mahindra", src: "/logos/kotak.svg",     href: "/kotak-credit-card-settlement" },
  { alt: "IndusInd Bank",  src: "/logos/indusind.svg",  href: "/indusind-credit-card-settlement" },
  { alt: "RBL Bank",       src: "/logos/rbl.svg",       href: "/rbl-credit-card-settlement" },
  { alt: "Yes Bank",       src: "/logos/yes.svg",       href: "/yes-bank-credit-card-settlement", className: "h-5 max-w-[76px]" },
  { alt: "Bajaj Finserv",  src: "/logos/bajaj.svg",     href: "/bajaj-finserv-credit-card-settlement" },
  { alt: "Tata Neu",       src: "/logos/tata_neu.svg",  href: "/tata-neu-credit-card-settlement", className: "h-10 max-w-[128px]" },
];

// Offset second row for visual variety
const row2 = [...logos.slice(5), ...logos.slice(0, 5)];

function LogoCard({ logo }: { logo: Logo }) {
  const inner = (
    <div className={cn(
      "flex-shrink-0 flex items-center justify-center w-[132px] h-[78px] md:w-[152px] md:h-[88px] bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_14px_rgba(0,0,0,0.07)] mx-2.5 px-4 hover:shadow-[0_6px_22px_rgba(27,93,170,0.14)] hover:-translate-y-0.5 transition-all duration-200",
      logo.href ? "cursor-pointer" : "cursor-default"
    )}>
      <img
        src={logo.src}
        alt={logo.alt}
        className={cn(
          "w-auto object-contain select-none pointer-events-none",
          logo.className ?? "h-8 md:h-10 max-w-[96px] md:max-w-[108px]"
        )}
      />
    </div>
  );
  if (logo.href) return <Link href={logo.href}>{inner}</Link>;
  return inner;
}

function MarqueeRow({ items, reverse }: { items: Logo[]; reverse?: boolean }) {
  // 4 copies ensures seamless fill on any screen; animate exactly half = 2 copies
  const quadrupled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        style={{ width: "max-content", willChange: "transform" }}
      >
        {quadrupled.map((logo, i) => (
          <LogoCard key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}

export function TrustedBySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const opacity  = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 1, 1, 0.1]);

  return (
    <section ref={ref} className="py-16 md:py-20 overflow-hidden">
      <motion.div style={{ opacity }} className="text-center mb-12 px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
          Our Partners
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Debt.{" "}
          <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
            Our Battle.
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From credit cards to personal loans, we work directly with India&apos;s
          top lenders to negotiate the best possible settlement for you.
        </p>
      </motion.div>

      <div>
        <div className="flex flex-col gap-0">
          <MarqueeRow items={logos} />

          {/* Flowing separator line */}
          <div className="relative h-px my-3.5">
            <div className="absolute inset-0 bg-border/50" />
            <motion.div
              className="absolute top-0 h-full w-[28%] bg-gradient-to-r from-transparent via-duedost-blue/70 to-transparent"
              initial={{ left: "-28%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.div
              className="absolute top-0 h-full w-[18%] bg-gradient-to-l from-transparent via-duedost-green/60 to-transparent"
              initial={{ right: "-18%" }}
              animate={{ right: "100%" }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2, delay: 2 }}
            />
          </div>

          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
