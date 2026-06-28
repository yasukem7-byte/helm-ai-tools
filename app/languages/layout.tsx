import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIが使うプログラミング言語 2025 | HELM.",
  description: "Python・JavaScript・Next.jsなど、AIソフトでよく使われるプログラミング言語の特徴と役割をわかりやすく解説。",
};

export default function LanguagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
