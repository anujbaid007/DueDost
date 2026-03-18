"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between px-4 md:px-6 py-2.5 rounded-2xl w-full max-w-5xl relative z-10 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5 border border-border/50"
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Due Dost"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={item.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium px-3 py-2 rounded-lg hover:bg-muted"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <motion.a
            href="tel:+919601443663"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl hover:shadow-lg hover:shadow-duedost-green/25 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="h-3.5 w-3.5" />
            Free Consultation
          </motion.a>

          <motion.button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5 text-foreground" />
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 pt-24 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-muted"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a
                    href={item.href}
                    className="text-lg text-foreground font-medium block py-3 px-4 rounded-xl hover:bg-muted transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-4"
              >
                <a
                  href="tel:+919601443663"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl"
                  onClick={toggleMenu}
                >
                  <Phone className="h-4 w-4" />
                  Free Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
