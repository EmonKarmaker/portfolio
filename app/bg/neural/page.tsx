import PreviewShell from "@/components/PreviewShell";
import BgNeuralMesh from "@/components/backgrounds/BgNeuralMesh";
export default function Page() {
  return (
    <PreviewShell active="neural" title="Neural Mesh" desc="Drifting nodes connected by lines that brighten and pull toward your cursor. The classic AI-brain look.">
      <BgNeuralMesh intensity={0.9} />
    </PreviewShell>
  );
}
