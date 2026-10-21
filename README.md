# Stockholm Restaurant Guide

A single-page SvelteKit app listing 20 restaurant recommendations for the Stockholm area.
Each entry has a title, description and a rating.

## Features

- 20 curated restaurants across Stockholm (Norrmalm, Södermalm, Östermalm, Vasastan, Gamla Stan, Djurgården)
- Title, description and 0–5 rating for each entry
- Live search across name, description, area and cuisine
- Cuisine filter and sorting by rating or name
- Responsive card grid, dark theme

## Developing

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Building

```bash
npm run build
npm run preview
```

## Project structure

- `src/lib/restaurants.js` — the restaurant data (typed via JSDoc)
- `src/routes/+page.svelte` — the single page with the guide UI

## Notes

This is a plain JavaScript project — no TypeScript source files. `svelte-check` still runs
for Svelte diagnostics, and `typescript` remains installed as its transitive dependency.
