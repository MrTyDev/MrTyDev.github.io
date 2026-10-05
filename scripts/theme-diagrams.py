"""Make light and dark versions of the hand-drawn diagrams.

Each diagram in src/content/projects/images/diagrams/ is an SVG whose colours
come only from CSS classes. This writes <name>-dark.svg and <name>-light.svg
next to the project images by inserting the matching palette.

Run after editing a diagram:  python3 scripts/theme-diagrams.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src/content/projects/images/diagrams"
OUT = ROOT / "src/content/projects/images"

PALETTES = {
    "dark": {
        "bg": "#17163a", "grid": "#ffffff", "grid-o": "0.06",
        "box": "#25244f", "box-line": "#4a4790", "ink": "#ffffff", "soft": "#c9c3ff",
        "accent-line": "#8f7aff", "doc": "#25244f", "doc-line": "#4a4790", "doc-text": "#8a86c4",
        "card": "#ffffff", "card-text": "#17163a", "arrow": "#c9c3ff", "note": "#ffd28a", "faint": "#8a86c4",
    },
    "light": {
        "bg": "#f4f2ff", "grid": "#6b4fd8", "grid-o": "0.07",
        "box": "#ffffff", "box-line": "#cfc9f5", "ink": "#1d1a4a", "soft": "#5b4bb5",
        "accent-line": "#5a42c4", "doc": "#eceaf8", "doc-line": "#d6d1f2", "doc-text": "#8d89b3",
        "card": "#ffffff", "card-text": "#1d1a4a", "arrow": "#6b5fc7", "note": "#9a5800", "faint": "#7d79a8",
    },
}

def style(p):
    return f"""<style>
  .bg {{ fill: {p['bg']}; }}
  .grid {{ stroke: {p['grid']}; stroke-opacity: {p['grid-o']}; fill: none; }}
  .box {{ fill: {p['box']}; stroke: {p['box-line']}; }}
  .ink {{ fill: {p['ink']}; }}
  .soft {{ fill: {p['soft']}; }}
  .soft-line {{ stroke: {p['soft']}; fill: none; }}
  .accent {{ fill: #6b4fd8; stroke: {p['accent-line']}; }}
  .on-accent {{ fill: #ffffff; }}
  .on-accent-soft {{ fill: #e3ddff; }}
  .chip {{ fill: #ffffff; fill-opacity: 0.18; }}
  .doc {{ fill: {p['doc']}; stroke: {p['doc-line']}; }}
  .doc-text {{ fill: {p['doc-text']}; }}
  .cross {{ stroke: {p['doc-text']}; fill: none; }}
  .card {{ fill: {p['card']}; }}
  .card-text {{ fill: {p['card-text']}; }}
  .amber {{ fill: #ff9f1c; }}
  .amber-line {{ stroke: #ff9f1c; fill: none; }}
  .amber-text {{ fill: #1b1300; }}
  .arrow {{ stroke: {p['arrow']}; fill: none; }}
  .arrow-head {{ fill: {p['arrow']}; }}
  .note {{ fill: {p['note']}; }}
  .faint {{ fill: {p['faint']}; }}
  .ring {{ stroke: {p['box-line']}; fill: none; }}
</style>"""

for src in sorted(SRC.glob("*.svg")):
    text = src.read_text()
    for name, palette in PALETTES.items():
        out = OUT / f"{src.stem}-{name}.svg"
        out.write_text(text.replace("<!--STYLE-->", style(palette)))
        print("wrote", out.relative_to(ROOT))
