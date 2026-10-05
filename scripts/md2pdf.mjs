// Render a Markdown file to a clean A4 PDF with headless Chromium.
//   node scripts/md2pdf.mjs input.md output.pdf [image ...]
// Images given after the output are appended as a figure appendix.
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

const [input, output, ...images] = process.argv.slice(2);
// Python-Markdown wants a blank line before lists and tables, and drops single
// line breaks; GitHub doesn't. Normalise first so both render the same.
const py = `
import re, sys, markdown
src = open(sys.argv[1]).read().split("\\n")
out = []
for line in src:
    starts_block = re.match(r"\\s*([-*] |\\d+\\. |\\|)", line)
    prev = out[-1] if out else ""
    prev_block = re.match(r"\\s*([-*] |\\d+\\. |\\|)", prev)
    if starts_block and prev.strip() and not prev_block:
        out.append("")
    out.append(line)
print(markdown.markdown("\\n".join(out), extensions=["tables", "fenced_code", "nl2br"]))
`;
const html = execFileSync('python3', ['-c', py, input]).toString();
const figures = images.map((p) => `<figure><img src="${pathToFileURL(resolve(p))}"><figcaption>${basename(p)}</figcaption></figure>`).join('');
const page = `<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=block" rel="stylesheet"><style>
  @page { size: A4; margin: 18mm 17mm; }
  body { font: 10.5pt/1.5 "Helvetica Neue", Arial, "Noto Sans TC", sans-serif; color: #10233a; }
  h1 { font-size: 19pt; margin: 0 0 6pt; } h2 { font-size: 13.5pt; margin: 16pt 0 5pt; } h3 { font-size: 11.5pt; margin: 12pt 0 4pt; }
  blockquote { margin: 6pt 0; padding: 4pt 10pt; border-left: 3px solid #ff9f1c; background: #fff7ea; }
  table { border-collapse: collapse; width: 100%; margin: 6pt 0; font-size: 9pt; } td, th { border: 1px solid #cfdbe4; padding: 3pt 5pt; vertical-align: top; text-align: left; }
  code { font: 9pt Menlo, monospace; background: #eef3f7; padding: 0 2pt; } hr { border: 0; border-top: 1px solid #cfdbe4; margin: 14pt 0; }
  figure { margin: 10pt 0; page-break-inside: avoid; } figure img { max-width: 100%; max-height: 230mm; border: 1px solid #cfdbe4; }
  figcaption { font-size: 8.5pt; color: #5a6e82; }
  .appendix { page-break-before: always; }
</style>${html}${figures ? `<div class="appendix"><h2>Figures</h2>${figures}</div>` : ''}`;
const tmp = resolve(output + '.html');
writeFileSync(tmp, page);
const { chromium } = await import(process.env.PLAYWRIGHT_CORE ?? 'playwright-core');
const b = await chromium.launch({ executablePath: process.env.HOME + '/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell', args: ['--no-sandbox', '--allow-file-access-from-files'] });
const p = await b.newPage();
await p.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
await p.pdf({ path: output, format: 'A4', printBackground: true, margin: { top: '18mm', bottom: '18mm', left: '17mm', right: '17mm' } });
await b.close();
execFileSync('rm', [tmp]);
console.log('wrote', output);
