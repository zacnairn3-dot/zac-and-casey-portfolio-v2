# Zac & Casey — Portfolio (001)

A standalone, type-led portfolio site. Pure HTML/CSS/JS — no build step, no dependencies.
Same work and assets as the original site, restyled into a modern Swiss/brutalist system:
oversized Helvetica, parenthetical index numbers, and a **project-derived duotone palette**.

## Run locally

```sh
python3 -m http.server 8790 --directory .
```

Then open <http://localhost:8790>.

## Structure

- `index.html` — page shell (HUD, overlay nav, hero, work index, awards, contact). Sections are static; project panels, the index, and the awards board are rendered by JS.
- `script.js` — the `projects` array (content + media), the `tones` map (one signature colour per project), `awardsData`, and all interactions.
- `styles.css` — the whole design system.
- `assets/` — images, video posters, audio (self-contained copy).

## The palette

Each project carries a signature hue in the `tones` map in `script.js`. Panels alternate
between a **dark** and **light** duotone derived from that hue via CSS `color-mix()`
(see `.panel--tint-dark` / `.panel--tint-light` in `styles.css`). The vivid hue is reserved
for accents, headings, and the index hover-sweep — so the colour reads as atmosphere, not noise.

| Project            | Hue            |
| ------------------ | -------------- |
| Hard Rated         | amber / ochre  |
| WWF                | forest green   |
| X by Long White    | electric purple|
| Realestate.co.nz   | signpost blue  |
| Black Heart Rum    | oxblood        |
| No Ugly Gut        | coral red      |
| Post-it            | gold           |
| Bulla Family Dairy | dairy teal     |

To re-theme a project, change its hex in `tones`. To reorder, reorder the `projects` array.

## Notes

- Vimeo films are click-to-load (poster first), so the page stays light until you play one.
- Black Heart's radio tracks use a custom audio player with expandable lyrics.
- Motion respects `prefers-reduced-motion`; the cursor-follow preview is disabled on touch.
