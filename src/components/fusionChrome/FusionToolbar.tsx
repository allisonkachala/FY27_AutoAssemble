import { Box, Divider, Typography } from '@weave-mui/material';

const TOOLBAR_TABS = ['Solid', 'Surface', 'Mesh', 'Sheet Metal', 'Plastic', 'Manage', 'Utilities'];

/**
 * Fusion Design workspace toolbar — static placeholder.
 * Gap: No Weave equivalent for Fusion Fremont toolbar.
 */
export function FusionToolbar() {
  return (
    <Box
      aria-label="Design toolbar"
      sx={{
        height: 92,
        minHeight: 92,
        backgroundColor: '#3D3D3D',
        borderBottom: '1px solid rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', height: 24, px: 1.5, gap: 0 }}>
        {TOOLBAR_TABS.map((tab, i) => (
          <Typography
            key={tab}
            sx={{
              fontSize: 11,
              px: 1.5,
              py: 0.25,
              color: i === 0 ? '#FFFFFF' : '#AAAAAA',
              borderBottom: i === 0 ? '2px solid #009CE3' : 'none',
              cursor: 'default',
            }}
          >
            {tab}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, px: 1, gap: 0 }}>
        <Box
          sx={{
            width: 120,
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Typography sx={{ fontSize: 10, color: '#CCC', textAlign: 'center' }}>Design<br />Workspace</Typography>
        </Box>
        {['Create', 'Modify', 'Assemble', 'Configure', 'Inspect'].map((section) => (
          <Box key={section} sx={{ display: 'flex', alignItems: 'center', px: 1, gap: 0.5 }}>
            {[1, 2, 3].map((n) => (
              <Box
                key={n}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                aria-hidden="true"
              />
            ))}
            <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: 'rgba(255,255,255,0.1)' }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
