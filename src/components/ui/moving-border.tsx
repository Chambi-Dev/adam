"use client";

import React from "react";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & (HTMLMotionProps<"button"> | HTMLMotionProps<"div">)) {
  return (
    <Component
      className={cn(
        "relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-violet)] focus:ring-offset-2 focus:ring-offset-background",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#06b6d4_50%,#8b5cf6_100%)]",
          borderClassName
        )}
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--surface)] px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-[var(--surface-light)]",
          className
        )}
        style={{ borderRadius }}
      >
        {children}
      </span>
    </Component>
  );
}
