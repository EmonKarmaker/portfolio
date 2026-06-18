import PreviewShell from "@/components/PreviewShell";
import BgDigitalRain from "@/components/backgrounds/BgDigitalRain";
export default function Page() {
  return (
    <PreviewShell active="rain" title="Digital Rain" desc="Falling columns of glyphs in blue on near-black. Columns near your cursor glow brighter.">
      <BgDigitalRain intensity={0.9} />
    </PreviewShell>
  );
}
