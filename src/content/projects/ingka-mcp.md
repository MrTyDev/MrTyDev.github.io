---
title: An MCP server for IKEA
summary: AI that finds the current observability standard among outdated ones, so senior developers implement it in hours instead of weeks.
role: Software developer, IKEA / Ingka Group
when: Aug – Dec 2025
order: 7
date: 2025-12-01
tags: [llm]
cover: ./images/ingka-flow.svg
coverAlt: "Diagram: a senior developer asks an AI assistant, which uses the MCP server to pick the one current standard out of several outdated documents and implement it in the developer's project"
coverCaption: How it works. A diagram drawn for this site, because the product itself is under NDA.
evidenceTitle: In short
evidence:
  - { label: Implementing observability, value: "From weeks to hours, sometimes minutes" }
  - { label: Tested with, value: "Five levels of prompt, from precise to vague, across several models" }
  - { label: Best at picking the right tool, value: Claude }
  - { label: Verified by, value: Senior developers at Ingka }
stack: [Model Context Protocol, Claude, GPT]
gallery:
  - { src: ./images/ingka-testing.svg, alt: "Diagram: five example prompts from very specific to very vague, next to a loop of testing, comparing models and refining the server's instructions", caption: "How we tested: five ways of asking, and a loop of testing, comparing models and refining the server's instructions. Our metrics stay under NDA." }
---

Ingka's documentation holds both current and outdated observability standards, and a model that picks the wrong one is worse than no model at all. I built a Model Context Protocol server that lets an AI assistant find the up-to-date standard and implement it in a senior developer's project.

Most of the work wasn't code. It was meetings with senior developers to work out which documents were actually current. Then we tested: did the model call the right tool, was the answer accurate, and did it understand the request at five levels of phrasing, from a precise instruction to *"something's wrong, help me fix it"*. We compared several models, refined the server's instructions against metrics we designed, and repeated. Claude was best at picking the right tool.

The result, checked by the senior developers: implementing observability in a project went from weeks to hours, sometimes minutes.
