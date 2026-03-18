"use client";

import { motion } from "motion/react";
import {
  PhoneCall,
  ClipboardCheck,
  FileSignature,
  Handshake,
  PiggyBank,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="h-5 w-5" />,
    title: "Book Free Consultation",
    description:
      "Schedule a free call with our debt experts. Share your situation — we listen without judgment.",
    number: "01",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Check Eligibility",
    description:
      "Share your loan details — credit cards, personal loans, app loans. We assess your settlement options.",
    number: "02",
  },
  {
    icon: <FileSignature className="h-5 w-5" />,
    title: "Enroll & Agree",
    description:
      "Choose your plan and sign a legally binding agreement designed to protect your interests throughout.",
    number: "03",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "We Negotiate",
    description:
      "Our legal team negotiates directly with your lenders to secure the maximum possible reduction.",
    number: "04",
  },
  {
    icon: <PiggyBank className="h-5 w-5" />,
    title: "Save Money",
    description:
      "Set aside the agreed settlement amount. Our experts guide you every step of the way.",
    number: "05",
  },
  {
    icon: <PartyPopper className="h-5 w-5" />,
    title: "Become Debt-Free!",
    description:
      "Make the final payment, receive your settlement letter and NOC. You're officially free!",
    number: "06",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-[#0a0a14] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-duedost-blue/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-duedost-green/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-green">
            How It Works
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            6 Steps to{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Financial Freedom
            </span>
          </h2>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical connecting line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-duedost-blue/40 via-duedost-green/40 to-duedost-blue/40" />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative lg:flex lg:items-center lg:min-h-[160px]"
                >
                  {/* Center node — desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0a0a14] border-2 border-duedost-blue/30 flex items-center justify-center">
                      <span className="text-sm font-bold bg-gradient-to-br from-duedost-blue to-duedost-green bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content — alternates left/right on desktop */}
                  <div
                    className={`lg:w-[calc(50%-3rem)] ${
                      isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                    }`}
                  >
                    <div className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                      {/* Mobile number badge */}
                      <div className="lg:hidden absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-duedost-blue to-duedost-green text-white text-xs font-bold">
                        Step {step.number}
                      </div>

                      <div className="flex items-start gap-4 mt-2 lg:mt-0">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-duedost-blue/15 to-duedost-green/15 flex items-center justify-center text-duedost-green group-hover:from-duedost-blue/25 group-hover:to-duedost-green/25 transition-colors duration-300">
                          {step.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
                            {step.title}
                          </h3>
                          <p className="text-sm text-white/40 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow pointing to timeline — desktop */}
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-white/[0.06] bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors duration-500 ${
                          isLeft
                            ? "right-[-7px] border-r border-t"
                            : "left-[-7px] border-l border-b"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
