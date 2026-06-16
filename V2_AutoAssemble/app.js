/**
 * Figma asset paths — exported from FY27-AutoAssemble file node 82:37068
 */
const ASSETS = {
  home: 'assets/home-icon.png',
  caret: 'assets/caret-icon.png',
  caretDown: 'assets/caret-down.png',
  settings: 'assets/settings-icon.png',
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
  placementToolbar: 'assets/placement-toolbar.png',
  previewSuccess: 'assets/preview-success.svg',
  previewWarning: 'assets/preview-warning.svg',
  previewError: 'assets/preview-error.svg',
  popoverAiSparkle: 'assets/popover-ai-sparkle.svg',
  popoverClose: 'assets/popover-close.svg',
  popoverComplete: 'assets/popover-complete.svg',
  popoverAlert: 'assets/popover-alert.svg',
  popoverError: 'assets/popover-error.svg',
  popoverCheckmark: 'assets/popover-checkmark.svg',
};

const CANVAS = { left: 428, top: 128, width: 1492, height: 917 };
const COMPONENT_SIZE = { width: 320, height: 542 };
const COMPONENT_1_ID = 'file-1';
const COMPONENT_2_ID = 'file-2';
const REFERENCE_OPACITY = 0.25;

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

const PREVIEW_IMAGES = {
  success: ASSETS.previewSuccess,
  warning: ASSETS.previewWarning,
  error: ASSETS.previewError,
};

/** Figma node 93:40593 on artboard 93:39982 */
const SUGGESTIONS_POPOVER = { left: 1419, top: 193, width: 284, height: 226 };

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
    { num: 5, x: 357, y: 524, width: 32, height: 32, variant: 'error' },
    { num: 6, x: 387, y: 571, width: 32, height: 32, variant: 'error' },
  ],
};

/** Green placement markers shown in the success detail dialog (93:41503) */
const SUCCESS_MARKERS = COMPONENT_1_OVERLAY.markers.filter((marker) => marker.variant === 'success');
const WARNING_MARKERS = COMPONENT_1_OVERLAY.markers.filter((marker) => marker.variant === 'warning');
const ERROR_MARKERS = COMPONENT_1_OVERLAY.markers.filter((marker) => marker.variant === 'error');

/** Detail dialog configs — Figma nodes 93:41503 / 93:41628 / 93:41774 */
const PLACEMENT_DETAIL_VARIANTS = {
  success: {
    markers: SUCCESS_MARKERS,
    statusIcon: ASSETS.popoverComplete,
    statusLabel: 'Placements with no issues',
    showInsertAllCheckbox: true,
    showLabelField: false,
  },
  warning: {
    markers: WARNING_MARKERS,
    statusIcon: ASSETS.popoverAlert,
    statusLabel: 'Placements with potential issues',
    showInsertAllCheckbox: false,
    showLabelField: true,
    labelFieldValue: 'Inserting this component may have these impacts to the assembly',
  },
  error: {
    markers: ERROR_MARKERS,
    statusIcon: ASSETS.popoverError,
    statusLabel: 'Placements that could cause issues',
    showInsertAllCheckbox: true,
    showLabelField: false,
  },
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
  suggestionsPopoverView: 'main',
  detailPlacementVariant: null,
  detailPlacementIndex: 0,
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
    suggestionsPopoverCheckboxDetailRow: document.getElementById('suggestions-popover-checkbox-detail-row'),
    suggestionsPopoverCheckboxDetailLabel: document.getElementById('suggestions-popover-checkbox-detail-label'),
    suggestionsPopoverDetailTopDivider: document.getElementById('suggestions-popover-detail-top-divider'),
    suggestionsPopoverDetailIcon: document.getElementById('suggestions-popover-detail-icon'),
    suggestionsPopoverDetailStatusLabel: document.getElementById('suggestions-popover-detail-status-label'),
    suggestionsPopoverLabelField: document.getElementById('suggestions-popover-label-field'),
    suggestionsPopoverLabelValue: document.getElementById('suggestions-popover-label-value'),
    suggestionsPopoverPaginationPrev: document.getElementById('suggestions-popover-pagination-prev'),
    suggestionsPopoverPaginationNext: document.getElementById('suggestions-popover-pagination-next'),
    suggestionsPopoverPaginationLabel: document.getElementById('suggestions-popover-pagination-label'),
  };

  bindEvents();
  bindOverlayInteractions();
  renderPeople();
  renderFiles();
  renderCanvasComponents();
  updateSuggestionsPopover();
  setSuggestionsPopoverView('main');
  updateDetailPaginationUI();
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

  document.addEventListener('click', () => {
    if (suppressMenuClose) return;
    if (state.settingsOpen) {
      state.settingsOpen = false;
      els.settingsMenu.classList.remove('is-open');
      els.settingsBtn.setAttribute('aria-expanded', 'false');
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
  if (file.id === COMPONENT_2_ID && shouldShowPlacementGuides() && state.hoveredMarker) {
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

function getMarkerPreviewCanvasRect(markerNum) {
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
  return getMarkerPreviewCanvasRect(state.hoveredMarker);
}

function getPlacingGhostLayout() {
  const file = state.placement.active ? getFileById(state.placement.fileId) : null;
  if (!file) return null;

  if (shouldShowPlacementGuides() && state.hoveredMarker) {
    const previewRect = getHoveredPreviewCanvasRect();
    if (previewRect) return previewRect;
  }

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

  els.canvasDropZone.classList.add('is-placing');
  renderCanvasComponents();
  renderFiles();
  return true;
}

function cancelPlacement() {
  if (!state.placement.active) return;
  state.placement = { active: false, fileId: null, x: 0, y: 0 };
  state.hoveredMarker = null;
  state.detailPlacementVariant = null;
  setSuggestionsPopoverView('main');
  els.canvasDropZone.classList.remove('is-placing');
  renderCanvasComponents();
}

function setSuggestionsCheckboxChecked(checkbox, checked) {
  if (!checkbox) return;
  checkbox.classList.toggle('is-checked', checked);
  checkbox.setAttribute('aria-checked', checked ? 'true' : 'false');
}

function toggleSuggestionsCheckbox(checkbox) {
  if (!checkbox) return;
  const checked = !checkbox.classList.contains('is-checked');
  setSuggestionsCheckboxChecked(checkbox, checked);

  if (
    (checkbox === els.suggestionsPopoverCheckboxMain && !isDetailPlacementView())
    || (checkbox === els.suggestionsPopoverCheckboxDetail && isDetailPlacementView())
  ) {
    refreshPlacementOverlay();
    updatePlacingGhost();
  }
}

function isMainInsertAllChecked() {
  return !isDetailPlacementView()
    && Boolean(els.suggestionsPopoverCheckboxMain?.classList.contains('is-checked'));
}

function isDetailInsertAllChecked() {
  const variant = state.detailPlacementVariant;
  const hasInsertAll = variant === 'success' || variant === 'error';
  return isDetailPlacementView()
    && hasInsertAll
    && Boolean(els.suggestionsPopoverCheckboxDetail?.classList.contains('is-checked'));
}

function shouldShowAllMainPreviews() {
  return isMainInsertAllChecked() && shouldShowPlacementGuides();
}

function shouldShowAllDetailPreviews() {
  return isDetailInsertAllChecked() && shouldShowPlacementGuides();
}

function shouldShowAllPreviews() {
  return shouldShowAllDetailPreviews() || shouldShowAllMainPreviews();
}

function getInsertAllPreviewMarkers() {
  if (shouldShowAllDetailPreviews()) return getDetailMarkers();
  if (shouldShowAllMainPreviews()) return COMPONENT_1_OVERLAY.markers;
  return [];
}

function getDetailVariantConfig() {
  if (!state.detailPlacementVariant) return null;
  return PLACEMENT_DETAIL_VARIANTS[state.detailPlacementVariant] ?? null;
}

function getDetailMarkers() {
  return getDetailVariantConfig()?.markers ?? [];
}

function openPlacementDetail(variant) {
  state.detailPlacementVariant = variant;
  setSuggestionsPopoverView('detail');
}

function updateDetailPanelContent() {
  const config = getDetailVariantConfig();
  if (!config) return;

  if (els.suggestionsPopoverDetailIcon) {
    els.suggestionsPopoverDetailIcon.src = config.statusIcon;
  }
  if (els.suggestionsPopoverDetailStatusLabel) {
    els.suggestionsPopoverDetailStatusLabel.textContent = config.statusLabel;
  }

  const markerCount = config.markers.length;
  const showCheckbox = Boolean(config.showInsertAllCheckbox) && markerCount > 1;

  if (els.suggestionsPopover) {
    els.suggestionsPopover.classList.remove(
      'suggestions-popover--variant-success',
      'suggestions-popover--variant-warning',
      'suggestions-popover--variant-error',
    );
    if (state.detailPlacementVariant) {
      els.suggestionsPopover.classList.add(`suggestions-popover--variant-${state.detailPlacementVariant}`);
    }
  }

  if (els.suggestionsPopoverCheckboxDetailRow) {
    els.suggestionsPopoverCheckboxDetailRow.hidden = !showCheckbox;
  }
  if (els.suggestionsPopoverDetailTopDivider) {
    els.suggestionsPopoverDetailTopDivider.hidden = !showCheckbox;
  }
  if (els.suggestionsPopoverCheckboxDetail && showCheckbox) {
    setSuggestionsCheckboxChecked(els.suggestionsPopoverCheckboxDetail, false);
    const label = `Insert all instances (${markerCount})`;
    els.suggestionsPopoverCheckboxDetail.setAttribute('aria-label', label);
    if (els.suggestionsPopoverCheckboxDetailLabel) {
      els.suggestionsPopoverCheckboxDetailLabel.textContent = label;
    }
  }

  if (els.suggestionsPopoverLabelField) {
    els.suggestionsPopoverLabelField.hidden = state.detailPlacementVariant !== 'warning';
  }
  if (els.suggestionsPopoverLabelValue && config.labelFieldValue) {
    els.suggestionsPopoverLabelValue.textContent = config.labelFieldValue;
  }
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

  if (view === 'detail' && shouldShowPlacementGuides()) {
    updateDetailPanelContent();
    setDetailPlacementIndex(0);
    return;
  }

  if (view === 'main') {
    state.detailPlacementVariant = null;
    if (els.suggestionsPopover) {
      els.suggestionsPopover.classList.remove(
        'suggestions-popover--variant-success',
        'suggestions-popover--variant-warning',
        'suggestions-popover--variant-error',
      );
    }
    state.detailPlacementIndex = 0;
    if (state.hoveredMarker !== null) {
      state.hoveredMarker = null;
      refreshPlacementOverlay();
      updatePlacingGhost();
    }
    updateDetailPaginationUI();
  }
}

function isDetailPlacementView() {
  return state.suggestionsPopoverView === 'detail';
}

function setDetailPlacementIndex(index) {
  const detailMarkers = getDetailMarkers();
  const clamped = Math.max(0, Math.min(detailMarkers.length - 1, index));
  state.detailPlacementIndex = clamped;
  state.hoveredMarker = detailMarkers[clamped]?.num ?? null;
  updateDetailPaginationUI();
  refreshPlacementOverlay();
  updatePlacingGhost();
}

function updateDetailPaginationUI() {
  if (!els.suggestionsPopoverPaginationLabel) return;

  const detailMarkers = getDetailMarkers();
  const total = detailMarkers.length;
  const current = total > 0 ? state.detailPlacementIndex + 1 : 0;
  els.suggestionsPopoverPaginationLabel.textContent = total > 0 ? `${current} of ${total}` : '0 of 0';

  if (els.suggestionsPopoverPaginationPrev) {
    els.suggestionsPopoverPaginationPrev.hidden = false;
    const atStart = state.detailPlacementIndex <= 0;
    els.suggestionsPopoverPaginationPrev.disabled = atStart;
    els.suggestionsPopoverPaginationPrev.classList.toggle('is-disabled', atStart);
  }

  if (els.suggestionsPopoverPaginationNext) {
    els.suggestionsPopoverPaginationNext.hidden = false;
    const atEnd = state.detailPlacementIndex >= total - 1;
    els.suggestionsPopoverPaginationNext.disabled = atEnd;
    els.suggestionsPopoverPaginationNext.classList.toggle('is-disabled', atEnd);
  }
}

function bindSuggestionsPopoverEvents() {
  if (!els.suggestionsPopover) return;

  els.suggestionsPopover.addEventListener('click', (e) => {
    e.stopPropagation();

    const openSuccessDetail = e.target.closest('[data-action="open-success-detail"]');
    if (openSuccessDetail) {
      openPlacementDetail('success');
      return;
    }

    const openWarningDetail = e.target.closest('[data-action="open-warning-detail"]');
    if (openWarningDetail) {
      openPlacementDetail('warning');
      return;
    }

    const openErrorDetail = e.target.closest('[data-action="open-error-detail"]');
    if (openErrorDetail) {
      openPlacementDetail('error');
      return;
    }

    if (e.target.closest('#suggestions-popover-back')) {
      setSuggestionsPopoverView('main');
      return;
    }

    if (e.target.closest('#suggestions-popover-pagination-prev')) {
      if (state.detailPlacementIndex > 0) {
        setDetailPlacementIndex(state.detailPlacementIndex - 1);
      }
      return;
    }

    if (e.target.closest('#suggestions-popover-pagination-next')) {
      const detailMarkers = getDetailMarkers();
      if (state.detailPlacementIndex < detailMarkers.length - 1) {
        setDetailPlacementIndex(state.detailPlacementIndex + 1);
      }
      return;
    }

    if (e.target.closest('[data-action="place-component"]')) {
      confirmDetailPlacement();
      return;
    }

    if (e.target.closest('[data-action="cancel-detail-placement"]')) {
      cancelPlacement();
      return;
    }

    const checkbox = e.target.closest('.suggestions-popover__checkbox');
    if (checkbox) {
      toggleSuggestionsCheckbox(checkbox);
    }
  });
}

function upsertCanvasComponent(component) {
  const existing = state.canvasComponents.findIndex((c) => c.fileId === component.fileId);
  if (existing >= 0) {
    state.canvasComponents[existing] = component;
  } else {
    state.canvasComponents.push(component);
  }
}

function addCanvasComponent(component) {
  state.canvasComponents.push(component);
}

function getDetailPlacementMarkerNums() {
  if (shouldShowAllDetailPreviews()) {
    return getDetailMarkers().map((marker) => marker.num);
  }

  const detailMarkers = getDetailMarkers();
  const activeMarker = detailMarkers[state.detailPlacementIndex];
  return activeMarker ? [activeMarker.num] : [];
}

function createCanvasComponentFromLayout(file, layout, instanceId) {
  return {
    id: instanceId,
    fileId: file.id,
    src: file.insertPreview,
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
  };
}

function confirmDetailPlacement() {
  if (!state.placement.active || !isDetailPlacementView()) return;

  const { fileId } = state.placement;
  if (fileId !== COMPONENT_2_ID) return;

  const file = getFileById(fileId);
  if (!file) {
    cancelPlacement();
    return;
  }

  const markerNums = getDetailPlacementMarkerNums();
  if (markerNums.length === 0) return;

  const placementStamp = Date.now();
  markerNums.forEach((markerNum, index) => {
    const layout = getMarkerPreviewCanvasRect(markerNum);
    if (!layout) return;

    addCanvasComponent(createCanvasComponentFromLayout(
      file,
      layout,
      `component-${fileId}-${markerNum}-${placementStamp}-${index}`,
    ));
  });

  cancelPlacement();
  renderCanvasComponents();
  renderFiles();
}

function confirmPlacement() {
  if (!state.placement.active) return;

  const { fileId } = state.placement;
  const file = getFileById(fileId);
  if (!file) {
    cancelPlacement();
    return;
  }

  const layout = getPlacingGhostLayout();
  if (!layout) {
    cancelPlacement();
    return;
  }

  upsertCanvasComponent({
    id: `component-${fileId}`,
    fileId,
    src: file.insertPreview,
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
  });

  cancelPlacement();
  renderCanvasComponents();
  renderFiles();
}

function onPlacementMove(e) {
  if (!state.placement.active || shouldShowAllPreviews()) return;
  const { x, y } = clientToArtboard(e.clientX, e.clientY);
  state.placement.x = x;
  state.placement.y = y;
  updatePlacingGhost();
}

function onPlacementClick(e) {
  if (!state.placement.active) return;
  if (e.target.closest('.context-menu, .modal-overlay, .data-panel, .top-nav, .suggestions-popover, .component-overlay, .component-marker, .placement-toolbar')) return;

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

function updateSuggestionsPopover() {
  if (!els.suggestionsPopover) return;
  els.suggestionsPopover.hidden = !shouldShowPlacementGuides();
}

function getComponentOpacity(component) {
  if (isPlacingComponent2() && component.fileId === COMPONENT_1_ID) {
    return REFERENCE_OPACITY;
  }
  return 1;
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

function renderMarkerButton(marker, style, extraClass = '') {
  return `<button type="button" class="component-marker component-marker--${marker.variant}${extraClass}" data-marker="${marker.num}" style="${style}" aria-label="Placement option ${marker.num}"><span class="component-marker__header"><span class="component-marker__label">${marker.num}</span></span></button>`;
}

function renderHoverGroupHtml(marker, overlay, { includeMarker = true } = {}) {
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
      ${includeMarker ? renderMarkerButton(marker, markerStyle, ' is-hovered') : ''}
    </div>`;
}

function renderPreviewHtml(marker, overlay) {
  const preview = getPreviewPosition(marker);
  const previewStyle = [
    `left:${overlayPercent(preview.x, overlay.width)}`,
    `top:${overlayPercent(preview.y, overlay.height)}`,
    `width:${overlayPercent(preview.width, overlay.width)}`,
    `height:${overlayPercent(preview.height, overlay.height)}`,
  ].join(';');
  return `<img class="placement-preview" src="${PREVIEW_IMAGES[marker.variant]}" alt="" style="${previewStyle}" />`;
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

  const detailMarkers = getDetailMarkers();
  const detailMarkerNums = new Set(detailMarkers.map((marker) => marker.num));
  const insertAllMarkers = getInsertAllPreviewMarkers();
  const showAllPreviews = shouldShowAllPreviews();
  const insertAllMarkerNums = new Set(insertAllMarkers.map((marker) => marker.num));
  const activeMarkerNum = showAllPreviews && isDetailPlacementView()
    ? insertAllMarkers[state.detailPlacementIndex]?.num
    : state.hoveredMarker;
  const activeMarker = markers.find((marker) => marker.num === activeMarkerNum);

  let previewHtml = '';
  let hoverGroupHtml = '';

  if (showAllPreviews) {
    previewHtml = insertAllMarkers.map((marker) => renderPreviewHtml(marker, overlay)).join('');
    if (activeMarker) {
      hoverGroupHtml = renderHoverGroupHtml(activeMarker, overlay, { includeMarker: false });
    }
  } else if (activeMarker) {
    previewHtml = renderPreviewHtml(activeMarker, overlay);
    hoverGroupHtml = renderHoverGroupHtml(activeMarker, overlay);
  }

  const hiddenMarkerNums = new Set();
  if (!showAllPreviews && activeMarker) {
    hiddenMarkerNums.add(activeMarker.num);
  }

  const markersHtml = markers
    .filter((marker) => !hiddenMarkerNums.has(marker.num))
    .map((marker) => {
      const style = [
        `left:${overlayPercent(marker.x, overlay.width)}`,
        `top:${overlayPercent(marker.y, overlay.height)}`,
        `width:${overlayPercent(marker.width, overlay.width)}`,
        `height:${overlayPercent(marker.height, overlay.height)}`,
      ].join(';');
      let markerClass = '';
      if (showAllPreviews && insertAllMarkerNums.has(marker.num) && marker.num === activeMarkerNum) {
        markerClass += ' is-hovered';
      }
      if (isDetailPlacementView() && !detailMarkerNums.has(marker.num)) {
        markerClass += ' is-dimmed';
      }
      return renderMarkerButton(marker, style, markerClass);
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
  const imageOpacity = getComponentOpacity(component);
  const showPlacementGuides =
    component.fileId === COMPONENT_1_ID && shouldShowPlacementGuides();

  if (showPlacementGuides) {
    return `
    <div class="canvas-component-group is-interactive" style="${style}">
      <img class="canvas-component" src="${escapeHtml(component.src)}" alt="Inserted component" style="opacity:${imageOpacity}" />
      ${renderComponent1Overlay()}
    </div>`;
  }

  return `
    <img
      class="canvas-component"
      src="${escapeHtml(component.src)}"
      alt="Inserted component"
      style="${style};opacity:${imageOpacity}"
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

  if (shouldShowAllPreviews()) {
    removePlacingGhosts();
    getInsertAllPreviewMarkers().forEach((marker, index) => {
      const layout = getMarkerPreviewCanvasRect(marker.num);
      if (!layout) return;
      const ghost = ensurePlacingGhost(index);
      if (ghost) applyPlacingGhostLayout(ghost, layout, true);
    });
    return;
  }

  removePlacingGhosts();
  const layout = getPlacingGhostLayout();
  if (!layout) return;

  const ghost = ensurePlacingGhost(0);
  if (!ghost) return;

  const snapped = Boolean(state.hoveredMarker && shouldShowPlacementGuides());
  applyPlacingGhostLayout(ghost, layout, snapped);
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
}

function bindOverlayInteractions() {
  els.canvasComponents.addEventListener('click', (e) => {
    if (!shouldShowPlacementGuides()) return;
    const confirmBtn = e.target.closest('[data-action="confirm-placement"]');
    if (!confirmBtn) return;
    e.preventDefault();
    e.stopPropagation();
    confirmPlacement();
  });

  els.canvasComponents.addEventListener('mouseover', (e) => {
    if (!shouldShowPlacementGuides()) return;
    const marker = e.target.closest('.component-marker');
    if (!marker) return;
    const num = Number(marker.dataset.marker);

    if (isDetailPlacementView()) {
      const detailIndex = getDetailMarkers().findIndex((item) => item.num === num);
      if (detailIndex < 0 || state.detailPlacementIndex === detailIndex) return;
      setDetailPlacementIndex(detailIndex);
      return;
    }

    if (state.hoveredMarker === num) return;
    state.hoveredMarker = num;
    refreshPlacementOverlay();
    updatePlacingGhost();
  });

  els.canvasComponents.addEventListener('mouseout', (e) => {
    if (!shouldShowPlacementGuides()) return;
    if (isDetailPlacementView()) return;
    const group = e.target.closest('.canvas-component-group.is-interactive');
    if (!group) return;
    const related = e.relatedTarget;
    if (related && group.contains(related)) return;
    state.hoveredMarker = null;
    refreshPlacementOverlay();
    updatePlacingGhost();
  });
}

function renderCanvasComponents() {
  const placingFileId = state.placement.active ? state.placement.fileId : null;

  let html = state.canvasComponents
    .filter((c) => !(placingFileId && c.fileId === placingFileId))
    .map((c) => renderPlacedComponent(c)).join('');

  els.canvasComponents.innerHTML = html;

  if (state.placement.active) {
    ensurePlacingGhost();
    updatePlacingGhost();
  }

  updateSuggestionsPopover();
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
