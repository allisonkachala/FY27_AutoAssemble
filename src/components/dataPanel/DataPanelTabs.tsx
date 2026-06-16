import type { KeyboardEvent } from 'react';
import type { PanelTab } from '../../types';
import { getTabId, getTabPanelId, SegmentedTab, SegmentedTabList } from './dataPanel.styles';

interface DataPanelTabsProps {
  activeTab: PanelTab;
  onTabChange: (tab: PanelTab) => void;
}

export function DataPanelTabs({ activeTab, onTabChange }: DataPanelTabsProps) {
  const tabs: { id: PanelTab; label: string }[] = [
    { id: 'data', label: 'Data' },
    { id: 'people', label: 'People' },
  ];

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      nextIndex = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      onTabChange(tabs[nextIndex].id);
      document.getElementById(getTabId(tabs[nextIndex].id))?.focus();
    }
  };

  return (
    <SegmentedTabList role="tablist" aria-label="Data panel views">
      {tabs.map((tab, index) => (
        <SegmentedTab
          key={tab.id}
          id={getTabId(tab.id)}
          role="tab"
          type="button"
          selected={activeTab === tab.id}
          aria-selected={activeTab === tab.id}
          aria-controls={getTabPanelId(tab.id)}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onTabChange(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {tab.label}
        </SegmentedTab>
      ))}
    </SegmentedTabList>
  );
}
