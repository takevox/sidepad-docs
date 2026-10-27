# sidepad-docs

Chrome 拡張機能「Sidepad」のヘルプとプライバシーポリシーのサイトです。
[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) で構築しています。

## 前提

- Node.js 24 以降

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm install` | 依存パッケージをインストール |
| `npm run dev` | 開発サーバーを起動（http://localhost:4321/sidepad-docs/） |
| `npm run build` | `dist/` に静的サイトを生成 |
| `npm run preview` | ビルド結果をプレビュー |

## 公開

GitHub Pages で https://takevox.github.io/sidepad-docs/ に公開します。
プライバシーポリシーは https://takevox.github.io/sidepad-docs/privacy/ です（ストアの申請に使う URL）。

`main` に push すると、GitHub Actions（`.github/workflows/deploy.yml`）がビルドして Pages に公開します。
手動で公開し直したいときは、Actions の **Deploy** ワークフローを **Run workflow** で実行します。

- リポジトリの Settings → Pages → Source は **GitHub Actions** にしてください。
- サイトは `/sidepad-docs/` 配下に置かれます。本文のリンクは `/guide/editor/` のようにルートから書けば、ビルド時に自動で `/sidepad-docs` が付きます。

## ページ構成

本文は `src/content/docs/` 以下の Markdown です。

```text
src/content/docs/
├── index.md         トップページ
├── guide/           使い方（サイドバーは自動生成。並び順は frontmatter の sidebar.order）
├── privacy.md       プライバシーポリシー（ストアに登録した URL。先頭に英語版へのリンク）
└── en/              英語版（/sidepad-docs/en/ 以下。日本語版と同じ構成）
```

- 日本語のページを変えたら、`en/` の同じページも更新してください。プライバシーポリシーを改定したときは、両方の改定日を更新します。英語版の用語は拡張機能の英語の画面（sidepad の `src/shared/i18n.ts`）にそろえます。

プライバシーポリシーを改定したときは、制定日の下に改定日を追記してください。
