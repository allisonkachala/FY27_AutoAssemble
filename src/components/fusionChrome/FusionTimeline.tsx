import { Box, Divider, IconButton, Tooltip } from '@weave-mui/material';
import { useState } from 'react';

/**
 * Fusion timeline bar — static with cosmetic play toggle.
 * Gap: Fusion-specific timeline; no Weave equivalent.
 */
export function FusionTimeline() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box
      aria-label="Timeline"
      sx={{
        height: 50,
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
        borderTop: '1px solid rgba(0,0,0,0.3)',
        color: '#E0E0E0',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1.25, minWidth: 132 }}>
        {[
          { label: 'Beginning', icon: '⏮' },
          { label: 'Previous', icon: '◀' },
          { label: 'Play', icon: isPlaying ? '⏸' : '▶', action: () => setIsPlaying((p) => !p) },
          { label: 'Next', icon: '▶' },
          { label: 'End', icon: '⏭' },
        ].map(({ label, icon, action }) => (
          <Tooltip key={label} title={label}>
            <IconButton
              size="small"
              aria-label={label}
              aria-pressed={label === 'Play' ? isPlaying : undefined}
              onClick={action}
              sx={{ color: '#E0E0E0', fontSize: 10, width: 24, height: 24 }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', px: 1, gap: 0.5, overflow: 'hidden' }}>
        <Box
          sx={{
            width: 24,
            height: 26,
            borderRadius: 0.5,
            bgcolor: '#009CE3',
            opacity: 0.8,
          }}
          aria-label="Timeline feature"
        />
      </Box>
      <Tooltip title="Timeline options">
        <IconButton size="small" aria-label="Timeline options" sx={{ color: '#E0E0E0', mr: 1.5 }}>
          <Box sx={{ width: 14, height: 14, border: '1px solid currentColor', borderRadius: 0.5 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
