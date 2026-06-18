"use client";

import { useEffect, useRef } from "react";

// Option 5 — Aurora + Cursor Glow (minimal, lightest).
export default function BgAuroraGlow({ intensity = 0.9 }: { intensity?: number }) {
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(420px circle at ${e.clientX}px ${e.clientY}px, rgba(79,143,255,${0.1 * intensity}), transparent 70%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [intensity]);
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="absolute inset-0 nightgrid-soft" />
      <div ref={glowRef} className="absolute inset-0" />
    </div>
  );
}
