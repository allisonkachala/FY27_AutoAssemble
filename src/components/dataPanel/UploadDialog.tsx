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

interface UploadDialogProps {
  open: boolean;
  onClose: () => void;
  onUpload: (fileName: string) => void;
}

export function UploadDialog({ open, onClose, onUpload }: UploadDialogProps) {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setFileName('');
      setError(null);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSubmit = () => {
    const trimmed = fileName.trim();
    if (!trimmed) {
      setError('Please enter a file name.');
      return;
    }
    onUpload(trimmed.endsWith('.f3d') ? trimmed : `${trimmed}.f3d`);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="upload-dialog-title" aria-modal="true">
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
        <Typography id="upload-dialog-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Upload file
        </Typography>
        <FormControl fullWidth error={Boolean(error)}>
          <TextField
            inputRef={inputRef}
            label="File name"
            value={fileName}
            onChange={(e) => {
              setFileName(e.target.value);
              setError(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            placeholder="e.g. New Part.f3d"
            fullWidth
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Upload
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
