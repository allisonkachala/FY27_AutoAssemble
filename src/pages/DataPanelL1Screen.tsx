import { Box } from '@weave-mui/material';
import { DataPanel } from '../components/dataPanel/DataPanel';
import { FusionTimeline } from '../components/fusionChrome/FusionTimeline';
import { FusionToolbar } from '../components/fusionChrome/FusionToolbar';
import { FusionTopBar } from '../components/fusionChrome/FusionTopBar';
import { ViewportArea } from '../components/fusionChrome/ViewportArea';

/**
 * Full Data Panel L1 screen — 1920×1080 layout.
 * Data Panel is fully interactive; Fusion chrome is simplified/static per plan scope.
 */
export function DataPanelL1Screen() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        minWidth: 1280,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: '#1E1E1E',
      }}
    >
      <FusionTopBar />
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <DataPanel />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <FusionToolbar />
          <ViewportArea />
          <FusionTimeline />
        </Box>
      </Box>
    </Box>
  );
}
