# sveflare-landing

Landing page for [sveflare](https://github.com/Jujubalandia/dsh-sveltekit-cloudflare),
a DeepSeek Harness bundle for SvelteKit on Cloudflare.

Next.js 16 (App Router) + React 19 + TypeScript. No CSS framework: the design
system is plain CSS custom properties in `app/globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

```
app/
  layout.tsx    metadata + the three fonts, self-hosted through next/font
  globals.css   design tokens and primitives, the whole design system
  content.ts    all copy, in EN / PT / ES, plus the terminal transcripts
  page.tsx      the page: hero, stats, pipeline, features, terminal, install, contribute
```

Copy lives in `content.ts` and nowhere else. Adding a string to `page.tsx`
means it cannot be translated, so keep it out.

## Design language

Derived from its sibling page, [rh-harness-landing](https://github.com/Jujubalandia/rh-harness-landing),
which is the same author's landing for the React Native harness. Shared:
cool grey base, all-sharp zero-radius geometry, 1px dividers, blueprint
registration marks on framed panels, condensed display type, monospace
terminal motifs, and the animated orb background.

Three deliberate differences:

- **Accent.** Warm copper (`#9a5a28`) instead of steel blue, so the two
  harness pages are distinguishable at a glance. One accent, no third hue.
- **Contrast.** The primary button measures 4.85:1 against the page
  background, clearing WCAG AA for normal text. The reference's blue
  measures 3.6:1 and does not.
- **Fonts.** Loaded once through `next/font`, self-hosted at build time. The
  reference loaded the same three families twice, by `@import` in CSS and by
  `<link>` in the layout, both render-blocking.

## Languages

The page ships in English, Portuguese and Spanish. The switcher persists the
choice in `localStorage` under `sveflare-lang`. Terminal transcripts stay in
English in every language, since that is what terminals emit.
