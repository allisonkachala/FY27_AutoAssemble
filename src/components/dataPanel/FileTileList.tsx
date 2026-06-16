import { Alert, Box, Skeleton, Stack } from '@weave-mui/material';
import type { ProjectFile } from '../../types';
import { FileTile } from './FileTile';

interface FileTileListProps {
  files: ProjectFile[];
  selectedFileId: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  onSelect: (id: string) => void;
  onToggleExpand: (id: string) => void;
}

function FileTileSkeleton() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        p: 2,
        borderRadius: '12px',
        border: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#F7F7F7',
      }}
    >
      <Skeleton variant="rectangular" width={56} height={56} sx={{ borderRadius: 1 }} />
      <Box sx={{ flex: 1 }}>
        <Skeleton width="60%" height={20} />
        <Skeleton width="40%" height={16} sx={{ mt: 1 }} />
      </Box>
    </Box>
  );
}

export function FileTileList({
  files,
  selectedFileId,
  isLoading,
  errorMessage,
  onSelect,
  onToggleExpand,
}: FileTileListProps) {
  if (errorMessage) {
    return (
      <Alert severity="error" role="alert" sx={{ width: '100%' }}>
        {errorMessage}
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Stack spacing={1.5} aria-busy="true" aria-label="Loading files">
        {Array.from({ length: 5 }).map((_, i) => (
          <FileTileSkeleton key={i} />
        ))}
      </Stack>
    );
  }

  return (
    <Stack spacing={1.5} role="list" aria-label="Project files">
      {files.map((file) => (
        <Box key={file.id} role="listitem">
          <FileTile
            file={file}
            selected={selectedFileId === file.id}
            onSelect={onSelect}
            onToggleExpand={onToggleExpand}
          />
        </Box>
      ))}
    </Stack>
  );
}
