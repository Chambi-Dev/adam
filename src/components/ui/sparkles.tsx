"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  speed?: number;
}

export const SparklesCore = ({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className,
  particleColor = "#ffffff",
  speed = 1,
}: SparklesCoreProps) => {
  const generatedId = useId();
  const sparkleId = id || generatedId;

  return (
    <div
      className={cn("relative h-full w-full", className)}
      style={{ background }}
    >
      <SparklesCanvas
        id={sparkleId}
        minSize={minSize}
        maxSize={maxSize}
        particleDensity={particleDensity}
        particleColor={particleColor}
        speed={speed}
      />
    </div>
  );
};

function SparklesCanvas({
  id,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  speed,
}: {
  id: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  particleColor: string;
  speed: number;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      opacitySpeed: number;
      xSpeed: number;
      ySpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    // Create particles
    for (let i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random(),
        opacitySpeed: (Math.random() * 0.02 + 0.005) * speed,
        xSpeed: (Math.random() - 0.5) * 0.3 * speed,
        ySpeed: (Math.random() - 0.5) * 0.3 * speed,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity >= 1 || particle.opacity <= 0) {
          particle.opacitySpeed *= -1;
        }

        particle.x += particle.xSpeed;
        particle.y += particle.ySpeed;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = Math.max(0, Math.min(1, particle.opacity));
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className="absolute inset-0 h-full w-full"
    />
  );
}
