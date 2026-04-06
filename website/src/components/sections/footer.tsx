import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Credit Card Settlement", href: "/credit-card-settlement" },
  { label: "Personal Loan Settlement", href: "/personal-loan-settlement" },
  { label: "App Loan Settlement", href: "/#contact" },
  { label: "Anti-Harassment Service", href: "/recovery-agent-harassment" },
  { label: "Loan Consolidation", href: "/#contact" },
  { label: "Debt Closure & NOC", href: "/#contact" },
];

const legal = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.webp"
              alt="Due Dost"
              width={160}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              India&apos;s most trusted debt settlement partner. We help you
              negotiate and settle loans with expert legal support.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-duedost-green animate-pulse" />
              <span>RBI Compliant Services</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href + service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wide uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919289493265"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-duedost-green flex-shrink-0" />
                +91 92894 93265
              </a>
              <a
                href="mailto:hello@duedost.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-duedost-green flex-shrink-0" />
                hello@duedost.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-duedost-blue flex-shrink-0 mt-0.5" />
                <span>
                  WeWork, Two Horizon Center,
                  <br />
                  Gurugram, Haryana 122002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Due Dost. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Aapke Dues Ka Dost
          </p>
        </div>
      </div>
    </footer>
  );
}
