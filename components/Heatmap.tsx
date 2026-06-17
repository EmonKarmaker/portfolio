"use client";

import { useMemo } from "react";

// A GitHub-style contribution heatmap, deterministically generated
// (seeded) so server and client render identically — no hydration drift.
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function Heatmap() {
  const weeks = 26;
  const days = 7;
  const cells = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < weeks * days; i++) {
      const r = seeded(i);
      // bias toward some activity
      const level = r > 0.78 ? 4 : r > 0.62 ? 3 : r > 0.42 ? 2 : r > 0.22 ? 1 : 0;
      out.push(level);
    }
    return out;
  }, []);

  const color = (lvl: number) =>
    [
      "rgba(26,32,48,0.8)",
      "rgba(79,143,255,0.25)",
      "rgba(79,143,255,0.45)",
      "rgba(79,143,255,0.7)",
      "rgba(79,143,255,1)",
    ][lvl];

  return (
    <div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}
      >
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="grid gap-[3px]">
            {Array.from({ length: days }).map((_, d) => {
              const lvl = cells[w * days + d];
              return (
                <div
                  key={d}
                  className="aspect-square rounded-[2px]"
                  style={{ background: color(lvl) }}
                  title={`${lvl} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-1.5 mt-3 font-mono text-[10px] text-slate2">
        <span>less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span
            key={l}
            className="w-2.5 h-2.5 rounded-[2px]"
            style={{ background: color(l) }}
          />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}
