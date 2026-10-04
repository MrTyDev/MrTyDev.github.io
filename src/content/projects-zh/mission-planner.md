---
summary: 我的讀書規劃工具。一個小小的本地模型決定由哪個 AI 回答每個問題，選最便宜又能勝任的那個。
role: 自架伺服器
coverAlt: Mission Planner 中的課程大綱，列出章節、頁數與難度
rackReplaces: 規劃 App 和家教
evidence:
  - { label: 路由模型, value: "phi3.5，在本地執行" }
  - { label: 可用來回答的, value: "SQL、本地 1.5B 模型、Claude" }
galleryAlts:
  - 課程清單與考試日期
galleryCaptions:
  - 課程與考試日期。它從這些日期往回排讀書計畫。
---

它把我的課程大綱和考試日期轉成配合行事曆的讀書計畫，還有一個 Discord 機器人每天提醒我。每個問題都會先經過一個小型本地模型，再交給最便宜但能回答的方式處理：資料庫查詢、小型本地模型，或在真正需要時才用 Claude。

我也試過讓一個聰明的模型帶領一群免費的小模型在裡面開發 App。它們從來沒完成過任何 App，但看它們互相協商、投票還滿有趣的。
