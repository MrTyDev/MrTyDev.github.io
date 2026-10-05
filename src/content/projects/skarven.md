---
title: Skarven
summary: A 7,000-krona drone that spots a hostile drone with computer vision and takes it down by collision.
role: AI engineer, team of four
when: June 2025 – now
order: 1
date: 2025-11-14
tags: [defence, edge]
featured: true
cover: ./images/skarven-drone.jpg
coverAlt: The Skarven interceptor on a table at the FMV student challenge demo day
clip: { src: /media/skarven-flight, alt: "Video: Skarven's tracker draws a detection box around a drone in the sky, then the test field with drones in the air, then the view from the interceptor's onboard camera", caption: "Flight test footage. First Skarven's tracker following a target drone, then the test field, then the interceptor's onboard camera." }
gallery:
  - { src: ./images/skarven-team.jpg, alt: "Simon Lindqvist, Tobias Gustafsson, Viktor Fransson and Alexander Alfaro outside BTH", caption: "The team: Simon Lindqvist, Tobias Gustafsson, Viktor Fransson and me. Photo: Christian Hylse / Blekinge Läns Tidning." }
  - { src: ./images/skarven-demoday.jpg, alt: "Visitors at the student challenge demo day at BTH", caption: "Demo day at BTH, 14 November 2025, for FMV, the Armed Forces and the industry. Photo: BTH." }
evidence:
  - { label: Frame rate, value: 60 FPS on a Raspberry Pi 5 }
  - { label: Accelerator, value: 24 TOPS }
  - { label: Unit cost, value: "About 7,000 SEK" }
  - { label: Shown to, value: "Swedish Armed Forces, FMV, the Navy, Saab" }
links:
  - { label: "Blekinge Läns Tidning, 25 Nov 2025", url: "https://www.blt.se/nyheter/studentprojektet-skarven-ska-bekampa-fientliga-dronare/" }
  - { label: "BTH news, Dec 2025", url: "https://www.bth.se/artiklar/utbildning/2025-12-01-studenter-skapar-framtidens-marintekniska-losningar-at-fmv" }
  - { label: "FMV news", url: "https://www.fmv.se/aktuellt--press/aktuella-handelser/nya-perspektiv-nar-studenter-loser-militara-problem/" }
stack: [Python, PyTorch, OpenCV, Raspberry Pi 5, quantisation]
---

Drones are cheap, and the things that shoot them down usually aren't. Our team of four built a low-cost interceptor from commercial electronics that finds a hostile drone with computer vision and takes it down by collision.

I built the vision pipeline and got it running at **60 FPS on a Raspberry Pi 5**. We demonstrated it to the Swedish Armed Forces, FMV, the Navy and Saab.
