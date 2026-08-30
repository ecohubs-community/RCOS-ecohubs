# EcoHubs Docs Site

Static site around the RCOS-ecohubs repo. Astro 6 + Svelte 5 + Tailwind 4.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview
```

## Deploy

Vercel: set project root to `site/`. Build command `astro build`. Output
directory `dist/`.

## Theming a fork

Edit `src/styles/theme.css` — all colors, fonts, radii live there as CSS
variables consumed by Tailwind 4's `@theme` directive.

## Content sources

Content files live in the parent repo and are pulled in via Astro content
collections (see `src/content.config.ts`):

- `../layers/*/*.md` — artifacts grouped by layer
- `../proposals/{passed,rejected}/*.md` — governance proposals
- `../resources/future-proposals.md` — future-proposals doc
- `../compliance/checklist.md` — compliance status

Site-local content (FAQ, landing dashboard data, layer summaries) lives in
`src/content/` and `src/data/`.
