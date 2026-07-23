"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseIntersectionOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionOnce<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionOnceOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.2, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return [ref, isVisible];
}
