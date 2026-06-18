import PreviewShell from "@/components/PreviewShell";
import BgConstellation from "@/components/backgrounds/BgConstellation";
export default function Page() {
  return (
    <PreviewShell active="constellation" title="Constellation" desc="Hundreds of drifting particles that link into constellations around your cursor.">
      <BgConstellation intensity={0.9} />
    </PreviewShell>
  );
}
