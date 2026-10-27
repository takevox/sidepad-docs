// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// GitHub Pages（プロジェクトサイト）で公開するため、サイトはサブパス配下に置く
const BASE = "/sidepad-docs";

// 本文中の "/guide/editor/" のようなルート相対リンクに BASE を付ける
function remarkBaseLinks() {
  const walk = (node) => {
    if (node.type === "link" && node.url.startsWith("/") && !node.url.startsWith("//")) {
      node.url = BASE + node.url;
    }
    node.children?.forEach(walk);
  };
  return walk;
}

export default defineConfig({
  site: "https://takevox.github.io",
  base: BASE,
  markdown: {
    remarkPlugins: [remarkBaseLinks],
  },
  integrations: [
    starlight({
      title: "Sidepad ヘルプ",
      description: "GitHub・Gemini・ChatGPT の入力欄を目次付きの分割エディタで編集できる Chrome 拡張機能「Sidepad」のヘルプ",
      defaultLocale: "root",
      locales: {
        root: { label: "日本語", lang: "ja" },
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "使い方", items: [{ autogenerate: { directory: "guide" } }] },
        { label: "プライバシーポリシー", slug: "privacy" },
      ],
    }),
  ],
});
