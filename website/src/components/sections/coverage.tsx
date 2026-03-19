"use client";

import { motion } from "motion/react";
import { IndiaMap } from "@/components/ui/india-map";
import { MapPin } from "lucide-react";

const hubs = [
  { city: "Delhi NCR", label: "Headquarters", highlight: true },
  { city: "Mumbai", label: "Western Hub" },
  { city: "Bangalore", label: "South Hub" },
  { city: "Kolkata", label: "Eastern Hub" },
];

export function CoverageSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-4"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
            Pan-India Reach
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Serving Every{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Corner of India
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From our headquarters in Noida, we help clients across all major
            cities. Our expert legal team operates nationwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mt-2 md:mt-2"
        >
          <IndiaMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {hubs.map((item) => (
            <div
              key={item.city}
              className={`text-center py-4 px-3 rounded-xl border transition-colors ${
                item.highlight
                  ? "border-duedost-blue/30 bg-duedost-blue/5 dark:border-duedost-blue/20 dark:bg-duedost-blue/10"
                  : "border-border/30 bg-muted/30"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                {item.highlight && (
                  <MapPin className="h-3.5 w-3.5 text-duedost-blue" />
                )}
                <p className="font-semibold text-sm">{item.city}</p>
              </div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
