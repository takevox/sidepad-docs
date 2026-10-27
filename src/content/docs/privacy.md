---
title: プライバシーポリシー
description: Sidepad のプライバシーポリシー（Privacy Policy）
---

[English version below](#privacy-policy-english)

## 日本語

制定日: 2026年10月27日<br>
提供者: WEELWORKS

WEELWORKS（以下「当方」）は、Chrome 拡張機能「Sidepad」（以下「本拡張機能」）における利用者の情報の取り扱いについて、以下のとおり定めます。

### 1. 収集する情報

本拡張機能は、利用者の個人情報を収集しません。また、当方や第三者のサーバーへ情報を送信しません。

### 2. 本拡張機能が扱う情報

本拡張機能は、次の対象サイトのページ上でのみ動作します。

- GitHub（https://github.com/）
- Gemini（https://gemini.google.com/）
- ChatGPT（https://chatgpt.com/）

動作中は、エディタと目次を表示するために、ページの内容（Issue・プルリクエストのコメント、会話の発言、入力欄の文字など）を読み取ります。読み取った内容は利用者のブラウザ内での表示と編集にのみ使用し、保存や外部への送信は行いません。

入力した文字は、本拡張機能のエディタから対象サイトの入力欄へ反映されます。送信は利用者が送信の操作をしたときにのみ行われ、送信先は対象サイトです。対象サイトでの情報の取り扱いは、各サイトのプライバシーポリシーに従います。

### 3. ブラウザに保存する情報

本拡張機能は、利便性のために次の情報を利用者のブラウザ内に保存します。

| 保存する情報 | 保存先 |
|---|---|
| 設定（自動表示・レイアウトの記憶の ON/OFF、ショートカットキー、フォント、文字サイズ） | `chrome.storage.sync` |
| サイトごとのレイアウト（エディタの表示位置、目次の配置、見出しの深さ） | `chrome.storage.local` |
| タブごとの表示状態（エディタ・目次の開閉、配置） | `sessionStorage` |

`chrome.storage.sync` に保存した設定は、利用者が Chrome の同期を有効にしている場合、利用者の Google アカウントを通じて利用者自身の他の端末と同期されます。この同期は Chrome の機能によるもので、当方が情報を受け取ることはありません。

ページの内容や入力した文字は保存しません。

### 4. 権限の利用目的

| 権限 | 利用目的 |
|---|---|
| `storage` | 上記 3 の設定とレイアウトを保存するため |
| 対象サイトへのアクセス | 対象サイトのページにエディタと目次を表示するため |

### 5. 第三者への提供

本拡張機能は情報を収集しないため、第三者へ情報を提供、販売、共有することはありません。広告や利用状況の分析（アクセス解析）も行いません。

### 6. 情報の削除

保存した情報は、次のいずれかの方法で削除できます。

- 本拡張機能の設定画面から、保存したレイアウトを消去する
- 本拡張機能をアンインストールする（ブラウザ内に保存された情報も削除されます）

### 7. 本ポリシーの変更

当方は、必要に応じて本ポリシーを変更することがあります。変更した場合は、このページを更新し、制定日の下に改定日を記載します。

### 8. お問い合わせ

本ポリシーに関するお問い合わせは、次の窓口までお願いします。

- GitHub Issues: https://github.com/takevox/sidepad-docs/issues

## Privacy Policy (English)

Effective date: October 27, 2026<br>
Provider: WEELWORKS

WEELWORKS ("we") describes below how the Chrome extension "Sidepad" (the "Extension") handles user information.

### 1. Information We Collect

The Extension does not collect any personal information. It does not send any data to our servers or to any third-party servers.

### 2. Information the Extension Handles

The Extension runs only on the following sites:

- GitHub (https://github.com/)
- Gemini (https://gemini.google.com/)
- ChatGPT (https://chatgpt.com/)

While running, the Extension reads page content (such as Issue and pull request comments, conversation messages, and the text in input fields) to display its editor and table of contents. This content is used only for display and editing within the user's browser. It is never stored or transmitted.

Text entered in the Extension's editor is reflected in the site's input field. It is sent only when the user submits it, and only to that site. The site's own privacy policy governs how it handles that information.

### 3. Information Stored in the Browser

For convenience, the Extension stores the following in the user's browser:

| Information | Storage |
|---|---|
| Settings (auto-open and layout-memory toggles, keyboard shortcuts, fonts, font sizes) | `chrome.storage.sync` |
| Per-site layout (editor position, table of contents position, heading depth) | `chrome.storage.local` |
| Per-tab display state (whether the editor and table of contents are open, and their positions) | `sessionStorage` |

If the user has enabled Chrome sync, settings saved in `chrome.storage.sync` are synced to the user's other devices through their Google account. This is a Chrome feature, and we do not receive this information.

Page content and entered text are never stored.

### 4. Permissions

| Permission | Purpose |
|---|---|
| `storage` | To save the settings and layout described in section 3 |
| Access to the supported sites | To display the editor and table of contents on those sites |

### 5. Sharing with Third Parties

Because the Extension collects no information, it does not provide, sell, or share information with third parties. It does not use advertising or analytics.

### 6. Deleting Information

Stored information can be deleted in either of the following ways:

- Clear the saved layouts from the Extension's settings screen
- Uninstall the Extension (this also deletes the information stored in the browser)

### 7. Changes to This Policy

We may change this policy when necessary. Any changes will be posted on this page, with the revision date noted below the effective date.

### 8. Contact

For questions about this policy, please contact us at:

- GitHub Issues: https://github.com/takevox/sidepad-docs/issues
