# Recai Mete Bıçakcı — portfolio

Personal portfolio at [behzat.org](https://behzat.org/), focused on backend development, Linux infrastructure, DevOps/DevSecOps, and AI-powered automation.

## Local preview

No build step, runtime dependencies, JavaScript, analytics, or third-party font requests.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Preview the error page at `/404.html` (Python's server does not automatically use GitHub Pages' custom error page).

## Files

- `index.html`: profile, selected public repositories, achievements, and contact links.
- `assets/landing.css`: responsive layout, keyboard focus styles, and reduced-motion support.
- `assets/favicon.svg`: local vector favicon.
- `404.html`: custom error page.
- `CNAME`: existing custom domain; preserve when updating.
- `robots.txt` and `sitemap.xml`: search-engine discovery.

GitHub Pages publishes the repository root from `main`. Update the stylesheet version in both HTML files after CSS changes, and update the sitemap date after substantive content changes.

## Content notes

Use **Bıçakcı**, not **Bıçakçı**, including in metadata. The profile and four competition achievements are based on owner-provided LinkedIn information. Project names, links, and technology selections were checked against the public GitHub repositories. The terminal is an illustrative personal workflow, not live telemetry or a claim of production infrastructure.

## Redesign validation

Checked in Chrome at 320, 375, 768, 1024, and 1440 pixels:

- No horizontal page overflow or broken section anchors.
- No automated axe-core WCAG 2 A/AA or WCAG 2.1 AA violations on the tested pages.
- Keyboard skip link, section navigation, and 404 return link work.
- Reduced-motion preference disables smooth scrolling.
- No browser exceptions or failed local resource requests.

Automated accessibility checks are not a substitute for a complete manual accessibility audit.
