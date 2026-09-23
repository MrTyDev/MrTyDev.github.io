---
title: Complex
summary: Understanding a codebase without having to trust an LLM.
role: Side project
date: 2026-02-01
tags: [llm, xai]
evidence:
  - { label: Ground truth, value: tree-sitter parsers }
  - { label: AI, value: "Optional, and it has to work without it" }
stack: [TypeScript, tree-sitter, React, Monaco, Ink]
---

A tool that maps a codebase from parser facts, not from a language model. AI is optional on top, and the tool has to stay correct without it.
