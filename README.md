# FY27 AutoAssemble — Data Panel L1 Prototype

High-fidelity interactive prototype of the Fusion **Data Panel_L1** screen from Figma, built with React, TypeScript, and Weave Supernova components.

**Figma:** [Data Panel_L1 (82:37068)](https://www.figma.com/design/DeJFWI1GdkpLDtCsQbE7EK/FY27-AutoAssemble?node-id=82-37068)

## Quick start

### HTML prototype (no build required) — recommended

Open directly in a browser:

```
prototype/index.html
```

Uses Figma-exported assets for toolbar, viewport, browser, view cube, timeline, and QAT icons. Data Panel matches node `82:37201` tokens.

### React + Weave prototype

```bash
npm install
npm run dev
```

> **Note:** `@weave-mui/*` packages are hosted on Autodesk's internal npm registry. Configure `.npmrc` with your registry credentials before installing. See [Weave MUI docs](https://weave.autodesk.com/).

## Project structure

```
src/
├── components/
│   ├── dataPanel/     # Interactive Data Panel (primary)
│   ├── fusionChrome/  # Simplified static Fusion shell
│   └── shared/        # Shared icons/utilities
├── data/              # Mock data (separated from presentation)
├── pages/             # Screen-level layouts
├── theme/             # Weave ThemeProvider wrapper
└── types/             # TypeScript interfaces
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
