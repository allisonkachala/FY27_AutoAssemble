# FY27 AutoAssemble — Data Panel L1 Prototype

High-fidelity interactive prototype of the Fusion **Data Panel_L1** screen from Figma, built with React, TypeScript, and Weave Supernova components.

**Figma:** [Data Panel_L1 (82:37068)](https://www.figma.com/design/DeJFWI1GdkpLDtCsQbE7EK/FY27-AutoAssemble?node-id=82-37068)

## Quick start

### HTML prototype (no build required) — recommended

Open directly in a browser:

```
docs/index.html
```

Or view the hosted GitHub Pages site after enabling **Settings → Pages → Build from branch → `/docs`**.

Uses Figma-exported assets for toolbar, viewport, browser, view cube, timeline, and QAT icons. Data Panel matches node `82:37201` tokens.

### React + Weave prototype

```bash
npm install
npm run dev
```

> **Note:** `@weave-mui/*` packages are hosted on Autodesk's internal npm registry. Configure `.npmrc` with your registry credentials before installing. See [Weave MUI docs](https://weave.autodesk.com/).

## Project structure

```
your-repository/
├── .github/
├── docs/                # GitHub Pages (V2 AutoAssemble HTML prototype)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── V1_AutoAssemble/     # Original HTML prototype (local reference)
├── src/                 # React + Weave prototype
│   ├── components/
│   │   ├── dataPanel/
│   │   ├── fusionChrome/
│   │   └── shared/
│   ├── data/
│   ├── pages/
│   ├── theme/
│   └── types/
├── package.json
└── README.md
```

## Prototype scope

- **Fully interactive:** Data Panel (tabs, upload, new folder, file tiles, settings menu, states)
- **Static/simplified:** Fusion top bar, toolbar, browser, viewport, view cube, timeline

See [PROTOTYPE_DELIVERABLES.md](./PROTOTYPE_DELIVERABLES.md) for component mapping, interactions, gaps, and QA checklist.

## Simulate prototype states

Open the **settings gear** (⚙) in the Data Panel action bar:

- Sort by name / date / type
- Simulate loading, empty, or error states

## Assumptions

- `[ProjectName]` → "FY27 AutoAssemble"
- `[File Name]` → realistic `.f3d` mock filenames
- People tab layout inferred (no dedicated Figma frame)
- Tile expanded metadata inferred (hidden in L1 Figma frame)
