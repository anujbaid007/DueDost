"use client";

import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const rafRef = useRef<number>(0);

  const [randomString, setRandomString] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  // Continuous slow orbital drift for ambient glow
  useEffect(() => {
    let angle = Math.random() * Math.PI * 2;
    const speed = 0.006 + Math.random() * 0.004; // each card drifts at slightly different speed

    const drift = () => {
      if (!isHoveredRef.current && cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        angle += speed;
        mouseX.set(width / 2 + Math.cos(angle) * width * 0.32);
        mouseY.set(height / 2 + Math.sin(angle * 0.65) * height * 0.32);
      }
      rafRef.current = requestAnimationFrame(drift);
    };

    rafRef.current = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouseX, mouseY]);

  // Slow character refresh for ambient shimmer
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRandomString(generateRandomString(1500));
    }, 300);
    return () => clearInterval(interval);
  }, [isHovered]);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    isHoveredRef.current = true;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  }

  function onMouseEnter() {
    isHoveredRef.current = true;
    setIsHovered(true);
  }

  function onMouseLeave() {
    isHoveredRef.current = false;
    setIsHovered(false);
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          isHovered={isHovered}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString,
  isHovered,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  randomString: string;
  isHovered: boolean;
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50 opacity-0" />

      {/* Ambient dim glow — always drifting at low opacity */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-duedost-green to-duedost-blue backdrop-blur-xl transition-opacity duration-700"
        style={{
          ...style,
          opacity: isHovered ? 1 : 0.33,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl mix-blend-overlay transition-opacity duration-700"
        style={{
          ...style,
          opacity: isHovered ? 1 : 0.33,
        }}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789₹%✓★";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
