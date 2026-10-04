---
title: 我自己的 Speechify
summary: 上傳 PDF，它就會唸給你聽，並在頁面上逐句標示正在唸的句子。
role: 自架伺服器
coverAlt: 閱讀器正在播放 PDF，目前的句子被標示出來
rackReplaces: Speechify
evidence:
  - { label: 語音模型, value: "Kokoro，8,200 萬參數" }
  - { label: 運行環境, value: "一張 4 GB 的筆電 GPU" }
  - { label: 訂閱費, value: "每月 0 元" }
galleryAlts:
  - 手機上的閱讀器，播放控制列在畫面下方
galleryCaptions:
  - 在手機上使用，支援鎖定畫面控制。
---

文字轉語音的 App 要我按月付費才能唸我的課本，所以我自己做了一個。它在我的伺服器上跑一個小型開源語音模型，在真正的 PDF 頁面上標示正在唸的句子，也會記住我在不同裝置上讀到哪裡。
