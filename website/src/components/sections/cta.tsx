"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-duedost-blue via-duedost-blue to-duedost-green opacity-95" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
            Take The First Step
          </span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Debt-Free Life
            <br />
            Starts With One Call
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ Indians who chose Due Dost and reclaimed their financial
            freedom. Free, no-obligation consultation. Your details are 100%
            confidential.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href="tel:+919601443663"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-duedost-blue bg-white rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-black/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="h-5 w-5" />
            Call Now: +91 96014 43663
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://wa.me/919601443663"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-6 text-white/50 text-sm"
        >
          <span>100% Confidential</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>No Obligation</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Expert Guidance</span>
        </motion.div>
      </div>
    </section>
  );
}
