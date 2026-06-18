import PreviewShell from "@/components/PreviewShell";
import BgAuroraGlow from "@/components/backgrounds/BgAuroraGlow";
export default function Page() {
  return (
    <PreviewShell active="aurora" title="Aurora Glow" desc="Slow-moving blue aurora orbs with a spotlight that follows your cursor. Minimal and elegant.">
      <BgAuroraGlow intensity={0.9} />
    </PreviewShell>
  );
}
