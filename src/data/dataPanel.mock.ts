import type { BrowserNode, Person, ProjectFile } from '../types';

export const PROJECT_NAME = 'FY27 AutoAssemble';

export const MOCK_FILES: ProjectFile[] = [
  {
    id: 'file-1',
    name: 'Main Assembly.f3d',
    modifiedAt: '2026-06-08T16:52:00',
    type: 'fusion-design',
    size: '12.4 MB',
    owner: 'Alex Chen',
    version: 'v3.2',
  },
  {
    id: 'file-2',
    name: 'Bracket Subassembly.f3d',
    modifiedAt: '2026-06-07T09:15:00',
    type: 'fusion-design',
    size: '4.8 MB',
    owner: 'Maria Santos',
    version: 'v1.8',
  },
  {
    id: 'file-3',
    name: 'Motor Mount.f3d',
    modifiedAt: '2026-06-06T14:30:00',
    type: 'fusion-design',
    size: '2.1 MB',
    owner: 'Alex Chen',
    version: 'v2.0',
  },
  {
    id: 'file-4',
    name: 'Enclosure Shell.f3d',
    modifiedAt: '2026-06-05T11:00:00',
    type: 'fusion-design',
    size: '8.7 MB',
    owner: 'Jordan Lee',
    version: 'v4.1',
  },
  {
    id: 'file-5',
    name: 'Wiring Harness.f3d',
    modifiedAt: '2026-06-04T16:45:00',
    type: 'fusion-design',
    size: '1.3 MB',
    owner: 'Maria Santos',
    version: 'v1.2',
  },
  {
    id: 'file-6',
    name: 'Base Plate.f3d',
    modifiedAt: '2026-06-03T10:20:00',
    type: 'fusion-design',
    size: '956 KB',
    owner: 'Alex Chen',
    version: 'v1.5',
  },
  {
    id: 'file-7',
    name: 'Control Panel.f3d',
    modifiedAt: '2026-06-02T13:55:00',
    type: 'fusion-design',
    size: '3.2 MB',
    owner: 'Jordan Lee',
    version: 'v2.3',
  },
  {
    id: 'file-8',
    name: 'Fastener Library.f3d',
    modifiedAt: '2026-06-01T08:40:00',
    type: 'fusion-design',
    size: '512 KB',
    owner: 'Maria Santos',
    version: 'v1.0',
  },
  {
    id: 'file-9',
    name: 'Render Setup.f3d',
    modifiedAt: '2026-05-30T17:10:00',
    type: 'fusion-design',
    size: '6.1 MB',
    owner: 'Alex Chen',
    version: 'v1.1',
  },
];

export const MOCK_PEOPLE: Person[] = [
  {
    id: 'person-1',
    name: 'Alex Chen',
    role: 'Project Lead',
    email: 'alex.chen@autodesk.com',
    avatarInitials: 'AC',
  },
  {
    id: 'person-2',
    name: 'Maria Santos',
    role: 'Mechanical Engineer',
    email: 'maria.santos@autodesk.com',
    avatarInitials: 'MS',
  },
  {
    id: 'person-3',
    name: 'Jordan Lee',
    role: 'Industrial Designer',
    email: 'jordan.lee@autodesk.com',
    avatarInitials: 'JL',
  },
  {
    id: 'person-4',
    name: 'Sam Patel',
    role: 'Manufacturing Engineer',
    email: 'sam.patel@autodesk.com',
    avatarInitials: 'SP',
  },
  {
    id: 'person-5',
    name: 'Riley Morgan',
    role: 'Viewer',
    email: 'riley.morgan@autodesk.com',
    avatarInitials: 'RM',
  },
];

export const MOCK_BROWSER_TREE: BrowserNode[] = [
  {
    id: 'design',
    label: 'Design',
    depth: 0,
    expandable: true,
    expanded: true,
    visible: true,
    icon: 'design',
    children: [
      {
        id: 'doc-settings',
        label: 'Document Settings',
        depth: 1,
        expandable: true,
        expanded: true,
        icon: 'settings',
        children: [
          {
            id: 'units',
            label: 'Units: mm',
            depth: 2,
            icon: 'units',
          },
          {
            id: 'assembly',
            label: 'Assembly Context',
            depth: 2,
            icon: 'assembly',
          },
        ],
      },
      {
        id: 'named-views',
        label: 'Named Views',
        depth: 1,
        expandable: true,
        expanded: true,
        icon: 'folder',
        children: [
          {
            id: 'bodies',
            label: 'Bodies',
            depth: 2,
            expandable: true,
            expanded: false,
            visible: false,
            icon: 'folder',
          },
          {
            id: 'component-1',
            label: 'Component1:1',
            depth: 2,
            visible: true,
            icon: 'component',
          },
        ],
      },
    ],
  },
];

/** Formats ISO date string to match Figma display: "2026-06-08 4:52 PM" */
export function formatModifiedDate(isoDate: string): string {
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

export function sortFiles(files: ProjectFile[], sortBy: 'name' | 'modified' | 'type'): ProjectFile[] {
  const sorted = [...files];
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'modified':
      return sorted.sort(
        (a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime(),
      );
    case 'type':
      return sorted.sort((a, b) => a.type.localeCompare(b.type));
    default:
      return sorted;
  }
}
