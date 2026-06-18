"use client";

import { useEffect, useRef } from "react";

// Option 2 — Digital Rain (Matrix), blue. Columns near cursor brighten.
export default function BgDigitalRain({ intensity = 0.9 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, cols = 0;
    const fontSize = 16;
    let drops: number[] = [], speeds: number[] = [];
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
      speeds = Array.from({ length: cols }, () => 0.4 + Math.random() * 0.7);
    };
    resize();
    const glyphs = "01<>{}[]/\\=+*ｱｲｳｴｵ01ﾊﾋﾌＡＩＭＬ01".split("");
    const mouse = { x: -9999 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(5,7,13,0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      for (let i = 0; i < cols; i++) {
        const x = i * fontSize, y = drops[i] * fontSize;
        const near = Math.abs(x - mouse.x) < 60;
        ctx.fillStyle = near ? "rgba(159,194,255,0.95)" : `rgba(107,165,255,${0.85 * intensity})`;
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y);
        ctx.fillStyle = `rgba(44,107,224,${0.28 * intensity})`;
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y - fontSize);
        if (y > h && Math.random() > 0.975) drops[i] = Math.random() * -20;
        drops[i] += speeds[i];
      }
      raf = requestAnimationFrame(draw);
    };
    if (!reduce) draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-70" aria-hidden="true" />;
}
