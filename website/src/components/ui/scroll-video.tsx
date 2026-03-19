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
    body: "Our experts have settled 10,000+ cases nationwide, negotiating directly with banks and NBFCs so you pay only a fraction of what you owe.",
  },
  {
    enter: 0.6,
    leave: 0.8,
    label: "004 / Your Future",
    heading: "Debt-Free. Worry-Free.",
    body: "No more sleepless nights, no more recovery calls. One free consultation is all it takes to start your journey to a completely debt-free life.",
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
  const [firstFrameReady, setFirstFrameReady] = useState(false);
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

  // Load frames — frame 1 loads first so the canvas shows immediately,
  // remaining frames load in the background without blocking the page.
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const loadFrame = (i: number) => {
      const img = new window.Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      img.onload = () => {
        images[i - 1] = img;
        loadedCount++;
        setProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (i === 1) {
          // Show first frame immediately — unblocks the canvas
          framesRef.current = images;
          setFirstFrameReady(true);
        }
        if (loadedCount === TOTAL_FRAMES) {
          framesRef.current = images;
          setLoaded(true);
        }
      };
    };

    // Load frame 1 first, then the rest
    loadFrame(1);
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      loadFrame(i);
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
      if (firstFrameReady) drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [firstFrameReady, drawFrame]);

  // Draw first frame as soon as it's ready
  useEffect(() => {
    if (firstFrameReady) drawFrame(0);
  }, [firstFrameReady, drawFrame]);

  // Scroll handler — works as soon as first frame is ready
  useEffect(() => {
    if (!firstFrameReady) return;

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
  }, [firstFrameReady, drawFrame]);

  // Active section index
  const activeIdx = sections.findIndex(
    (s) => scrollProgress >= s.enter && scrollProgress < s.leave
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Local loading indicator — only covers this section, never blocks the page */}
      {!firstFrameReady && (
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] z-10">
          <div className="relative w-12 h-12 mb-4">
            <svg className="w-full h-full animate-spin" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle cx="32" cy="32" r="28" fill="none" stroke="url(#loader-grad)" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${progress * 1.76} 176`} />
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
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Loading Experience</p>
        </div>
      )}

      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-[#0a0a0a]">
        {/* Glassmorphism background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-duedost-blue/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-duedost-green/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-duedost-blue/10 rounded-full blur-[100px]" />
        </div>

        <div className="flex w-full h-full relative">
          {/* Left 1/3 — Video */}
          <div className="relative w-full lg:w-[35%] h-full bg-[#0a0a0a] overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
            {/* Subtle gradient overlay on right edge to blend into glass panel */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent" />

            {/* Mobile text overlays — shown below lg */}
            <div className="lg:hidden absolute inset-0 pointer-events-none">
              <MobileOverlays scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Right 2/3 — Glass text panel (desktop only) */}
          <div className="hidden lg:flex w-[65%] h-full backdrop-blur-2xl bg-white/[0.04] border-l border-white/[0.08] flex-col justify-center px-12 xl:px-20 relative">
            {/* Decorative vertical line */}
            <div className="absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Inner glass glow reflection at top */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Progress indicator dots — glassy pill */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 px-2 py-3 rounded-full backdrop-blur-sm bg-white/[0.04] border border-white/[0.08]">
              {sections.map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i === activeIdx
                        ? "bg-duedost-green scale-125 shadow-[0_0_10px_rgba(59,170,53,0.6)]"
                        : i < activeIdx
                        ? "bg-white/40"
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
                      <span className="inline-flex items-center w-fit px-3 py-1 mb-5 rounded-full backdrop-blur-sm bg-duedost-green/10 border border-duedost-green/25 text-xs font-semibold uppercase tracking-[0.25em] text-duedost-green">
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
                      <p className="mt-5 text-white/55 text-base xl:text-lg leading-relaxed max-w-sm">
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

                    {/* Glass progress bar for active section */}
                    {isActive && !section.isCTA && (
                      <div className="mt-8 w-32 h-[3px] bg-white/[0.08] backdrop-blur-sm rounded-full overflow-hidden border border-white/[0.06]">
                        <div
                          className="h-full bg-gradient-to-r from-duedost-blue to-duedost-green transition-all duration-100 rounded-full"
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
        // Last section (CTA) never fades out — there's no further scroll to trigger it
        const isLast = section.leave >= 1.0;
        const fadeOut =
          !isLast &&
          scrollProgress >= section.leave - 0.04 &&
          scrollProgress < section.leave;
        const show = fadeIn || visible || fadeOut || (isLast && scrollProgress >= section.enter + 0.04);

        let opacity = 0;
        if (fadeIn) opacity = (scrollProgress - section.enter) / 0.04;
        else if (visible || (isLast && scrollProgress >= section.enter + 0.04)) opacity = 1;
        else if (fadeOut)
          opacity = 1 - (scrollProgress - (section.leave - 0.04)) / 0.04;

        const translateY = fadeIn ? (1 - opacity) * 30 : 0;

        return (
          <div
            key={idx}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/95 to-transparent"
            style={{
              paddingTop: "7rem",
              opacity: show ? opacity : 0,
              transform: `translateY(${translateY}px)`,
              pointerEvents: show ? "auto" : "none",
            }}
          >
            <div className="px-6 pb-10">
            {section.label && (
              <span className="inline-flex items-center px-2.5 py-0.5 mb-3 rounded-full bg-duedost-green/15 border border-duedost-green/30 text-[10px] font-semibold uppercase tracking-[0.25em] text-duedost-green block w-fit">
                {section.label}
              </span>
            )}
            <h2
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              }}
            >
              {section.heading}
            </h2>
            {section.body && (
              <p className="mt-2 text-white/75 text-sm leading-relaxed max-w-xs"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
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
          </div>
        );
      })}
    </>
  );
}
