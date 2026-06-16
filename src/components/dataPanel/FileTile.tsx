import {
  Box,
  Collapse,
  IconButton,
  styled,
  Typography,
} from '@weave-mui/material';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { ProjectFile } from '../../types';
import { formatModifiedDate } from '../../data/dataPanel.mock';
import { FusionDesignIcon } from '../shared/FusionDesignIcon';

/**
 * Tile 3.0 approximation using styled Box.
 * Gap: Tile 3.0 is design-only in Figma; composed manually to match specs.
 */
const TileRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected?: boolean }>(({ selected }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  padding: 16,
  borderRadius: 12,
  border: selected ? '1px solid #38ABDF' : '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: selected ? 'rgba(205, 234, 247, 0.25)' : '#F7F7F7',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
  '&:hover': {
    backgroundColor: selected ? 'rgba(205, 234, 247, 0.35)' : '#EFEFEF',
  },
  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px #38ABDF',
  },
}));

const ThumbnailBox = styled(Box)({
  width: 56,
  height: 56,
  minWidth: 56,
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

interface FileTileProps {
  file: ProjectFile;
  selected: boolean;
  onSelect: (id: string) => void;
  onToggleExpand: (id: string) => void;
}

export function FileTile({ file, selected, onSelect, onToggleExpand }: FileTileProps) {
  const isExpanded = file.expanded ?? false;

  const handleSelect = () => onSelect(file.id);

  const handleExpandClick = (event: MouseEvent) => {
    event.stopPropagation();
    onToggleExpand(file.id);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(file.id);
    }
  };

  return (
    <Box component="article" aria-label={`${file.name}, modified ${formatModifiedDate(file.modifiedAt)}`}>
      <TileRoot
        selected={selected}
        tabIndex={0}
        role="button"
        aria-pressed={selected}
        aria-expanded={isExpanded}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
      >
        <ThumbnailBox>
          <FusionDesignIcon size={32} />
        </ThumbnailBox>
        <Box sx={{ flex: 1, pl: 2, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
            <FusionDesignIcon size={16} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '20px',
                color: '#363636',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {file.name}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: '18px',
              color: '#363636',
            }}
          >
            {formatModifiedDate(file.modifiedAt)}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
            <IconButton
              size="small"
              aria-label={isExpanded ? `Collapse details for ${file.name}` : `Expand details for ${file.name}`}
              aria-expanded={isExpanded}
              onClick={handleExpandClick}
              sx={{
                width: 24,
                height: 24,
                p: 0,
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <Box component="svg" width={12} height={12} viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </TileRoot>
      <Collapse in={isExpanded}>
        {/* Expanded content inferred — childWrapper hidden in Figma L1 */}
        <Box
          sx={{
            mt: 1,
            px: 2,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
          }}
          role="region"
          aria-label={`Details for ${file.name}`}
        >
          <MetadataRow label="Size" value={file.size ?? '—'} />
          <MetadataRow label="Owner" value={file.owner ?? '—'} />
          <MetadataRow label="Version" value={file.version ?? '—'} />
        </Box>
      </Collapse>
    </Box>
  );
}

function MetadataRow({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
      <Typography sx={{ fontSize: 12, color: '#666' }}>{label}</Typography>
      <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#363636' }}>{value}</Typography>
    </Box>
  );
}
