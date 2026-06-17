"use client";

import { useEffect, useRef, useState } from "react";

// Types out a rotating list of role phrases, with a blinking cursor.
export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const current = phrases[pi % phrases.length];
    let delay = deleting ? 45 : 80;

    if (!deleting && text === current) {
      delay = 1500; // pause at full word
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setPi((p) => p + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, pi, phrases]);

  return (
    <span className="text-blue">
      {text}
      <span className="cursor text-blue">|</span>
    </span>
  );
}
