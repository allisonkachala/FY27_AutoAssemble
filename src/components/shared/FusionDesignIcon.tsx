import { Box } from '@weave-mui/material';

interface FusionDesignIconProps {
  size?: number;
}

/**
 * Fusion Design file type icon.
 * Gap: No @weave-mui/icons-weave equivalent — minimal SVG approximating Figma Fusion Design icon (orange cube).
 */
export function FusionDesignIcon({ size = 32 }: FusionDesignIconProps) {
  return (
    <Box
      component="svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#FF9448" />
      <path d="M16 2V16L28 9L16 2Z" fill="#FF6B00" />
      <path d="M16 16L28 9V23L16 30V16Z" fill="#E85D00" />
      <path d="M16 16L4 9V23L16 30V16Z" fill="#FF9448" />
      <path d="M4 9L16 16L28 9L16 2L4 9Z" fill="#FFB366" />
    </Box>
  );
}
