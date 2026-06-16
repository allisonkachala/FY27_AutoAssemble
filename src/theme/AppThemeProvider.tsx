import { CssBaseline, ThemeProvider } from '@weave-mui/material';
import type { ReactNode } from 'react';

interface AppThemeProviderProps {
  children: ReactNode;
}

/**
 * Weave Supernova theme wrapper.
 * Uses hig-light-gray + medium density per Fusion design context.
 */
export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme="hig-light-gray" density="medium">
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
