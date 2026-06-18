import {
  profile,
  about,
  experience,
  projects,
  publications,
  awards,
  education,
  certifications,
} from "@/data/content";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ProjectGrid from "@/components/ProjectGrid";
import CommandPalette from "@/components/CommandPalette";
import Background from "@/components/Background";
import Typewriter from "@/components/Typewriter";
import Greeting from "@/components/Greeting";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Award as AwardIcon,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
  Twitch,
  Briefcase,
  Languages,
  Sparkles,
} from "lucide-react";

function Heading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-4 font-mono text-xs text-blue mb-3">
        <span>{index}</span>
        <span className="text-slate2 tracking-widest uppercase">{kicker}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <h2 className="font-serif text-2xl md:text-4xl text-moon tracking-tightest leading-none">
        {title}
      </h2>
    </div>
  );
}

const facts = [
  { icon: Briefcase, label: "Currently", value: "SWE @ Roaming Bangladesh" },
  { icon: GraduationCap, label: "Studied", value: "CSE · Data Science, UIU" },
  { icon: Sparkles, label: "Published", value: "2× IEEE / Springer" },
  { icon: Languages, label: "Speaks", value: "Bangla · English · Hindi" },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-x-hidden">
      <Background />
      <Nav />
      <CommandPalette />

      {/* ───────── HERO ───────── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-16">

        <div className="relative mx-auto max-w-3xl w-full flex flex-col items-center text-center">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase mb-4 text-slate2">
              AI / ML Engineer · Software Engineer
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="font-serif text-moon tracking-tightest leading-[0.9]">
              <Greeting className="text-[18vw] sm:text-7xl md:text-8xl" />
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-5 flex flex-col items-center">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-moon tracking-tightest">
                I&apos;m Emon{" "}
                <span className="italic text-blue2">Karmoker</span>
              </p>
              <span className="mt-3 flex items-center gap-3 font-mono text-[11px] tracking-widest text-slate2 uppercase">
                <span className="h-px w-8 bg-blue/60" />
                Dhaka, Bangladesh
                <span className="h-px w-8 bg-blue/60" />
              </span>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-slate mt-7 max-w-xl text-sm md:text-[15px] leading-relaxed mx-auto">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={290}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a href="#experiments" className="font-mono text-sm text-night bg-blue px-6 py-3 rounded-full hover:bg-blue2 transition-colors">
                view work
              </a>
              <a href={profile.links.email} className="font-mono text-sm text-moon border border-rule px-6 py-3 rounded-full hover:border-blue hover:text-blue transition-colors">
                get in touch
              </a>
              <span className="font-mono text-xs text-slate2 flex items-center gap-1.5 ml-1">
                press <kbd className="bg-night3 border border-rule rounded px-1.5 py-0.5">⌘K</kbd> to explore
              </span>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-col sm:flex-row sm:items-stretch mt-12 w-full max-w-2xl border border-rule rounded-xl bg-night3/40 divide-y sm:divide-y-0 sm:divide-x divide-rule overflow-hidden text-left">
              {profile.stats.map((s) => (
                <div key={s.label} className="flex-1 px-5 py-4">
                  <CountUp value={s.value} />
                  <div className="font-mono text-[11px] text-slate2 mt-1.5 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <a
          href="#field-notes"
          className="hidden md:flex absolute bottom-7 right-8 flex-col items-center gap-2 text-slate2 hover:text-blue transition-colors group"
          aria-label="Scroll to about"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase [writing-mode:vertical-lr]">
            scroll
          </span>
          <span className="w-px h-10 bg-rule overflow-hidden relative">
            <span className="absolute inset-x-0 top-0 h-4 bg-blue animate-scrolldot" />
          </span>
        </a>
      </section>

      {/* ───────── ABOUT (redesigned) ───────── */}
      <section id="field-notes" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Heading index="01" kicker="About" title="Who's behind this" />
          </Reveal>

          <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <p className="font-mono text-sm text-slate2 mb-3">
                  <span className="text-blue">const</span> emon ={" "}
                  <span className="text-moon">{"{"}</span>
                </p>
              </Reveal>
              <Reveal delay={60}>
                <h3 className="font-serif text-2xl md:text-3xl text-moon leading-tight">
                  An engineer who turns ideas into{" "}
                  <Typewriter
                    phrases={[
                      "AI agents.",
                      "RAG pipelines.",
                      "shipped products.",
                      "research papers.",
                      "LangGraph systems.",
                    ]}
                  />
                </h3>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-slate leading-relaxed mt-6">
                  {about.intro}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-slate leading-relaxed mt-4">
                  {about.detail}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="font-mono text-sm text-slate2 mt-4">
                  <span className="text-moon">{"}"}</span>;
                </p>
              </Reveal>

              {/* quick facts */}
              <Reveal delay={280}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mt-7 bg-rule border border-rule rounded-xl overflow-hidden">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-start gap-3 bg-night3/60 px-4 py-3.5 hover:bg-night3 transition-colors"
                    >
                      <f.icon size={15} className="text-blue mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-slate2 uppercase tracking-wider">
                          {f.label}
                        </div>
                        <div className="text-[13px] text-moon mt-0.5 leading-snug">
                          {f.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* live illustration: ready-made coding animation */}
            <Reveal delay={160}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue/10 blur-3xl rounded-full scale-90" />
                <div className="relative rounded-2xl overflow-hidden border border-rule bg-night2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                    alt="Coding animation"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ boxShadow: "inset 0 0 70px rgba(5,7,13,0.65)" }}
                  />
                </div>
                <p className="text-center font-mono text-[10px] text-slate2 tracking-widest uppercase mt-4">
                  the late night build rig
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── STACK ───────── */}
      <section id="stack" className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-baseline gap-4 font-mono text-xs mb-3">
              <span className="text-blue">/</span>
              <span className="text-slate2 tracking-widest uppercase">The tools I reach for</span>
              <span className="h-px flex-1 bg-rule" />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-serif text-xl md:text-2xl text-moon mb-8 max-w-2xl leading-snug">
              A stack I can take from a blank repo to something running in production.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 60}>
                <div className="spot group h-full border border-rule rounded-xl p-5">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-serif text-lg text-moon group-hover:text-blue transition-colors">
                      {s.group}
                    </h3>
                    <span className="font-mono text-[10px] text-slate2 tabular-nums">
                      {String(i + 1).padStart(2, "0")} · {s.items.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="font-mono text-[11px] text-slate hover:text-blue border border-rule hover:border-blue/40 bg-night/40 rounded-full px-2.5 py-1 transition-colors"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── EXPERIENCE ───────── */}
      <section id="log" className="relative z-10 px-6 py-24 md:py-32 bg-night2/50 border-y border-rule">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Heading index="02" kicker="Experience" title="Where the time went" />
          </Reveal>
          <div>
            {experience.map((e, i) => (
              <Reveal key={e.role + e.period} delay={i * 60}>
                <div className="grid md:grid-cols-[10rem_1fr] gap-2 md:gap-8 py-7 border-b border-rule">
                  <span className="font-mono text-xs text-blue pt-1 flex items-center gap-2">
                    {e.status === "active" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    )}
                    {e.period}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-moon leading-tight">{e.role}</h3>
                    <p className="font-mono text-xs text-slate2 mt-1 mb-3">{e.org}</p>
                    <p className="text-slate leading-relaxed max-w-2xl">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WORK ───────── */}
      <section id="experiments" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Heading index="03" kicker="Work" title="Projects & experiments" />
          </Reveal>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* ───────── PAPERS ───────── */}
      <section id="papers" className="relative z-10 px-6 py-24 md:py-32 bg-night2/50 border-y border-rule">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Heading index="04" kicker="Papers" title="Peer-reviewed work" />
          </Reveal>
          <div className="space-y-px">
            {publications.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block py-8 border-b border-rule">
                  <div className="grid md:grid-cols-[10rem_1fr] gap-2 md:gap-8">
                    <span className="font-mono text-xs text-blue pt-1">{p.venue}</span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-moon leading-snug group-hover:text-blue transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-slate leading-relaxed mt-3 max-w-2xl">{p.desc}</p>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue mt-4 group-hover:gap-2.5 transition-all">
                        Read on {p.linkLabel} <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12">
              <p className="flex items-center gap-2 font-mono text-[11px] text-blue uppercase tracking-widest mb-4">
                <AwardIcon size={13} /> Competition wins
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {awards.map((a) => (
                  <div
                    key={a.title}
                    className="spot border border-amber-300/25 rounded-xl p-5 flex items-start gap-4"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-amber-300/10 border border-amber-300/30 shrink-0">
                      <AwardIcon size={17} className="text-amber-300" />
                    </span>
                    <div>
                      <h4 className="font-serif text-lg text-moon leading-snug">{a.title}</h4>
                      <p className="font-mono text-[11px] text-slate2 mt-1.5">{a.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── EDUCATION & CERTS ───────── */}
      <section id="education" className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Heading index="05" kicker="Credentials" title="Education & certifications" />
          </Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
            <Reveal>
              <div className="bg-night3/60 border border-rule rounded-xl p-6">
                <GraduationCap className="text-blue mb-4" size={24} />
                <h3 className="font-serif text-2xl text-moon leading-tight">{education.degree}</h3>
                <p className="text-slate mt-2">{education.school}</p>
                <p className="font-mono text-xs text-slate2 mt-3">
                  {education.period} · {education.location}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-px">
                {certifications.map((c) => (
                  <div key={c.title} className="py-4 border-b border-rule">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-moon leading-snug">{c.title}</h4>
                      <span className="font-mono text-[11px] text-blue shrink-0">{c.period}</span>
                    </div>
                    <p className="font-mono text-[11px] text-slate2 mt-1">{c.org}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="colophon" className="relative z-10 px-6 py-28 md:py-40 bg-night2/50 border-t border-rule">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs text-blue tracking-widest uppercase mb-6">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-3xl md:text-5xl text-moon tracking-tightest leading-[0.95]">
              Let&apos;s build something
              <br />
              <span className="text-blue italic">intelligent.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-slate leading-relaxed mt-8 max-w-xl">
              Open to AI/ML engineering and full-stack roles, and to interesting
              contract work. Email is the fastest line to me.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href={profile.links.email} className="inline-block font-serif text-xl md:text-3xl text-moon border-b-2 border-blue mt-8 hover:text-blue transition-colors">
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-14 font-mono text-xs">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate hover:text-blue transition-colors"><Github size={15} /> GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate hover:text-blue transition-colors"><Linkedin size={15} /> LinkedIn</a>
              <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-blue transition-colors">Google Scholar</a>
              <a href={profile.links.researchgate} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-blue transition-colors">ResearchGate</a>
              <a href={profile.links.kaggle} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-blue transition-colors">Kaggle</a>
              <a href={profile.links.huggingface} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-blue transition-colors">Hugging Face</a>
              <a href={profile.links.email} className="flex items-center gap-2 text-slate hover:text-blue transition-colors"><Mail size={15} /> Email</a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-slate2">
              <a href={profile.links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-blue transition-colors"><Youtube size={18} /></a>
              <a href={profile.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue transition-colors"><Instagram size={18} /></a>
              <a href={profile.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue transition-colors"><Facebook size={18} /></a>
              <a href={profile.links.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-blue transition-colors"><MessageCircle size={18} /></a>
              <a href={profile.links.twitch} target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="hover:text-blue transition-colors"><Twitch size={18} /></a>
            </div>
          </Reveal>
          <p className="font-mono text-[11px] text-slate2/70 mt-20 border-t border-rule pt-6">
            Set in Fraunces &amp; Inter · Built by Emon Karmoker, {new Date().getFullYear()} · Press ⌘K anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
