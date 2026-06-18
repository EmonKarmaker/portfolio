"use client";

import Link from "next/link";

const options = [
  { slug: "neural", label: "1 · Neural Mesh" },
  { slug: "rain", label: "2 · Digital Rain" },
  { slug: "constellation", label: "3 · Constellation" },
  { slug: "grid", label: "4 · Data Grid" },
  { slug: "aurora", label: "5 · Aurora Glow" },
];

export default function PreviewShell({
  active,
  title,
  desc,
  children,
}: {
  active: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen">
      {children}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
        <div className="mx-auto max-w-3xl w-full">
          <p className="font-mono text-xs text-blue tracking-widest uppercase mb-4">
            Background preview
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-moon tracking-tightest leading-none">
            {title}
          </h1>
          <p className="text-slate mt-5 max-w-xl leading-relaxed">{desc}</p>
          <p className="font-mono text-xs text-slate2 mt-4">
            Move your mouse around to see it react.
          </p>
          <div className="spot border border-rule rounded-xl p-6 mt-8 max-w-md">
            <h3 className="font-serif text-xl text-moon">Sample content</h3>
            <p className="text-slate text-sm mt-2 leading-relaxed">
              This is how text and cards look on top of the live background.
            </p>
          </div>
        </div>
      </div>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 bg-night2/85 backdrop-blur border border-rule rounded-full px-3 py-2">
        {options.map((o) => (
          <Link
            key={o.slug}
            href={`/bg/${o.slug}`}
            className={`font-mono text-xs px-3 py-1.5 rounded-full transition-colors ${
              active === o.slug ? "bg-blue text-night" : "text-slate hover:text-moon"
            }`}
          >
            {o.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="fixed top-6 left-6 z-20 font-mono text-xs text-slate hover:text-blue transition-colors">
        ← back to site
      </Link>
    </main>
  );
}
