import PreviewShell from "@/components/PreviewShell";
import BgDataGrid from "@/components/backgrounds/BgDataGrid";
export default function Page() {
  return (
    <PreviewShell active="grid" title="Data Grid" desc="A circuit/tron grid with light pulses travelling along the lines. Tilts toward your cursor and nodes glow near it.">
      <BgDataGrid intensity={0.9} />
    </PreviewShell>
  );
}
