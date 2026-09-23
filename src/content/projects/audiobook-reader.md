---
title: My own Speechify
summary: Upload a PDF and it reads it aloud, highlighting each sentence on the page.
role: Homelab
order: 4
date: 2026-07-30
tags: [homelab, edge]
featured: true
cover: ./images/audiobook-reader.jpg
coverAlt: The reader playing a PDF with the current sentence highlighted
coverPosition: top
rack: { replaces: "Speechify", order: 1 }
evidence:
  - { label: Voice model, value: "Kokoro, 82M parameters" }
  - { label: Runs on, value: "A 4 GB laptop GPU" }
  - { label: Subscription, value: "0 kr a month" }
stack: [FastAPI, PyMuPDF, Kokoro TTS]
gallery:
  - { src: ./images/audiobook-phone.jpg, alt: "The reader on a phone, with playback controls at the bottom", caption: "On the phone, with lock-screen controls.", phone: true }
---

Text-to-speech apps wanted a monthly fee to read my course literature, so I built my own. It runs a small open voice model on my server, highlights the sentence being read on the actual PDF page, and remembers where I stopped across devices.
