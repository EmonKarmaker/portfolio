"use client";

/*
 ┌─────────────────────────────────────────────────────────────┐
 │  CHOOSE YOUR LIVE BACKGROUND                                  │
 │  Change ACTIVE below to one of:                              │
 │    "neural"        → Neural Network Mesh   (Option 1)         │
 │    "rain"          → Digital Rain / Matrix (Option 2)         │
 │    "constellation" → Particle Constellation (Option 3)       │
 │    "grid"          → Flowing Data Grid     (Option 4)         │
 │    "aurora"        → Aurora + Cursor Glow  (Option 5)         │
 │                                                              │
 │  INTENSITY: 0.5 = subtle · 0.9 = medium · 1.3 = strong       │
 └─────────────────────────────────────────────────────────────┘
*/
const ACTIVE: "neural" | "rain" | "constellation" | "grid" | "aurora" = "constellation";
const INTENSITY = 3.0;

import BgNeuralMesh from "@/components/backgrounds/BgNeuralMesh";
import BgDigitalRain from "@/components/backgrounds/BgDigitalRain";
import BgConstellation from "@/components/backgrounds/BgConstellation";
import BgDataGrid from "@/components/backgrounds/BgDataGrid";
import BgAuroraGlow from "@/components/backgrounds/BgAuroraGlow";

export default function Background() {
  switch (ACTIVE) {
    case "neural": return <BgNeuralMesh intensity={INTENSITY} />;
    case "rain": return <BgDigitalRain intensity={INTENSITY} />;
    case "constellation": return <BgConstellation intensity={INTENSITY} />;
    case "grid": return <BgDataGrid intensity={INTENSITY} />;
    case "aurora": return <BgAuroraGlow intensity={INTENSITY} />;
  }
}
