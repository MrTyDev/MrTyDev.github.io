// Traditional Chinese (Taiwan) version of the text in site.ts.
// Same shape as the English object; keep the two in step.

export const zh = {
  description:
    '亞歷山大·阿爾法羅為便宜的硬體打造電腦視覺，並檢查模型實際上在看什麼。瑞典布萊金厄理工學院人工智慧與機器學習碩士生。',

  now: [
    { label: '正在做', text: '為家裡的伺服器做更多東西，例如我自己的有聲書閱讀器。' },
    { label: '就讀', text: 'BTH 人工智慧與機器學習碩士最後階段，目前在台灣長庚大學交換。預計 2027 年 6 月畢業。' },
    { label: '正在學', text: '用注音學中文，練習工具是我自己寫的打字練習器。' },
    { label: '正在找', text: 'AI、感測系統或國防產業的軟體工作。' },
  ],

  skills: [
    { area: '機器學習', items: '深度學習、電腦視覺、物件偵測、感測器融合、狀態估計、傳統迴歸方法、Optuna' },
    { area: '可解釋 AI', items: 'SHAP、Grad-CAM、LIME、特徵歸因、找出資料洩漏與捷徑學習' },
    { area: '邊緣運算與嵌入式', items: '模型量化、即時最佳化、AI 加速器、Raspberry Pi、PX4 與 MAVLink、Gazebo SITL' },
    { area: '大型語言模型與代理', items: 'Claude 與 GPT 整合、Model Context Protocol、RAG、模型路由、Ollama、多代理系統' },
    { area: '程式語言與工具', items: 'Python、C、C#、JavaScript、TypeScript、PyTorch、OpenCV、scikit-learn、FastAPI' },
    { area: '工作方式', items: 'Git、Linux、Scrum、CRISP-DM、系統設計、需求分析、測試' },
  ],

  experience: [
    {
      role: 'AI 工程師，Skarven 反無人機專案',
      org: '瑞典國防物資管理局（FMV）與海洋科技中心（MTC）學生挑戰賽',
      when: '2025 年 6 月至今',
      text: '為自主無人機攔截機打造電腦視覺流程，在 Raspberry Pi 5 上達到每秒 60 幀。向瑞典國防軍、FMV、海軍與 Saab 展示成果。',
      link: '/projects/skarven/',
    },
    {
      role: '軟體開發工程師',
      org: 'IKEA / Ingka 集團',
      when: '2025 年 8 月至 12 月',
      text: '開發一個 Model Context Protocol 伺服器，幫助 AI 助理從新舊混雜的文件中找出最新的可觀測性標準並導入專案，資深工程師的導入時間從數週縮短到數小時。',
      link: '/projects/ingka-mcp/',
    },
  ],

  exchange: { school: '長庚大學', place: '台灣桃園', when: '2026 年秋季' },

  education: {
    degree: '人工智慧與機器學習工程碩士',
    school: '瑞典布萊金厄理工學院（Blekinge Institute of Technology），卡爾斯克魯納',
    years: '2021–2027',
    detail: '已修 210 / 300 學分，預計 2027 年 6 月畢業。',
    courses: [
      { area: 'AI', items: '機器學習、進階機器學習（成績 A）、深度機器學習、應用人工智慧、AI 系統安全' },
      { area: '軟體', items: '軟體架構、軟體測試、團隊進階軟體專案' },
      { area: '基礎', items: 'C 與 Python 程式設計、作業系統、資料結構與演算法' },
      { area: '數學', items: '線性代數、微積分、數理統計' },
    ],
  },

  specs: [
    { label: 'CPU', value: 'Intel i7-7700HQ，4 核心' },
    { label: '記憶體', value: '12 GB' },
    { label: 'GPU', value: 'GTX 1050，4 GB 顯示記憶體' },
    { label: '模型', value: 'Ollama、Kokoro、Whisper' },
  ],
  extras: ['Jellyfin', 'Samba', '自製的 Flask 儀表板', '私人網狀 VPN'],
};
