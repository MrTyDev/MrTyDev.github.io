// Everything on the site that isn't a project or a note lives here.
// Text a visitor reads is per language: English below, Chinese in site.zh.ts.
import type { Lang } from '../i18n/ui';
import { zh } from './site.zh';

// Required by the course: name in English and Chinese, and student ID.
export const identity = {
  nameEn: 'Alexander Alfaro',
  nameZh: '亞歷山大·阿爾法羅',
  studentId: 'M1561036',
};

export const site = {
  name: 'Alexander Alfaro',
  short: 'AA',
  email: 'alexander.alfaro.010820@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/MrTyDev' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexanderandresalfaro' },
  ],
  serverName: 'mrtyserver',
};

const en = {
  description:
    'Alexander Alfaro builds computer vision for cheap hardware and checks what the models were actually looking at. AI & machine learning at BTH, Karlskrona.',

  // "Right now": edit these whenever life changes.
  now: [
    { label: 'Building', text: 'More things for my home server, like my own audiobook reader.' },
    { label: 'Studying', text: 'Final stretch of my MSc in AI & machine learning at BTH, now on exchange at Chang Gung University in Taiwan. Graduating June 2027.' },
    { label: 'Learning', text: 'Mandarin with Zhuyin, on a typing trainer I wrote for myself.' },
    { label: 'Looking for', text: 'Work in AI, sensor systems or software for the defence industry.' },
  ],

  skills: [
    { area: 'Machine learning', items: 'Deep learning, computer vision, object detection, sensor fusion, state estimation, classical regression, Optuna' },
    { area: 'Explainable AI', items: 'SHAP, Grad-CAM, LIME, feature attribution, finding data leaks and shortcut learning' },
    { area: 'Edge & embedded', items: 'Quantisation, real-time optimisation, AI accelerators, Raspberry Pi, PX4 and MAVLink, Gazebo SITL' },
    { area: 'LLMs & agents', items: 'Claude and GPT integration, Model Context Protocol, RAG, model routing, Ollama, multi-agent systems' },
    { area: 'Code', items: 'Python, C, C#, JavaScript, TypeScript, PyTorch, OpenCV, scikit-learn, FastAPI' },
    { area: 'Ways of working', items: 'Git, Linux, Scrum, CRISP-DM, system design, requirements analysis, testing' },
  ],

  experience: [
    {
      role: 'AI engineer, Skarven counter-drone project',
      org: 'FMV and Marine Technology Center student challenge',
      when: 'June 2025 – now',
      text: 'Built the computer vision pipeline for an autonomous drone interceptor and ran it at 60 FPS on a Raspberry Pi 5. Demonstrated to the Swedish Armed Forces, FMV, the Navy and Saab.',
      link: '/projects/skarven/',
    },
    {
      role: 'Software developer',
      org: 'IKEA / Ingka Group',
      when: 'Aug – Dec 2025',
      text: 'Built a Model Context Protocol server that helps AI assistants find the current observability standard among outdated documents and implement it. Senior developers went from weeks to hours.',
      link: '/projects/ingka-mcp/',
    },
  ],

  // Exchange semester. Leave school empty to hide the line.
  exchange: { school: 'Chang Gung University', place: 'Taoyuan, Taiwan', when: 'Autumn 2026' },

  education: {
    degree: 'MSc in Engineering, AI and Machine Learning',
    school: 'Blekinge Institute of Technology, Karlskrona, Sweden',
    years: '2021–2027',
    detail: '210 of 300 credits done. Expected graduation June 2027.',
    courses: [
      { area: 'AI', items: 'Machine Learning, Advanced Machine Learning (grade A), Deep Machine Learning, Applied AI, Security in AI Systems' },
      { area: 'Software', items: 'Software Architecture, Software Testing, Advanced Software Project in a Team' },
      { area: 'Foundations', items: 'C and Python, Operating Systems, Data Structures and Algorithms' },
      { area: 'Maths', items: 'Linear Algebra, Calculus, Mathematical Statistics' },
    ],
  },

  specs: [
    { label: 'CPU', value: 'Intel i7-7700HQ, 4 cores' },
    { label: 'Memory', value: '12 GB' },
    { label: 'GPU', value: 'GTX 1050, 4 GB VRAM' },
    { label: 'Models', value: 'Ollama, Kokoro, Whisper' },
  ],
  extras: ['Jellyfin', 'Samba', 'A Flask dashboard', 'Private mesh VPN'],
};

export type SiteContent = typeof en;
const content: Record<Lang, SiteContent> = { en, zh };
export const getContent = (lang: Lang) => content[lang];
