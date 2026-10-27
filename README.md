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

公開元は `publish` ブランチのルートで、中身は `dist/` のビルド結果だけです（ソースは `main`）。
`main` に push すると、GitHub Actions（`.github/workflows/deploy.yml`）がビルドして `publish` に配置します。
手動で配置し直したいときは、Actions の **Deploy** ワークフローを **Run workflow** で実行します。

- `publish` は自動で上書きされるので、直接編集しないでください。
- サイトは `/sidepad-docs/` 配下に置かれます。本文のリンクは `/guide/editor/` のようにルートから書けば、ビルド時に自動で `/sidepad-docs` が付きます。

## ページ構成

本文は `src/content/docs/` 以下の Markdown です。

```text
src/content/docs/
├── index.md         トップページ
├── guide/           使い方（サイドバーは自動生成。並び順は frontmatter の sidebar.order）
└── privacy.md       プライバシーポリシー（日本語・英語）
```

プライバシーポリシーを改定したときは、制定日の下に改定日を追記してください。
