"use client";

interface CityMarker {
  name: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
  labelSide?: "left" | "right";
  labelDy?: number;
}

const cities: CityMarker[] = [
  { name: "Delhi NCR", lat: 28.6139, lng: 77.209, isHQ: true },
  { name: "Mumbai", lat: 19.076, lng: 72.8777, labelSide: "left" },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, labelSide: "left" },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Pune", lat: 18.5204, lng: 73.8567, labelDy: 22 },
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

const SVG_W = 800;
const SVG_H = 800;
const VIEWPORT_TOP = -100;
const SCALE = 1510.5327821297285;
const TRANSLATE_X = -1782.3631934369705;
const TRANSLATE_Y = 978.0323491403595;

const projectPoint = (lat: number, lng: number) => ({
  x: (lng * (Math.PI / 180)) * SCALE + TRANSLATE_X,
  y: -(lat * (Math.PI / 180)) * SCALE + TRANSLATE_Y,
});

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const mx = (start.x + end.x) / 2;
  const my = (start.y + end.y) / 2 - Math.abs(start.x - end.x) * 0.15;
  return `M ${start.x} ${start.y} Q ${mx} ${my} ${end.x} ${end.y}`;
};

export function IndiaMap() {
  return (
    <div
      className="relative mx-auto w-full max-w-[700px] font-sans"
      style={{ aspectRatio: `${SVG_W} / ${SVG_H - VIEWPORT_TOP}` }}
    >
      <img
        src="/india-map.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-fill dark:invert"
      />

      <svg
        viewBox={`0 ${VIEWPORT_TOP} ${SVG_W} ${SVG_H - VIEWPORT_TOP}`}
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="8%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="92%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {connections.map((connection) => {
          const start = projectPoint(
            cities[connection.from].lat,
            cities[connection.from].lng
          );
          const end = projectPoint(cities[connection.to].lat, cities[connection.to].lng);

          return (
            <path
              key={`${connection.from}-${connection.to}`}
              d={createCurvedPath(start, end)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
            />
          );
        })}

        {cities.map((city) => {
          const point = projectPoint(city.lat, city.lng);

          return (
            <g key={city.name}>
              {city.isHQ && (
                <>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="11"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="1"
                    opacity="0.45"
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="18"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="1"
                    opacity="0.18"
                  />
                </>
              )}

              <circle
                cx={point.x}
                cy={point.y}
                r={city.isHQ ? 5 : 3.5}
                fill="#0ea5e9"
              />

              <text
                x={city.labelSide === "left" ? point.x - 10 : point.x + 10}
                y={point.y - 10 + (city.labelDy ?? 0)}
                textAnchor={city.labelSide === "left" ? "end" : "start"}
                fill="currentColor"
                stroke="var(--map-label-halo)"
                strokeWidth="5"
                strokeLinejoin="round"
                className="pointer-events-none select-none text-[19px] font-medium"
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
