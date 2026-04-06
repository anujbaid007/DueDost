import { cn } from "@/lib/utils";
import Link from "next/link";

type Logo = { src: string; alt: string; className?: string; href?: string };

const logos: Logo[] = [
  { alt: "HDFC Bank",      src: "/logos/hdfc.svg",      href: "/hdfc-credit-card-settlement" },
  { alt: "ICICI Bank",     src: "/logos/icici.svg",     href: "/icici-credit-card-settlement" },
  { alt: "SBI",            src: "/logos/sbi.svg",       href: "/sbi-credit-card-settlement",  className: "h-7 max-w-[78px]" },
  { alt: "Axis Bank",      src: "/logos/axis.svg",      href: "/axis-bank-credit-card-settlement" },
  { alt: "Kotak Mahindra", src: "/logos/kotak.svg",     href: "/kotak-credit-card-settlement" },
  { alt: "IndusInd Bank",  src: "/logos/indusind.svg",  href: "/indusind-credit-card-settlement" },
  { alt: "RBL Bank",       src: "/logos/rbl.svg",       href: "/rbl-credit-card-settlement" },
  { alt: "Yes Bank",       src: "/logos/yes.svg",       href: "/yes-bank-credit-card-settlement", className: "h-5 max-w-[76px]" },
  { alt: "Bajaj Finserv",  src: "/logos/bajaj.svg",     href: "/bajaj-finserv-credit-card-settlement" },
  { alt: "Tata Neu",       src: "/logos/tata_neu.svg",  href: "/tata-neu-credit-card-settlement", className: "h-10 max-w-[128px]" },
];

// Offset second row for visual variety
const row2 = [...logos.slice(5), ...logos.slice(0, 5)];

function LogoCard({ logo }: { logo: Logo }) {
  const inner = (
    <div className={cn(
      "flex-shrink-0 flex items-center justify-center w-[132px] h-[78px] md:w-[152px] md:h-[88px] bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_14px_rgba(0,0,0,0.07)] mx-2.5 md:mx-4 lg:mx-5 px-4 md:px-5",
      logo.href ? "cursor-pointer" : "cursor-default"
    )}>
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-auto object-contain select-none pointer-events-none",
          logo.className ?? "h-8 md:h-10 max-w-[96px] md:max-w-[108px]"
        )}
      />
    </div>
  );
  if (logo.href) return <Link href={logo.href}>{inner}</Link>;
  return inner;
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: Logo[];
  reverse?: boolean;
  duration: string;
}) {
  // 2 copies is enough for seamless loop (animation translates exactly -50%)
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((logo, i) => (
          <LogoCard key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-duedost-blue dark:text-duedost-green">
          Our Partners
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Debt.{" "}
          <span className="bg-gradient-to-r from-duedost-blue to-duedost-green bg-clip-text text-transparent">
            Our Battle.
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From credit cards to personal loans, we work directly with India&apos;s
          top lenders to negotiate the best possible settlement for you.
        </p>
      </div>

      <div className="md:hidden">
        <MarqueeRow items={logos} duration="60s" />
      </div>

      <div className="hidden md:flex md:flex-col md:gap-0">
        <MarqueeRow items={logos} duration="74s" />

        <div className="relative h-px my-4 lg:my-5">
          <div className="absolute inset-0 bg-border/50" />
        </div>

        <MarqueeRow items={row2} reverse duration="82s" />
      </div>
    </section>
  );
}
