import { Box, Link, Typography } from '@weave-mui/material';

interface ProjectBreadcrumbProps {
  projectName: string;
  onHomeClick: () => void;
}

/**
 * Breadcrumb row matching Figma: home icon → chevron → project name.
 * Uses Weave Link + Typography; home/chevron are inline SVGs (icons-weave may vary by install).
 */
export function ProjectBreadcrumb({ projectName, onHomeClick }: ProjectBreadcrumbProps) {
  return (
    <Box
      component="nav"
      aria-label="Project location"
      sx={{ display: 'flex', alignItems: 'center', gap: 1, height: 20 }}
    >
      <Link
        component="button"
        type="button"
        onClick={onHomeClick}
        aria-label="Go to project home"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          p: 0,
          minWidth: 16,
          minHeight: 16,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        <Box component="svg" width={16} height={16} viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M8 1.5L1.5 7v7.5h4V10h5v4.5h4V7L8 1.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </Box>
      </Link>
      <Box component="svg" width={10} height={10} viewBox="0 0 10 10" aria-hidden="true" sx={{ color: '#666' }}>
        <path d="M3 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '20px',
          color: '#000000',
          whiteSpace: 'nowrap',
        }}
      >
        {projectName}
      </Typography>
    </Box>
  );
}
