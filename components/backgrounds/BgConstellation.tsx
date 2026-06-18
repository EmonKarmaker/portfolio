"use client";

import { useEffect, useRef } from "react";

// Option 3 — Particle Constellation Field. Links form near the cursor.
export default function BgConstellation({ intensity = 0.9 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const count = Math.min(160, Math.floor((w * h) / 9000));
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: 0.6 + Math.random() * 1.4, tw: Math.random() * Math.PI * 2,
    }));
    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy; p.tw += 0.03;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const near = Math.hypot(mouse.x - p.x, mouse.y - p.y) < 160;
        const tw = 0.4 + Math.abs(Math.sin(p.tw)) * 0.6;
        ctx.fillStyle = near ? "rgba(159,194,255,0.95)" : `rgba(120,170,255,${tw * intensity})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, near ? p.r + 0.8 : p.r, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (Math.hypot(mouse.x - a.x, mouse.y - a.y) > 170) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(79,143,255,${(1 - d / 120) * 0.55 * intensity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    if (!reduce) draw(); else draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
