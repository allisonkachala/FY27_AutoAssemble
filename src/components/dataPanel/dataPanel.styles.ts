import { styled } from '@weave-mui/material';
import type { PanelTab } from '../../types';

export const DATA_PANEL_WIDTH = 428;

export const PanelRoot = styled('aside')({
  width: DATA_PANEL_WIDTH,
  minWidth: DATA_PANEL_WIDTH,
  height: '100%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  gap: 24,
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const SegmentedTabList = styled('div')({
  display: 'flex',
  width: '100%',
});

interface SegmentedTabProps {
  selected?: boolean;
}

/**
 * Active mode tab approximation.
 * Gap: Figma "Active mode tab" is design-only; styled to match Figma tokens from node 82:37203/37204.
 */
export const SegmentedTab = styled('button', {
  shouldForwardProp: (prop) => prop !== 'selected',
})<SegmentedTabProps>(({ selected }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 24px',
  fontFamily: 'Artifakt Element, sans-serif',
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '20px',
  cursor: 'pointer',
  border: selected ? '1px solid #38ABDF' : '1px solid rgba(128, 128, 128, 0.5)',
  backgroundColor: selected ? 'rgba(205, 234, 247, 0.4)' : 'transparent',
  color: selected ? '#000000' : '#363636',
  outline: 'none',
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    backgroundColor: selected ? 'rgba(205, 234, 247, 0.55)' : 'rgba(0, 0, 0, 0.04)',
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 2px #38ABDF',
  },
}));

export function getTabId(tab: PanelTab): string {
  return `data-panel-tab-${tab}`;
}

export function getTabPanelId(tab: PanelTab): string {
  return `data-panel-panel-${tab}`;
}
