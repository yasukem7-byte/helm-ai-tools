export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans">

      {/* Nav */}
      <nav className="border-b border-[#21262d] bg-[#0d1117]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">
          <a href="/" className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-[#8b5cf6] rounded flex items-center justify-center text-xs font-bold">H</div>
            <span className="text-[#d1d4dc] font-semibold text-sm">HELM.</span>
          </a>
          <div className="w-px h-4 bg-[#21262d]" />
          <a href="/ai-tools" className="text-xs text-[#8b949e] hover:text-white transition-colors">AI×コード</a>
          <a href="/languages" className="text-xs text-[#26a69a] font-semibold">プログラミング言語</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#21262d]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#131722] to-[#0a1628] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#26a69a]/40 bg-[#26a69a]/10 text-[#26a69a] text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#26a69a] animate-pulse" />
            プログラミング言語ガイド 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-white">AIが使う</span>
            <br />
            <span className="text-[#26a69a]">プログラミング言語</span>
          </h1>
          <p className="text-[#8b949e] text-lg max-w-2xl mx-auto leading-relaxed">
            Python・JavaScript・Next.jsなど、AIソフトでよく使われる言語の
            特徴と役割をわかりやすく整理します。
          </p>
        </div>
      </section>

      {/* Role map */}
      <section className="border-b border-[#21262d]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionLabel>役割分担</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">言語はそれぞれ「専門職」</h2>
          <p className="text-[#8b949e] mb-12">
            プログラミング言語は「何でもできる万能ツール」ではなく、それぞれ得意な領域があります。
          </p>

          <div className="grid md:grid-cols-5 gap-3 mb-10">
            {[
              { icon: "🐍", lang: "Python", role: "AIを作る・学習させる", color: "#3b82f6" },
              { icon: "⚡", lang: "JavaScript", role: "Webで動かす", color: "#f59e0b" },
              { icon: "⚛️", lang: "Next.js", role: "サービスとして届ける", color: "#26a69a" },
              { icon: "🦀", lang: "Rust / C++", role: "速く動かす", color: "#ef4444" },
              { icon: "🗄️", lang: "SQL", role: "データを管理する", color: "#8b5cf6" },
            ].map(({ icon, lang, role, color }) => (
              <div key={lang} className="p-4 rounded-xl bg-[#161b22] border border-[#21262d] text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-bold text-sm text-[#e6edf3] mb-1" style={{ color }}>{lang}</div>
                <div className="text-xs text-[#8b949e] leading-relaxed">{role}</div>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="p-6 rounded-xl bg-[#161b22] border border-[#21262d]">
            <div className="text-xs text-[#8b949e] mb-4 font-semibold tracking-widest">AIサービスができるまでの流れ</div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                { label: "Python\nAIを学習", color: "#3b82f6" },
                { label: "SQL\nデータ管理", color: "#8b5cf6" },
                { label: "Next.js\nWeb化", color: "#26a69a" },
                { label: "JavaScript\nブラウザで動く", color: "#f59e0b" },
                { label: "Rust/C++\n高速処理", color: "#ef4444" },
              ].map(({ label, color }, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="px-3 py-2 rounded-lg text-xs font-semibold whitespace-pre-line text-center leading-tight"
                    style={{ background: color + "22", border: `1px solid ${color}55`, color }}
                  >
                    {label}
                  </div>
                  {i < arr.length - 1 && <span className="text-[#30363d]">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language cards */}
      <section className="border-b border-[#21262d]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionLabel>各言語の詳細</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">それぞれの特徴と用途</h2>

          <div className="space-y-4">
            <LangCard
              icon="🐍"
              name="Python"
              color="#3b82f6"
              tagline="AIの本命言語"
              desc="AIと機械学習の世界で圧倒的なシェアを持つ言語。文法がシンプルで読みやすく、初心者でも比較的学びやすい。ChatGPT・GeminiのバックエンドもほぼPythonで書かれている。"
              usecases={["機械学習・AIモデルの開発", "データ分析・グラフ作成", "作業の自動化スクリプト", "APIサーバーの構築"]}
              libs={["TensorFlow", "PyTorch", "scikit-learn", "pandas", "FastAPI"]}
              libLabel="主なライブラリ"
            />
            <LangCard
              icon="⚡"
              name="JavaScript / TypeScript"
              color="#f59e0b"
              tagline="Webの言語"
              desc="ブラウザで動く唯一の言語がJavaScript。TypeScriptはその進化版で、型という概念を加えてバグを事前に防ぐ。AIとWebの橋渡し役として欠かせない存在。"
              usecases={["Webサイトの動的な動作", "AIのAPIを呼び出す処理", "ボタンやフォームの操作", "リアルタイムな画面更新"]}
              libs={["React", "Next.js", "Node.js", "Express", "Tailwind CSS"]}
              libLabel="主なフレームワーク"
            />
            <LangCard
              icon="⚛️"
              name="Next.js"
              color="#26a69a"
              tagline="Webアプリの設計図（フレームワーク）"
              desc="厳密には言語ではなくJavaScript/TypeScriptの上に乗るフレームワーク。AIのAPIを呼び出してWebサービスとして届けるのに最適。Vercelと組み合わせることで高速なサイトを低コストで運営できる。"
              usecases={["AIを使ったWebサービスの構築", "高速なWebサイトの制作", "APIサーバーとフロントの一体開発", "SEOに強いサイト制作"]}
              libs={["Vercel", "Tailwind CSS", "Prisma", "shadcn/ui", "Clerk"]}
              libLabel="よく組み合わせるツール"
            />
            <LangCard
              icon="🦀"
              name="Rust / C++"
              color="#ef4444"
              tagline="高速処理の言語"
              desc="AIモデルの推論エンジンや処理速度が求められる部分に使われる。Pythonより100倍速いこともある。LLM（大規模言語モデル）の実行エンジンはC++製が多い。一般的なWeb制作では使わないが、AIの裏側を支えている。"
              usecases={["AIモデルの推論エンジン", "高速データ処理", "ゲームエンジン・グラフィクス", "システムレベルのプログラム"]}
              libs={["llama.cpp", "ONNX Runtime", "WebAssembly", "TensorRT"]}
              libLabel="主な用途ツール"
            />
            <LangCard
              icon="🗄️"
              name="SQL"
              color="#8b5cf6"
              tagline="データベースの言語"
              desc="AIが学習・参照するデータを管理するための言語。「どのデータをAIに渡すか」を指定したり、大量のデータを整理・抽出するために使う。プログラミング言語というより「データへの命令文」に近い。"
              usecases={["データベースからの情報抽出", "AIの学習データ管理", "ユーザーデータの集計・分析", "Webアプリのデータ保存"]}
              libs={["PostgreSQL", "MySQL", "SQLite", "Supabase", "Prisma"]}
              libLabel="主なデータベース"
            />
            <LangCard
              icon="🐹"
              name="Go（Golang）"
              color="#26a69a"
              tagline="サーバー処理の新定番"
              desc="Googleが開発したシンプルで高速な言語。AIサービスのバックエンドAPIや大量リクエストを処理するサーバーに採用が増えている。学習コストが低くPythonとの相性も良い。"
              usecases={["高速APIサーバーの構築", "マイクロサービス開発", "大量リクエストの処理", "クラウドインフラ管理"]}
              libs={["Gin", "Echo", "gRPC", "Docker", "Kubernetes"]}
              libLabel="主なフレームワーク"
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-[#21262d]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionLabel>比較表</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">言語の特性比較</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#21262d]">
                  <th className="text-left py-3 pr-4 text-[#8b949e] font-medium">言語</th>
                  <th className="text-center py-3 px-3 text-[#8b949e] font-medium">学習難易度</th>
                  <th className="text-center py-3 px-3 text-[#8b949e] font-medium">AI開発</th>
                  <th className="text-center py-3 px-3 text-[#8b949e] font-medium">Web制作</th>
                  <th className="text-center py-3 px-3 text-[#8b949e] font-medium">処理速度</th>
                  <th className="text-center py-3 px-3 text-[#8b949e] font-medium">需要</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { lang: "Python", color: "#3b82f6", diff: "低い", ai: "◎", web: "○", speed: "△", demand: "◎" },
                  { lang: "JavaScript", color: "#f59e0b", diff: "中", ai: "△", web: "◎", speed: "○", demand: "◎" },
                  { lang: "TypeScript", color: "#f59e0b", diff: "中", ai: "△", web: "◎", speed: "○", demand: "◎" },
                  { lang: "Next.js", color: "#26a69a", diff: "中", ai: "○", web: "◎", speed: "◎", demand: "◎" },
                  { lang: "Rust", color: "#ef4444", diff: "高い", ai: "○", web: "△", speed: "◎", demand: "○" },
                  { lang: "C++", color: "#ef4444", diff: "高い", ai: "○", web: "△", speed: "◎", demand: "○" },
                  { lang: "SQL", color: "#8b5cf6", diff: "低い", ai: "○", web: "△", speed: "○", demand: "◎" },
                  { lang: "Go", color: "#26a69a", diff: "低〜中", ai: "△", web: "○", speed: "◎", demand: "○" },
                ].map(({ lang, color, diff, ai, web, speed, demand }) => (
                  <tr key={lang} className="border-b border-[#21262d]">
                    <td className="py-4 pr-4 font-semibold" style={{ color }}>{lang}</td>
                    <td className="py-4 px-3 text-center text-[#8b949e] text-xs">{diff}</td>
                    <td className="py-4 px-3 text-center text-[#26a69a]">{ai}</td>
                    <td className="py-4 px-3 text-center text-[#3b82f6]">{web}</td>
                    <td className="py-4 px-3 text-center text-[#f59e0b]">{speed}</td>
                    <td className="py-4 px-3 text-center text-[#8b5cf6]">{demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-[#484f58]">◎ 非常に得意　○ 得意　△ 限定的　※ 2025年時点</div>
        </div>
      </section>

      {/* For designers */}
      <section className="border-b border-[#21262d]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionLabel>デザイナー・非エンジニア向け</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">何を知っておけばいいのか</h2>
          <p className="text-[#8b949e] mb-12">
            全部覚える必要はありません。AIを使う現場で「何が起きているか」を理解する程度でOKです。
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "✅",
                title: "知っておくと良いこと",
                color: "#26a69a",
                items: [
                  "Pythonが AI開発の標準語だということ",
                  "Next.jsはJavaScriptの設計図だということ",
                  "TypeScriptはJavaScriptの進化版だということ",
                  "SQLはデータを扱う専用言語だということ",
                ],
              },
              {
                icon: "🤖",
                title: "AIに任せていいこと",
                color: "#3b82f6",
                items: [
                  "実際のコードを書くこと",
                  "エラーを直すこと",
                  "ライブラリの使い方を調べること",
                  "言語間の変換・翻訳",
                ],
              },
              {
                icon: "🎨",
                title: "人間が判断すること",
                color: "#8b5cf6",
                items: [
                  "どの言語・ツールを選ぶか",
                  "デザインの意図を伝えること",
                  "完成物の品質チェック",
                  "クライアントへの説明",
                ],
              },
            ].map(({ icon, title, color, items }) => (
              <div key={title} className="p-6 rounded-xl bg-[#161b22] border border-[#21262d]">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#e6edf3] mb-4" style={{ color }}>{title}</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#8b949e]">
                      <span style={{ color }} className="mt-0.5 flex-shrink-0">▸</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <SectionLabel>まとめ</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-white">言語は</span>
            <span className="text-[#26a69a]">道具</span>
            <span className="text-white">、大事なのは</span>
            <span className="text-[#3b82f6]">目的</span>
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto leading-relaxed mb-4">
            プログラミング言語は「何を作りたいか」によって選ぶものです。
            Claude CodeなどのAIがあれば、言語を覚えなくても目的を達成できる時代になっています。
          </p>
          <p className="text-[#8b949e] max-w-2xl mx-auto leading-relaxed mb-12">
            それぞれの言語が「何のためにあるか」を理解しておくだけで、
            AIへの指示精度が大きく上がります。
          </p>
          <div className="mt-6 text-xs text-[#484f58]">
            Programming Languages Guide 2025 · HELM.
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#30363d] text-[#8b949e] text-xs mb-3">
      {children}
    </div>
  );
}

function LangCard({
  icon, name, color, tagline, desc, usecases, libs, libLabel,
}: {
  icon: string;
  name: string;
  color: string;
  tagline: string;
  desc: string;
  usecases: string[];
  libs: string[];
  libLabel: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-[#161b22] border border-[#21262d]">
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0">{icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-black text-lg" style={{ color }}>{name}</h3>
            <span className="text-xs text-[#8b949e] px-2 py-0.5 rounded-full bg-[#0d1117] border border-[#30363d]">{tagline}</span>
          </div>
          <p className="text-sm text-[#8b949e] leading-relaxed mb-4">{desc}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-semibold text-[#484f58] mb-2 tracking-widest">主な用途</div>
              <div className="space-y-1">
                {usecases.map((u) => (
                  <div key={u} className="flex items-start gap-2 text-xs text-[#8b949e]">
                    <span style={{ color }} className="mt-0.5 flex-shrink-0">✓</span>{u}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#484f58] mb-2 tracking-widest">{libLabel}</div>
              <div className="flex flex-wrap gap-1.5">
                {libs.map((lib) => (
                  <span key={lib} className="text-xs px-2 py-0.5 rounded-full bg-[#0d1117] border border-[#30363d] text-[#8b949e]">{lib}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
