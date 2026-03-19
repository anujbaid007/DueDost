"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Cases Settled", decimals: 0, prefix: "" },
  { value: 75, suffix: "%", label: "Max Savings", decimals: 0, prefix: "upto" },
  { value: 50, suffix: "Cr+", label: "Debt Resolved", decimals: 0, prefix: "" },
  { value: 4.9, suffix: "/5", label: "Client Rating", decimals: 1, prefix: "" },
];

function AnimatedCounter({
  target,
  decimals,
  suffix,
}: {
  target: number;
  decimals: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-duedost-blue/5 via-transparent to-duedost-green/5" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.prefix && (
                  <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mr-1 align-middle">
                    {stat.prefix}
                  </span>
                )}
                <AnimatedCounter
                  target={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
