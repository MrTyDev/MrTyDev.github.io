---
title: How this site was built
date: 2026-09-22
summary: Written for a generative AI course, together with an AI that was running on my own server.
---

This site is an assignment for my generative AI course. I built it together with Claude Code, and the session ran on the same home server that hosts most of the projects here.

I started by handing over my CV. Then I let it look around the server and read the code and notes behind each service, so the descriptions come from what the projects actually do, not from what I remembered to say about them. It also searched the web for the press coverage of Skarven, and it dropped an article that turned out to be about a different team.

The first version looked like a CV pasted into a web page. I said so, and we rebuilt it with a clearer idea: this is a person who teaches computers to see, so the site should look like what a model sees.

## Adding things

Everything is Markdown. A new project is one file in `src/content/projects/`, and a new note is one file in `src/content/notes/`. The site is built with Astro and deployed to GitHub Pages every time I push.
