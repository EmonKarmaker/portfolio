"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/content";
import {
  Search,
  CornerDownLeft,
  Hash,
  FolderGit2,
  FileText,
  Mail,
  Github,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

type Cmd = {
  label: string;
  hint: string;
  kind: "section" | "project" | "link";
  action: () => void;
  keywords?: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const ext = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const commands = useMemo<Cmd[]>(() => {
    const sections: Cmd[] = [
      { label: "About", hint: "section", kind: "section", action: () => go("field-notes"), keywords: "bio who" },
      { label: "Experience", hint: "section", kind: "section", action: () => go("log"), keywords: "work jobs" },
      { label: "Projects", hint: "section", kind: "section", action: () => go("experiments"), keywords: "work portfolio" },
      { label: "Papers", hint: "section", kind: "section", action: () => go("papers"), keywords: "research ieee publications" },
      { label: "Education & Certs", hint: "section", kind: "section", action: () => go("education"), keywords: "degree courses" },
      { label: "Contact", hint: "section", kind: "section", action: () => go("colophon"), keywords: "email reach" },
    ];
    const projectCmds: Cmd[] = projects.map((p) => ({
      label: p.title,
      hint: p.category,
      kind: "project",
      keywords: p.tags.join(" ") + " " + p.category,
      action: () => (p.live ? ext(p.live) : p.repo ? ext(p.repo) : go("experiments")),
    }));
    const links: Cmd[] = [
      { label: "Open GitHub", hint: "link", kind: "link", action: () => ext("https://github.com/EmonKarmaker"), keywords: "code repo" },
      { label: "Email me", hint: "link", kind: "link", action: () => ext("mailto:emonkarmaker101@gmail.com"), keywords: "contact" },
    ];
    return [...sections, ...projectCmds, ...links];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q) ||
        (c.keywords || "").toLowerCase().includes(q)
    );
  }, [query, commands]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[active]?.action();
    }
  };

  const icon = (kind: Cmd["kind"]) =>
    kind === "section" ? <Hash size={15} /> : kind === "project" ? <FolderGit2 size={15} /> : <Mail size={15} />;

  return (
    <>
      {/* trigger pill — bottom right */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 font-mono text-xs text-slate bg-night3/90 backdrop-blur border border-rule rounded-full px-4 py-2.5 hover:border-blue/50 hover:text-moon transition-colors shadow-lg shadow-black/40"
        aria-label="Open command palette"
      >
        <Search size={14} className="text-blue" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="bg-night border border-rule rounded px-1.5 py-0.5 text-[10px]">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[14vh] px-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-night2 border border-rule rounded-xl overflow-hidden shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 px-4 border-b border-rule">
              <Search size={18} className="text-blue shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, project, or link…"
                className="flex-1 bg-transparent text-moon placeholder:text-slate2 py-4 outline-none font-sans text-sm"
              />
              <kbd className="font-mono text-[10px] text-slate2 border border-rule rounded px-1.5 py-0.5">esc</kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto py-2">
              {results.length === 0 && (
                <p className="px-4 py-6 text-center text-slate2 font-mono text-xs">
                  No matches for “{query}”.
                </p>
              )}
              {results.map((c, i) => (
                <button
                  key={c.label + i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => c.action()}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === active ? "bg-blue/10 text-moon" : "text-slate hover:bg-night3"
                  }`}
                >
                  <span className={i === active ? "text-blue" : "text-slate2"}>
                    {icon(c.kind)}
                  </span>
                  <span className="flex-1 text-sm">{c.label}</span>
                  <span className="font-mono text-[10px] text-slate2 uppercase tracking-wider">
                    {c.hint}
                  </span>
                  {i === active && <CornerDownLeft size={13} className="text-blue" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 px-4 py-2.5 border-t border-rule font-mono text-[10px] text-slate2">
              <span className="flex items-center gap-1">
                <ArrowUp size={11} />
                <ArrowDown size={11} /> navigate
              </span>
              <span className="flex items-center gap-1">
                <CornerDownLeft size={11} /> select
              </span>
              <span className="flex items-center gap-1">
                <FileText size={11} /> {projects.length} projects indexed
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
