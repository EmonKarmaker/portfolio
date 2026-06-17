import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#05070D",     // near-black, blue undertone
        night2: "#080B14",    // lifted
        night3: "#0C1019",    // card base
        night4: "#11161F",    // card hover
        rule: "#1A2030",      // hairline borders
        moon: "#EAEEF6",      // primary text
        slate: "#8B95A7",     // secondary
        slate2: "#56607A",    // tertiary / captions
        blue: "#4F8FFF",      // electric blue accent
        blue2: "#6BA5FF",     // lighter hover
        blued: "#2C6BE0",     // deep
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: { tightest: "-0.03em" },
    },
  },
  plugins: [],
};

export default config;
