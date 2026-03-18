"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 192;

interface TextSection {
  enter: number;
  leave: number;
  label: string;
  heading: string;
  body: string;
  isCTA?: boolean;
}

const sections: TextSection[] = [
  {
    enter: 0.0,
    leave: 0.2,
    label: "001 / The Problem",
    heading: "Worried About Your Credit Card Dues?",
    body: "Lakhs of Indians are trapped in a cycle of mounting interest, penalty charges, and aggressive recovery calls.",
  },
  {
    enter: 0.2,
    leave: 0.4,
    label: "002 / The Breaking Point",
    heading: "The Debt Trap Stops Here.",
    body: "Watch your financial burden shatter. Due Dost negotiates directly with banks to settle your dues for a fraction of what you owe.",
  },
  {
    enter: 0.4,
    leave: 0.6,
    label: "003 / The Solution",
    heading: "Save Up To 70% On Your Dues",
    body: "Our expert legal team has helped 10,000+ Indians reclaim their financial freedom. You could be next.",
  },
  {
    enter: 0.6,
    leave: 0.8,
    label: "004 / Your Future",
    heading: "Debt-Free. Worry-Free.",
    body: "One call. One consultation. A lifetime of peace. Let Due Dost be your friend in settling dues.",
  },
  {
    enter: 0.8,
    leave: 1.01,
    label: "",
    heading: "Aapke Dues Ka Dost",
    body: "",
    isCTA: true,
  },
];

export function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = framesRef.current[index];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover fill — no padding, fills the entire canvas
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.restore();
  }, []);

  // Load frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          framesRef.current = images;
          setLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      if (loaded) drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded, drawFrame]);

  // Draw first frame when loaded
  useEffect(() => {
    if (loaded) drawFrame(0);
  }, [loaded, drawFrame]);

  // Scroll handler
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = -rect.top;
      const containerHeight = container.scrollHeight - window.innerHeight;
      const sp = Math.max(0, Math.min(1, containerTop / containerHeight));
      setScrollProgress(sp);

      // Frame mapping — last frame hits at ~85% scroll so animation
      // completes as the final CTA text section appears
      const FRAME_SPEED = 1.18;
      const accelerated = Math.min(sp * FRAME_SPEED, 1);
      const frameIndex = Math.min(
        Math.floor(accelerated * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded, drawFrame]);

  // Active section index
  const activeIdx = sections.findIndex(
    (s) => scrollProgress >= s.enter && scrollProgress < s.leave
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Loading overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
          <div className="relative w-16 h-16 mb-6">
            <svg className="w-full h-full animate-spin" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#loader-grad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${progress * 1.76} 176`}
              />
              <defs>
                <linearGradient id="loader-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1B5DAA" />
                  <stop offset="100%" stopColor="#3BAA35" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white/80 text-xs font-semibold">
              {progress}%
            </span>
          </div>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
            Loading Experience
          </p>
        </div>
      )}

      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="flex w-full max-w-[1400px] mx-auto h-[75vh] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
          {/* Left 1/3 — Video */}
          <div className="relative w-full lg:w-[35%] h-full bg-[#0a0a0a] overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
            {/* Subtle gradient overlay on right edge to blend */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

            {/* Mobile text overlays — shown below lg */}
            <div className="lg:hidden absolute inset-0 pointer-events-none">
              <MobileOverlays scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Right 2/3 — Text panel (desktop only) */}
          <div className="hidden lg:flex w-[65%] h-full bg-[#0a0a0a] flex-col justify-center px-12 xl:px-20 relative">
            {/* Decorative vertical line */}
            <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Progress indicator dots */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {sections.map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i === activeIdx
                        ? "bg-duedost-green scale-125 shadow-[0_0_10px_rgba(59,170,53,0.5)]"
                        : i < activeIdx
                        ? "bg-white/30"
                        : "bg-white/10"
                    }`}
                  />
                  {i === activeIdx && (
                    <div className="absolute left-0 w-2 h-2 rounded-full bg-duedost-green animate-ping opacity-50" />
                  )}
                </div>
              ))}
            </div>

            {/* Text content — needs explicit height for absolute children */}
            <div className="relative pl-8 flex-1">
              {sections.map((section, idx) => {
                const isActive = idx === activeIdx;
                const isPast = idx < activeIdx;

                // Calculate local progress within this section
                let localProgress = 0;
                if (isActive) {
                  localProgress =
                    (scrollProgress - section.enter) /
                    (section.leave - section.enter);
                }

                return (
                  <div
                    key={idx}
                    className="absolute inset-0 flex flex-col justify-center pl-8 transition-all duration-700 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : isPast
                        ? "translateY(-30px)"
                        : "translateY(30px)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    {section.label && (
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-duedost-green/80 mb-5 block">
                        {section.label}
                      </span>
                    )}

                    <h2
                      className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-[1.15] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {section.heading}
                    </h2>

                    {section.body && (
                      <p className="mt-5 text-white/50 text-base xl:text-lg leading-relaxed max-w-sm">
                        {section.body}
                      </p>
                    )}

                    {section.isCTA && (
                      <a
                        href="#contact"
                        className="pointer-events-auto inline-flex items-center gap-2 mt-8 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-2xl hover:shadow-2xl hover:shadow-duedost-green/20 transition-all duration-300 hover:scale-[1.03] w-fit"
                      >
                        Start Your Free Consultation
                      </a>
                    )}

                    {/* Progress bar for active section */}
                    {isActive && !section.isCTA && (
                      <div className="mt-8 w-32 h-px bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-duedost-blue to-duedost-green transition-all duration-100"
                          style={{ width: `${localProgress * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile: text overlay on top of canvas */
function MobileOverlays({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      {sections.map((section, idx) => {
        const fadeIn =
          scrollProgress >= section.enter &&
          scrollProgress < section.enter + 0.04;
        const visible =
          scrollProgress >= section.enter + 0.04 &&
          scrollProgress < section.leave - 0.04;
        const fadeOut =
          scrollProgress >= section.leave - 0.04 &&
          scrollProgress < section.leave;
        const show = fadeIn || visible || fadeOut;

        let opacity = 0;
        if (fadeIn) opacity = (scrollProgress - section.enter) / 0.04;
        else if (visible) opacity = 1;
        else if (fadeOut)
          opacity = 1 - (scrollProgress - (section.leave - 0.04)) / 0.04;

        const translateY = fadeIn ? (1 - opacity) * 30 : 0;

        return (
          <div
            key={idx}
            className="absolute inset-x-0 bottom-0 p-6 pb-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
            style={{
              opacity: show ? opacity : 0,
              transform: `translateY(${translateY}px)`,
              pointerEvents: show ? "auto" : "none",
            }}
          >
            {section.label && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-duedost-green mb-3 block">
                {section.label}
              </span>
            )}
            <h2
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {section.heading}
            </h2>
            {section.body && (
              <p className="mt-2 text-white/60 text-sm leading-relaxed max-w-xs">
                {section.body}
              </p>
            )}
            {section.isCTA && (
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center gap-2 mt-4 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-duedost-blue to-duedost-green rounded-xl"
              >
                Start Your Free Consultation
              </a>
            )}
          </div>
        );
      })}
    </>
  );
}
