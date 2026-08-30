# EcoHubs Docs Site — Plan

Static documentation site around the RCOS-ecohubs repo. Designed to be forked
and rebranded by other communities, with a future backend + AI integration
path.

## Stack

- **Astro 5** — static output; deploys to Vercel, Cloudflare Pages, GitHub
  Pages, or Plesk by uploading `dist/`.
- **Svelte** (`@astrojs/svelte`) — interactive islands only (FAQ accordion,
  sidebar expand/collapse, future proposal form).
- **Tailwind CSS** reading from CSS variables defined in
  `src/styles/theme.css` — forks override one file to rebrand.
- **MDX** where a markdown page needs an embedded component.
- **Content Collections** pointing at the existing repo folders via globs —
  content files stay in place.
- **Pagefind** — deferred to v2.

## Hosting

- **Vercel** for v1 (user already has a Vercel account).
- Project root: `site/`. Build command: `astro build`. Output: `site/dist/`.
- SSR routes later (proposal submission, AI) via Vercel Functions.

## Sitemap

```
/                         Landing (hero, explainer, dashboard, FAQ, RCOS link)
/layers                   Layer index (7 cards)
/layers/0-identity        Layer landing: cards/links to its artifacts
/layers/0-identity/[slug] Individual artifact page
… through /layers/6-evolution/*
/compliance               Renders compliance/checklist.md
/proposals/passed         Index of passed proposals
/proposals/passed/[slug]  Individual passed proposal
/proposals/rejected       Index of rejected proposals
/proposals/rejected/[slug]
/proposals/future         Renders resources/future-proposals.md
```

Hidden from the site (internal-only): `internal/RCOS_v01-reduced.md`,
`internal/ecohubs_community_overview.md`,
`resources/missing-technical-implementations.md`.

## Navigation

Sidebar-only, collapsible sections:

```
Home
Layers ▾
  0 — Identity
  1 — Membership
  2 — Governance
  3 — Economy
  4 — Conflict
  5 — Operations
  6 — Evolution
Compliance
Proposals ▾
  Passed
  Rejected
  Future
FAQ
```

FAQ link scrolls to the landing-page FAQ section for v1.

## Landing page

- Hero + short explainer of what this site is
- Link to RCOS framework: https://rcos.ecohubs.community
- **Dashboard tiles**
  - *Latest proposals*: last N entries from `proposals/passed/` +
    `proposals/rejected/`, sorted by frontmatter `date`
  - *Compliance status*: parse `compliance/checklist.md`, count `[x]` vs
    `[ ]`, render as progress ring
  - *Active layer highlights*: curated in `src/data/highlights.json`
- FAQ section (loads from `src/content/faq.md`)

## Content repo changes

Move these three files out of `resources/` (they are internal reference, not
public docs):

```
resources/RCOS_v01:reduced.md                 → internal/RCOS_v01-reduced.md
resources/ecohubs_community_overview.md       → internal/ecohubs_community_overview.md
```

> **Superseded 2026-08-30.** The plan also called for moving
> `resources/missing-technical-implementations.md` into `internal/` and
> `resources/future-proposals.md` to `proposals/future.md`. Both were copied
> rather than moved, leaving two diverging versions of each. Consolidated back
> onto the `resources/` copies, which artifacts and the compliance checklist
> already linked to; the duplicates were deleted.

The `resources/` folder holds the future-proposals and
missing-technical-implementations docs.

## Proposal frontmatter schema

Enforced by an Astro content-collection Zod schema. Build fails if a proposal
is missing a required field.

```yaml
---
title: Treasury spending thresholds
date: 2026-04-15          # decision date, ISO
status: passed            # passed | rejected
layers: [2, 3]            # affected layers (ints 0–6)
decision_type: strategic  # strategic | operational | constitutional
vote_result: "12-2-1"     # optional: for/against/abstain
summary: One-sentence hook shown in list view.
---
```

`proposals/passed/` and `proposals/rejected/` are currently empty, so there
is no migration — the schema applies to the first real proposal.

## Content collections

```
layers      → glob: ../layers/*/*.md
proposals   → glob: ../proposals/{passed,rejected}/*.md, schema above
compliance  → ../compliance/checklist.md
future      → ../resources/future-proposals.md
faq         → src/content/faq.md
layer-meta  → src/content/layer-meta/{0..6}.md  (hero copy, icon, summary)
highlights  → src/data/highlights.json          (landing page)
```

## Theming

Single file for forks to override:

```css
/* src/styles/theme.css */
:root {
  --color-bg: …;
  --color-surface: …;
  --color-primary: …;
  --color-text: …;
  --color-muted: …;
  --font-body: …;
  --font-heading: …;
  --radius: …;
  --max-width: …;
}
```

Tailwind config maps these to utility classes so components stay portable.

## Folder layout

```
RCOS-ecohubs/
├── layers/            (existing, unchanged)
├── proposals/
│   ├── passed/        (existing)
│   ├── rejected/      (existing)
│   └── future.md      (moved from resources/)
├── compliance/        (existing)
├── internal/          (new: non-public reference)
├── site/              (new: Astro project)
│   ├── PLAN.md
│   ├── astro.config.mjs
│   ├── package.json
│   ├── tailwind.config.js
│   ├── src/
│   │   ├── content/
│   │   │   ├── config.ts        # collection schemas
│   │   │   ├── faq.md
│   │   │   └── layer-meta/
│   │   ├── data/
│   │   │   └── highlights.json
│   │   ├── components/          # .svelte + .astro
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── styles/
│   │       └── theme.css
│   └── public/
└── AGENTS.md, README.md, CONTRIBUTING.md (existing)
```

## Future backend (out of scope for v1)

- Flip specific routes to SSR via Astro's hybrid mode.
- Vercel Functions for proposal submission endpoint.
- AI integration: Anthropic SDK called from a server route, never from the
  client.
- Auth: deferred — likely a lightweight solution tied to the community's
  identity layer.

## Build order for v1

1. Move internal files + `future-proposals.md` as specified.
2. Scaffold Astro project in `site/` with Svelte + Tailwind + MDX.
3. Content collections + schemas.
4. Layouts: base, sidebar, landing.
5. Routes: landing, layers index, layer page, proposals indexes, compliance,
   future proposals.
6. Components: sidebar (Svelte), FAQ accordion (Svelte), dashboard tiles
   (Astro + small Svelte bits).
7. Theme variables + basic typography pass.
8. Deploy to Vercel.
