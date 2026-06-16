import { Box } from '@weave-mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  MOCK_FILES,
  MOCK_PEOPLE,
  PROJECT_NAME,
  sortFiles,
} from '../../data/dataPanel.mock';
import type { FileListState, PanelTab, ProjectFile, SortOption } from '../../types';
import { DataPanelActions } from './DataPanelActions';
import { DataPanelEmptyState } from './DataPanelEmptyState';
import { DataPanelTabs } from './DataPanelTabs';
import { FileTileList } from './FileTileList';
import { getTabPanelId, PanelRoot } from './dataPanel.styles';
import { NewFolderDialog } from './NewFolderDialog';
import { PeopleTabContent } from './PeopleTabContent';
import { ProjectBreadcrumb } from './ProjectBreadcrumb';
import { UploadDialog } from './UploadDialog';

const LOADING_DURATION_MS = 1500;

export function DataPanel() {
  const [activeTab, setActiveTab] = useState<PanelTab>('data');
  const [files, setFiles] = useState<ProjectFile[]>(MOCK_FILES);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('modified');
  const [listState, setListState] = useState<FileListState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [newFolderOpen, setNewFolderOpen] = useState(false);

  const sortedFiles = useMemo(() => sortFiles(files, sortBy), [files, sortBy]);

  const triggerLoading = useCallback(() => {
    setListState('loading');
    setErrorMessage(null);
    window.setTimeout(() => setListState('idle'), LOADING_DURATION_MS);
  }, []);

  useEffect(() => {
    if (activeTab === 'people') {
      triggerLoading();
    }
  }, [activeTab, triggerLoading]);

  const handleTabChange = (tab: PanelTab) => {
    setActiveTab(tab);
  };

  const handleSelectFile = (id: string) => {
    setSelectedFileId(id);
  };

  const handleToggleExpand = (id: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, expanded: !f.expanded } : f)),
    );
  };

  const handleUpload = (fileName: string) => {
    const newFile: ProjectFile = {
      id: `file-${Date.now()}`,
      name: fileName,
      modifiedAt: new Date().toISOString(),
      type: 'fusion-design',
      size: '1.0 MB',
      owner: 'You',
      version: 'v1.0',
    };
    setFiles((prev) => [newFile, ...prev]);
    setListState('idle');
    setErrorMessage(null);
    setSelectedFileId(newFile.id);
  };

  const handleCreateFolder = (folderName: string) => {
    const newFolder: ProjectFile = {
      id: `folder-${Date.now()}`,
      name: folderName,
      modifiedAt: new Date().toISOString(),
      type: 'folder',
      owner: 'You',
    };
    setFiles((prev) => [newFolder, ...prev]);
    setListState('idle');
    setErrorMessage(null);
  };

  const handleSimulateEmpty = () => {
    setFiles([]);
    setListState('empty');
    setErrorMessage(null);
    setSelectedFileId(null);
  };

  const handleSimulateError = () => {
    setListState('error');
    setErrorMessage('Unable to load project files. Check your connection and try again.');
  };

  const handleSimulateLoading = () => {
    triggerLoading();
  };

  const handleHomeClick = () => {
    setSelectedFileId(null);
    if (files.length === 0) {
      setFiles(MOCK_FILES);
      setListState('idle');
    }
  };

  const isLoading = listState === 'loading';
  const isEmpty = listState === 'empty' || (sortedFiles.length === 0 && listState === 'idle');

  return (
    <PanelRoot aria-label="Data panel">
      <DataPanelTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'data' && (
        <>
          <DataPanelActions
            onUpload={() => setUploadOpen(true)}
            onNewFolder={() => setNewFolderOpen(true)}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onSimulateError={handleSimulateError}
            onSimulateEmpty={handleSimulateEmpty}
            onSimulateLoading={handleSimulateLoading}
          />
          <Box
            id={getTabPanelId('data')}
            role="tabpanel"
            aria-labelledby="data-panel-tab-data"
            sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1, minHeight: 0 }}
          >
            <ProjectBreadcrumb projectName={PROJECT_NAME} onHomeClick={handleHomeClick} />
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                pr: 0.5,
                '&::-webkit-scrollbar': { width: 6 },
                '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 3 },
              }}
            >
              {isEmpty && !isLoading && !errorMessage ? (
                <DataPanelEmptyState
                  onUpload={() => setUploadOpen(true)}
                  onNewFolder={() => setNewFolderOpen(true)}
                />
              ) : (
                <FileTileList
                  files={sortedFiles}
                  selectedFileId={selectedFileId}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  onSelect={handleSelectFile}
                  onToggleExpand={handleToggleExpand}
                />
              )}
            </Box>
          </Box>
        </>
      )}

      {activeTab === 'people' && (
        <Box
          id={getTabPanelId('people')}
          role="tabpanel"
          aria-labelledby="data-panel-tab-people"
          sx={{ flex: 1, minHeight: 0, overflowY: 'auto' }}
        >
          {isLoading ? (
            <FileTileList
              files={[]}
              selectedFileId={null}
              isLoading
              errorMessage={null}
              onSelect={() => undefined}
              onToggleExpand={() => undefined}
            />
          ) : (
            <PeopleTabContent people={MOCK_PEOPLE} />
          )}
        </Box>
      )}

      <UploadDialog
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onUpload={handleUpload}
      />
      <NewFolderDialog
        open={newFolderOpen}
        onClose={() => setNewFolderOpen(false)}
        onCreate={handleCreateFolder}
      />
    </PanelRoot>
  );
}
