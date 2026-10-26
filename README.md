# Recai Mete Bıçakcı | personal site

Personal site at [behzat.org](https://behzat.org/), covering Linux, backend systems, AI tooling, security and an interest in OSINT.

## Preview and checks

Static HTML, CSS and a small progressive enhancement script. No build step, runtime dependencies, trackers or third-party font requests.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
python3 -m unittest discover -s tests -v
node --check assets/landing.js
```

GitHub Pages publishes the repository root from `main`. Preserve `CNAME`, the existing section anchors, and `/flyllm/` with its model binaries. Update the stylesheet/script query versions after changes. The new OSINT anchor is `#osint`.

## Design

The October 2026 redesign follows the design-taste-frontend **name-as-monument** direction, seed **1883959160**. The owner's `rebehzat` handle becomes the main title and closing signature. Barlow Condensed and Barlow are self-hosted under the SIL Open Font License (included in `assets/fonts/OFL.txt`). Bottle-green ink, off-white ground and a yellow accent replace the old banner theme.

The work section shows the four original public projects. Pointer, keyboard focus or a Preview button selects the corresponding documentation screenshot and source link. On phones each image sits above its own project. Without JavaScript, all four projects and images remain visible in a responsive layout. The OSINT copy states interests, without asserting investigative experience or credentials. Original competition results and contact details are retained. Use **Bıçakcı**, not Bıçakçı.

The geometric R mark was drawn for this site. `favicon.svg`, `favicon.png`, and `apple-touch-icon.png` provide browser and home-screen icons. `social.png` replaces the old character banner in social metadata. The old banner is removed from the repository's current tree; historical commits may retain it.

## Image sources

These are real screenshots of the owner's public GitHub documentation, captured 2026-10-26. They are documentation previews, not fabricated terminal output. Each project links to its repository; the selected preview also provides a Read source link. The footer credits the owner's GitHub documentation.

| Asset | Source | Repository license |
| --- | --- | --- |
| `assets/pi-lumo.webp` | [pi-lumo README](https://github.com/rebehzat/pi-lumo#readme) | MIT |
| `assets/pi-ultracode.webp` | [pi-ultracode README](https://github.com/rebehzat/pi-ultracode#readme) | MIT |
| `assets/searxng-rs.webp` | [searxng-rs README](https://github.com/rebehzat/searxng-rs#readme) | AGPL-3.0 |
| `assets/samsung-s310-cbd-replacement.webp` | [S310 CBD replacement README](https://github.com/rebehzat/samsung-s310-cbd-replacement#readme) | See repository |

No stock/found photographs, found clips or generated character art are used. No relevant footage of these tools was present; the preview uses a small scroll-linked scale instead. No sample projects, claims, awards or testimonials were invented.

## Accessibility and motion

Semantic landmarks, one h1, descriptive links, a keyboard skip link and visible focus states. The recognition table keeps its table markup and uses two-column rows on phones. Motion uses transforms and opacity, with content visible before scripts run. Reduced motion cancels scripted entrances and disables CSS movement. Unsupported browser features fall back to the static layout.

## Redesign verification

The design inspector passes at 1440, 768 and 390 pixels with **0 failures**, down from 10, and one defended warning for no video. All final fold and page screenshots were opened and reviewed. Source lint passes. The three dependency-free site tests, JavaScript syntax and Git whitespace checks pass.

A separate Chromium run verifies all four project selections, keyboard focus and skip link, no overflow or broken images at 320/390/768/1440/1920 pixels, local assets and retained FlyLLM resources, reduced motion (zero active animations), no-JavaScript content, and the 404 return link. It records no browser exceptions or failed resource responses. No axe audit or live deployment is claimed.

## Rollback

The previous production source is `d1ba873f58309e384822262f70f66bcd548e7920`. Revert the redesign through a new pull request to restore it. Do not force-push `main`. Publishing is separate from preparing and testing this branch.
