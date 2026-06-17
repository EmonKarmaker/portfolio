"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "field-notes", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "log", label: "Experience" },
  { id: "experiments", label: "Work" },
  { id: "papers", label: "Papers" },
  { id: "education", label: "Education" },
  { id: "colophon", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-night/70 backdrop-blur-xl border-b border-rule"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        {/* monogram + name */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-6 h-6 rounded-md border border-blue/40 bg-blue/10 font-mono text-[11px] text-blue group-hover:bg-blue/20 transition-colors">
            EK
          </span>
          <span className="hidden sm:block font-mono text-[13px] text-moon tracking-tight">
            Emon Karmoker
          </span>
        </a>

        {/* section links with active underline */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-[11px]">
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative py-1 transition-colors ${
                    on ? "text-moon" : "text-slate hover:text-blue"
                  }`}
                >
                  {s.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-blue transition-all duration-300 ${
                      on ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* status + CTA */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-1.5 font-mono text-[10px] text-slate2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            open to work
          </span>
          <a
            href="mailto:emonkarmaker101@gmail.com"
            className="font-mono text-[11px] text-night bg-blue px-3.5 py-1.5 rounded-full hover:bg-blue2 transition-colors"
          >
            say hello
          </a>
        </div>
      </nav>
    </header>
  );
}
