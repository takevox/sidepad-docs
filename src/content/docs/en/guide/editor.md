---
title: Editor
description: The editor's screen and editing features
sidebar:
  order: 2
---

The editor appears on the left or right of the screen and stays in sync with the site's input field.

## Position

Use the buttons at the top of the editor to show it on the left or right of the screen.

## Send

Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> or click the editor's Send button to send the contents of the site's input field.

### Jump to the posted comment after sending

When the "Jump" switch to the left of the Send button is on, sending a new comment jumps to where the posted comment appears. On Gemini and ChatGPT, it jumps to the message you sent. It's on by default.

- Saving an edit to an existing comment doesn't jump.
- Gemini and ChatGPT automatically scroll to the bottom while showing a response, so you may be scrolled back down after the jump.

This switch is the same as "Jump to the posted comment after sending" in the [settings](/en/guide/settings/).

### When the editor is unavailable

If the input field can't be found on an issue page, a yellow bar at the top of the editor tells you so — for example, when the issue is locked or you're signed out. The editor becomes read-only and the Send button is disabled. The table of contents still works.

## Back to the list

When an issue or chat is open, a button at the top of the editor takes you back to the list.

| Site | Destination |
| --- | --- |
| GitHub | The issue list for an issue, the pull request list for a pull request |
| Gemini, ChatGPT | For a chat in a project, the project's home page |

The editor and table of contents are hidden on list pages. They reappear when you open an issue or chat from the list.

## Tabs

The editor always has a "New comment" tab. On GitHub, when you start editing an existing comment, an edit tab for that comment is added. See [Site-specific behavior](/en/guide/sites/) for details.

## Toolbar

The input is treated as Markdown, and you can format it from the toolbar.

| Button | Action |
| --- | --- |
| Input assist | Toggle Markdown input assist (per tab) |
| Heading | Cycle the heading level with each click |
| Bold, Italic | Wrap the selected text |
| Quote | Quote the selected lines (click again to remove) |
| Code | Insert code |
| Link | Insert a link |
| Bulleted list, Numbered list | Turn the selected lines into a list (click again to remove) |
| Task list | Turn the selected lines into a task list (GitHub only) |
| Table | Choose rows × columns to insert a table |

## Keys

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Insert two spaces |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> (<kbd>&gt;</kbd>) | Raise heading level (add `#`) |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> (<kbd>&lt;</kbd>) | Lower heading level (remove `#`) |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + arrow keys | Move between table cells |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Swap table rows |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>PageUp</kbd> / <kbd>PageDown</kbd> | Go to previous / next heading |
| <kbd>Enter</kbd> | Auto-continue lists, indents and table rows (when input assist is on) |

See [Keyboard shortcuts](/en/guide/shortcuts/) for the list of shortcuts and how to change them.
