"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  CreditCard,
  Landmark,
  ShieldCheck,
  Layers,
  FileCheck,
  Smartphone,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const servicesMenu = [
  {
    icon: CreditCard,
    label: "Credit Card Settlement",
    desc: "Settle dues at 40–75% less",
    href: "/credit-card-settlement",
  },
  {
    icon: Landmark,
    label: "Personal Loan Settlement",
    desc: "Reduce outstanding by up to 60%",
    href: "/personal-loan-settlement",
  },
  {
    icon: ShieldCheck,
    label: "Anti-Harassment Service",
    desc: "Stop aggressive recovery calls",
    href: "/recovery-agent-harassment",
  },
  {
    icon: Smartphone,
    label: "App Loan Settlement",
    desc: "Digital lending dues resolved",
    href: "/#contact",
  },
  {
    icon: Layers,
    label: "Loan Consolidation",
    desc: "One EMI for all your loans",
    href: "/#contact",
  },
  {
    icon: FileCheck,
    label: "Debt Closure & NOC",
    desc: "Complete closure with official NOC",
    href: "/#contact",
  },
];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors font-medium px-3 py-2 rounded-lg hover:bg-muted"
      >
        Services
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/40 p-2 z-50"
          >
            {/* small triangle pointer */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-background border-l border-t border-border/60" />

            {servicesMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-duedost-blue dark:text-duedost-green group-hover:bg-duedost-blue/10 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}

            <div className="mt-1 pt-2 border-t border-border/50 px-3 pb-1">
              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-duedost-blue dark:text-duedost-green hover:underline"
              >
                View all services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileServicesOpen(false);
  };

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
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Due Dost"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a
              href="/"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-medium px-3 py-2 rounded-lg hover:bg-muted"
            >
              Home
            </a>
          </motion.div>

          <ServicesDropdown />

          {navItems.slice(1).map((item) => (
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
            href="https://wa.me/919289493265"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl hover:shadow-lg hover:shadow-duedost-green/25 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 pt-24 px-6 lg:hidden overflow-y-auto"
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

            <div className="flex flex-col space-y-1">
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <a
                  href="/"
                  className="text-lg text-foreground font-medium block py-3 px-4 rounded-xl hover:bg-muted transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </motion.div>

              {/* Services (expandable) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <button
                  className="flex items-center justify-between w-full text-lg text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 flex flex-col gap-1 pb-2">
                        {servicesMenu.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={toggleMenu}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-muted transition-colors"
                            >
                              <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-duedost-blue dark:text-duedost-green flex-shrink-0">
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {item.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Remaining nav items */}
              {navItems.slice(1).map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.1 + 0.1 }}
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
                  href="https://wa.me/919289493265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl"
                  onClick={toggleMenu}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
