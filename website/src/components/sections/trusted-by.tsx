"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type Logo = {
  src: string;
  alt: string;
  className?: string; // our custom scaling property
};


const partners: Logo[] = [
  { alt: "HDFC Bank", src: "/logos/hdfc.svg" },
  { alt: "ICICI Bank", src: "/logos/icici.svg" },
  { alt: "SBI", src: "/logos/sbi.svg", className: "h-5 md:h-6" },
  { alt: "Axis Bank", src: "/logos/axis.svg" },
  { alt: "Kotak Mahindra", src: "/logos/kotak.svg" },
  { alt: "IndusInd Bank", src: "/logos/indusind.svg" },
  { alt: "RBL Bank", src: "/logos/rbl.svg" },
  { alt: "Yes Bank", src: "/logos/yes.svg", className: "h-4 md:h-5" },
  { alt: "Bajaj Finserv", src: "/logos/bajaj.svg" },
  { alt: "Tata Neu", src: "/logos/tata_neu.svg", className: "h-9 md:h-12 max-w-[150px] md:max-w-[180px]" },
];

function LogoCard({
  logo,
  index,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { logo: Logo; index: number }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-background px-4 py-8 md:p-8 transition-colors hover:bg-muted/40 group",
        className
      )}
      {...props}
    >
      <motion.img
        alt={logo.alt}
        src={logo.src}
        className={cn(
          "pointer-events-none select-none w-auto object-contain",
          logo.className || "h-6 md:h-8 max-w-[130px] md:max-w-[180px]",
          "dark:invert dark:hue-rotate-180 dark:brightness-110"
        )}
        initial={{ opacity: 0.85 }}
        animate={{
          opacity: [0.85, 1, 1, 0.85, 0.85],
        }}
        transition={{
          duration: 5,
          times: [0, 0.05, 0.17, 0.25, 1], // 0.05*5=0.25s fade in, 0.12*5=0.6s peak brightness, 0.08*5=0.4s fade out
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index * 2.3) % 5, // Pseudo-random scattered delay
        }}
        whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
      />
      {children}
    </div>
  );
}

export function TrustedBySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll position of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Triggers entirely while the element is on screen anywhere
  });

  // Map the progression: 0 (entering from bottom), 0.5 (center), 1 (leaving from top)
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="relative pt-16 pb-16 md:pt-32 md:pb-20 w-full place-content-center overflow-hidden">
      <motion.div 
        style={{ opacity: fadeOpacity, scale: scaleEffect }} 
        className="relative mx-auto grid max-w-6xl px-4 z-10"
      >
        <motion.p
          className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl mb-12"
        >
          We negotiate with India&apos;s leading <span className="font-semibold text-primary">Banks & NBFCs</span>.
        </motion.p>

        <div className="relative grid grid-cols-2 md:grid-cols-5 border-x border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border/50" />

          {/* Animated Edge Flow Beams on the Grid boundaries */}
          <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
            {/* Top edge beam */}
            <motion.div
              className="absolute top-0 left-0 h-[1.5px] w-1/2 md:w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
              initial={{ left: "-50%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0 }}
            />
            {/* Right edge beam */}
            <motion.div
              className="absolute top-0 right-0 w-[1.5px] h-1/2 md:h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80"
              initial={{ top: "-50%" }}
              animate={{ top: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0.75 }}
            />
            {/* Bottom edge beam */}
            <motion.div
              className="absolute bottom-0 right-0 h-[1.5px] w-1/2 md:w-1/3 bg-gradient-to-l from-transparent via-primary to-transparent opacity-80"
              initial={{ right: "-50%" }}
              animate={{ right: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}
            />
            {/* Left edge beam */}
            <motion.div
              className="absolute bottom-0 left-0 w-[1.5px] h-1/2 md:h-1/3 bg-gradient-to-t from-transparent via-primary to-transparent opacity-80"
              initial={{ bottom: "-50%" }}
              animate={{ bottom: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 2.25 }}
            />
          </div>

          {partners.map((partner, index) => {
            // Determine if the cell should be "shaded" in the checkerboard pattern
            // Mobile (2 cols):
            // row 0: 0(S), 1(C) | row 1: 2(C), 3(S) | row 2: 4(S), 5(C) | row 3: 6(C), 7(S) | row 4: 8(S), 9(C)
            // Desktop (5 cols):
            // row 0: 0(S), 1(C), 2(S), 3(C), 4(S)
            // row 1: 5(C), 6(S), 7(C), 8(S), 9(C)
            
            const isMobileShaded = Math.floor(index / 2) % 2 === 0 ? index % 2 === 0 : index % 2 !== 0;
            const isDesktopShaded = Math.floor(index / 5) % 2 === 0 ? index % 2 === 0 : index % 2 !== 0;

            const isLastInRowMobile = index % 2 === 1;
            const isLastInRowDesktop = index % 5 === 4;
            const isLastRowMobile = index >= 8;
            const isLastRowDesktop = index >= 5;

            // Positioning of PlusIcons on the bottom-right of certain cards to recreate the design's joints
            const showPlusIconDesktop = (index === 0 || index === 1 || index === 2 || index === 3 || index === 5 || index === 6 || index === 7 || index === 8);
            const showPlusIconMobile = (index % 2 === 0 && !isLastRowMobile);

            return (
              <LogoCard
                key={partner.alt}
                logo={partner}
                index={index}
                className={cn(
                  // Base borders
                  "border-b border-r",
                  
                  // Disable Right Border where appropriate
                  isLastInRowMobile && "border-r-0 md:border-r",
                  isLastInRowDesktop && "md:border-r-0",

                  // Disable Bottom Border where appropriate
                  isLastRowMobile && "border-b-0 md:border-b",
                  isLastRowDesktop && "md:border-b-0",

                  // Checkerboard shading
                  isMobileShaded ? "bg-secondary dark:bg-secondary/30" : "bg-background md:bg-transparent",
                  isDesktopShaded ? "md:bg-secondary dark:md:bg-secondary/30" : "md:bg-background md:dark:bg-background"
                )}
              >
                {/* Plus icons at intersecting joints */}
                {(showPlusIconDesktop) && (
                  <PlusIcon
                    className={cn(
                      "-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 hidden md:block text-muted-foreground/30",
                      // Only show top row icons on the bottom edge if there's a row beneath them
                      (isLastRowDesktop) && "hidden" 
                    )}
                    strokeWidth={1}
                  />
                )}
                {(showPlusIconMobile) && (
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden text-muted-foreground/30"
                    strokeWidth={1}
                  />
                )}
              </LogoCard>
            );
          })}

          <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
        </div>
      </motion.div>
    </section>
  );
}
