# Prototype Deliverables — Data Panel L1

## Component Mapping Table

| Figma element | Node / name | Weave Supernova component | Implementation | Gap |
|---------------|-------------|---------------------------|----------------|-----|
| Data / People tabs | Active mode tab (82:37203/37204) | Styled `button` (Tab-like) | `DataPanelTabs` + `SegmentedTab` in `dataPanel.styles.ts` | Fusion "Active mode tab" is design-only |
| Upload button | Button 3.0 primary (82:37206) | `Button` variant="contained" | `DataPanelActions` | Button 3.0 is design-only in Figma |
| New Folder button | Button 3.0 secondary (82:37207) | `Button` variant="outlined" | `DataPanelActions` | Same |
| Settings gear | Options (82:37208) | `IconButton` + `Tooltip` + `Popper`/`MenuList` | `DataPanelActions` | Inline SVG icon (no FUS_settings export) |
| Breadcrumb | home + caret + text (82:37210) | `Link`, `Typography`, `Box` | `ProjectBreadcrumb` | Custom inline SVG icons |
| File tile | Tile 3.0 (82:37217+) | Styled `Box` + `Typography` + `Collapse` | `FileTile` | Tile 3.0 is design-only |
| File thumbnail | 56×56 white box | `Box` | `FileTile` `ThumbnailBox` | — |
| Fusion Design icon | Fusion Design instance | Custom SVG | `FusionDesignIcon` | No icons-weave equivalent |
| Expand chevron | caret-down | `IconButton` + inline SVG | `FileTile` | — |
| File list | Frame 1597880284 | `Stack` in scrollable `Box` | `FileTileList` | — |
| Upload dialog | (inferred) | `Modal`, `TextField`, `Button` | `UploadDialog` | Not in L1 frame |
| New Folder dialog | (inferred) | `Modal`, `TextField`, `Button` | `NewFolderDialog` | Not in L1 frame |
| Settings menu | (inferred) | `MenuList`, `MenuItem`, `Popper`, `ClickAwayListener` | `DataPanelActions` | — |
| People tab | (inferred) | `Avatar`, `Typography`, `Stack` | `PeopleTabContent` | No Figma frame |
| Empty state | (inferred) | `Button`, `Typography`, `Box` | `DataPanelEmptyState` | EmptyState action API varies |
| Loading state | (inferred) | `Skeleton` | `FileTileList` | — |
| Error state | (inferred) | `Alert` | `FileTileList` | — |
| Top navigation | Top Navigation (82:37171) | Custom `Box`, `IconButton`, `Tooltip` | `FusionTopBar` | Fusion QAT ≠ GlobalHeader |
| Toolbar | Toolbar Fremont (82:37070) | Custom `Box` | `FusionToolbar` | No Weave equivalent |
| Browser | Browser Node/* (82:37380) | Custom tree with `role="tree"` | `FusionBrowser` | Product-specific nodes |
| View cube | Design/View Cube (82:37379) | Inline SVG | `ViewportArea` | Static only |
| 3D viewport | Screenshot (82:38450) | Gradient + SVG silhouette | `ViewportArea` | Placeholder |
| Timeline | Panel (82:37122) | `IconButton`, `Divider` | `FusionTimeline` | Fusion-specific |
| Panel layout | 428px sidebar | `Box`, CSS flex | `DataPanelL1Screen` | — |
| Theme | — | `ThemeProvider`, `CssBaseline` | `AppThemeProvider` | hig-light-gray / medium |

---

## Interaction Summary

| Interaction | Trigger | Behavior |
|-------------|---------|----------|
| Tab switch | Click Data / People | Swaps panel content; updates segmented tab styling |
| Tab keyboard | Arrow Left/Right on tab | Moves focus and selection between tabs |
| Upload | Click Upload | Opens modal; adds file to list on submit |
| New Folder | Click New Folder | Opens modal; validates non-empty name; adds folder |
| Settings menu | Click gear | Opens sort + state simulation menu |
| Sort | Settings → Sort by * | Re-orders file tiles |
| Tile select | Click tile body | Single-select highlight (blue border) |
| Tile expand | Click chevron | Toggles metadata panel; chevron rotates 180° |
| Breadcrumb home | Click home icon | Clears selection; restores files if empty |
| Simulate loading | Settings menu | Shows 5 skeleton tiles for 1.5s |
| Simulate empty | Settings menu | Clears files; shows empty state |
| Simulate error | Settings menu | Shows error Alert banner |
| People tab load | Switch to People | Brief skeleton loading on first switch |
| Browser expand | Click tree node | Toggles Fusion browser branches |
| Timeline play | Click play | Toggles play/pause icon (cosmetic) |
| Top bar icons | Hover | Tooltips only (no navigation) |

### Built-in Weave states

- **Button:** hover, focus-visible, pressed (via Weave Button)
- **IconButton:** hover, focus (settings, chevron, timeline)
- **Modal:** focus on open, Escape to close
- **MenuItem:** hover, selected (sort options)

---

## Known Gaps and Assumptions

### Gaps (Weave / Figma)

1. **Button 3.0, Tile 3.0, Active mode tab** — Figma marks as design-only; approximated with Weave Button, styled Box, custom segmented tabs
2. **Fusion QAT top navigation** — not GlobalHeader; custom dark chrome
3. **Fusion Fremont toolbar** — static placeholder blocks
4. **Fusion browser nodes** — simplified tree, not pixel-perfect
5. **View cube / 3D viewport** — SVG/gradient placeholders
6. **Fusion Design icon** — custom SVG (orange cube)
7. **People tab** — layout inferred from Data tab patterns
8. **Tile expanded content** — `childWrapper` hidden in L1; metadata rows inferred
9. **Private npm registry** — `@weave-mui/*` requires Autodesk registry access

### Assumptions

- Project name: "FY27 AutoAssemble"
- 9 mock `.f3d` files with realistic names and timestamps
- Single project root; no nested folder navigation in v1
- Upload/create are client-side simulations (no backend)
- Sidebar fixed at 428px; canvas flexes; min viewport 1280px

---

## QA Review Checklist

| Check | Status |
|-------|--------|
| Data Panel matches Figma node 82:37201 layout | Implemented |
| Tab active/inactive colors (#38ABDF / grey border) | Implemented |
| Equal-width Data/People tabs | Implemented |
| Buttons 32px height, right-aligned action bar | Implemented |
| 9 file tiles, 12px gap, 16px padding | Implemented |
| Tile: 56px thumbnail, title 14px bold, subtitle 12px | Implemented |
| Hover, focus, selected, expanded tile states | Implemented |
| Data ↔ People tab transition | Implemented |
| Upload / New Folder modals | Implemented |
| Empty, loading, error states (via settings menu) | Implemented |
| Keyboard: tabs (arrows), tiles (Enter/Space), modals | Implemented |
| Full screen: 428px panel + canvas chrome | Implemented |
| ARIA: tablist, tabpanel, tree, expanded, labels | Implemented |
| Fusion chrome visible (top bar, toolbar, browser, timeline) | Implemented |

### Visual differences (expected)

- Fusion toolbar/browser/toolbar icons are simplified geometric placeholders vs. pixel-perfect Fremont assets
- Viewport uses gradient + SVG silhouette instead of Figma screenshot embed
- Weave Button border-radius/colors may differ slightly from Button 3.0 design tokens
- People tab has no Figma reference — list layout is inferred

---

## Design Decisions

1. **Mock data separation** — All entities in `src/data/dataPanel.mock.ts`; components receive props/state only
2. **State simulation via settings menu** — Keeps UI clean while enabling QA of empty/loading/error without dev tools
3. **Segmented tabs as styled buttons** — Closer to Figma "Active mode tab" than standard Weave underline Tabs
4. **Tile as styled Box** — Avoids Card API mismatch with Tile 3.0; matches Figma `#F7F7F7` + 12px radius exactly
5. **Fusion chrome as separate folder** — Clear boundary between interactive prototype (dataPanel) and static context (fusionChrome)
