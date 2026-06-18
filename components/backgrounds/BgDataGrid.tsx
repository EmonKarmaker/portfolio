"use client";

import { useEffect, useRef } from "react";

// Option 4 — Flowing Data Grid (circuit/tron). Pulses travel, grid parallaxes.
export default function BgDataGrid({ intensity = 0.9 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0; const gap = 56;
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const mouse = { x: -9999, y: -9999, ox: 0, oy: 0 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    type Pulse = { col: number; row: number; dir: 0 | 1; p: number; speed: number };
    let pulses: Pulse[] = [];
    const spawn = () => {
      const cols = Math.ceil(w / gap), rows = Math.ceil(h / gap);
      pulses.push({ col: Math.floor(Math.random() * cols), row: Math.floor(Math.random() * rows), dir: Math.random() > 0.5 ? 0 : 1, p: 0, speed: 0.006 + Math.random() * 0.01 });
      if (pulses.length > 28) pulses.shift();
    };
    const spawnTimer = setInterval(spawn, 280);
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const tx = mouse.x > -9999 ? (mouse.x / w - 0.5) * 18 : 0;
      const ty = mouse.y > -9999 ? (mouse.y / h - 0.5) * 18 : 0;
      mouse.ox += (tx - mouse.ox) * 0.05; mouse.oy += (ty - mouse.oy) * 0.05;
      ctx.save(); ctx.translate(mouse.ox, mouse.oy);
      ctx.strokeStyle = `rgba(44,107,224,${0.16 * intensity})`; ctx.lineWidth = 1;
      for (let x = -gap; x <= w + gap; x += gap) { ctx.beginPath(); ctx.moveTo(x, -gap); ctx.lineTo(x, h + gap); ctx.stroke(); }
      for (let y = -gap; y <= h + gap; y += gap) { ctx.beginPath(); ctx.moveTo(-gap, y); ctx.lineTo(w + gap, y); ctx.stroke(); }
      for (let x = 0; x <= w; x += gap)
        for (let y = 0; y <= h; y += gap) {
          const d = Math.hypot(mouse.x - mouse.ox - x, mouse.y - mouse.oy - y);
          if (d < 130) {
            ctx.fillStyle = `rgba(159,194,255,${(1 - d / 130) * 0.9 * intensity})`;
            ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
          }
        }
      for (const pl of pulses) {
        pl.p += pl.speed; if (pl.p > 1) pl.p = 0;
        const x0 = pl.col * gap, y0 = pl.row * gap;
        const x = pl.dir === 0 ? x0 + pl.p * gap : x0;
        const y = pl.dir === 1 ? y0 + pl.p * gap : y0;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
        g.addColorStop(0, `rgba(159,194,255,${0.9 * intensity})`);
        g.addColorStop(1, "rgba(79,143,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };
    if (!reduce) draw(); else draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf); clearInterval(spawnTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
