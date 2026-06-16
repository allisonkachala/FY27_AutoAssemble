import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Tooltip,
} from '@weave-mui/material';
import { useRef, useState } from 'react';
import type { SortOption } from '../../types';

interface DataPanelActionsProps {
  onUpload: () => void;
  onNewFolder: () => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onSimulateError: () => void;
  onSimulateEmpty: () => void;
  onSimulateLoading: () => void;
}

export function DataPanelActions({
  onUpload,
  onNewFolder,
  sortBy,
  onSortChange,
  onSimulateError,
  onSimulateEmpty,
  onSimulateLoading,
}: DataPanelActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
      <Button variant="contained" onClick={onUpload} sx={{ minHeight: 32, height: 32 }}>
        Upload
      </Button>
      <Button variant="outlined" onClick={onNewFolder} sx={{ minHeight: 32, height: 32 }}>
        New Folder
      </Button>
      <Tooltip title="Panel settings">
        <IconButton
          ref={anchorRef}
          size="small"
          aria-label="Panel settings"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
          sx={{ width: 32, height: 32 }}
        >
          <Box component="svg" width={16} height={16} viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M12.5 8.8c.05-.27.05-.53 0-.8l1.1-.85a.5.5 0 00.12-.64l-1-1.73a.5.5 0 00-.6-.22l-1.3.52a3.5 3.5 0 00-.7-.4l-.2-1.38A.5.5 0 0010.3 3H8.7a.5.5 0 00-.5.42l-.2 1.38c-.25.1-.48.23-.7.4l-1.3-.52a.5.5 0 00-.6.22l-1 1.73a.5.5 0 00.12.64l1.1.85c-.05.27-.05.53 0 .8l-1.1.85a.5.5 0 00-.12.64l1 1.73c.13.22.38.3.6.22l1.3-.52c.22.17.45.3.7.4l.2 1.38a.5.5 0 00.5.42h1.6a.5.5 0 00.5-.42l.2-1.38c.25-.1.48-.23.7-.4l1.3.52c.22.08.47 0 .6-.22l1-1.73a.5.5 0 00-.12-.64l-1.1-.85z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </Box>
        </IconButton>
      </Tooltip>
      <Popper open={menuOpen} anchorEl={anchorRef.current} placement="bottom-end" style={{ zIndex: 1300 }}>
        <ClickAwayListener onClickAway={handleMenuClose}>
          <Paper elevation={3} sx={{ mt: 0.5, minWidth: 180 }}>
            <MenuList autoFocusItem={menuOpen} aria-label="Panel settings menu">
              <MenuItem
                selected={sortBy === 'name'}
                onClick={() => {
                  onSortChange('name');
                  handleMenuClose();
                }}
              >
                Sort by name
              </MenuItem>
              <MenuItem
                selected={sortBy === 'modified'}
                onClick={() => {
                  onSortChange('modified');
                  handleMenuClose();
                }}
              >
                Sort by date modified
              </MenuItem>
              <MenuItem
                selected={sortBy === 'type'}
                onClick={() => {
                  onSortChange('type');
                  handleMenuClose();
                }}
              >
                Sort by type
              </MenuItem>
              <MenuItem divider />
              <MenuItem
                onClick={() => {
                  onSimulateLoading();
                  handleMenuClose();
                }}
              >
                Simulate loading
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onSimulateEmpty();
                  handleMenuClose();
                }}
              >
                Simulate empty state
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onSimulateError();
                  handleMenuClose();
                }}
              >
                Simulate error state
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}
