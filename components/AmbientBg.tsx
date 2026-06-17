"use client";

// Live ambient backdrop: three soft aurora glows drifting on smooth, looping
// paths over a slowly panning dotted grid. Pure CSS transforms, GPU friendly,
// and fully disabled under prefers-reduced-motion via globals.css.
export default function AmbientBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="absolute inset-0 dotgrid" />
    </div>
  );
}
