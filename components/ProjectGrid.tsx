"use client";

import { useMemo, useState } from "react";
import { Github, ExternalLink, Trophy, Star } from "lucide-react";
import type { Project } from "@/data/content";
import Reveal from "@/components/Reveal";

function Card({ p, big = false }: { p: Project; big?: boolean }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const deployed = !!p.live;

  return (
    <div
      onMouseMove={onMove}
      className={`spot group flex flex-col h-full border rounded-xl p-5 ${
        big ? "border-blue/30" : "border-rule"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full ${deployed ? "bg-green-400" : "bg-blue"}`} />
          <span className={deployed ? "text-green-400" : "text-blue"}>
            {deployed ? "live" : "shipped"}
          </span>
        </span>
        <div className="flex gap-3">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="Source" className="text-slate2 hover:text-blue transition-colors">
              <Github size={16} />
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="text-slate2 hover:text-blue transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {p.award && (
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-amber-300 mb-2">
          <Trophy size={12} /> {p.award}
        </span>
      )}

      <h4 className={`font-serif text-moon group-hover:text-blue transition-colors leading-tight ${big ? "text-xl" : "text-lg"}`}>
        {p.title}
      </h4>
      <p className="text-slate text-[13px] leading-relaxed mt-2 flex-1">{p.blurb}</p>

      <div className="flex items-center gap-3 mt-4 mb-3">
        {p.metric && <span className="font-serif text-blue text-sm">{p.metric}</span>}
        <span className="font-mono text-[10px] text-slate2 uppercase tracking-wider ml-auto">
          {p.category}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {p.tags.slice(0, 5).map((t) => (
          <span key={t} className="font-mono text-[10px] text-blue/80 border border-blue/20 bg-blue/5 px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const featured = useMemo(() => projects.filter((p) => p.featured || p.category === "Agentic AI"), [projects]);

  const categories = useMemo(() => {
    const order = [
      "Featured",
      "Agentic AI",
      "LLM Apps",
      "Automation",
      "Speech & Language",
      "Full Stack",
      "Computer Vision",
      "Machine Learning",
    ];
    const present = order.filter((c) => projects.some((p) => p.category === c));
    return ["All", ...present];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <div>
      {/* highlighted strip — best work leads */}
      <div className="mb-12">
        <p className="flex items-center gap-2 font-mono text-[11px] text-blue uppercase tracking-widest mb-4">
          <Star size={12} /> Highlights
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 70}>
              <Card p={p} big />
            </Reveal>
          ))}
        </div>
      </div>

      {/* filter + full grid */}
      <p className="flex items-center gap-2 font-mono text-[11px] text-slate2 uppercase tracking-widest mb-4">
        All projects
        <span className="text-blue">({projects.length})</span>
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
              active === c
                ? "bg-blue text-night border-blue"
                : "text-slate border-rule hover:border-blue/50 hover:text-moon"
            }`}
          >
            {c}
            {c !== "All" && (
              <span className="ml-1.5 opacity-60">
                {projects.filter((p) => p.category === c).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 50}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
