# alexander-alfaro-site

My personal website. Built with Astro and deployed to GitHub Pages on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Adding things

**A project:** add `src/content/projects/my-project.md`.

```markdown
---
title: My project
summary: One sentence about what it is.
role: Side project            # optional
when: 2026                    # optional, shown on the project page
date: 2026-09-01              # used for sorting
tags: [edge, llm]             # defence, xai, edge, llm, homelab
featured: true                # optional: a double-width card
order: 3                      # optional: lower shows first
cover: ./my-project.jpg       # optional: an image next to this file
evidence:                     # optional: the numbers box
  - { label: Speed, value: "60 FPS" }
links:                        # optional
  - { label: Demo video, url: "https://..." }
stack: [Python, PyTorch]      # optional
rack: { replaces: "Some SaaS", order: 6 }   # optional: show it in the homelab rack
---

Write the story here in Markdown.
```

Quote any value that contains a comma. Without a `cover`, the site draws one automatically.

**A note:** add `src/content/notes/my-note.md` with `title`, `date` and `summary` in the front matter.

**Everything else** (the "right now" box, skills, education, server specs and contact links) lives in `src/data/site.ts`.
