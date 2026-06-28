import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center text-sm font-bold">H</div>
          <span className="text-2xl font-black text-white">HELM.</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-4 text-white">
          AI×コードの<span className="text-[#8b5cf6]">現在地</span>
        </h1>
        <p className="text-[#8b949e] mb-10 leading-relaxed">
          Claude Code・Codex・Obsidian——<br />
          AIとコードツールの最新トレンドをまとめた、クライアント向け資料です。
        </p>
        <Link
          href="/ai-tools"
          className="inline-block px-8 py-4 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-lg transition-colors"
        >
          レポートを見る →
        </Link>
      </div>
    </div>
  );
}
