---
title: Site-specific behavior
description: Supported pages and differences between GitHub, Gemini and ChatGPT
sidebar:
  order: 4
---

On every site, the editor and table of contents are shown only on pages with an input field. On other pages they're hidden and keyboard shortcuts don't respond. Sidepad remembers whether they were open, so they reappear when you return to a page with an input field.

You can also keep them visible (turn off "Hide on pages without an input field" in the [settings](/en/guide/settings/)). In that case, the table of contents shows that there's nothing to list, and the editor shows that it's unavailable.

## GitHub

### Supported pages

- Individual issue and pull request pages
- The new issue page

They're hidden on issue lists, pull request lists, repository home pages, code pages and so on.

### Editing existing comments

When you click "Edit" on an existing comment, an edit tab for that comment ("Edit: author") is added to the editor, and you can keep writing there. Closing the edit tab also closes the edit form on the page.

### Format

The input is treated as GitHub Markdown, and a Task list button is added to the toolbar.

## Gemini

### Supported pages

- Chats (including new chats)
- Gems
- Project home pages (you can start a new chat from there)

### Back to the list

In a chat in a project, a button at the top of the editor takes you back to the project's home page.

## ChatGPT

### Supported pages

- New chat
- Chats
- Project home pages and chats in projects

### Back to the list

In a chat in a project, a button at the top of the editor takes you back to the project's home page.

### Switching to a new chat

When you switch from a chat to "New chat", the editor switches to the new chat's (empty) input field. When you go back to the previous chat, the editor reloads that chat's input field.
