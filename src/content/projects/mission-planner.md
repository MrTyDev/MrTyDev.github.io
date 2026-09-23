---
title: Mission Planner
summary: My study planner. A tiny local model decides which AI is cheap enough to answer each question.
role: Homelab
order: 6
date: 2026-04-01
tags: [homelab, llm]
featured: true
cover: ./images/mission-planner.jpg
coverAlt: A course syllabus in Mission Planner, with chapters, pages and difficulty
coverPosition: top
rack: { replaces: "A planner app and a tutor", order: 2 }
evidence:
  - { label: Router, value: "phi3.5, running locally" }
  - { label: Can answer with, value: "SQL, local 1.5B models, Claude" }
stack: [Node.js, SQLite, Ollama, Claude API, Discord]
gallery:
  - { src: ./images/mission-planner-courses.jpg, alt: "The course list with exam dates", caption: "Courses and exam dates. It plans backwards from these." }
---

It turns my syllabi and exam dates into a study plan around my calendar, and it has a Discord bot for daily briefings. Every question goes through a small local model first, and the cheapest thing that can answer it does: a database query, a small local model, or Claude only when it's needed.

I also tried letting one smart model lead a team of small, free models to build apps inside it. They never finished an app, but watching them negotiate and vote was fun.
