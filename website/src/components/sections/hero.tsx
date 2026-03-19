"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ShaderBackground } from "@/components/ui/shader-hero";
import { Spotlight } from "@/components/ui/spotlight";
import { Phone, Shield } from "lucide-react";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader background */}
      {mounted && <ShaderBackground isDark={resolvedTheme === "dark"} />}

      {/* Spotlight effect */}
      {mounted && (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={resolvedTheme === "dark" ? "#3BAA35" : "#1B5DAA"}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-sm mb-8"
        >
          <Shield className="h-4 w-4 text-duedost-green" />
          <span className="text-xs sm:text-sm font-medium text-foreground/80 whitespace-nowrap">
            India&apos;s Most Trusted Debt Settlement Partner
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-foreground">Your Dues,</span>
          <br />
          <span className="bg-gradient-to-r from-duedost-blue via-duedost-blue-light to-duedost-green bg-clip-text text-transparent">
            Our Dosti.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Settle credit card bills, personal loans & EMI dues at up to{" "}
          <span className="font-semibold text-duedost-green">75% less</span>.
          Expert legal team. RBI compliant. Zero harassment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href="tel:+919601443663"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-duedost-green/25"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-duedost-green to-duedost-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Phone className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Free Consultation</span>
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border-2 border-border rounded-2xl hover:bg-muted transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            How It Works
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-duedost-green" />
            <span>1,000+ Settled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-duedost-blue" />
            <span>RBI Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-duedost-green" />
            <span>100% Legal</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
