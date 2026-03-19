"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface CityMarker {
  name: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
}

const cities: CityMarker[] = [
  { name: "Delhi NCR", lat: 28.6139, lng: 77.209,  isHQ: true },
  { name: "Mumbai",    lat: 19.076,  lng: 72.8777 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai",   lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", lat: 17.385,  lng: 78.4867 },
  { name: "Kolkata",   lat: 22.5726, lng: 88.3639 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Pune",      lat: 18.5204, lng: 73.8567 },
  { name: "Jaipur",    lat: 26.9124, lng: 75.7873 },
  { name: "Lucknow",   lat: 26.8467, lng: 80.9462 },
];

const connections = [
  { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
  { from: 0, to: 4 }, { from: 0, to: 5 }, { from: 0, to: 6 },
  { from: 0, to: 7 }, { from: 0, to: 8 }, { from: 0, to: 9 },
];

const SVG_W        = 800;
const SVG_H        = 800;
const VIEWPORT_TOP = -100;
const SCALE        = 1510.5327821297285;
const TRANSLATE_X  = -1782.3631934369705;
const TRANSLATE_Y  = 978.0323491403595;

export function IndiaMap() {
  const svgRef    = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Only true after mount on screens ≥ 1024 px
  const [isDesktop, setIsDesktop] = useState(false);
  const [borderPath, setBorderPath] = useState("");

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Fetch the 3.8 MB border path ONLY on desktop — never on mobile
  useEffect(() => {
    if (!isDesktop) return;
    fetch("/india-border.path")
      .then((r) => r.text())
      .then(setBorderPath)
      .catch(() => {});
  }, [isDesktop]);

  // Draw dot grid on canvas via Path2D — desktop only
  // Path2D(3.8 MB) blocks the main thread; skip entirely on mobile
  useEffect(() => {
    if (!isDesktop || !borderPath || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = SVG_W;
    canvas.height = SVG_H - VIEWPORT_TOP;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Defer so the paint happens before the heavy clip computation
    const id = setTimeout(() => {
      try {
        const p2d = new Path2D(borderPath);
        ctx.save();
        ctx.translate(0, -VIEWPORT_TOP);
        ctx.clip(p2d);
        const step = 14;
        ctx.fillStyle = isDark ? "rgba(240,240,235,1)" : "rgba(0,0,0,1)";
        for (let x = 0; x <= SVG_W; x += step) {
          for (let y = VIEWPORT_TOP; y <= SVG_H; y += step) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      } catch {
        // Silently degrade if Path2D fails
      }
    }, 50);

    return () => clearTimeout(id);
  }, [borderPath, isDark, isDesktop]);

  const lineColor = "#0ea5e9";

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng * (Math.PI / 180)) * SCALE + TRANSLATE_X,
    y: -(lat * (Math.PI / 180)) * SCALE + TRANSLATE_Y,
  });

  const createCurvedPath = (
    s: { x: number; y: number },
    e: { x: number; y: number }
  ) => {
    const mx = (s.x + e.x) / 2;
    const my = (s.y + e.y) / 2 - Math.abs(s.x - e.x) * 0.15;
    return `M ${s.x} ${s.y} Q ${mx} ${my} ${e.x} ${e.y}`;
  };

  return (
    <div
      className="w-full max-w-[700px] mx-auto relative font-sans"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H - VIEWPORT_TOP}` }}
    >
      {/* Mobile: pre-baked static SVG image — browser renders natively, zero JS cost.
           dark:invert flips black dots → white in dark mode. */}
      {!isDesktop && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/india-map.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full absolute inset-0 object-fill dark:invert"
        />
      )}

      {/* Desktop: canvas dot grid — GPU-accelerated via Path2D */}
      {isDesktop && (
        <canvas
          ref={canvasRef}
          className="w-full h-full absolute inset-0"
          style={{ imageRendering: "crisp-edges" }}
        />
      )}

      {/* SVG overlay — connections + city markers (lightweight, works on all devices) */}
      <svg
        ref={svgRef}
        viewBox={`0 ${VIEWPORT_TOP} ${SVG_W} ${SVG_H - VIEWPORT_TOP}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white"    stopOpacity="0" />
            <stop offset="5%"   stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%"  stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white"    stopOpacity="0" />
          </linearGradient>
          <filter id="hq-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glowing border — desktop only, loaded async */}
        {isDesktop && borderPath && (
          <path
            d={borderPath}
            fill="none"
            stroke={lineColor}
            strokeWidth="1.5"
            className="opacity-20 dark:opacity-40"
            filter="url(#hq-glow)"
          />
        )}

        {/* Animated connection lines */}
        {connections.map((conn, i) => {
          const s = projectPoint(cities[conn.from].lat, cities[conn.from].lng);
          const e = projectPoint(cities[conn.to].lat,   cities[conn.to].lng);
          return (
            <motion.path
              key={`conn-${i}`}
              d={createCurvedPath(s, e)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              // Mobile: animate once and stay visible; Desktop: loop slowly
              animate={
                isDesktop
                  ? { pathLength: 1, opacity: [0, 1, 1, 0] }
                  : { pathLength: 1, opacity: [0, 1, 1, 1] }
              }
              transition={
                isDesktop
                  ? {
                      duration: 4,
                      delay: 0.5 + i * 0.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2,
                    }
                  : {
                      duration: 2.5,
                      delay: 0.3 + i * 0.25,
                      ease: "easeInOut",
                    }
              }
            />
          );
        })}

        {/* City markers */}
        {cities.map((city, i) => {
          const pt = projectPoint(city.lat, city.lng);
          return (
            <g key={city.name}>
              {city.isHQ && (
                <>
                  <circle cx={pt.x} cy={pt.y} r="6" fill={lineColor} opacity="0.4">
                    <animate attributeName="r"       from="6"   to="24" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0"  dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pt.x} cy={pt.y} r="10" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.5" />
                </>
              )}
              <circle cx={pt.x} cy={pt.y} r={city.isHQ ? 5 : 3.5} fill={lineColor} filter="url(#hq-glow)" />
              <circle cx={pt.x} cy={pt.y} r="3.5" fill={lineColor} opacity="0.3">
                <animate attributeName="r"       from="3.5" to="12" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0"  dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <text
                x={pt.x + 10} y={pt.y - 10}
                fill="currentColor"
                stroke="var(--map-label-halo)"
                strokeWidth="5"
                strokeLinejoin="round"
                className="text-[19px] font-medium select-none pointer-events-none"
                style={{ fontFamily: "Inter, sans-serif", paintOrder: "stroke" }}
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
