"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="beam-gradient-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139,92,246,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="beam-gradient-2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {/* Animated beam paths */}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={`beam-${i}`}
            d={generateBeamPath(i)}
            stroke={i % 2 === 0 ? "rgba(139,92,246,0.12)" : "rgba(6,182,212,0.08)"}
            strokeWidth={i % 3 === 0 ? "1.5" : "1"}
            fill="none"
            className="animate-beam"
            style={{
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          />
        ))}
      </svg>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-transparent opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-violet)]/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[var(--accent-cyan)]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

      <style jsx>{`
        @keyframes beam {
          0% { stroke-dashoffset: 2000; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-beam {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: beam 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function generateBeamPath(index: number): string {
  const startX = (index * 150) % 1920;
  const startY = index % 2 === 0 ? 0 : 1080;
  const midX = 960 + Math.sin(index) * 400;
  const midY = 540 + Math.cos(index) * 300;
  const endX = ((index + 6) * 150) % 1920;
  const endY = index % 2 === 0 ? 1080 : 0;
  return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
}
