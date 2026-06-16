import { Box } from '@weave-mui/material';
import { FusionBrowser } from './FusionBrowser';

/**
 * 3D viewport area with static gradient placeholder and view cube overlay.
 * Gap: View cube and viewport are Fusion-specific; screenshot used as gradient approximation.
 */
export function ViewportArea() {
  return (
    <Box
      component="main"
      aria-label="3D viewport"
      sx={{
        flex: 1,
        position: 'relative',
        background: 'linear-gradient(135deg, #4A5568 0%, #718096 40%, #A0AEC0 70%, #CBD5E0 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Viewport content placeholder — mechanical assembly silhouette */}
      <Box
        sx={{
          position: 'absolute',
          inset: '10% 15%',
          borderRadius: 2,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden="true"
      >
        <Box
          component="svg"
          width="60%"
          height="60%"
          viewBox="0 0 400 300"
          sx={{ opacity: 0.35 }}
        >
          <rect x="80" y="120" width="240" height="80" rx="4" fill="#888" />
          <rect x="120" y="80" width="160" height="40" rx="4" fill="#999" />
          <circle cx="120" cy="200" r="30" fill="#777" />
          <circle cx="280" cy="200" r="30" fill="#777" />
          <rect x="160" y="40" width="80" height="40" rx="4" fill="#AAA" />
        </Box>
      </Box>

      <FusionBrowser />

      {/* View Cube — top right */}
      <Box
        aria-label="View cube"
        sx={{
          position: 'absolute',
          top: 8,
          right: 12,
          width: 100,
          height: 124,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="svg"
          width={80}
          height={80}
          viewBox="0 0 80 80"
          aria-hidden="true"
        >
          <polygon points="40,10 70,30 40,50 10,30" fill="#CCCCCC" stroke="#888" strokeWidth="1" />
          <polygon points="40,10 70,30 70,60 40,40" fill="#AAAAAA" stroke="#888" strokeWidth="1" />
          <polygon points="40,10 10,30 10,60 40,40" fill="#DDDDDD" stroke="#888" strokeWidth="1" />
          <text x="36" y="28" fontSize="8" fill="#333" fontWeight="bold">TOP</text>
          <text x="58" y="48" fontSize="7" fill="#333">FRONT</text>
          <text x="8" y="48" fontSize="7" fill="#333">RIGHT</text>
        </Box>
      </Box>
    </Box>
  );
}
