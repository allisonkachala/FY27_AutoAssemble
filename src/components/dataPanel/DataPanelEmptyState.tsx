import { Box, Button, Typography } from '@weave-mui/material';

interface DataPanelEmptyStateProps {
  onUpload: () => void;
  onNewFolder: () => void;
}

/** Empty file list state — uses Weave Button/Typography; EmptyState action API varies by version. */
export function DataPanelEmptyState({ onUpload, onNewFolder }: DataPanelEmptyStateProps) {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
      role="status"
      aria-label="No files in project"
    >
      <Box
        component="svg"
        width={64}
        height={64}
        viewBox="0 0 64 64"
        aria-hidden="true"
        sx={{ opacity: 0.4 }}
      >
        <rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 28h48" stroke="currentColor" strokeWidth="2" />
      </Box>
      <Typography sx={{ fontSize: 16, fontWeight: 700, color: '#363636' }}>No files yet</Typography>
      <Typography sx={{ fontSize: 14, color: '#666', maxWidth: 280 }}>
        Upload a design file or create a folder to get started.
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
        <Button variant="contained" onClick={onUpload}>
          Upload
        </Button>
        <Button variant="outlined" onClick={onNewFolder}>
          New Folder
        </Button>
      </Box>
    </Box>
  );
}
