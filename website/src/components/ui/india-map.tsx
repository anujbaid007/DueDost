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
  { name: "Delhi NCR", lat: 28.6139, lng: 77.2090, isHQ: true },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Pune", lat: 18.5204, lng: 73.8567 },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 0, to: 4 },
  { from: 0, to: 5 },
  { from: 0, to: 6 },
  { from: 0, to: 7 },
  { from: 0, to: 8 },
  { from: 0, to: 9 },
];

// SVG Viewport Constants
const SVG_W = 800;
const SVG_H = 800;
const VIEWPORT_TOP = -100;

// d3.geoEquirectangular projection constants
const SCALE = 1510.5327821297285;
const TRANSLATE_X = -1782.3631934369705;
const TRANSLATE_Y = 978.0323491403595;

export function IndiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [borderPath, setBorderPath] = useState<string>("");

  // Load the border path asynchronously — keeps it out of the JS bundle
  useEffect(() => {
    fetch("/india-border.path")
      .then((r) => r.text())
      .then(setBorderPath)
      .catch(() => {/* silently degrade */});
  }, []);

  // Draw dots on canvas whenever path or theme changes
  useEffect(() => {
    if (!canvasRef.current || !borderPath) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = SVG_W;
    const H = SVG_H - VIEWPORT_TOP; // 900
    canvas.width = W;
    canvas.height = H;

    ctx.clearRect(0, 0, W, H);

    // Clip to India border — translate to account for VIEWPORT_TOP offset
    const p2d = new Path2D(borderPath);
    ctx.save();
    ctx.translate(0, -VIEWPORT_TOP); // shift so y=-100 maps to canvas y=0
    ctx.clip(p2d);

    // Draw dot grid inside the clipped region
    const step = 14;
    const dotR = 1.5;
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.50)";
    for (let x = 0; x <= W; x += step) {
      for (let y = VIEWPORT_TOP; y <= SVG_H; y += step) {
        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }, [borderPath, isDark]);

  const lineColor = "#0ea5e9";

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng * (Math.PI / 180)) * SCALE + TRANSLATE_X;
    const y = -(lat * (Math.PI / 180)) * SCALE + TRANSLATE_Y;
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - Math.abs(start.x - end.x) * 0.15;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      className="w-full max-w-[700px] mx-auto relative font-sans"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H - VIEWPORT_TOP}` }}
    >
      {/* Canvas — dots rendered in one GPU pass, not 14 k SVG circles */}
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 opacity-60"
        style={{ imageRendering: "crisp-edges" }}
      />

      {/* SVG overlay — glowing border + animated connections + city markers */}
      <svg
        ref={svgRef}
        viewBox={`0 ${VIEWPORT_TOP} ${SVG_W} ${SVG_H - VIEWPORT_TOP}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="hq-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glowing India border — only rendered once path is loaded */}
        {borderPath && (
          <path
            d={borderPath}
            fill="none"
            stroke={lineColor}
            strokeWidth="1.5"
            className="opacity-20 dark:opacity-40"
            filter="url(#hq-glow)"
          />
        )}

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = cities[conn.from];
          const to = cities[conn.to];
          const startPt = projectPoint(from.lat, from.lng);
          const endPt = projectPoint(to.lat, to.lng);
          return (
            <motion.path
              key={`conn-${i}`}
              d={createCurvedPath(startPt, endPt)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                delay: 0.5 + i * 0.3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
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
                    <animate attributeName="r" from="6" to="24" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pt.x} cy={pt.y} r="10" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.5" />
                </>
              )}

              <circle
                cx={pt.x}
                cy={pt.y}
                r={city.isHQ ? 5 : 3.5}
                fill={lineColor}
                filter="url(#hq-glow)"
              />

              <circle cx={pt.x} cy={pt.y} r="3.5" fill={lineColor} opacity="0.3">
                <animate attributeName="r" from="3.5" to="12" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>

              <text
                x={pt.x + 10}
                y={pt.y - 10}
                fill="currentColor"
                className="text-[12px] font-medium opacity-70 select-none pointer-events-none"
                style={{ fontFamily: "Inter, sans-serif" }}
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
