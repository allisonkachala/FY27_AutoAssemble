export type PanelTab = 'data' | 'people';

export type FileType = 'fusion-design' | 'folder';

export interface ProjectFile {
  id: string;
  name: string;
  modifiedAt: string;
  type: FileType;
  size?: string;
  owner?: string;
  version?: string;
  expanded?: boolean;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  email: string;
  avatarInitials: string;
}

export interface BrowserNode {
  id: string;
  label: string;
  depth: number;
  expandable?: boolean;
  expanded?: boolean;
  visible?: boolean;
  icon?: 'design' | 'settings' | 'units' | 'assembly' | 'folder' | 'component';
  children?: BrowserNode[];
}

export type FileListState = 'idle' | 'loading' | 'empty' | 'error';

export type SortOption = 'name' | 'modified' | 'type';

export interface DataPanelState {
  activeTab: PanelTab;
  selectedFileId: string | null;
  files: ProjectFile[];
  listState: FileListState;
  sortBy: SortOption;
  errorMessage: string | null;
}
