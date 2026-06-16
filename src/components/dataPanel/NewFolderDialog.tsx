import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
  Typography,
} from '@weave-mui/material';
import { useEffect, useRef, useState } from 'react';

interface NewFolderDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (folderName: string) => void;
}

export function NewFolderDialog({ open, onClose, onCreate }: NewFolderDialogProps) {
  const [folderName, setFolderName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setFolderName('');
      setError(null);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSubmit = () => {
    const trimmed = folderName.trim();
    if (!trimmed) {
      setError('Folder name is required.');
      return;
    }
    onCreate(trimmed);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="new-folder-dialog-title" aria-modal="true">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Typography id="new-folder-dialog-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          New folder
        </Typography>
        <FormControl fullWidth error={Boolean(error)}>
          <TextField
            inputRef={inputRef}
            label="Folder name"
            value={folderName}
            onChange={(e) => {
              setFolderName(e.target.value);
              setError(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            fullWidth
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
