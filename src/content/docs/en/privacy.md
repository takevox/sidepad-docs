---
title: Privacy Policy
description: Sidepad's privacy policy
---

[日本語版](/privacy/)

Effective date: October 27, 2026<br>
Revised: October 28, 2026<br>
Provider: WEELWORKS

WEELWORKS ("we") describes below how the Chrome extension "Sidepad" (the "Extension") handles user information.

## 1. Information We Collect

The Extension does not collect any personal information. It does not send any data to our servers or to any third-party servers.

## 2. Information the Extension Handles

The Extension runs only on the following sites:

- GitHub (https://github.com/)
- Gemini (https://gemini.google.com/)
- ChatGPT (https://chatgpt.com/)

While running, the Extension reads page content (such as Issue and pull request comments, conversation messages, and the text in input fields) to display its editor and table of contents. This content is used only for display and editing within the user's browser. It is never stored or transmitted.

Text entered in the Extension's editor is reflected in the site's input field. It is sent only when the user submits it, and only to that site. The site's own privacy policy governs how it handles that information.

## 3. Information Stored in the Browser

For convenience, the Extension stores the following in the user's browser:

| Information | Storage |
|---|---|
| Settings (display language, feature on/off toggles, keyboard shortcuts, fonts, font sizes) | `chrome.storage.sync` |
| Per-site layout (editor position, table of contents position, heading depth) | `chrome.storage.local` |
| Per-tab display state (whether the editor and table of contents are open, and their positions) | `sessionStorage` |

If the user has enabled Chrome sync, settings saved in `chrome.storage.sync` are synced to the user's other devices through their Google account. This is a Chrome feature, and we do not receive this information.

Page content and entered text are never stored.

## 4. Permissions

| Permission | Purpose |
|---|---|
| `storage` | To save the settings and layout described in section 3 |
| Access to the supported sites | To display the editor and table of contents on those sites |

## 5. Sharing with Third Parties

Because the Extension collects no information, it does not provide, sell, or share information with third parties. It does not use advertising or analytics.

## 6. Deleting Information

Stored information can be deleted in either of the following ways:

- Clear the saved layouts from the Extension's settings screen
- Uninstall the Extension (this also deletes the information stored in the browser)

## 7. Changes to This Policy

We may change this policy when necessary. Any changes will be posted on this page, with the revision date noted below the effective date.

## 8. Contact

For questions about this policy, please contact us at:

- GitHub Issues: https://github.com/takevox/sidepad-docs/issues
