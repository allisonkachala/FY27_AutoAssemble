import { Box, IconButton, Tooltip, Typography } from '@weave-mui/material';

/**
 * Fusion Top Navigation — simplified static chrome.
 * Gap: Fusion QAT is not a Weave GlobalHeader pattern.
 */
export function FusionTopBar() {
  return (
    <Box
      component="nav"
      aria-label="Application navigation"
      sx={{
        height: 36,
        minHeight: 36,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
        color: '#E0E0E0',
        px: 1,
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 400 }}>
        <QatButton label="Hub menu" icon="hub" />
        <Typography sx={{ fontSize: 12, fontWeight: 600 }}>My Hub</Typography>
        <QatButton label="Sync" icon="sync" />
        <QatButton label="Search" icon="search" />
        <QatButton label="Close" icon="close" />
        <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.15)', mx: 0.5 }} />
        <QatButton label="Home" icon="home" />
        <QatButton label="Data panel" icon="panel" active />
        <Typography sx={{ fontSize: 12, px: 0.5 }}>File</Typography>
        <QatButton label="Save" icon="save" />
        <QatButton label="Undo" icon="undo" />
        <QatButton label="Redo" icon="redo" />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 0.5,
            borderRadius: 1,
            backgroundColor: 'rgba(255,255,255,0.08)',
            minWidth: 200,
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>Untitled</Typography>
          <QatButton label="Close document tab" icon="close" small />
        </Box>
        <Tooltip title="New tab">
          <IconButton size="small" aria-label="New tab" sx={{ color: '#E0E0E0', ml: 0.5 }}>
            <Typography sx={{ fontSize: 16, lineHeight: 1 }}>+</Typography>
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pr: 1 }}>
        <QatButton label="AI assistant" icon="ai" />
        <QatButton label="Extensions" icon="extensions" />
        <QatButton label="Job status" icon="job" />
        <QatButton label="Help" icon="help" />
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            bgcolor: '#009CE3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            fontWeight: 700,
          }}
          aria-label="User account"
        >
          U
        </Box>
      </Box>
    </Box>
  );
}

function QatButton({
  label,
  icon,
  active,
  small,
}: {
  label: string;
  icon: string;
  active?: boolean;
  small?: boolean;
}) {
  return (
    <Tooltip title={label}>
      <IconButton
        size="small"
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        sx={{
          color: active ? '#38ABDF' : '#E0E0E0',
          width: small ? 20 : 28,
          height: small ? 20 : 28,
          fontSize: 10,
          p: 0.5,
        }}
      >
        <Box
          sx={{
            width: small ? 12 : 16,
            height: small ? 12 : 16,
            borderRadius: icon === 'panel' ? 0.5 : '50%',
            border: '1px solid currentColor',
            opacity: 0.9,
          }}
        />
      </IconButton>
    </Tooltip>
  );
}
