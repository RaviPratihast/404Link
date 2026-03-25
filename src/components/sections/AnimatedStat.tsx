"use client";

import { useEffect, useRef, useState } from "react";

export type AnimatedStatProps = {
  numericValue: number;
  suffix: string;
  /** Omit or "" for value-only card (no caption). */
  label?: string;
};

const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

const DURATION_MS = 1800;

export const AnimatedStat = ({
  numericValue,
  suffix,
  label,
}: AnimatedStatProps) => {
  const caption = (label ?? "").trim();
  const [display, setDisplay] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      queueMicrotask(() => {
        setDisplay(numericValue);
      });
      return;
    }

    let rafId = 0;
    let started = false;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / DURATION_MS);
        const eased = easeOutCubic(progress);
        setDisplay(Math.round(numericValue * eased));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(numericValue);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || started) return;
        started = true;
        animate();
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [numericValue]);

  return (
    <div
      ref={rootRef}
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card px-4 py-8 text-center shadow-sm sm:gap-4 sm:px-6 sm:py-10"
    >
      <span className="text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl lg:text-7xl">
        {display}
        {suffix}
      </span>
      {caption ? (
        <span className="max-w-[12rem] text-sm leading-snug font-medium text-muted-foreground sm:max-w-none sm:text-base">
          {caption}
        </span>
      ) : null}
    </div>
  );
};
