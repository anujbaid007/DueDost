"use client";

import { useRef, useMemo } from "react";
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
// How far above y=0 the viewBox extends to reveal J&K / Ladakh
const VIEWPORT_TOP = -100;

// d3.geoEquirectangular().fitSize([800, 800], geo) constants:
const SCALE = 1568.3554147786454;
const TRANSLATE_X = -1866.196973946;
const TRANSLATE_Y = 994.8083201224555;

// Precise India Border Path (Equirectangular)
const INDIA_BORDER_PATH = "M264.445,23.232L293.866,55.315L291.096,77.644L301.985,91.654L301.088,105.631L281.443,101.952L289.12,132.125L316.013,149.457L354.059,168.597L336.69,181.014L326.061,206.618L352.579,216.976L378.386,230.405L414.087,245.761L451.609,249.308L467.397,263.233L488.546,265.839L521.478,272.22L544.273,271.762L547.409,260.928L543.805,243.535L545.921,231.745L562.615,225.988L564.912,247.545L565.498,253.029L590.377,263.419L607.588,259.14L630.697,260.976L653.032,260.164L654.955,243.349L643.812,234.613L665.888,231.188L690.803,210.829L722.355,193.398L745.315,200.124L764.829,188.598L777.664,205.619L768.419,217.114L797.935,221.205L800,231.581L790.404,236.603L792.649,253.445L773.087,248.496L737.65,267.411L738.482,283.075L723.375,306.036L721.99,319.374L709.784,341.943L688.39,335.707L687.326,364.035L681.139,373.357L684.036,384.981L670.53,391.474L656.113,348.054L648.555,348.14L644.081,365.633L629.094,351.447L637.546,335.869L649.792,334.287L662.414,311.122L646.63,306.449L621.245,306.854L595.199,303.1L592.784,284.067L579.717,282.717L558.036,270.888L548.367,289.46L568.123,303.95L551.01,314.15L544.935,324.125L561.783,331.46L557.125,347.954L566.611,368.538L570.872,391.078L566.952,401.073L548.331,400.728L514.586,406.411L516.159,427.002L501.547,443.198L462.155,461.622L431.517,493.828L410.939,511.095L383.664,529.013L383.621,541.603L369.975,548.349L345.32,558.156L332.534,559.6L324.327,580.48L330.026,616.082L331.477,638.788L319.878,664.794L319.753,711.299L305.588,712.624L293.129,733.502L301.461,742.524L276.502,750.284L267.284,768.9L256.3,776.768L230.38,751.209L217.709,712.877L207.208,685.268L197.618,672.321L183.075,646.024L176.284,611.79L171.552,594.692L146.652,557.097L135.312,504.05L127.127,469.022L127.225,435.866L121.916,410.231L82.081,426.616L62.788,423.334L27.03,390.159L40.191,380.264L32.107,369.523L0,346.289L18.229,328.027L78.467,328.098L73.033,304.596L57.654,290.715L54.535,269.647L36.618,257.354L66.786,228.661L98.571,230.742L127.205,202.044L144.365,174.265L170.937,146.799L170.514,127.287L193.855,111.452L171.763,97.936L162.257,79.416L152.558,55.431L165.978,43.628L207.498,50.306L238.01,46.238Z";

export function IndiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const dotColor = isDark ? "#FFFFFF40" : "#00000030";
  const lineColor = "#0ea5e9";

  const projectPoint = (lat: number, lng: number) => {
    // Standard d3-geoEquirectangular projection logic:
    // x = (lng * (PI/180)) * scale + translate_x
    // y = -(lat * (PI/180)) * scale + translate_y
    const x = (lng * (Math.PI / 180)) * SCALE + TRANSLATE_X;
    const y = -(lat * (Math.PI / 180)) * SCALE + TRANSLATE_Y;
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    // Create a much shallower curve for a professional look
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - Math.abs(start.x - end.x) * 0.15;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Generate a high-resolution grid of dots for the mask
  const dotsInGrid = useMemo(() => {
    const dots = [];
    const step = 10; // Density of the dots
    for (let x = 0; x <= SVG_W; x += step) {
      for (let y = VIEWPORT_TOP; y <= SVG_H; y += step) {
        dots.push(
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.5"
            fill="currentColor"
          />
        );
      }
    }
    return dots;
  }, []);

  return (
    <div className="w-full max-w-[700px] mx-auto relative font-sans" style={{ aspectRatio: `${SVG_W} / ${SVG_H - VIEWPORT_TOP}` }}>
      {/* Structural Dotted Map via SVG Mask */}
      <svg
        viewBox={`0 ${VIEWPORT_TOP} ${SVG_W} ${SVG_H - VIEWPORT_TOP}`}
        className="w-full h-full text-black/20 dark:text-white/20"
      >
        <defs>
          <mask id="india-mask">
            <path d={INDIA_BORDER_PATH} fill="white" />
          </mask>
        </defs>
        <g mask="url(#india-mask)" className="text-current opacity-60">
          {dotsInGrid}
        </g>
      </svg>

      {/* Connection & City Overlay */}
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
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5 + i * 0.1,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* City markers */}
        {cities.map((city, i) => {
          const pt = projectPoint(city.lat, city.lng);
          return (
            <g key={city.name}>
              {/* Pulsing ring for HQ */}
              {city.isHQ && (
                <>
                  <circle cx={pt.x} cy={pt.y} r="6" fill={lineColor} opacity="0.3">
                    <animate attributeName="r" from="6" to="18" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pt.x} cy={pt.y} r="10" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.4" />
                </>
              )}

              {/* Marker Dot */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={city.isHQ ? 5 : 3.5}
                fill={lineColor}
                filter={city.isHQ ? "url(#hq-glow)" : undefined}
              />

              {/* Individual city pulses */}
              <circle cx={pt.x} cy={pt.y} r="3.5" fill={lineColor} opacity="0.2">
                <animate 
                  attributeName="r" 
                  from="3.5" 
                  to="10" 
                  dur="2s" 
                  begin={`${i * 0.2}s`} 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  from="0.3" 
                  to="0" 
                  dur="2s" 
                  begin={`${i * 0.2}s`} 
                  repeatCount="indefinite" 
                />
              </circle>

              {/* City Label */}
              <text
                x={pt.x + 10}
                y={pt.y - 10}
                fill={isDark ? "white" : "black"}
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
