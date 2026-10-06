// Interface text in every language. Project and note text lives in the
// content folders; everything else that a visitor reads is here.
import type { Tag } from '../content.config';
import { url } from '../lib/url';

export const LANGS = {
  en: { label: 'English', short: 'EN', html: 'en', prefix: '', locale: 'en-GB' },
  zh: { label: '繁體中文', short: '中文', html: 'zh-Hant-TW', prefix: '/zh', locale: 'zh-TW' },
} as const;
export type Lang = keyof typeof LANGS;

/** An internal link in the given language, e.g. lurl('zh', '/about/') -> /zh/about/ */
export function lurl(lang: Lang, path: string): string {
  return url(LANGS[lang].prefix + path);
}

/** The same page in another language, for the language switch. */
export function switchPath(pathname: string, to: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  rest = rest.replace(/^\/zh(?=\/|$)/, '') || '/';
  if (/^\/404(\.html|\/)?$/.test(rest)) rest = '/'; // the error page has no twin
  return lurl(to, rest);
}

export function formatDate(lang: Lang, d: Date, long = false): string {
  return d.toLocaleDateString(LANGS[lang].locale, { day: 'numeric', month: long ? 'long' : 'short', year: 'numeric' });
}

const en = {
  siteTitle: 'AI & machine learning',
  skip: 'Skip to content',
  nav: { projects: 'Projects', homelab: 'Homelab', notes: 'Notes', about: 'About', contact: 'Contact' },
  navLabel: 'Main',
  langLabel: 'Language',
  darkMode: 'Dark mode',
  footerBig: 'Contact',
  footerBuilt: 'Built with Astro and Claude Code, for a generative AI course.',
  elsewhere: 'Elsewhere',
  tags: { research: 'Research', defence: 'Defence', xai: 'Explainable AI', edge: 'Edge AI', llm: 'LLMs & agents', homelab: 'Homelab' } as Record<Tag, string>,

  hero: {
    pre: '', name: 'Alexander Alfaro', mid1: '. ', see: 'Computer vision',
    mid2: ', ', check: 'explainable AI', post: ' and edge AI.',
    intro: 'MSc student in AI and machine learning. Work includes a counter-drone interceptor for FMV running at 60 FPS on a Raspberry Pi 5, GPS-denied drone navigation, deepfake detection and an MCP server for IKEA.',
    cta: 'View projects', email: 'Email',
    studentId: 'Student ID', schools: 'BTH, Sweden · exchange at Chang Gung University, Taiwan',
  },
  now: 'Right now',
  projectsTitle: 'Projects',
  projectsIntro: 'Research, defence work and self-hosted tools.',
  filterLabel: 'Filter projects',
  all: 'All',
  labTitle: 'Homelab',
  labText: [
    'Self-hosted services on an old Acer laptop, replacing paid subscriptions and reachable remotely over a private VPN.',
    'With 4 GB of VRAM, every model has to fit in tight memory, the same constraint as edge deployment. New ideas are tested here first.',
  ],
  dashboardAlt: 'The monitoring dashboard I wrote for the server, showing temperature, CPU, memory, storage and GPU',
  dashboardCaption: 'The dashboard I wrote to keep an eye on it.',
  rackLabel: 'Services running on my home server',
  replaces: 'Replaces',
  notesTitle: 'Notes',
  allNotes: 'All notes',
  notesIntro: 'Short write-ups about things I’m building and what I learned from them.',

  allProjects: 'All projects',
  numbers: 'The numbers',
  readMore: 'Read more',
  builtWith: 'Built with',
  newer: 'Newer',
  older: 'Older',
  moreProjects: 'More projects',

  about: {
    title: 'About me',
    description: 'Background, skills, experience and education.',
    studentId: 'Student ID',
    lede: 'MSc student in AI and machine learning, focused on computer vision, explainable AI and edge deployment, mainly for defence.',
    body: [
      'I’m in the last part of an MSc in engineering in AI and machine learning at Blekinge Institute of Technology. Most of my serious work has been in defence: computer vision for a counter-drone interceptor we built with FMV and the Marine Technology Center, and navigation for drones when GPS is jammed.',
      'My interest in AI started early. My high-school graduation project in 2020, <a href="/papers/ai-in-our-daily-lives-alfaro-2020.pdf"><em>AI in our daily lives</em></a>, asked how human AI can become. I built a chatbot, first in C# with a Unity client and then as a neural network in Python, and had people talk to it. That was two years before ChatGPT.',
      'What ties it together is verification. A high score on a test set isn’t enough for me. I use SHAP, Grad-CAM and LIME to see <em>why</em> a model decides what it decides, and more than once that has revealed shortcut learning.',
      'Outside of school I self-host the tools I would otherwise pay for and run local models on a 4 GB GPU.',
      'I’m a Swedish citizen and available for security vetting. Swedish is my first language, I’m fluent in English, and I’m currently on exchange in Taiwan, learning Mandarin.',
    ],
    skills: 'What I work with',
    experience: 'Experience',
    education: 'Education',
    exchange: 'Exchange semester',
    work: 'Looking for',
    workText: 'I’m looking for work in AI, sensor systems or software development, especially in the defence industry. The fastest way to reach me is',
    emailWord: 'email',
    sep: ', ', end: '.',
  },
  notFound: { title: 'Not found', heading: 'No detections here.', text: 'This page doesn’t exist, or it moved.', home: 'Go to the home page' },
};

type Dict = typeof en;

const zh: Dict = {
  siteTitle: 'AI 與機器學習',
  skip: '跳到主要內容',
  nav: { projects: '作品', homelab: '自架伺服器', notes: '筆記', about: '關於我', contact: '聯絡' },
  navLabel: '主選單',
  langLabel: '語言',
  darkMode: '深色模式',
  footerBig: '聯絡方式',
  footerBuilt: '使用 Astro 與 Claude Code 製作，為生成式 AI 課程的作業。',
  elsewhere: '其他連結',
  tags: { research: '研究', defence: '國防', xai: '可解釋 AI', edge: '邊緣 AI', llm: '大型語言模型與代理', homelab: '自架伺服器' },

  hero: {
    pre: '', name: '亞歷山大·阿爾法羅', mid1: '。', see: '電腦視覺',
    mid2: '、', check: '可解釋 AI', post: ' 與邊緣 AI。',
    intro: '人工智慧與機器學習碩士生。作品包括為 FMV 開發、在 Raspberry Pi 5 上以每秒 60 幀運行的反無人機攔截機、無 GPS 環境下的無人機導航、深偽偵測，以及為 IKEA 開發的 MCP 伺服器。',
    cta: '查看作品', email: '寄信',
    studentId: '學號', schools: '瑞典 BTH・長庚大學交換學生',
  },
  now: '最近在做',
  projectsTitle: '作品',
  projectsIntro: '研究、國防相關工作與自架工具。',
  filterLabel: '篩選作品',
  all: '全部',
  labTitle: '自架伺服器',
  labText: [
    '在一台舊 Acer 筆電上自架服務，取代付費訂閱，並可透過私人 VPN 遠端連線。',
    '只有 4 GB 顯示記憶體，每個模型都必須塞進有限的記憶體，這正是邊緣部署的限制。新點子都先在這裡測試。',
  ],
  dashboardAlt: '我為伺服器寫的監控儀表板，顯示溫度、CPU、記憶體、儲存空間與 GPU',
  dashboardCaption: '我寫來監看伺服器狀態的儀表板。',
  rackLabel: '我家伺服器上運行的服務',
  replaces: '取代',
  notesTitle: '筆記',
  allNotes: '所有筆記',
  notesIntro: '關於我正在做的東西，以及從中學到什麼的短文。',

  allProjects: '所有作品',
  numbers: '數據',
  readMore: '延伸閱讀',
  builtWith: '使用技術',
  newer: '較新',
  older: '較舊',
  moreProjects: '更多作品',

  about: {
    title: '關於我',
    description: '背景、技能、經歷與學歷。',
    studentId: '學號',
    lede: '人工智慧與機器學習碩士生，專注於電腦視覺、可解釋 AI 與邊緣部署，主要應用於國防領域。',
    body: [
      '我正在瑞典布萊金厄理工學院（Blekinge Institute of Technology）攻讀人工智慧與機器學習工程碩士，目前在最後階段。我最主要的作品都和國防有關：與瑞典國防物資管理局（FMV）及海洋科技中心（MTC）合作的反無人機攔截機的電腦視覺，以及在 GPS 被干擾時無人機的導航。',
      '我很早就開始接觸 AI。2020 年我的高中畢業專題<a href="/papers/ai-in-our-daily-lives-alfaro-2020.pdf">《AI in our daily lives》</a>探討 AI 能變得多像人：我先用 C# 搭配 Unity 做了一個聊天機器人，再用 Python 寫成神經網路版本，讓人和它對話。那是 ChatGPT 問世的兩年前。',
      '把這些串在一起的是「驗證」。測試集上的高分對我來說不夠。我用 SHAP、Grad-CAM 與 LIME 去看模型<em>為什麼</em>做出某個判斷，而且不只一次發現模型在走捷徑。',
      '課餘時間，我自己架設原本需要付費的工具，並在只有 4 GB 的 GPU 上執行本地模型。',
      '我是瑞典公民，可接受安全審查。母語是瑞典語，英語流利，目前在台灣交換並學習中文。',
    ],
    skills: '專長',
    experience: '經歷',
    education: '學歷',
    exchange: '交換學期',
    work: '求職方向',
    workText: '我正在尋找 AI、感測系統或軟體開發的工作，特別是國防產業。最快的聯絡方式是',
    emailWord: '電子郵件',
    sep: '，', end: '。',
  },
  notFound: { title: '找不到頁面', heading: '這裡什麼都沒偵測到。', text: '這個頁面不存在，或已經搬走了。', home: '回到首頁' },
};

export const ui: Record<Lang, Dict> = { en, zh };
export const t = (lang: Lang) => ui[lang];
