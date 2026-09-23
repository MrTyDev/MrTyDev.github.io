---
title: vitactl
summary: A PS Vita, repurposed as a Wi-Fi remote control for hardware.
role: Tinkering
date: 2026-08-01
tags: [homelab, edge]
rack: { replaces: "A proper controller", order: 5 }
stack: [Lua, Python, sockets]
---

A PS Vita turned into a Wi-Fi remote for hardware. If the link drops, a watchdog stops the device instead of letting it keep going.
