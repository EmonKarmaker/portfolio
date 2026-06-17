"use client";

import { useEffect, useState } from "react";

// A small multilingual greeting that fades between languages, a nod to the
// rotating "Hello / Namaste / Bonjour" header. Starts on the first word so
// server and client first paint match (no hydration flicker).
const greetings = [
  "Hello",
  "নমস্কার",
  "Namaste",
  "Bonjour",
  "Hola",
  "こんにちは",
  "안녕하세요",
  "Privet",
];

export default function Greeting({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShown(false);
      const t = setTimeout(() => {
        setI((p) => (p + 1) % greetings.length);
        setShown(true);
      }, 260);
      return () => clearTimeout(t);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`inline-block text-blue2 transition-opacity duration-200 ${className}`}
      style={{ opacity: shown ? 1 : 0 }}
    >
      {greetings[i]}
    </span>
  );
}
