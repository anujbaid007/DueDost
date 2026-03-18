"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Due Dost settled my 4.5 lakh credit card bill for just 1.8 lakh. I was drowning in EMIs and they threw me a lifeline. Forever grateful.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Sharma",
    role: "Business Owner, Delhi",
  },
  {
    text: "Recovery agents were calling 10 times a day. Due Dost's anti-harassment service stopped them within 48 hours. Pure relief.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Mehta",
    role: "Teacher, Mumbai",
  },
  {
    text: "I had loans from 3 different banks. Due Dost consolidated everything and saved me 60% on total dues. Highly professional team.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Amit Patel",
    role: "IT Professional, Bangalore",
  },
  {
    text: "My CIBIL score was ruined after defaulting. Due Dost not only settled my loan but guided me on rebuilding my credit. True dost indeed.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Sneha Gupta",
    role: "Homemaker, Noida",
  },
  {
    text: "I was scared to even pick up calls from the bank. Due Dost handled everything — from negotiation to final NOC. Stress-free process.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Vikram Singh",
    role: "Ex-Startup Founder, Pune",
  },
  {
    text: "Settled my personal loan of 8 lakh for just 3.2 lakh. The legal team was thorough and kept me updated throughout. 5-star service.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Anita Devi",
    role: "Nurse, Lucknow",
  },
  {
    text: "Due Dost's team speaks your language — literally and emotionally. They understood my family's financial crisis and acted fast.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Mohammed Faizan",
    role: "Auto Parts Dealer, Hyderabad",
  },
  {
    text: "App loan sharks were harassing my family. Due Dost stepped in, sent legal notices, and got them to back off. Life-saving service.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Kavita Reddy",
    role: "Freelancer, Chennai",
  },
  {
    text: "From the first call to the settlement letter — everything was transparent. No hidden charges. Due Dost earns your trust completely.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Suresh Kumar",
    role: "Retired, Jaipur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-20 relative bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-green">
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real People,{" "}
            <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
              Real Freedom
            </span>
          </h2>
          <p className="text-center mt-4 text-muted-foreground">
            10,000+ Indians have reclaimed their financial peace with Due Dost.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
