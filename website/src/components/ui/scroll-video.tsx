"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 192;
const KEYFRAME_STEP = 8; // Phase 1: load every 8th frame → ~24 keyframes for full coverage
const LOADER_TIMEOUT = 15_000; // Force-open after 15s on very slow connections
const EXIT_MS = 900; // Loader exit animation duration

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
    heading: "Save Up To 75% On Your Dues",
    body: "Our experts have settled 1,000+ cases nationwide, negotiating directly with banks and NBFCs so you pay only a fraction of what you owe.",
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

// SVG progress ring constants
const RING_RADIUS = 40;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const currentFrameRef = useRef(0);
  const readyFired = useRef(false);

  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Nearest loaded frame fallback ──
  // When a frame isn't loaded yet, find the closest one that IS loaded.
  // This prevents blank canvas frames — user sees a "lower fps" version
  // instead of a frozen/static page on slow connections.
  const nearestFrame = useCallback((idx: number): number => {
    if (framesRef.current[idx]) return idx;
    for (let d = 1; d < TOTAL_FRAMES; d++) {
      if (idx - d >= 0 && framesRef.current[idx - d]) return idx - d;
      if (idx + d < TOTAL_FRAMES && framesRef.current[idx + d]) return idx + d;
    }
    return 0;
  }, []);

  // ── Draw frame to canvas ──
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const actual = nearestFrame(index);
      const img = framesRef.current[actual];
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
    },
    [nearestFrame]
  );

  // ── Body scroll lock while loading ──
  // Prevents user from scrolling into the frame-animation section
  // before keyframes are ready. Uses both overflow + touchmove prevention
  // for reliable iOS support.
  useEffect(() => {
    if (ready) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const preventTouch = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventTouch);
      window.scrollTo(0, 0);
    };
  }, [ready]);

  // ── Loader exit animation ──
  // Brief delay so canvas can render frame 0 behind the loader
  // before the fade-out begins.
  useEffect(() => {
    if (!ready || exiting) return;
    const t = setTimeout(() => setExiting(true), 100);
    return () => clearTimeout(t);
  }, [ready, exiting]);

  // Remove loader from DOM after exit animation completes
  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(() => setShowLoader(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [exiting]);

  // ── Two-phase frame loading ──
  // Phase 1: Load every 8th frame (keyframes) for full scroll-range coverage.
  //          Browser gets 24 images (~6MB) instead of 192 (~47MB) — loads fast.
  // Phase 2: Fill remaining 168 frames in background after keyframes are ready.
  //          Animation gets progressively smoother as more frames arrive.
  useEffect(() => {
    let cancelled = false;
    let keyframeCount = 0;
    let phase2Started = false;

    // Build keyframe indices: 1, 9, 17, 25, …
    const keyframeIndices: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += KEYFRAME_STEP)
      keyframeIndices.push(i);
    const totalKeyframes = keyframeIndices.length;
    const keyframeSet = new Set(keyframeIndices);

    const markReady = () => {
      if (!readyFired.current && !cancelled) {
        readyFired.current = true;
        setReady(true);
      }
    };

    const startPhase2 = () => {
      if (phase2Started) return;
      phase2Started = true;
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!keyframeSet.has(i)) {
          const img = new window.Image();
          img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
          img.onload = () => {
            if (!cancelled) framesRef.current[i - 1] = img;
          };
        }
      }
    };

    // Phase 1: load keyframes
    keyframeIndices.forEach((frameNum) => {
      const img = new window.Image();
      img.src = `/frames/frame_${String(frameNum).padStart(4, "0")}.jpg`;
      img.onload = () => {
        if (cancelled) return;
        framesRef.current[frameNum - 1] = img;
        keyframeCount++;
        setProgress(Math.floor((keyframeCount / totalKeyframes) * 100));

        if (keyframeCount >= totalKeyframes) {
          markReady();
          startPhase2();
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        // Count failed frames to prevent infinite wait
        keyframeCount++;
        setProgress(Math.floor((keyframeCount / totalKeyframes) * 100));
        if (keyframeCount >= totalKeyframes) {
          markReady();
          startPhase2();
        }
      };
    });

    // Timeout: force-open after LOADER_TIMEOUT on very slow connections
    const timeout = setTimeout(() => {
      markReady();
      startPhase2();
    }, LOADER_TIMEOUT);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  // ── Canvas sizing ──
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
      if (ready) drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [ready, drawFrame]);

  // ── Draw frame 0 as soon as keyframes are ready ──
  useEffect(() => {
    if (ready) drawFrame(0);
  }, [ready, drawFrame]);

  // ── Scroll handler — enabled once keyframes are loaded ──
  useEffect(() => {
    if (!ready) return;

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
  }, [ready, drawFrame]);

  // Active section index
  const activeIdx = sections.findIndex(
    (s) => scrollProgress >= s.enter && scrollProgress < s.leave
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* ═══ Full-page preloader ═══ */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] ${
            exiting
              ? "opacity-0 scale-[1.02] pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: `${EXIT_MS}ms`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "opacity, transform",
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-duedost-blue/[0.06] blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[300px] h-[300px] rounded-full bg-duedost-green/[0.04] blur-[80px]" />
          </div>

          {/* Progress ring */}
          <div className="relative w-24 h-24 mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
              {/* Track */}
              <circle
                cx="48"
                cy="48"
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="3"
              />
              {/* Progress arc */}
              <circle
                cx="48"
                cy="48"
                r={RING_RADIUS}
                fill="none"
                stroke="url(#preloader-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={
                  RING_CIRCUMFERENCE - (progress / 100) * RING_CIRCUMFERENCE
                }
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient
                  id="preloader-grad"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#1B5DAA" />
                  <stop offset="100%" stopColor="#3BAA35" />
                </linearGradient>
              </defs>
            </svg>
            {/* Percentage inside ring */}
            <span className="absolute inset-0 flex items-center justify-center text-white/90 text-lg font-semibold tabular-nums">
              {progress}
              <span className="text-white/40 text-sm ml-0.5">%</span>
            </span>
          </div>

          {/* Brand */}
          <h1
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#1B5DAA] to-[#3BAA35] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Due Dost
          </h1>
          <p className="mt-2 text-white/30 text-xs tracking-[0.2em] uppercase">
            Loading Experience
          </p>
        </div>
      )}

      {/* ═══ Sticky viewport ═══ */}
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
            <canvas ref={canvasRef} className="w-full h-full" />
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
                <div key={i} className="relative flex items-center">
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
        const show =
          fadeIn ||
          visible ||
          fadeOut ||
          (isLast && scrollProgress >= section.enter + 0.04);

        let opacity = 0;
        if (fadeIn) opacity = (scrollProgress - section.enter) / 0.04;
        else if (visible || (isLast && scrollProgress >= section.enter + 0.04))
          opacity = 1;
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
                <p
                  className="mt-2 text-white/75 text-sm leading-relaxed max-w-xs"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
                >
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
