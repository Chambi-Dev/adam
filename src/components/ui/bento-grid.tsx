"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 transition-all duration-200 hover:shadow-xl",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="my-2 font-sans font-bold text-lg text-white">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-[var(--text-muted)] leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
