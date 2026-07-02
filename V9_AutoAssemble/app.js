/**
 * Figma asset paths — exported from FY27-AutoAssemble file node 82:37068
 */
const ASSETS = {
  home: 'assets/home-icon.png',
  caret: 'assets/caret-icon.png',
  caretDown: 'assets/caret-down.png',
  settings: 'assets/panel-settings-icon.svg',
  fusion32: 'assets/fusion-icon-32.png',
  fusion16: 'assets/fusion-icon-16.png',
  hub: 'assets/hub-icon.png',
  caretHub: 'assets/caret-hub.png',
  sync: 'assets/sync-icon.png',
  search: 'assets/search-icon.png',
  close: 'assets/close-icon.png',
  qatHome: 'assets/qat-home.png',
  dataPanel: 'assets/data-panel-icon.png',
  file: 'assets/file-icon.png',
  save: 'assets/save-icon.png',
  undo: 'assets/undo-icon.png',
  redo: 'assets/redo-icon.png',
  doc: 'assets/doc-icon.png',
  plus: 'assets/plus-icon.png',
  ai: 'assets/ai-icon.png',
  extensions: 'assets/extensions-icon.png',
  job: 'assets/job-icon.png',
  help: 'assets/help-icon.png',
  viewport: 'assets/viewport.png',
  toolbar: 'assets/toolbar-ref.png',
  browser: 'assets/browser-ref.png',
  viewcube: 'assets/viewcube-ref.png',
  timeline: 'assets/timeline-ref.png',
  componentInsert: 'assets/component-insert.png',
  component2: 'assets/component-2.png',
  previewPurple: 'assets/preview-purple.svg',
  placementToolbar: 'assets/placement-toolbar.png',
  popoverAiSparkle: 'assets/popover-ai-sparkle.svg',
  popoverClose: 'assets/popover-close.svg',
  popoverComplete: 'assets/popover-complete.svg',
  popoverAlert: 'assets/popover-alert.svg',
  popoverError: 'assets/popover-error.svg',
  popoverCheckmark: 'assets/popover-checkmark.svg',
  markerCheckmarkRestBg: 'assets/marker-checkmark-rest-bg.svg',
  markerCheckmarkRestFg: 'assets/marker-checkmark-rest-fg.svg',
  markerCheckmarkSelectedBg: 'assets/marker-checkmark-selected-bg.svg',
  markerCheckmarkSelectedFg: 'assets/marker-checkmark-selected-fg.svg',
  markerToolbarConstraint: 'assets/marker-toolbar-constraint.svg',
  markerToolbarFlip: 'assets/marker-toolbar-flip.svg',
  markerToolbarSettingsStroke: 'assets/marker-toolbar-settings-stroke.svg',
  settingsPopoverAdd: 'assets/settings-popover-add.svg',
  settingsPopoverRemove: 'assets/settings-popover-remove.svg',
  settingsPopoverConstraintType: 'assets/settings-popover-constraint-type.svg',
  settingsPopoverFlip: 'assets/settings-popover-flip.svg',
  popoverConstraint: 'assets/popover-constraint.png',
  popoverFlip: 'assets/popover-flip.svg',
};

const CANVAS = { left: 428, top: 128, width: 1492, height: 917 };
const COMPONENT_SIZE = { width: 320, height: 542 };
const COMPONENT_1_ID = 'file-1';
const COMPONENT_2_ID = 'file-2';

/** Duration matches `.canvas-component.is-placing.is-animating` transition in styles.css */
const PLACING_GHOST_TRANSITION_MS = 400;
/** Figma node 100:48303 — marker + toolbar composite frame */
const PLACEMENT_HOVER_GROUP = {
  width: 113.923,
  height: 54,
  marker: { x: 0, y: 22, width: 32, height: 32 },
  toolbar: {
    x: 25,
    y: 0,
    width: 88.923,
    height: 32,
    /** Figma node 94:42668 — blue checkmark within toolbar */
    confirmButton: { x: 61.846, y: 4.923, width: 22.154, height: 22.154 },
  },
};
const PLACEMENT_PREVIEW_SIZE = { width: 60, height: 169 };

/** Figma node 93:40593 on artboard 93:39982 */
const SUGGESTIONS_POPOVER = { left: 1419, top: 193, width: 284, height: 226 };

/** Dialog — Figma node 178:78950 @ 1616,268 (placements 1–3) */
const PLACEMENT_SETTINGS_POPOVER = { left: 1616, top: 268, width: 284 };

/** Figma node 93:42001 — marker overlay aligned to component 1 screenshot */
const COMPONENT_1_OVERLAY = {
  componentRefWidth: 457,
  componentRefHeight: 773,
  overlay: { x: 45, y: 67, width: 419, height: 649 },
  markers: [
    { num: 1, x: 14, y: 0, width: 32, height: 32, variant: 'success' },
    { num: 2, x: 139, y: 74, width: 32, height: 32, variant: 'success' },
    { num: 3, x: 71, y: 181, width: 32, height: 32, variant: 'success' },
    { num: 4, x: 328, y: 179, width: 32, height: 32, variant: 'warning' },
  ],
};

/** Figma node 135:55423 — bar pagination uses markers 1–4 */
const PLACEMENT_BAR_MARKERS = COMPONENT_1_OVERLAY.markers;

/** Marker 1 uses ai-sparkle button — Figma node 681:97451 */
const SPARKLE_MARKER_NUM = 1;

let placementSparkleAnimated = false;

/** Figma node 135:56923 — marker hover toolbar (offset from marker top-left) */
const MARKER_HOVER_TOOLBAR = {
  width: 83.472,
  height: 30.154,
  offsetX: 26,
  offsetY: -23,
};

const PROJECT_NAME = '[ProjectName]';

const MOCK_FILES = [
  { id: 'file-1', name: 'component 1', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '12.4 MB', owner: 'Alex Chen', version: 'v3.2', insertPreview: ASSETS.componentInsert, insertSize: { width: 320, height: 542 } },
  { id: 'file-2', name: 'component 2', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '4.8 MB', owner: 'Maria Santos', version: 'v1.8', insertPreview: ASSETS.component2, insertSize: { width: 273, height: 542 } },
  { id: 'file-3', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '2.1 MB', owner: 'Alex Chen', version: 'v2.0' },
  { id: 'file-4', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '8.7 MB', owner: 'Jordan Lee', version: 'v4.1' },
  { id: 'file-5', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '1.3 MB', owner: 'Maria Santos', version: 'v1.2' },
  { id: 'file-6', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '956 KB', owner: 'Alex Chen', version: 'v1.5' },
  { id: 'file-7', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '3.2 MB', owner: 'Jordan Lee', version: 'v2.3' },
  { id: 'file-8', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '512 KB', owner: 'Maria Santos', version: 'v1.0' },
  { id: 'file-9', name: '[File Name]', modifiedAt: '2026-06-08T16:52:00', type: 'fusion-design', size: '6.1 MB', owner: 'Alex Chen', version: 'v1.1' },
];

const MOCK_PEOPLE = [
  { id: 'person-1', name: 'Alex Chen', role: 'Project Lead', email: 'alex.chen@autodesk.com', avatarInitials: 'AC' },
  { id: 'person-2', name: 'Maria Santos', role: 'Mechanical Engineer', email: 'maria.santos@autodesk.com', avatarInitials: 'MS' },
  { id: 'person-3', name: 'Jordan Lee', role: 'Industrial Designer', email: 'jordan.lee@autodesk.com', avatarInitials: 'JL' },
  { id: 'person-4', name: 'Sam Patel', role: 'Manufacturing Engineer', email: 'sam.patel@autodesk.com', avatarInitials: 'SP' },
  { id: 'person-5', name: 'Riley Morgan', role: 'Viewer', email: 'riley.morgan@autodesk.com', avatarInitials: 'RM' },
];

function formatModifiedDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
}

function sortFiles(files, sortBy) {
  const sorted = [...files];
  if (sortBy === 'name') return sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === 'modified') return sorted.sort((a, b) => new Date(b.modifiedAt) - new Date(a.modifiedAt));
  if (sortBy === 'type') return sorted.sort((a, b) => a.type.localeCompare(b.type));
  return sorted;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function fusionIcon(size) {
  return `<svg class="fusion-icon" width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#FF9448"/>
    <path d="M16 2V16L28 9L16 2Z" fill="#FF6B00"/>
    <path d="M16 16L28 9V23L16 30V16Z" fill="#E85D00"/>
    <path d="M16 16L4 9V23L16 30V16Z" fill="#FF9448"/>
    <path d="M4 9L16 16L28 9L16 2L4 9Z" fill="#FFB366"/>
  </svg>`;
}

function imgIcon(src, size, alt) {
  return `<img src="${src}" width="${size}" height="${size}" alt="${alt || ''}" class="icon-img" aria-hidden="true" />`;
}

const state = {
  activeTab: 'data',
  files: MOCK_FILES.map((f) => ({ ...f, expanded: false })),
  selectedFileId: null,
  sortBy: 'modified',
  listState: 'idle',
  errorMessage: null,
  settingsOpen: false,
  contextMenu: { open: false, fileId: null, x: 0, y: 0 },
  canvasComponents: [],
  drag: { fileId: null, active: false },
  placement: { active: false, fileId: null, x: 0, y: 0 },
  hoveredMarker: null,
  focusedPreviewMarker: null,
  selectedMarkerNums: [],
  placementBarIndex: 0,
  previewAllPlacements: true,
  suggestionsPopoverView: 'main',
  placementSettingsOpen: false,
  placementSettingsMarkerNum: null,
  placementSettingsInsertMenuOpen: false,
  placementSelectionInsertMenuOpen: false,
};

let els = {};
let suppressMenuClose = false;

function init() {
  els = {
    tabData: document.getElementById('tab-data'),
    tabPeople: document.getElementById('tab-people'),
    panelData: document.getElementById('panel-data'),
    panelPeople: document.getElementById('panel-people'),
    actionBar: document.getElementById('action-bar'),
    fileList: document.getElementById('file-list'),
    peopleList: document.getElementById('people-list'),
    settingsBtn: document.getElementById('settings-btn'),
    settingsMenu: document.getElementById('settings-menu'),
    breadcrumbHome: document.getElementById('breadcrumb-home'),
    uploadModal: document.getElementById('upload-modal'),
    folderModal: document.getElementById('folder-modal'),
    contextMenu: document.getElementById('context-menu'),
    canvasDropZone: document.getElementById('canvas-drop-zone'),
    canvasComponents: document.getElementById('canvas-components'),
    dragGhost: document.getElementById('drag-ghost'),
    artboard: document.querySelector('.artboard'),
    suggestionsPopover: document.getElementById('suggestions-popover'),
    suggestionsPopoverClose: document.getElementById('suggestions-popover-close'),
    suggestionsPopoverMain: document.getElementById('suggestions-popover-main'),
    suggestionsPopoverDetail: document.getElementById('suggestions-popover-detail'),
    suggestionsPopoverBack: document.getElementById('suggestions-popover-back'),
    suggestionsPopoverCheckboxMain: document.getElementById('suggestions-popover-checkbox-main'),
    suggestionsPopoverCheckboxDetail: document.getElementById('suggestions-popover-checkbox-detail'),
    placementSettingsPopover: document.getElementById('placement-settings-popover'),
    placementSettingsClose: document.getElementById('placement-settings-close'),
    placementSettingsPrev: document.getElementById('placement-settings-prev'),
    placementSettingsNext: document.getElementById('placement-settings-next'),
    placementSettingsInsert: document.getElementById('placement-settings-insert'),
    placementSettingsInsertCount: document.getElementById('placement-settings-insert-count'),
    placementSettingsInsertSplit: document.getElementById('placement-settings-insert-split'),
    placementSettingsInsertMenu: document.getElementById('placement-settings-insert-menu'),
    placementSettingsInsertSelected: document.getElementById('placement-settings-insert-selected'),
    placementSettingsSelectedCount: document.getElementById('placement-settings-selected-count'),
    placementSettingsWarning: document.getElementById('placement-settings-warning'),
    placementBar: document.getElementById('placement-bar'),
    placementBarInsertManually: document.getElementById('placement-bar-insert-manually'),
    placementBarInsertSelected: document.getElementById('placement-bar-insert-selected'),
    placementBarSelectedCount: document.getElementById('placement-bar-selected-count'),
    placementBarInsertSplit: document.getElementById('placement-bar-insert-split'),
    placementBarInsertMenu: document.getElementById('placement-bar-insert-menu'),
    placementBarInsertMenuCount: document.getElementById('placement-bar-insert-menu-count'),
  };

  bindEvents();
  bindOverlayInteractions();
  bindPlacementSettingsEvents();
  bindPlacementBarEvents();
  renderPeople();
  renderFiles();
  renderCanvasComponents();
  updateSuggestionsPopover();
  updatePlacementInsertMenus();
  updatePlacementSettingsPopover();
  updatePlacementBar();
  setSuggestionsPopoverView('main');
}

function bindEvents() {
  els.tabData.addEventListener('click', () => setTab('data'));
  els.tabPeople.addEventListener('click', () => setTab('people'));
  els.tabData.addEventListener('keydown', (e) => handleTabKey(e, 'data'));
  els.tabPeople.addEventListener('keydown', (e) => handleTabKey(e, 'people'));

  document.getElementById('btn-upload').addEventListener('click', () => openModal('upload'));
  document.getElementById('btn-new-folder').addEventListener('click', () => openModal('folder'));

  els.settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    state.settingsOpen = !state.settingsOpen;
    els.settingsMenu.classList.toggle('is-open', state.settingsOpen);
    els.settingsBtn.setAttribute('aria-expanded', String(state.settingsOpen));
  });

  document.addEventListener('click', (e) => {
    if (suppressMenuClose) return;
    if (state.settingsOpen) {
      state.settingsOpen = false;
      els.settingsMenu.classList.remove('is-open');
      els.settingsBtn.setAttribute('aria-expanded', 'false');
    }
    if (state.placementSettingsOpen
      && !e.target.closest('.placement-settings-popover, .marker-hover-toolbar')) {
      closePlacementSettingsPopover();
    }
    if (state.placementSettingsInsertMenuOpen
      && !e.target.closest('.placement-settings-popover__insert-group, .placement-settings-popover__menu')) {
      closePlacementSettingsInsertMenu();
    }
    if (state.placementSelectionInsertMenuOpen
      && !e.target.closest('#placement-bar, .placement-bar__insert-group, .placement-bar__menu--insert, #placement-bar-insert-menu')) {
      closePlacementBarInsertMenu();
    }
    closeContextMenu();
  });

  document.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.file-tile')) closeContextMenu();
  });

  els.contextMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = e.target.closest('[data-action]');
    if (!item || item.classList.contains('is-disabled')) return;
    handleContextMenuAction(item.dataset.action);
    closeContextMenu();
  });

  bindCanvasDropZone();

  if (els.suggestionsPopoverClose) {
    els.suggestionsPopoverClose.addEventListener('click', (e) => {
      e.stopPropagation();
      cancelPlacement();
    });
  }

  bindSuggestionsPopoverEvents();

  document.addEventListener('mousemove', onPlacementMove);
  document.addEventListener('click', onPlacementClick, true);

  els.settingsMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = e.target.closest('[data-action]');
    if (!item) return;
    handleSettingsAction(item.dataset.action);
    state.settingsOpen = false;
    els.settingsMenu.classList.remove('is-open');
  });

  els.breadcrumbHome.addEventListener('click', () => {
    state.selectedFileId = null;
    if (state.files.length === 0) {
      state.files = MOCK_FILES.map((f) => ({ ...f, expanded: false }));
      state.listState = 'idle';
    }
    renderFiles();
  });

  document.getElementById('upload-cancel').addEventListener('click', () => closeModal('upload'));
  document.getElementById('upload-submit').addEventListener('click', submitUpload);
  document.getElementById('folder-cancel').addEventListener('click', () => closeModal('folder'));
  document.getElementById('folder-submit').addEventListener('click', submitFolder);

  [els.uploadModal, els.folderModal].forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id === 'upload-modal' ? 'upload' : 'folder');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.placement.active) {
        cancelPlacement();
        return;
      }
      closeModal('upload');
      closeModal('folder');
      closeContextMenu();
    }
  });

  updateSortMenuUI();
}

function handleSettingsAction(action) {
  if (action.startsWith('sort-')) {
    state.sortBy = action.replace('sort-', '');
    updateSortMenuUI();
    renderFiles();
  } else if (action === 'simulate-loading') {
    state.listState = 'loading';
    renderFiles();
    setTimeout(() => { state.listState = 'idle'; renderFiles(); }, 1500);
  } else if (action === 'simulate-empty') {
    state.files = [];
    state.listState = 'empty';
    state.errorMessage = null;
    state.selectedFileId = null;
    renderFiles();
  } else if (action === 'simulate-error') {
    state.listState = 'error';
    state.errorMessage = 'Unable to load project files. Check your connection and try again.';
    renderFiles();
  }
}

function handleTabKey(e, current) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    setTab(current === 'data' ? 'people' : 'data');
    (current === 'data' ? els.tabPeople : els.tabData).focus();
  }
}

function setTab(tab) {
  state.activeTab = tab;
  els.tabData.setAttribute('aria-selected', tab === 'data' ? 'true' : 'false');
  els.tabPeople.setAttribute('aria-selected', tab === 'people' ? 'true' : 'false');
  els.tabData.tabIndex = tab === 'data' ? 0 : -1;
  els.tabPeople.tabIndex = tab === 'people' ? 0 : -1;
  els.panelData.hidden = tab !== 'data';
  els.panelPeople.hidden = tab !== 'people';
  els.actionBar.hidden = tab !== 'people' ? false : true;
  if (tab === 'people') {
    state.listState = 'loading';
    renderFiles();
    setTimeout(() => { state.listState = 'idle'; renderPeople(); }, 800);
  }
}

function getArtboardScale() {
  const rect = els.artboard.getBoundingClientRect();
  return rect.width / ARTBOARD_WIDTH;
}

function clientToArtboard(clientX, clientY) {
  const rect = els.artboard.getBoundingClientRect();
  const scale = getArtboardScale();
  return {
    x: (clientX - rect.left) / scale,
    y: (clientY - rect.top) / scale,
  };
}

function getFileById(fileId) {
  return state.files.find((f) => f.id === fileId);
}

function isDraggableFile(file) {
  return file && file.type === 'fusion-design';
}

function canInsertFile(file) {
  return isDraggableFile(file) && Boolean(file.insertPreview);
}

function getInsertSize(file) {
  if (file.id === COMPONENT_2_ID && shouldShowPlacementGuides()
    && getPlacingGhostMarkerNums().length > 0) {
    return getScaledComponent2Size() || file.insertSize || COMPONENT_SIZE;
  }
  if (file.id === COMPONENT_2_ID && shouldShowPlacementGuides() && getGhostAnchorMarkerNum() != null) {
    return getScaledComponent2Size() || file.insertSize || COMPONENT_SIZE;
  }
  return file.insertSize || COMPONENT_SIZE;
}

function getScaledComponent2Size() {
  const component1 = state.canvasComponents.find((c) => c.fileId === COMPONENT_1_ID);
  if (!component1) return null;

  const { overlay } = COMPONENT_1_OVERLAY;
  return {
    width: Math.round(component1.width * (PLACEMENT_PREVIEW_SIZE.width / overlay.width)),
    height: Math.round(component1.height * (PLACEMENT_PREVIEW_SIZE.height / overlay.height)),
  };
}

function getMarkerCanvasRect(markerNum) {
  const component1 = state.canvasComponents.find((c) => c.fileId === COMPONENT_1_ID);
  const marker = COMPONENT_1_OVERLAY.markers.find((m) => m.num === markerNum);
  if (!component1 || !marker) return null;

  const { overlay, componentRefWidth, componentRefHeight } = COMPONENT_1_OVERLAY;
  const preview = getPreviewPosition(marker);
  const overlayLeft = component1.x + (overlay.x / componentRefWidth) * component1.width;
  const overlayTop = component1.y + (overlay.y / componentRefHeight) * component1.height;
  const overlayWidth = (overlay.width / componentRefWidth) * component1.width;
  const overlayHeight = (overlay.height / componentRefHeight) * component1.height;

  return {
    x: overlayLeft + (preview.x / overlay.width) * overlayWidth,
    y: overlayTop + (preview.y / overlay.height) * overlayHeight,
    width: (preview.width / overlay.width) * overlayWidth,
    height: (preview.height / overlay.height) * overlayHeight,
  };
}

function getHoveredPreviewCanvasRect() {
  if (!state.hoveredMarker) return null;
  return getMarkerCanvasRect(state.hoveredMarker);
}

function getGhostAnchorMarkerNum() {
  if (!shouldShowPlacementGuides()) return null;

  if (state.hoveredMarker != null) {
    return state.hoveredMarker;
  }

  if (state.selectedMarkerNums.length > 0) {
    const focused = getActiveBarMarker()?.num;
    if (focused != null && state.selectedMarkerNums.includes(focused)) {
      return focused;
    }
    return state.selectedMarkerNums[state.selectedMarkerNums.length - 1];
  }

  return getActiveBarMarker()?.num ?? null;
}

function getPlacingGhostMarkerNums() {
  if (!shouldShowPlacementGuides()) return [];

  const selected = getSelectedPlacementMarkerNums();
  const nums = [...selected];

  if (state.hoveredMarker != null
    && PLACEMENT_BAR_MARKERS.some((marker) => marker.num === state.hoveredMarker)
    && !selected.includes(state.hoveredMarker)) {
    nums.push(state.hoveredMarker);
  }

  if (nums.length === 0) {
    const anchor = getGhostAnchorMarkerNum();
    if (anchor != null) nums.push(anchor);
  }

  return nums.sort((a, b) => a - b);
}

function getOverlayPreviewMarkerNums(selectedMarkerNums, showAllPreviews) {
  if (showAllPreviews || shouldShowPlacementGuides()) {
    return PLACEMENT_BAR_MARKERS.map((marker) => marker.num);
  }

  const nums = new Set(selectedMarkerNums);
  if (state.hoveredMarker != null
    && PLACEMENT_BAR_MARKERS.some((marker) => marker.num === state.hoveredMarker)) {
    nums.add(state.hoveredMarker);
  }

  if (nums.size === 0) {
    const focused = getActiveBarMarker()?.num ?? state.hoveredMarker;
    if (focused != null) nums.add(focused);
  }

  return [...nums].sort((a, b) => a - b);
}

function getPlacingGhostLayout() {
  const file = state.placement.active ? getFileById(state.placement.fileId) : null;
  if (!file) return null;

  const { width, height } = getInsertSize(file);
  const pos = clampComponentPosition(
    state.placement.x,
    state.placement.y,
    width,
    height,
    file.id,
  );

  return { x: pos.x, y: pos.y, width, height };
}

function startPlacement(fileId, artboardX, artboardY) {
  const file = getFileById(fileId);
  if (!canInsertFile(file)) return false;

  state.placement = {
    active: true,
    fileId,
    x: artboardX ?? CANVAS.left + CANVAS.width / 2,
    y: artboardY ?? CANVAS.top + CANVAS.height / 2,
  };
  state.selectedFileId = fileId;
  setSuggestionsPopoverView('main');

  if (fileId === COMPONENT_2_ID) {
    state.placementBarIndex = 0;
    state.previewAllPlacements = true;
    state.hoveredMarker = PLACEMENT_BAR_MARKERS[0]?.num ?? null;
    state.focusedPreviewMarker = PLACEMENT_BAR_MARKERS[0]?.num ?? null;
    state.selectedMarkerNums = [SPARKLE_MARKER_NUM];
    placementSparkleAnimated = false;
  }

  els.canvasDropZone.classList.add('is-placing');
  renderCanvasComponents();
  renderFiles();
  updatePlacementInsertMenus();
  return true;
}

function cancelPlacement() {
  if (!state.placement.active) return;
  state.placement = { active: false, fileId: null, x: 0, y: 0 };
  state.hoveredMarker = null;
  state.focusedPreviewMarker = null;
  state.selectedMarkerNums = [];
  state.placementBarIndex = 0;
  state.previewAllPlacements = true;
  placementSparkleAnimated = false;
  setSuggestionsPopoverView('main');
  closePlacementSettingsPopover();
  els.canvasDropZone.classList.remove('is-placing');
  renderCanvasComponents();
  updatePlacementInsertMenus();
}

function setSuggestionsCheckboxChecked(checkbox, checked) {
  if (!checkbox) return;
  checkbox.classList.toggle('is-checked', checked);
  checkbox.setAttribute('aria-checked', checked ? 'true' : 'false');
}

function toggleSuggestionsCheckbox(checkbox) {
  if (!checkbox) return;
  setSuggestionsCheckboxChecked(checkbox, !checkbox.classList.contains('is-checked'));
}

function setSuggestionsPopoverView(view) {
  state.suggestionsPopoverView = view;
  if (!els.suggestionsPopoverMain || !els.suggestionsPopoverDetail) return;

  const isMain = view === 'main';
  els.suggestionsPopoverMain.hidden = !isMain;
  els.suggestionsPopoverDetail.hidden = isMain;
  if (els.suggestionsPopover) {
    els.suggestionsPopover.classList.toggle('suggestions-popover--detail', !isMain);
  }
}

function bindSuggestionsPopoverEvents() {
  if (!els.suggestionsPopover) return;

  els.suggestionsPopover.addEventListener('click', (e) => {
    e.stopPropagation();

    const openDetail = e.target.closest('[data-action="open-success-detail"]');
    if (openDetail) {
      setSuggestionsPopoverView('detail');
      return;
    }

    if (e.target.closest('#suggestions-popover-back')) {
      setSuggestionsPopoverView('main');
      return;
    }

    const checkbox = e.target.closest('.suggestions-popover__checkbox');
    if (checkbox) {
      toggleSuggestionsCheckbox(checkbox);
    }
  });
}

function addCanvasComponent(component) {
  state.canvasComponents.push(component);
}

function createCanvasComponentFromLayout(file, layout, instanceId, { markerNum } = {}) {
  return {
    id: instanceId,
    fileId: file.id,
    ...(markerNum != null ? { markerNum } : {}),
    src: file.insertPreview,
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
  };
}

function confirmPlacement(options = {}) {
  if (!state.placement.active) return;

  const { fileId } = state.placement;
  const file = getFileById(fileId);
  if (!file) {
    cancelPlacement();
    return;
  }

  const placementStamp = Date.now();

  if (shouldShowPlacementGuides()) {
    let markerNums = options.markerNums ?? getSelectedPlacementMarkerNums();
    if (markerNums.length === 0 && !options.strictSelected) {
      const focused = getFocusedPlacementMarkerNum();
      if (focused) markerNums = [focused];
    }
    if (markerNums.length === 0) {
      if (!options.strictSelected) {
        cancelPlacement();
      }
      return;
    }

    markerNums.forEach((markerNum, index) => {
      const layout = getMarkerCanvasRect(markerNum);
      if (!layout) return;

      addCanvasComponent(createCanvasComponentFromLayout(
        file,
        layout,
        `component-${fileId}-${placementStamp}-${index}`,
        { markerNum },
      ));
    });
  } else {
    const layout = getPlacingGhostLayout();
    if (!layout) {
      cancelPlacement();
      return;
    }

    addCanvasComponent(createCanvasComponentFromLayout(
      file,
      layout,
      `component-${fileId}-${placementStamp}`,
    ));
  }

  cancelPlacement();
  renderCanvasComponents();
  renderFiles();
}

function onPlacementMove(e) {
  if (!state.placement.active) return;
  const { x, y } = clientToArtboard(e.clientX, e.clientY);
  state.placement.x = x;
  state.placement.y = y;
  if (!shouldShowPlacementGuides()) {
    updatePlacingGhost();
  }
}

function onPlacementClick(e) {
  if (!state.placement.active) return;
  if (e.target.closest('#placement-bar, .context-menu, .modal-overlay, .data-panel, .top-nav, .suggestions-popover, .placement-settings-popover, .component-overlay, .component-marker, .component-marker-wrap, .sketch-sparkle, .sketch-sparkle__btn, .marker-hover-toolbar, .placement-toolbar')) return;

  const { x, y } = clientToArtboard(e.clientX, e.clientY);
  const inCanvas = x >= CANVAS.left && x <= CANVAS.left + CANVAS.width
    && y >= CANVAS.top && y <= CANVAS.top + CANVAS.height;
  if (!inCanvas) return;

  e.preventDefault();
  e.stopPropagation();
  confirmPlacement();
}

function clampComponentPosition(x, y, width, height, fileId) {
  const minX = CANVAS.left;
  const minY = CANVAS.top;
  const maxX = CANVAS.left + CANVAS.width - width;
  const maxY = CANVAS.top + CANVAS.height - height;

  if (fileId === COMPONENT_2_ID) {
    return {
      x: Math.max(minX, Math.min(maxX, x - width)),
      y: Math.max(minY, Math.min(maxY, y)),
    };
  }

  return {
    x: Math.max(minX, Math.min(maxX, x - width / 2)),
    y: Math.max(minY, Math.min(maxY, y - height / 2)),
  };
}

function isPlacingComponent2() {
  return state.placement.active && state.placement.fileId === COMPONENT_2_ID;
}

function shouldShowPlacementGuides() {
  return isPlacingComponent2()
    && state.canvasComponents.some((component) => component.fileId === COMPONENT_1_ID);
}

function shouldShowPlacementBar() {
  return shouldShowPlacementGuides();
}

function shouldShowAllPlacementPreviews() {
  return shouldShowPlacementGuides();
}

function shouldShowPreviewPlacementHover() {
  return !state.placementSettingsInsertMenuOpen
    && !state.placementSelectionInsertMenuOpen;
}

function syncPreviewHoverVisualSuppression() {
  if (!els.artboard) return;
  els.artboard.classList.toggle(
    'is-preview-hover-visuals-suppressed',
    !shouldShowPreviewPlacementHover(),
  );
}

function getActiveBarMarker() {
  return PLACEMENT_BAR_MARKERS[state.placementBarIndex] ?? PLACEMENT_BAR_MARKERS[0] ?? null;
}

function getPlacementBarMarkerIndex(markerNum) {
  return PLACEMENT_BAR_MARKERS.findIndex((marker) => marker.num === markerNum);
}

function setPlacementBarCheckboxChecked(checkbox, checked) {
  if (!checkbox) return;
  checkbox.classList.toggle('is-checked', checked);
  checkbox.setAttribute('aria-checked', checked ? 'true' : 'false');
}

function getSelectedPlacementMarkerNums() {
  return [...state.selectedMarkerNums];
}

function isMarkerSelected(num) {
  return state.selectedMarkerNums.includes(num);
}

function getFocusedPlacementMarkerNum() {
  return getActiveBarMarker()?.num ?? state.hoveredMarker ?? null;
}

function togglePlacementMarker(num) {
  if (!PLACEMENT_BAR_MARKERS.some((marker) => marker.num === num)) return;

  const selectedIndex = state.selectedMarkerNums.indexOf(num);
  if (selectedIndex >= 0) {
    state.selectedMarkerNums.splice(selectedIndex, 1);
  } else {
    state.selectedMarkerNums.push(num);
    state.selectedMarkerNums.sort((a, b) => a - b);
  }

  state.hoveredMarker = num;
  const barIndex = getPlacementBarMarkerIndex(num);
  if (barIndex >= 0) {
    state.placementBarIndex = barIndex;
  }
  updatePlacementInsertMenus();
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function setPlacementBarIndex(index) {
  const max = PLACEMENT_BAR_MARKERS.length - 1;
  state.placementBarIndex = Math.max(0, Math.min(max, index));
  const marker = getActiveBarMarker();
  if (marker) {
    state.hoveredMarker = marker.num;
    state.focusedPreviewMarker = marker.num;
    if (state.placementSettingsOpen) {
      state.placementSettingsMarkerNum = marker.num;
    }
  }
  updatePlacementInsertMenus();
  if (state.placementSettingsOpen) {
    updatePlacementSettingsPopover();
  }
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function stepPlacementBarIndex(delta) {
  const total = PLACEMENT_BAR_MARKERS.length;
  if (total <= 0) return;
  const nextIndex = (state.placementBarIndex + delta + total) % total;
  setPlacementBarIndex(nextIndex);
}

function updatePlacementBar() {
  if (!els.placementBar) return;

  const selectedCount = getSelectedPlacementMarkerNums().length;
  const visible = shouldShowPlacementBar();
  els.placementBar.hidden = !visible;

  if (!visible) {
    closePlacementBarInsertMenu();
    return;
  }

  if (els.placementBarSelectedCount) {
    els.placementBarSelectedCount.textContent = String(selectedCount);
  }
  if (els.placementBarInsertMenuCount) {
    els.placementBarInsertMenuCount.textContent = String(selectedCount);
  }

  const hasSelection = selectedCount > 0;
  if (els.placementBarInsertSelected) {
    els.placementBarInsertSelected.disabled = !hasSelection;
    els.placementBarInsertSelected.classList.toggle('is-disabled', !hasSelection);
    els.placementBarInsertSelected.setAttribute('aria-disabled', hasSelection ? 'false' : 'true');
  }
  if (els.placementBarInsertSplit) {
    els.placementBarInsertSplit.disabled = !hasSelection;
    els.placementBarInsertSplit.classList.toggle('is-disabled', !hasSelection);
    els.placementBarInsertSplit.setAttribute('aria-disabled', hasSelection ? 'false' : 'true');
  }
}

function closePlacementBarInsertMenu() {
  if (!state.placementSelectionInsertMenuOpen) return;
  state.placementSelectionInsertMenuOpen = false;
  if (els.placementBarInsertMenu) {
    els.placementBarInsertMenu.hidden = true;
  }
  if (els.placementBarInsertSplit) {
    els.placementBarInsertSplit.setAttribute('aria-expanded', 'false');
  }
  syncPreviewHoverVisualSuppression();
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function togglePlacementBarInsertMenu() {
  if (els.placementBarInsertSplit?.disabled) return;

  state.placementSelectionInsertMenuOpen = !state.placementSelectionInsertMenuOpen;
  if (state.placementSelectionInsertMenuOpen) {
    updatePlacementBar();
  }
  if (els.placementBarInsertMenu) {
    els.placementBarInsertMenu.hidden = !state.placementSelectionInsertMenuOpen;
  }
  if (els.placementBarInsertSplit) {
    els.placementBarInsertSplit.setAttribute(
      'aria-expanded',
      state.placementSelectionInsertMenuOpen ? 'true' : 'false',
    );
  }
  syncPreviewHoverVisualSuppression();
  if (state.placementSelectionInsertMenuOpen) {
    refreshPlacementOverlay();
    updatePlacingGhost();
    const firstItem = els.placementBarInsertMenu?.querySelector('[data-action="insert"]');
    firstItem?.focus();
  } else {
    refreshPlacementOverlay();
    updatePlacingGhost();
  }
}

function bindPlacementBarEvents() {
  els.placementBarInsertManually?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlacementBarInsertMenu();
    insertManually();
  });

  els.placementBarInsertSelected?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlacementBarInsertMenu();
    const selected = getSelectedPlacementMarkerNums();
    if (selected.length === 0) return;
    confirmPlacement({ markerNums: selected, strictSelected: true });
  });

  els.placementBarInsertSplit?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    suppressMenuClose = true;
    togglePlacementBarInsertMenu();
    setTimeout(() => { suppressMenuClose = false; }, 0);
  });

  els.placementBarInsertMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = e.target.closest('[data-action]');
    if (!item) return;

    if (item.dataset.action === 'insert') {
      closePlacementBarInsertMenu();
      const selected = getSelectedPlacementMarkerNums();
      if (selected.length === 0) return;
      confirmPlacement({ markerNums: selected, strictSelected: true });
    } else if (item.dataset.action === 'insert-all') {
      closePlacementBarInsertMenu();
      confirmPlacement({
        markerNums: PLACEMENT_BAR_MARKERS.map((marker) => marker.num),
      });
    }
  });

  els.placementBar?.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

function updatePlacementInsertMenus() {
  const selectedCount = getSelectedPlacementMarkerNums().length;
  const hasSelection = selectedCount > 0;

  if (els.placementSettingsSelectedCount) {
    els.placementSettingsSelectedCount.textContent = String(selectedCount);
  }
  if (els.placementSettingsInsertCount) {
    els.placementSettingsInsertCount.textContent = String(selectedCount);
  }
  if (els.placementSettingsInsertSelected) {
    els.placementSettingsInsertSelected.classList.toggle('is-disabled', !hasSelection);
    els.placementSettingsInsertSelected.disabled = !hasSelection;
    els.placementSettingsInsertSelected.setAttribute('aria-disabled', hasSelection ? 'false' : 'true');
  }
  if (els.placementSettingsInsert) {
    els.placementSettingsInsert.disabled = !hasSelection;
    els.placementSettingsInsert.classList.toggle('is-disabled', !hasSelection);
    els.placementSettingsInsert.setAttribute('aria-disabled', hasSelection ? 'false' : 'true');
  }
  if (els.placementSettingsInsertSplit) {
    els.placementSettingsInsertSplit.disabled = !hasSelection;
    els.placementSettingsInsertSplit.classList.toggle('is-disabled', !hasSelection);
    els.placementSettingsInsertSplit.setAttribute('aria-disabled', hasSelection ? 'false' : 'true');
  }

  updatePlacementBar();
}

function insertManually() {
  if (!state.placement.active) return false;

  const file = getFileById(state.placement.fileId);
  if (!file) return false;

  const layout = getPlacingGhostLayout();
  if (!layout) return false;

  addCanvasComponent(createCanvasComponentFromLayout(
    file,
    layout,
    `component-${file.id}-${Date.now()}`,
  ));
  cancelPlacement();
  renderCanvasComponents();
  renderFiles();
  return true;
}

function updateSuggestionsPopover() {
  if (!els.suggestionsPopover) return;
  els.suggestionsPopover.hidden = true;
}

function canOpenPlacementSettings(markerNum) {
  return getPlacementBarMarkerIndex(markerNum) >= 0;
}

function getPlacementMarkerVariant(markerNum) {
  const marker = COMPONENT_1_OVERLAY.markers.find((m) => m.num === markerNum);
  return marker?.variant ?? 'success';
}

function getPlacementSettingsMarkerNum() {
  if (state.placementSettingsMarkerNum != null) {
    return state.placementSettingsMarkerNum;
  }
  return getActiveBarMarker()?.num ?? PLACEMENT_BAR_MARKERS[0]?.num ?? 1;
}

function updatePlacementSettingsPopover() {
  if (!els.placementSettingsPopover) return;

  const visible = state.placementSettingsOpen && shouldShowPlacementGuides();
  els.placementSettingsPopover.hidden = !visible;

  if (!visible) {
    closePlacementSettingsInsertMenu();
    return;
  }

  updatePlacementInsertMenus();
}

function closePlacementSettingsInsertMenu() {
  if (!state.placementSettingsInsertMenuOpen) return;
  state.placementSettingsInsertMenuOpen = false;
  if (els.placementSettingsInsertMenu) {
    els.placementSettingsInsertMenu.hidden = true;
  }
  if (els.placementSettingsInsertSplit) {
    els.placementSettingsInsertSplit.setAttribute('aria-expanded', 'false');
  }
  syncPreviewHoverVisualSuppression();
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function togglePlacementSettingsInsertMenu() {
  if (els.placementSettingsInsertSplit?.disabled) return;

  state.placementSettingsInsertMenuOpen = !state.placementSettingsInsertMenuOpen;
  if (els.placementSettingsInsertMenu) {
    els.placementSettingsInsertMenu.hidden = !state.placementSettingsInsertMenuOpen;
  }
  if (els.placementSettingsInsertSplit) {
    els.placementSettingsInsertSplit.setAttribute(
      'aria-expanded',
      state.placementSettingsInsertMenuOpen ? 'true' : 'false',
    );
  }
  syncPreviewHoverVisualSuppression();
  if (state.placementSettingsInsertMenuOpen) {
    refreshPlacementOverlay();
    updatePlacingGhost();
    updatePlacementInsertMenus();
  } else {
    refreshPlacementOverlay();
    updatePlacingGhost();
  }
}

function openPlacementSettingsPopover(markerNum) {
  if (!shouldShowPlacementGuides() || !canOpenPlacementSettings(markerNum)) return;

  state.placementSettingsOpen = true;
  state.placementSettingsMarkerNum = markerNum;
  state.placementBarIndex = getPlacementBarMarkerIndex(markerNum);
  state.hoveredMarker = markerNum;
  closePlacementSettingsInsertMenu();
  updatePlacementSettingsPopover();
  updateSuggestionsPopover();
  updatePlacementInsertMenus();
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function closePlacementSettingsPopover() {
  if (!state.placementSettingsOpen) return;
  state.placementSettingsOpen = false;
  state.placementSettingsMarkerNum = null;
  closePlacementSettingsInsertMenu();
  updatePlacementSettingsPopover();
  updateSuggestionsPopover();
}

function insertFromPlacementSettings(mode) {
  if (mode === 'all') {
    confirmPlacement({
      markerNums: PLACEMENT_BAR_MARKERS.map((marker) => marker.num),
    });
    closePlacementSettingsPopover();
    return;
  }

  const selected = getSelectedPlacementMarkerNums();
  if (selected.length === 0) return;

  confirmPlacement({
    markerNums: selected,
    strictSelected: true,
  });
  closePlacementSettingsPopover();
}

function formatPlacementSettingsOffsetInput(input) {
  const parsed = parseFloat(input.value);
  const value = Number.isFinite(parsed) ? parsed : 0;
  input.value = value.toFixed(2);
}

function bindPlacementSettingsFlipButtons() {
  document.querySelectorAll('.placement-settings-popover__flip-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

function bindPlacementSettingsOffsetInputs() {
  document.querySelectorAll('.placement-settings-popover__offset-input').forEach((input) => {
    const fieldWrap = input.closest('.weave-text-input');
    fieldWrap?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    input.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    input.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        input.blur();
      }
    });
    input.addEventListener('blur', () => {
      formatPlacementSettingsOffsetInput(input);
    });
  });
}

function bindPlacementSettingsEvents() {
  if (!els.placementSettingsPopover) return;

  bindPlacementSettingsOffsetInputs();
  bindPlacementSettingsFlipButtons();

  els.placementSettingsClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlacementSettingsPopover();
  });

  els.placementSettingsPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    stepPlacementBarIndex(-1);
  });

  els.placementSettingsNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    stepPlacementBarIndex(1);
  });

  els.placementSettingsInsert?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlacementSettingsInsertMenu();
    const selected = getSelectedPlacementMarkerNums();
    if (selected.length === 0) return;
    confirmPlacement({ markerNums: selected, strictSelected: true });
    closePlacementSettingsPopover();
  });

  els.placementSettingsInsertSplit?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlacementSettingsInsertMenu();
  });

  els.placementSettingsInsertMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = e.target.closest('[data-action]');
    if (!item || item.disabled || item.classList.contains('is-disabled')) return;
    closePlacementSettingsInsertMenu();
    if (item.dataset.action === 'insert-all-occurrences') {
      insertFromPlacementSettings('all');
    } else if (item.dataset.action === 'insert-selected-occurrences') {
      insertFromPlacementSettings('selected');
    }
  });

  els.placementSettingsPopover.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

function getCanvasComponentClass(component) {
  if (isPlacingComponent2() && component.fileId === COMPONENT_1_ID) {
    return 'canvas-component canvas-component--reference';
  }
  return 'canvas-component';
}

function overlayPercent(value, ref) {
  return `${(value / ref) * 100}%`;
}

function getPreviewPosition(marker) {
  const { width, height } = PLACEMENT_PREVIEW_SIZE;
  return {
    x: marker.x + (marker.width - width) / 2,
    y: marker.y,
    width,
    height,
  };
}

function groupPercent(value, ref) {
  return `${(value / ref) * 100}%`;
}

function getMarkerToolbarStyle(marker) {
  const { width: markerWidth, height: markerHeight } = marker;
  const { offsetX, offsetY } = MARKER_HOVER_TOOLBAR;
  return [
    `left:${(offsetX / markerWidth) * 100}%`,
    `top:${(offsetY / markerHeight) * 100}%`,
  ].join(';');
}

function getPreviewToolbarStyle(marker) {
  const preview = getPreviewPosition(marker);
  const markerLeft = (preview.width - marker.width) / 2;
  const { offsetX, offsetY } = MARKER_HOVER_TOOLBAR;
  return [
    `left:${((markerLeft + offsetX) / preview.width) * 100}%`,
    `top:${(offsetY / preview.height) * 100}%`,
  ].join(';');
}

function renderMarkerHoverToolbarHtml(marker, getStyle = getMarkerToolbarStyle) {
  const toolbarStyle = getStyle(marker);
  const settingsHtml = `
      <div class="marker-hover-toolbar__divider" aria-hidden="true"></div>
      <button type="button" class="marker-hover-toolbar__btn marker-hover-toolbar__btn--settings" data-action="open-placement-settings" data-marker="${marker.num}" aria-label="Placement settings" tabindex="-1">
        <span class="marker-hover-toolbar__settings-icon" aria-hidden="true">
          <img src="${ASSETS.markerToolbarSettingsStroke}" width="11" height="11" alt="" class="icon-img marker-hover-toolbar__icon marker-hover-toolbar__icon--settings" />
        </span>
      </button>`;

  return `
    <div class="marker-hover-toolbar" role="toolbar" aria-label="Placement options" style="${toolbarStyle}">
      <div class="marker-hover-toolbar__actions">
        <button type="button" class="marker-hover-toolbar__btn" aria-label="Constraints" tabindex="-1">
          <img src="${ASSETS.markerToolbarConstraint}" width="11" height="11" alt="" class="icon-img marker-hover-toolbar__icon" />
        </button>
        <button type="button" class="marker-hover-toolbar__btn" aria-label="Flip" tabindex="-1">
          <img src="${ASSETS.markerToolbarFlip}" width="11" height="11" alt="" class="icon-img marker-hover-toolbar__icon" />
        </button>
      </div>
      ${settingsHtml}
    </div>`;
}

function renderMarkerCheckmarkBadge(state) {
  const isSelected = state === 'selected';
  const bg = isSelected ? ASSETS.markerCheckmarkSelectedBg : ASSETS.markerCheckmarkRestBg;
  const fg = isSelected ? ASSETS.markerCheckmarkSelectedFg : ASSETS.markerCheckmarkRestFg;
  return `
    <span class="component-marker__badge component-marker__badge--${state}" aria-hidden="true">
      <span class="component-marker__badge-bg">
        <img src="${bg}" width="14" height="14" alt="" class="icon-img" />
      </span>
      <span class="component-marker__badge-fg">
        <img src="${fg}" width="14" height="14" alt="" class="icon-img" />
      </span>
    </span>`;
}

function animatePlacementSparkle(el) {
  if (!el) return;

  el.classList.remove('is-appearing', 'is-attention');
  void el.offsetWidth;
  el.classList.add('is-appearing', 'is-attention');

  const onEnterEnd = (e) => {
    if (e.target !== el || e.animationName !== 'sketch-sparkle-enter') return;
    el.classList.remove('is-appearing');
    el.removeEventListener('animationend', onEnterEnd);
  };
  el.addEventListener('animationend', onEnterEnd);

  const btn = el.querySelector('.sketch-sparkle__btn');
  const onAttentionEnd = (e) => {
    if (e.target !== btn || e.animationName !== 'sketch-sparkle-glow') return;
    el.classList.remove('is-attention');
    btn.removeEventListener('animationend', onAttentionEnd);
  };
  btn?.addEventListener('animationend', onAttentionEnd);
}

function animatePlacementSparkleIfNeeded() {
  if (!shouldShowPlacementGuides() || placementSparkleAnimated) return;

  const el = els.canvasComponents?.querySelector(`[data-marker-sparkle="${SPARKLE_MARKER_NUM}"]`);
  if (!el) return;

  placementSparkleAnimated = true;
  animatePlacementSparkle(el);
}

function renderSparkleMarkerButton(marker, style, hoveredClass = '', withToolbar = false) {
  const ariaSelected = isMarkerSelected(marker.num);
  const ariaLabel = `Placement option ${marker.num}${ariaSelected ? ', selected' : ''}`;
  const sparkleBody = `
      <button type="button" class="sketch-sparkle__btn component-marker--${marker.variant}${hoveredClass}" data-marker="${marker.num}" aria-label="${ariaLabel}" aria-pressed="${ariaSelected ? 'true' : 'false'}">
        <img src="${ASSETS.popoverAiSparkle}" width="16" height="16" alt="" class="icon-img" />
      </button>`;

  if (!withToolbar) {
    return `
    <div class="sketch-sparkle${hoveredClass}" data-marker-sparkle="${marker.num}" style="${style}">
      ${sparkleBody}
    </div>`;
  }

  const wrapSelected = '';

  return `
    <div class="component-marker-wrap${wrapSelected}" style="${style}">
      ${renderMarkerHoverToolbarHtml(marker, getMarkerToolbarStyle)}
      <div class="sketch-sparkle${hoveredClass}" data-marker-sparkle="${marker.num}">
        ${sparkleBody}
      </div>
    </div>`;
}

function renderMarkerButton(marker, style, hoveredClass = '', withToolbar = false) {
  if (marker.num === SPARKLE_MARKER_NUM) {
    return renderSparkleMarkerButton(marker, style, hoveredClass, withToolbar);
  }

  const showHoverBadge = withToolbar && (marker.variant === 'success' || marker.variant === 'warning');
  const badgeHtml = showHoverBadge
    ? `${renderMarkerCheckmarkBadge('rest')}${renderMarkerCheckmarkBadge('selected')}`
    : '';

  const buttonHtml = `<button type="button" class="component-marker component-marker--${marker.variant}${hoveredClass}" data-marker="${marker.num}" style="${withToolbar ? 'position:absolute;inset:0;width:100%;height:100%' : style}" aria-label="Placement option ${marker.num}${isMarkerSelected(marker.num) ? ', selected' : ''}" aria-pressed="${isMarkerSelected(marker.num) ? 'true' : 'false'}"><span class="component-marker__header"><span class="component-marker__label">${marker.num}</span></span></button>`;

  if (!withToolbar) return buttonHtml;

  const wrapSelected = isMarkerSelected(marker.num) ? ' is-selected' : '';
  return `
    <div class="component-marker-wrap${wrapSelected}" style="${style}">
      ${badgeHtml}
      ${renderMarkerHoverToolbarHtml(marker)}
      ${buttonHtml}
    </div>`;
}

function renderPreviewHtml(marker, overlay, isFocused = false, isSelected = false, isHovered = false) {
  const preview = getPreviewPosition(marker);
  const previewStyle = [
    `left:${overlayPercent(preview.x, overlay.width)}`,
    `top:${overlayPercent(preview.y, overlay.height)}`,
    `width:${overlayPercent(preview.width, overlay.width)}`,
    `height:${overlayPercent(preview.height, overlay.height)}`,
  ].join(';');
  const isSparklePreview = marker.num === SPARKLE_MARKER_NUM;
  const focusClass = isFocused ? ' is-focused' : '';
  const selectedClass = isSelected ? ' is-selected' : '';
  const hoverClass = isHovered && !isSparklePreview && shouldShowPreviewPlacementHover() ? ' is-hovered' : '';
  const sparklePreviewClass = isSparklePreview ? ' placement-preview-wrap--sparkle-linked' : '';
  const toolbarHtml = shouldShowPlacementBar() && !isSparklePreview && shouldShowPreviewPlacementHover()
    ? renderMarkerHoverToolbarHtml(marker, getPreviewToolbarStyle)
    : '';
  return `
    <div
      class="placement-preview-wrap${sparklePreviewClass}${focusClass}${selectedClass}${hoverClass}"
      data-marker="${marker.num}"
      role="button"
      aria-pressed="${isSelected ? 'true' : 'false'}"
      aria-label="Placement option ${marker.num}"
      style="${previewStyle}"
    >
      ${toolbarHtml}
      <img class="placement-preview__image" src="${ASSETS.component2}" alt="" />
      <img class="placement-preview__select-overlay" src="${ASSETS.previewPurple}" alt="" aria-hidden="true" />
    </div>`;
}

function renderHoverGroupHtml(marker, overlay) {
  if (shouldShowPlacementBar()) return '';

  const { width: groupWidth, height: groupHeight, marker: groupMarker, toolbar } = PLACEMENT_HOVER_GROUP;
  const groupStyle = [
    `left:${overlayPercent(marker.x - groupMarker.x, overlay.width)}`,
    `top:${overlayPercent(marker.y - groupMarker.y, overlay.height)}`,
    `width:${overlayPercent(groupWidth, overlay.width)}`,
    `height:${overlayPercent(groupHeight, overlay.height)}`,
  ].join(';');

  const markerStyle = [
    `left:${groupPercent(groupMarker.x, groupWidth)}`,
    `top:${groupPercent(groupMarker.y, groupHeight)}`,
    `width:${groupPercent(groupMarker.width, groupWidth)}`,
    `height:${groupPercent(groupMarker.height, groupHeight)}`,
  ].join(';');

  const toolbarStyle = [
    `left:${groupPercent(toolbar.x, groupWidth)}`,
    `top:${groupPercent(toolbar.y, groupHeight)}`,
    `width:${groupPercent(toolbar.width, groupWidth)}`,
    `height:${groupPercent(toolbar.height, groupHeight)}`,
  ].join(';');

  const { confirmButton } = toolbar;
  const confirmStyle = [
    `left:${groupPercent(confirmButton.x, toolbar.width)}`,
    `top:${groupPercent(confirmButton.y, toolbar.height)}`,
    `width:${groupPercent(confirmButton.width, toolbar.width)}`,
    `height:${groupPercent(confirmButton.height, toolbar.height)}`,
  ].join(';');

  return `
    <div class="placement-hover-group" style="${groupStyle}">
      <div class="placement-toolbar" role="toolbar" aria-label="Placement controls" style="${toolbarStyle}">
        <img class="placement-toolbar__img" src="${ASSETS.placementToolbar}" alt="" />
        <button type="button" class="placement-toolbar__confirm" style="${confirmStyle}" data-action="confirm-placement" aria-label="Confirm placement"></button>
      </div>
      ${renderMarkerButton(marker, markerStyle, ' is-hovered')}
    </div>`;
}

function renderComponent1Overlay() {
  const {
    componentRefWidth,
    componentRefHeight,
    overlay,
    markers,
  } = COMPONENT_1_OVERLAY;
  const anchorStyle = [
    `left:${overlayPercent(overlay.x, componentRefWidth)}`,
    `top:${overlayPercent(overlay.y, componentRefHeight)}`,
    `width:${overlayPercent(overlay.width, componentRefWidth)}`,
    `height:${overlayPercent(overlay.height, componentRefHeight)}`,
  ].join(';');

  const showAllPreviews = shouldShowAllPlacementPreviews();
  const activeBarMarker = getActiveBarMarker();
  const activeMarkerNum = showAllPreviews
    ? activeBarMarker?.num ?? state.hoveredMarker
    : activeBarMarker?.num ?? state.hoveredMarker;
  const activeMarker = markers.find((marker) => marker.num === activeMarkerNum);
  const selectedMarkerNums = getSelectedPlacementMarkerNums();
  const highlightMarkerNum = state.hoveredMarker;
  const focusedPreviewMarker = state.focusedPreviewMarker;
  const previewMarkerNums = getOverlayPreviewMarkerNums(selectedMarkerNums, showAllPreviews);

  let previewHtml = '';
  let hoverGroupHtml = '';

  previewHtml = previewMarkerNums
    .map((num) => markers.find((marker) => marker.num === num))
    .filter(Boolean)
    .map((marker) => renderPreviewHtml(
      marker,
      overlay,
      marker.num === focusedPreviewMarker,
      isMarkerSelected(marker.num),
      marker.num === highlightMarkerNum,
    ))
    .join('');

  if (activeMarker && !shouldShowPlacementBar()) {
    hoverGroupHtml = renderHoverGroupHtml(activeMarker, overlay);
  }

  const hiddenMarkerNums = new Set();
  if (!showAllPreviews && activeMarker && !shouldShowPlacementBar()) {
    hiddenMarkerNums.add(activeMarker.num);
  }

  const markersHtml = markers
    .filter((marker) => marker.num === SPARKLE_MARKER_NUM && !hiddenMarkerNums.has(marker.num))
    .map((marker) => {
      const style = [
        `left:${overlayPercent(marker.x, overlay.width)}`,
        `top:${overlayPercent(marker.y, overlay.height)}`,
        `width:${overlayPercent(marker.width, overlay.width)}`,
        `height:${overlayPercent(marker.height, overlay.height)}`,
      ].join(';');
      let markerClass = '';
      if (marker.num === highlightMarkerNum && shouldShowPreviewPlacementHover()) {
        markerClass += ' is-hovered';
      }
      return renderMarkerButton(marker, style, markerClass, shouldShowPlacementBar());
    }).join('');

  return `
    <div class="component-overlay-anchor" style="${anchorStyle}">
      <div class="component-overlay" aria-label="Component 2 placement options">
        ${previewHtml}
        ${hoverGroupHtml}
        ${markersHtml}
      </div>
    </div>`;
}

function renderPlacedComponent(component) {
  const style = [
    `left:${component.x}px`,
    `top:${component.y}px`,
    `width:${component.width}px`,
    `height:${component.height}px`,
  ].join(';');
  const componentClass = getCanvasComponentClass(component);
  const showPlacementGuides =
    component.fileId === COMPONENT_1_ID && shouldShowPlacementGuides();

  if (showPlacementGuides) {
    return `
    <div class="canvas-component-group is-interactive" style="${style}">
      <img class="${componentClass}" src="${escapeHtml(component.src)}" alt="Inserted component" />
      ${renderComponent1Overlay()}
    </div>`;
  }

  return `
    <img
      class="${componentClass}"
      src="${escapeHtml(component.src)}"
      alt="Inserted component"
      style="${style}"
    />`;
}

function removePlacingGhosts() {
  els.canvasComponents.querySelectorAll('.canvas-component.is-placing').forEach((ghost) => ghost.remove());
}

function ensurePlacingGhost(index = 0) {
  const file = state.placement.active ? getFileById(state.placement.fileId) : null;
  if (!file?.insertPreview) return null;

  let ghosts = [...els.canvasComponents.querySelectorAll('.canvas-component.is-placing')];
  while (ghosts.length <= index) {
    const ghost = document.createElement('img');
    ghost.className = 'canvas-component is-placing';
    ghost.src = file.insertPreview;
    ghost.alt = 'Insert preview';
    els.canvasComponents.appendChild(ghost);
    ghosts = [...els.canvasComponents.querySelectorAll('.canvas-component.is-placing')];
  }

  return ghosts[index];
}

function trimPlacingGhosts(count) {
  const ghosts = [...els.canvasComponents.querySelectorAll('.canvas-component.is-placing')];
  ghosts.slice(count).forEach((ghost) => ghost.remove());
}

function applyPlacingGhostLayout(ghost, layout, snapped) {
  ghost.classList.toggle('is-snapped', snapped);

  if (snapped) {
    ghost.classList.add('is-animating');
    if (ghost._animTimer) {
      clearTimeout(ghost._animTimer);
      ghost._animTimer = null;
    }
  } else if (ghost.classList.contains('is-animating')) {
    if (ghost._animTimer) clearTimeout(ghost._animTimer);
    ghost._animTimer = setTimeout(() => {
      ghost.classList.remove('is-animating');
      ghost._animTimer = null;
    }, PLACING_GHOST_TRANSITION_MS);
  }

  ghost.style.left = `${layout.x}px`;
  ghost.style.top = `${layout.y}px`;
  ghost.style.width = `${layout.width}px`;
  ghost.style.height = `${layout.height}px`;
}

function updatePlacingGhost() {
  if (!state.placement.active) {
    removePlacingGhosts();
    return;
  }

  if (shouldShowPlacementGuides()) {
    removePlacingGhosts();
    return;
  }

  if (state.placement.fileId !== COMPONENT_1_ID) {
    removePlacingGhosts();
    return;
  }

  const layout = getPlacingGhostLayout();
  if (!layout) {
    removePlacingGhosts();
    return;
  }

  trimPlacingGhosts(1);
  const ghost = ensurePlacingGhost(0);
  if (!ghost) return;

  delete ghost.dataset.markerNum;
  applyPlacingGhostLayout(ghost, layout, false);
}

function refreshPlacementOverlay() {
  const group = els.canvasComponents.querySelector('.canvas-component-group.is-interactive');
  if (!group) {
    renderCanvasComponents();
    return;
  }

  const existing = group.querySelector('.component-overlay-anchor');
  const overlayHtml = renderComponent1Overlay();
  if (existing) {
    existing.outerHTML = overlayHtml;
  } else {
    group.insertAdjacentHTML('beforeend', overlayHtml);
  }

  animatePlacementSparkleIfNeeded();
}

function setHoveredPlacementMarker(num, options = {}) {
  const { refresh = true } = options;
  if (state.hoveredMarker === num) return;
  state.hoveredMarker = num;
  if (refresh) {
    refreshPlacementOverlay();
    updatePlacingGhost();
  }
}

function clearHoveredPlacementMarker(options = {}) {
  const { refresh = true } = options;
  if (state.hoveredMarker === null) return;
  state.hoveredMarker = null;
  if (refresh) {
    refreshPlacementOverlay();
    updatePlacingGhost();
  }
}

function bindOverlayInteractions() {
  els.canvasComponents.addEventListener('click', (e) => {
    if (!shouldShowPlacementGuides()) return;

    if (e.target.closest('.marker-hover-toolbar')) {
      const settingsBtn = e.target.closest('[data-action="open-placement-settings"]');
      if (settingsBtn) {
        e.preventDefault();
        e.stopPropagation();
        openPlacementSettingsPopover(Number(settingsBtn.dataset.marker));
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }

    const preview = e.target.closest('.placement-preview-wrap');
    if (preview && shouldShowPlacementBar()) {
      const num = Number(preview.dataset.marker);
      if (getPlacementBarMarkerIndex(num) >= 0) {
        e.preventDefault();
        e.stopPropagation();
        togglePlacementMarker(num);
      }
      return;
    }

    const marker = e.target.closest('.component-marker, .sketch-sparkle__btn');
    if (marker && shouldShowPlacementBar()) {
      const num = Number(marker.dataset.marker);
      if (getPlacementBarMarkerIndex(num) >= 0) {
        e.preventDefault();
        e.stopPropagation();
        togglePlacementMarker(num);
      }
      return;
    }

    const confirmBtn = e.target.closest('[data-action="confirm-placement"]');
    if (!confirmBtn) return;
    e.preventDefault();
    e.stopPropagation();
    confirmPlacement();
  });

  els.canvasComponents.addEventListener('mouseover', (e) => {
    if (!shouldShowPlacementGuides()) return;

    const preview = e.target.closest('.placement-preview-wrap');
    if (preview) {
      const num = Number(preview.dataset.marker);
      if (Number.isFinite(num)) {
        if (state.focusedPreviewMarker !== null) {
          state.focusedPreviewMarker = null;
          refreshPlacementOverlay();
        }
        setHoveredPlacementMarker(num, { refresh: false });
        const barIndex = getPlacementBarMarkerIndex(num);
        if (barIndex >= 0 && barIndex !== state.placementBarIndex && !state.placementSettingsOpen) {
          state.placementBarIndex = barIndex;
          updatePlacementInsertMenus();
        }
      }
      return;
    }

    const marker = e.target.closest('.component-marker, .sketch-sparkle__btn');
    if (!marker) return;
    const num = Number(marker.dataset.marker);
    if (!Number.isFinite(num)) return;
    setHoveredPlacementMarker(num);
  });

  els.canvasComponents.addEventListener('mouseout', (e) => {
    if (!shouldShowPlacementGuides()) return;

    const related = e.relatedTarget;

    const preview = e.target.closest('.placement-preview-wrap');
    if (preview) {
      if (related && preview.contains(related)) return;
      const num = Number(preview.dataset.marker);
      if (state.hoveredMarker === num) {
        clearHoveredPlacementMarker();
      }
      return;
    }

    const markerWrap = e.target.closest('.component-marker-wrap');
    if (markerWrap) {
      if (related && markerWrap.contains(related)) return;
      const marker = markerWrap.querySelector('[data-marker]');
      const num = Number(marker?.dataset.marker);
      if (Number.isFinite(num) && state.hoveredMarker === num) {
        clearHoveredPlacementMarker();
      }
      return;
    }

    const group = e.target.closest('.canvas-component-group.is-interactive');
    if (!group) return;
    if (related && group.contains(related)) return;

    // Overlay re-render replaces marker nodes; keep ghost snapped after press
    if (!related && state.selectedMarkerNums.length > 0) return;

    if (state.selectedMarkerNums.length > 0) {
      state.hoveredMarker = null;
      state.focusedPreviewMarker = null;
    } else if (state.previewAllPlacements) {
      const activeMarkerNum = getActiveBarMarker()?.num ?? null;
      state.hoveredMarker = activeMarkerNum;
      state.focusedPreviewMarker = activeMarkerNum;
    } else {
      state.hoveredMarker = null;
    }
    refreshPlacementOverlay();
    updatePlacingGhost();
  });
}

function renderCanvasComponents() {
  const html = state.canvasComponents
    .map((c) => renderPlacedComponent(c)).join('');

  els.canvasComponents.innerHTML = html;

  if (state.placement.active) {
    updatePlacingGhost();
  }

  updateSuggestionsPopover();
  updatePlacementInsertMenus();
  updatePlacementSettingsPopover();
  animatePlacementSparkleIfNeeded();
}

function openContextMenu(fileId, clientX, clientY) {
  const file = getFileById(fileId);
  if (!file) return;

  state.contextMenu = { open: true, fileId, x: clientX, y: clientY };
  state.selectedFileId = fileId;

  els.contextMenu.hidden = false;

  const menuWidth = 204;
  const menuHeight = 364;
  const x = Math.min(clientX, window.innerWidth - menuWidth - 8);
  const y = Math.min(clientY, window.innerHeight - menuHeight - 8);
  els.contextMenu.style.left = `${Math.max(8, x)}px`;
  els.contextMenu.style.top = `${Math.max(8, y)}px`;

  els.contextMenu.querySelectorAll('[data-action]').forEach((item) => {
    const disabled = item.dataset.action === 'insert' && !canInsertFile(file);
    item.classList.toggle('is-disabled', disabled);
    item.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  });

  suppressMenuClose = true;
  setTimeout(() => { suppressMenuClose = false; }, 0);

  renderFiles();
}

function closeContextMenu() {
  if (!state.contextMenu.open) return;
  state.contextMenu = { open: false, fileId: null, x: 0, y: 0 };
  els.contextMenu.hidden = true;
}

function handleContextMenuAction(action) {
  const fileId = state.contextMenu.fileId;
  const file = getFileById(fileId);
  if (!file) return;

  if (action === 'insert') {
    const { x, y } = clientToArtboard(state.contextMenu.x, state.contextMenu.y);
    startPlacement(fileId, x, y);
    return;
  }

  if (action === 'open') {
    state.selectedFileId = fileId;
    renderFiles();
    return;
  }

  if (action === 'trash') {
    state.files = state.files.filter((f) => f.id !== fileId);
    state.canvasComponents = state.canvasComponents.filter((c) => c.fileId !== fileId);
    if (state.selectedFileId === fileId) state.selectedFileId = null;
    renderCanvasComponents();
    renderFiles();
  }
}

function bindCanvasDropZone() {
  const zone = els.canvasDropZone;

  zone.addEventListener('dragover', (e) => {
    if (!state.drag.fileId) return;
    e.preventDefault();
    zone.classList.add('is-drag-over');
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  });

  zone.addEventListener('dragleave', (e) => {
    if (!zone.contains(e.relatedTarget)) zone.classList.remove('is-drag-over');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('is-drag-over');
    const fileId = e.dataTransfer?.getData('text/plain') || state.drag.fileId;
    if (!fileId) return;
    const { x, y } = clientToArtboard(e.clientX, e.clientY);
    startPlacement(fileId, x, y);
    hideDragGhost();
    state.drag = { fileId: null, active: false };
  });
}

function showDragGhost(clientX, clientY, file) {
  const ghost = els.dragGhost;
  const thumb = file.insertPreview
    ? `<img class="drag-ghost__thumb" src="${escapeHtml(file.insertPreview)}" alt="" />`
    : `<span class="drag-ghost__thumb">${fusionIcon(32)}</span>`;
  ghost.innerHTML = `${thumb}<span>${escapeHtml(file.name)}</span>`;
  ghost.hidden = false;
  ghost.style.left = `${clientX}px`;
  ghost.style.top = `${clientY}px`;
}

function hideDragGhost() {
  els.dragGhost.hidden = true;
}

function bindFileTileInteractions(container) {
  container.querySelectorAll('.file-tile').forEach((tile) => {
    const fileId = tile.dataset.id;
    const file = getFileById(fileId);
    const main = tile.querySelector('.file-tile__main');

    tile.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openContextMenu(fileId, e.clientX, e.clientY);
    });

    if (canInsertFile(file)) {
      tile.classList.add('is-draggable');

      tile.addEventListener('dragstart', (e) => {
        state.drag = { fileId, active: true };
        tile.classList.add('is-dragging');
        e.dataTransfer.setData('text/plain', fileId);
        e.dataTransfer.effectAllowed = 'copy';
        if (e.dataTransfer.setDragImage) {
          const img = document.createElement('img');
          img.src = file.insertPreview;
          img.width = 48;
          img.height = 48;
          document.body.appendChild(img);
          e.dataTransfer.setDragImage(img, 24, 24);
          setTimeout(() => img.remove(), 0);
        }
        showDragGhost(e.clientX, e.clientY, file);
      });

      tile.addEventListener('drag', (e) => {
        if (e.clientX === 0 && e.clientY === 0) return;
        showDragGhost(e.clientX, e.clientY, file);
      });

      tile.addEventListener('dragend', () => {
        tile.classList.remove('is-dragging');
        hideDragGhost();
        els.canvasDropZone.classList.remove('is-drag-over');
        state.drag = { fileId: null, active: false };
      });
    }

    main.addEventListener('click', (e) => {
      if (e.target.closest('[data-expand]')) return;
      state.selectedFileId = state.selectedFileId === fileId ? null : fileId;
      renderFiles();
    });

    main.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        state.selectedFileId = state.selectedFileId === fileId ? null : fileId;
        renderFiles();
      }
    });
  });

  container.querySelectorAll('[data-expand]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const file = state.files.find((f) => f.id === btn.dataset.expand);
      if (file) file.expanded = !file.expanded;
      renderFiles();
    });
  });
}

function updateSortMenuUI() {
  els.settingsMenu.querySelectorAll('[data-action^="sort-"]').forEach((li) => {
    li.classList.toggle('is-selected', li.dataset.action.replace('sort-', '') === state.sortBy);
  });
}

function renderFiles() {
  const container = els.fileList;

  if (state.listState === 'loading') {
    container.innerHTML = Array.from({ length: 5 }, () => `
      <div class="skeleton-tile" aria-busy="true">
        <div class="skeleton-block skeleton-block--thumb"></div>
        <div class="skeleton-block skeleton-block--lines"><div class="skeleton-block skeleton-block--line"></div><div class="skeleton-block skeleton-block--line skeleton-block--line-sm"></div></div>
      </div>`).join('');
    return;
  }

  if (state.listState === 'error') {
    container.innerHTML = `<div class="alert-error" role="alert">${escapeHtml(state.errorMessage)}</div>`;
    return;
  }

  const sorted = sortFiles(state.files, state.sortBy);

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="empty-state" role="status">
        <p class="empty-state__title">No files yet</p>
        <p class="empty-state__desc">Upload a design file or create a folder to get started.</p>
        <div class="empty-state__actions">
          <button type="button" class="btn btn--primary" id="empty-upload">Upload</button>
          <button type="button" class="btn btn--secondary" id="empty-folder">New Folder</button>
        </div>
      </div>`;
    document.getElementById('empty-upload').addEventListener('click', () => openModal('upload'));
    document.getElementById('empty-folder').addEventListener('click', () => openModal('folder'));
    return;
  }

  container.innerHTML = sorted.map((file) => {
    const selected = state.selectedFileId === file.id;
    const expanded = file.expanded;
    const draggable = canInsertFile(file);
    return `
      <article class="file-tile${selected ? ' is-selected' : ''}${draggable ? ' is-draggable' : ''}" data-id="${file.id}"${draggable ? ' draggable="true"' : ''}>
        <div class="file-tile__main" role="button" tabindex="0" aria-pressed="${selected}" aria-expanded="${expanded}">
          <div class="file-tile__thumb">${fusionIcon(32)}</div>
          <div class="file-tile__body">
            <div class="file-tile__text">
              <div class="file-tile__title-row">
                ${fusionIcon(16)}
                <span class="file-tile__name">${escapeHtml(file.name)}</span>
              </div>
              <p class="file-tile__date">${formatModifiedDate(file.modifiedAt)}</p>
              <div class="file-tile__chevron-row">
                <button type="button" class="file-tile__expand${expanded ? ' is-expanded' : ''}" aria-label="${expanded ? 'Collapse' : 'Expand'} details" data-expand="${file.id}">
                  ${imgIcon(ASSETS.caretDown, 12)}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="file-tile__details${expanded ? ' is-open' : ''}">
          <div class="file-tile__details-inner">
            <div class="meta-row"><span class="meta-row__label">Size</span><span class="meta-row__value">${escapeHtml(file.size || '—')}</span></div>
            <div class="meta-row"><span class="meta-row__label">Owner</span><span class="meta-row__value">${escapeHtml(file.owner || '—')}</span></div>
            <div class="meta-row"><span class="meta-row__label">Version</span><span class="meta-row__value">${escapeHtml(file.version || '—')}</span></div>
          </div>
        </div>
      </article>`;
  }).join('');

  bindFileTileInteractions(container);
}

function renderPeople() {
  els.peopleList.innerHTML = MOCK_PEOPLE.map((p) => `
    <div class="person-card" role="listitem" tabindex="0">
      <div class="person-card__avatar">${escapeHtml(p.avatarInitials)}</div>
      <div>
        <div class="person-card__name">${escapeHtml(p.name)}</div>
        <div class="person-card__role">${escapeHtml(p.role)}</div>
        <div class="person-card__email">${escapeHtml(p.email)}</div>
      </div>
    </div>`).join('');
}

function openModal(type) {
  const modal = type === 'upload' ? els.uploadModal : els.folderModal;
  modal.classList.add('is-open');
  const input = modal.querySelector('input');
  input.value = '';
  modal.querySelector('.modal__error').textContent = '';
  setTimeout(() => input.focus(), 100);
}

function closeModal(type) {
  (type === 'upload' ? els.uploadModal : els.folderModal).classList.remove('is-open');
}

function submitUpload() {
  const input = document.getElementById('upload-filename');
  const errorEl = document.getElementById('upload-error');
  const trimmed = input.value.trim();
  if (!trimmed) { errorEl.textContent = 'Please enter a file name.'; return; }
  const name = trimmed.endsWith('.f3d') ? trimmed : `${trimmed}.f3d`;
  state.files.unshift({ id: `file-${Date.now()}`, name, modifiedAt: new Date().toISOString(), type: 'fusion-design', size: '1.0 MB', owner: 'You', version: 'v1.0', expanded: false });
  state.listState = 'idle';
  state.selectedFileId = state.files[0].id;
  closeModal('upload');
  renderFiles();
}

function submitFolder() {
  const input = document.getElementById('folder-name');
  const errorEl = document.getElementById('folder-error');
  const trimmed = input.value.trim();
  if (!trimmed) { errorEl.textContent = 'Folder name is required.'; return; }
  state.files.unshift({ id: `folder-${Date.now()}`, name: trimmed, modifiedAt: new Date().toISOString(), type: 'folder', owner: 'You', expanded: false });
  state.listState = 'idle';
  closeModal('folder');
  renderFiles();
}

const ARTBOARD_WIDTH = 1920;
const ARTBOARD_HEIGHT = 1080;

function fitArtboard() {
  const artboard = document.querySelector('.artboard');
  if (!artboard) return;
  const scale = Math.min(window.innerWidth / ARTBOARD_WIDTH, window.innerHeight / ARTBOARD_HEIGHT);
  artboard.style.transform = `scale(${scale})`;
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  fitArtboard();
});

window.addEventListener('resize', fitArtboard);
