# Recai Mete Bıçakcı | personal site

Personal site at [behzat.org](https://behzat.org/), focused on agentic engineering, Linux, backend systems, and security.

## Preview and checks

No build step, runtime dependencies, JavaScript on the homepage, analytics, or third-party font requests.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
python3 -m unittest discover -s tests -v
```

GitHub Pages publishes the repository root from `main`. Preserve `CNAME`, the existing section anchors, and `/flyllm/` with its model binaries. Update the stylesheet version in both HTML files after CSS changes.

## Design and assets

The 2026-10-14 redesign uses charcoal surfaces, cream typography, and a muted copper accent taken from the owner-provided nighttime banner. `assets/banner.webp` is an optimized version of `bannerNew.png` (2048 × 768, approximately 124 KB). It is the only image used. On mobile the banner sits above the introduction; on desktop the introduction overlays the left side. System fonts keep the site self-contained. Design dials: variance 6, motion 3, density 3. Motion is limited to interaction feedback.

`index.html` contains the existing four public projects, four achievements, and contact links, plus banner-based social metadata. `404.html` uses the same theme. `assets/landing.css` includes keyboard focus styles and reduced-motion support. `robots.txt` and `sitemap.xml` retain search discovery. The browser-side FlyLLM experiment is preserved without changes.

Use **Bıçakcı**, not **Bıçakçı**. Achievements and contact details are carried over from the previous owner-approved site.

## Redesign verification

Fresh headless Chromium checks at 320, 375, 768, 1024, and 1440 pixels verified no horizontal overflow, image loading, unique heading, working section anchors, and keyboard skip link. Reduced motion disables smooth scrolling. Local resources, the error page return link, and all FlyLLM model files returned successfully. No browser exceptions or failed resource responses occurred. Desktop and mobile screenshots were visually reviewed.

The dependency-free tests check anchor validity, local assets, single banner use, domain configuration, preserved experiment files, metadata, and error-page navigation. No automated axe accessibility audit was run for this redesign.

## Rollback

Before deployment the previous production commit was `00e7ce5`. Revert the redesign merge through a new pull request to restore that version; GitHub Pages will redeploy the reverted content. Do not force-push main. A local Git bundle was also taken before editing.
