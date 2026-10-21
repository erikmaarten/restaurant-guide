# Stockholm Restaurant Guide

A SvelteKit app listing 20 restaurant recommendations for the Stockholm area.
Each entry has a title, description and a rating, and links to its own detail page.

Live site: https://erikmaarten.github.io/restaurant-guide/

## Features

- 20 curated restaurants across Stockholm (Norrmalm, Södermalm, Östermalm, Vasastan, Gamla Stan, Djurgården)
- Title, description and 0–5 rating for each entry
- Live search across name, description, area and cuisine
- Cuisine filter and sorting by rating or name
- Responsive card grid, dark theme
- A detail page per restaurant with hours, best sellers, owner, address, phone and booking link

## Developing

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Building

The site is prerendered to static files with `@sveltejs/adapter-static`.

```bash
npm run build
# To preview exactly what GitHub Pages serves (note the base path):
BASE_PATH=/restaurant-guide npm run preview   # http://localhost:4173/restaurant-guide
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The workflow sets `BASE_PATH` automatically, because the
site is served from `/restaurant-guide/` rather than the domain root. Internal links use
`resolve()` from `$app/paths` so they respect that base path.

## Project structure

- `src/lib/restaurants.js` — the list data shown on the cards (typed via JSDoc)
- `src/lib/restaurant-details.js` — the detail-page data, keyed by restaurant id
- `src/routes/+page.svelte` — the guide page with search, filter and sort
- `src/routes/restaurant/[id]/` — the detail page for each restaurant

## Notes

This is a plain JavaScript project — no TypeScript source files. `svelte-check` still runs
for Svelte diagnostics, and `typescript` remains installed as its transitive dependency.
