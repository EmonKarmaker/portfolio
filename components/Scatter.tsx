"use client";

import { useMemo } from "react";

// A quiet constellation — sparse twinkling stars with a few faint
// connecting lines, like a star chart. Smart and calm, not busy.
export default function Scatter() {
  const stars = useMemo(() => {
    const out: { x: number; y: number; r: number; dur: number; del: number }[] = [];
    for (let i = 0; i < 34; i++) {
      out.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: 0.4 + Math.random() * 1.3,
        dur: 2.5 + Math.random() * 4,
        del: Math.random() * 4,
      });
    }
    return out;
  }, []);

  // a few constellation lines between nearby-ish points
  const lines = useMemo(() => {
    const l: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < 6; i++) {
      const a = stars[Math.floor(Math.random() * stars.length)];
      const b = stars[Math.floor(Math.random() * stars.length)];
      if (a && b) l.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
    return l;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      aria-hidden="true"
    >
      {lines.map((ln, i) => (
        <line
          key={`l${i}`}
          x1={ln.x1}
          y1={ln.y1}
          x2={ln.x2}
          y2={ln.y2}
          stroke="#7DD3FC"
          strokeWidth={0.15}
          opacity={0.25}
        />
      ))}
      {stars.map((s, i) => (
        <circle
          key={i}
          className="star"
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#E6EAF0"
          style={
            { "--dur": `${s.dur}s`, "--del": `${s.del}s` } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
