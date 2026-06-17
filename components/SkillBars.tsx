"use client";

import { useEffect, useRef, useState } from "react";
import { about } from "@/data/content";

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3.5">
      {about.proficiency.map((s, i) => (
        <div key={s.name}>
          <div className="flex justify-between font-mono text-[11px] mb-1.5">
            <span className="text-slate">{s.name}</span>
            <span className="text-blue tabular-nums">{s.level}</span>
          </div>
          <div className="h-1.5 bg-night rounded-full overflow-hidden">
            <div
              className="h-full bg-blue rounded-full transition-[width] duration-1000 ease-out"
              style={{
                width: show ? `${s.level}%` : "0%",
                transitionDelay: `${i * 90}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
