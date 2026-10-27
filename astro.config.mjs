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
      title: { ja: "Sidepad ヘルプ", en: "Sidepad Help" },
      description: "GitHub・Gemini・ChatGPT の入力欄を目次付きの分割エディタで編集できる Chrome 拡張機能「Sidepad」のヘルプ",
      // 日本語はルート、英語は /en/ 以下に置く
      defaultLocale: "root",
      locales: {
        root: { label: "日本語", lang: "ja" },
        en: { label: "English", lang: "en" },
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "使い方", translations: { en: "Guide" }, items: [{ autogenerate: { directory: "guide" } }] },
        // 日本語版（/privacy/）はストアに登録した URL。英語版は /en/privacy/
        { label: "プライバシーポリシー", translations: { en: "Privacy Policy" }, slug: "privacy" },
      ],
    }),
  ],
});
